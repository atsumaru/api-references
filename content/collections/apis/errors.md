---
title: エラーハンドリング
slug: errors
description: RPGアツマールのAPIが返すエラーについてのリファレンスです。
order: 99
---

## 概要
各アツマールAPI共通で発生する可能性のある例外についての情報です。
基本的にプラグイン作者向けの情報となります。(プラグイン利用者には基本的に必要ない情報となります)
サーバーエラーや非ログイン等のエラーを扱いたいときに必要となる情報です。

## エラーオブジェクト

```ts
interface AtsumaruApiError {
  readonly errorType = "atsumaruApiError";
  readonly code: string;
  readonly message: string;
}
```

code一覧 | 解説
:---|:---
BAD_REQUEST | ゲーム側で何かしらAPIの使い方を間違えている場合のコードです
UNAUTHORIZED | プレイヤーがログインしている必要があるAPIを、プレイヤーが非ログイン状態で使った場合のコードです
INTERNAL_SERVER_ERROR | サーバー側で何らかの問題が発生していたり、通信に失敗した場合のコードです

### コード例

```js
window.RPGAtsumaru.experimental.scoreboards.setRecord(board_id, score)
  .catch(function(err) {
    switch(err.code) {
      case "BAD_REQUEST":
        // ゲーム側で何か間違えているとき＝指定したボードIDが大きすぎるかマイナスの場合などに発生
        /* エラーハンドリング処理 */
        break;
      case "INTERNAL_SERVER_ERROR":
        // サーバー側で何らかの問題＝通信不良やメンテ等で発生
        /* エラーハンドリング処理 */
        break;
    }
  })
```
