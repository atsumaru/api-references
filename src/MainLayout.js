import React from "react";
import { Link, Head } from "react-static";

import faviconUrl from "./assets/favicon.ico";
import logoUrl from "./assets/logo.png";

import "./MainLayout.scss";

const SITE_NAME = "RPGアツマール APIリファレンス";

const Meta = ({title}) => {
  const titleText = (title ? `${title} - ` : "") + SITE_NAME;
  const description = "RPGアツマールに投稿したゲームから利用可能なAPIのリファレンスです。";

  return (
    <Head>
      <title>{titleText}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content="RPGアツマール,RPGツクールMV,自作ゲーム,インディーズゲーム,ゲーム,フリーゲーム,同人ゲーム,無料,niconico" />
      <meta property="og:title" content={titleText} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://site.nicovideo.jp/atsumaru/declaration/" />
      <meta property="og:image" content="https://site.nicovideo.jp/atsumaru/declaration/img/2018/img2.jpg" />
      <meta property="og:site_name"  content="RPGアツマール" />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@nico_indiesgame" />
      <link rel="icon" href={faviconUrl} />
    </Head>
  );
};

const Header = () => (
  <header className="Header">
    <nav className="Header__Nav">
      <a href="http://www.nicovideo.jp/">niconico</a>
      <a href="https://game.nicovideo.jp/atsumaru/">RPGアツマール</a>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="Footer">
    <nav className="Footer__Nav">
      <a href="https://game.nicovideo.jp/atsumaru/">RPGアツマール に戻る</a>
    </nav>
    <span>
      ©DWANGO Co., Ltd.
    </span>
  </footer>
);

const MainNavigation = ({ apiList }) => (
  <nav className="MainNavigation">
    <Link to="/" className="MainNavigation__Logo">
      <img src={logoUrl} alt="RPGアツマール" />
      APIリファレンス
    </Link>

    <Link className="MainNavigation__Item" to="/" exact>概要</Link>

    {apiList.map(api => (
      <Link className="MainNavigation__Item" key={api.slug} to={`/${api.slug}`}>{api.title}</Link>
    ))}

    <Link className="MainNavigation__Item" to="http://ch.nicovideo.jp/indies-game/blomaga/ar1163608" target="_blank" rel="noopener">
      旧リファレンス
    </Link>
  </nav>
);

export default ({ title, apiList, children }) => (
  <div className="MainLayout">
    <Meta title={title} />
    <Header />
    <main className="MainLayout__Body">
      <MainNavigation apiList={apiList} />

      <article className="MainSection markdown-body">
        {children}
      </article>
    </main>
    <Footer />
  </div>
);
