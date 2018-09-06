import React from "react";
import { withRouteData } from "react-static";

import MainLayout from "../MainLayout";

export default withRouteData(({ apiList }) => (
  <MainLayout apiList={apiList} title="ページが見つかりません">
    <h1>ページが見つかりません</h1>
    <div>
      移動もしくは削除された可能性があります。<br />
      URLやファイル名に間違いがないか、再度ご確認ください。
    </div>
  </MainLayout>
));
