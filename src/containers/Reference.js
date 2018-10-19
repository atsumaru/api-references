import React from "react";
import { withRouteData, Link } from "react-static";

import { htmlToComponent } from "../utils/htmlToComponent";

import "./Reference.scss";

const GITHUB_URL = "https://github.com/atsumaru/api-references";

export default withRouteData(({ reference }) => (
  <div>
    <div className="Reference__Header">
      <h1>{reference.title}</h1>
      <a className="Reference__EditButton" href={`${GITHUB_URL}/blob/master/content/collections/apis/${reference.slug}.md`}>
        編集
      </a>
    </div>
    <p>{htmlToComponent(reference.description)}</p>

    {htmlToComponent(reference.contents)}
  </div>
));
