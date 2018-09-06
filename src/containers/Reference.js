import React from "react";
import { withRouteData } from "react-static";
import convert from "htmr";

import MainLayout from "../MainLayout";
import "./Reference.scss";

const GITHUB_URL = "https://github.com/atsumaru/api-references";

export default withRouteData(({ apiList, reference }) => (
  <MainLayout apiList={apiList} title={reference.title}>
    <div className="Reference__Header">
      <h1>{reference.title}</h1>
      <a className="Reference__EditButton" href={`${GITHUB_URL}/blob/master/content/collections/apis/${reference.slug}.md`}>
        編集
      </a>
    </div>
    <p>{convert(reference.description)}</p>

    {convert(reference.contents)}
  </MainLayout>
));
