import { reloadRoutes } from "react-static/node";
import path from "path";
import url from "url";
import jdown from "jdown";
import marked from "marked";
import chokidar from "chokidar";
import ExtractTextPlugin from "extract-text-webpack-plugin"; // eslint-disable-line import/no-extraneous-dependencies

const siteRoot = process.env.SITE_ROOT || "https://atsumaru.github.io";
const basePath = process.env.BASE_PATH || "/api-references";

// 相対リンク(/) を絶対リンクに差し替えるためのrendererの用意
const renderer = new marked.Renderer();
const convertHref = href => /^\//.test(href) ? url.resolve(siteRoot, path.join(basePath + href)) : href;
const originLinkRenderer = renderer.link;
renderer.link = (href, title, text) => originLinkRenderer.apply(renderer, [ convertHref(href), title, text ]);
const originImageRenderer = renderer.image;
renderer.image = (href, title, text) => originImageRenderer.apply(renderer, [ convertHref(href), title, text ]);

chokidar.watch("content").on("all", () => reloadRoutes());

export default {
  siteRoot,
  basePath,
  devBasePath: "/",

  getRoutes: async () => {
    const { apis, overview, changelog } = await jdown("content", {renderer});

    // contents を含めるとデータが肥大化するので、除いたものを apiList とし、 navigation 用に各ページに含める
    const apiList = apis.map(({ contents, ...rest }) => rest);

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
            reference
          }),
        })),
      },
      {
        is404: true,
        component: "src/containers/404",
        getData: () => ({
          apiList
        })
      },
    ];
  },

  webpack: (config, { defaultLoaders, stage }) => {
    let loaders = [];

    if (stage === "dev") {
      loaders = [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" }];
    } else {
      loaders = [
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
        loaders = ExtractTextPlugin.extract({
          fallback: {
            loader: "style-loader",
            options: {
              sourceMap: false,
              hmr: false,
            },
          },
          use: loaders,
        });
      }
    }

    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.s(a|c)ss|css$/,
            use: loaders,
          },
          defaultLoaders.jsLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ];
    return config;
  },
};
