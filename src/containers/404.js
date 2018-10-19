import React from "react";
import { withRouteData } from "react-static";

export default withRouteData(({}) => (
  <div>
    <h1>ページが見つかりません</h1>
    <div>
      移動もしくは削除された可能性があります。<br />
      URLやファイル名に間違いがないか、再度ご確認ください。
    </div>
  </div>
));
