import React from "react";
import { Link, Head, withRouteData } from "react-static";
import classNames from "classnames";

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

class MainNavigationApiLink extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isOpen: props.defaultOpen || false };

    this.onClickAngle = (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      this.setState({ isOpen: !this.state.isOpen });
    };
    this.onClickLink = () => this.setState({ isOpen: true });
  }

  render() {
    const { api } = this.props;
    const { isOpen } = this.state;
    return (
      <div>
        <Link
          className="MainNavigationItem"
          to={`/${api.slug}`}
          title={api.description}
          onClick={this.onClickLink}
          exact
        >
          <span className="MainNavigationItem__Text">{api.title}</span>
          {api.children.length > 0 ? (
            <button className="MainNavigationItem__Button" onClick={this.onClickAngle} data-is-open={`${isOpen}`} />
          ) : null}
        </Link>
        <div className="MainNavigationItem__Children" aria-hidden={!isOpen} >
          {api.children.map(child => (
            <Link
              className={classNames("MainNavigationItem", "MainNavigationItem--child")}
              key={child.slug}
              to={`/${child.slug}`}
              title={child.description}
              exact
            >
              <span className="MainNavigationItem__Text">{child.title}</span>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

const MainNavigation = ({ apiList, path }) => (
  <nav className="MainNavigation">
    <div className="MainNavigation__LogoContainer">
      <Link to="/" className="MainNavigation__Logo">
        <img src={logoUrl} alt="RPGアツマール" />
        APIリファレンス
      </Link>
    </div>

    <Link className="MainNavigationItem" to="/" exact>概要</Link>

    {apiList.map(api => (
      <MainNavigationApiLink key={api.slug} api={api} defaultOpen={!!path.match(api.slug)} />
    ))}
  </nav>
);

export default withRouteData(({ apiList = [], title = "", path = "/", children }) =>
  <div className="MainLayout">
    <Meta title={title} />
    <Header />
    <main className="MainLayout__Body">
      <MainNavigation apiList={apiList} path={path} />

      <article className="MainSection markdown-body">
        {children}
      </article>
    </main>
    <Footer />
  </div>
);
