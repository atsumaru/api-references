import React from "react";
import { withRouteData, Link } from "react-static";

import { htmlToComponent } from "../utils/htmlToComponent";

import "./Reference.scss";

const GITHUB_URL = "https://github.com/atsumaru/api-references";

const Theory = () => <div>
  <h2>前提</h2>
  このAPIを利用する際は、APIの活用方法のヒントや使い分け方などについてまとめた<Link to="/common/theory">APIのセオリー</Link>も合わせてご参照ください。
</div>;

export default withRouteData(({ reference }) => (
  <div>
    <div>{reference.navi}</div>
    <div className="Reference__Header">
      <h1>{reference.title}</h1>
      <a className="Reference__EditButton" href={`${GITHUB_URL}/blob/master/content/collections/apis/${reference.slug}.md`}>
        編集
      </a>
    </div>
    {/* <p className="Reference__Description">{htmlToComponent(reference.description)}</p> */}
    {reference.recommendTheory ? <Theory /> : null}

    {htmlToComponent(reference.contents)}
  </div>
));
