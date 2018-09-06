import React from "react";
import { withRouteData, Link } from "react-static";
import convert from "htmr";

import MainLayout from "../MainLayout";

export default withRouteData(({ apiList, overview, changelog }) => (
  <MainLayout apiList={apiList}>
    {convert(overview.contents)}

    <h2>提供機能一覧</h2>
    <table>
      <thead>
        <tr>
          <th>API</th>
          <th>概要</th>
        </tr>
      </thead>
      <tbody>
        {apiList.map(api => (
          <tr key={api.slug}>
            <th>
              <Link key={api.slug} to={`/${api.slug}`}>{api.title}</Link>
            </th>
            <td>
              {convert(api.description)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <h2>更新履歴</h2>
    {convert(changelog.contents)}

  </MainLayout>
));
