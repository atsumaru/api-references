---
title: エラーハンドリング
slug: common/error
description: ゲームアツマールのアツマールAPIが返すエラーについて
order: 4
navi: 共通事項
---
  
## 概要
各アツマールAPI共通で発生する可能性のある例外・エラーについての情報です。
    
基本的にプラグインの作者、APIを直接利用するかた向けの情報となります(プラグイン利用者には基本的には不要な情報となります)。
    
サーバーエラーや非ログイン等のエラーを扱いたいときに必要となる情報です。
    
## エラーオブジェクト
```ts
interface AtsumaruApiError {
    readonly errorType = "atsumaruApiError";
    readonly code: string;
    readonly message: string;
}
```
  
|code一覧|解説
:---|:---
|BAD_REQUEST|ゲーム側でなんらかのAPIの使い方を間違えている場合のコードです。例えば、メソッドの引数の型を間違えている場合に発生します。
|UNAUTHORIZED|プレイヤーが[ログイン](/common/login)している必要があるAPIを、プレイヤーが非ログイン状態で使った場合のコードです。
|API_CALL_LIMIT_EXCEEDED|[APIの呼び出し回数制限](/common/rate-limit) の上限に達した際に返されるコードです。
|FORBIDDEN|次のように、プレイヤーやゲームがAPIに対してアクセス権限がない場合に発生します。<ul><li>ユーザーIDを指定するAPIで、対象のユーザー情報を取得する権限がない場合(相手のユーザーのプレイヤー通信有効化がされていないなど)</li><li>ゲームIDを指定するAPIで、対象のゲーム情報を取得する権限がない場合(対象のゲームが非公開であるなど)</li></ul>
|INTERNAL_SERVER_ERROR|サーバー側で何らかの問題が発生していたり、通信に失敗した場合のコードです。
  
## コード例
```js
window.RPGAtsumaru.scoreboards.setRecord(boardId, score)
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
  
## 最終更新日
 - 2020/02/28
