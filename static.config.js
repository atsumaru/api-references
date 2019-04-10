import { reloadRoutes } from "react-static/node";
import path from "path";
import url from "url";
import jdown from "jdown";
import marked from "marked";
import chokidar from "chokidar";
import ExtractTextPlugin from "extract-text-webpack-plugin"; // eslint-disable-line import/no-extraneous-dependencies
import lodash from "lodash";

const siteRoot = process.env.SITE_ROOT || "https://atsumaru.github.io";
const basePath = process.env.BASE_PATH || "/api-references";

// 相対リンク(/) を絶対リンクに差し替えるためのrendererの用意
const renderer = new marked.Renderer();
const convertHref = href => /^\//.test(href) ? url.resolve(siteRoot, path.join(basePath + href)) : href;
const originImageRenderer = renderer.image;
renderer.image = (href, title, text) => originImageRenderer.apply(renderer, [convertHref(href), title, text]);

chokidar.watch("content").on("all", () => reloadRoutes());

export default {
  siteRoot,
  basePath,
  devBasePath: "/",

  getRoutes: async () => {
    const { apis, overview, changelog } = await jdown("content", { markdown: {renderer} });

    // contents を含めるとデータが肥大化するので、除いたものを apiList とし、 navigation 用に各ページに含める
    const apiListSorted = lodash.sortBy(apis, a => a.order || 1).map(({ contents, ...rest }) => rest);
    // / を含んでいるものは子ページなので、filterしてgroupしておく
    const apiListChildren = lodash.groupBy(apiListSorted.filter(a => /\//.test(a.slug)), a => a.slug.replace(/^([^/]+)\/.+$/, "$1"));
    // / を含んでない親ページに子ページをくっつけて、apiListとする
    const apiList = apiListSorted.filter(a => !/\//.test(a.slug)).map(a => ({ ...a, children: apiListChildren[a.slug] || [] }));

    return [
      {
        path: "/",
        component: "src/containers/Home",
        getData: () => ({
          overview,
          apiList,
          changelog
        }),

        children: apis.map(reference => ({
          path: `/${reference.slug}`,
          component: "src/containers/Reference",
          getData: () => ({
            apiList,
            reference,
            title: reference.title,
            path: `/${reference.slug}`
          }),
        })),
      },
      {
        is404: true,
        component: "src/containers/404",
        getData: () => ({
          apiList,
          title: "ページが見つかりません",
          path: "/404"
        })
      },
    ];
  },

  webpack: (config, { defaultLoaders, stage }) => {
    let sassLoaders = [];

    if (stage === "dev") {
      sassLoaders = [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" }];
    } else {
      sassLoaders = [
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            minimize: stage === "prod",
            sourceMap: false,
          },
        },
        {
          loader: "sass-loader",
          options: { includePaths: ["src/"] },
        },
      ];

      // Don't extract css to file during node build process
      if (stage !== "node") {
        sassLoaders = ExtractTextPlugin.extract({
          fallback: {
            loader: "style-loader",
            options: {
              sourceMap: false,
              hmr: false,
            },
          },
          use: sassLoaders,
        });
      }
    }

    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.s(a|c)ss|css$/,
            use: sassLoaders,
          },
          {
            test: /\.svg$/,
            use: [
              ...defaultLoaders.jsLoader.use,
              {
                loader: "react-svg-loader",
                options: {
                  es5: true,
                  jsx: true,
                  svgo: {
                    plugins: [{ removeTitle: true }],
                    floatPrecision: 8,
                  }
                }
              }
            ]
          },
          defaultLoaders.jsLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ];
    return config;
  },
};
