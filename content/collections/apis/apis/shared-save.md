---
title: 共有セーブ
slug: apis/shared-save
description: 「共有セーブ」のAPIでの利用方法
order: 14
navi: APIでの利用方法
experimental: true
---
    
## APIでの利用方法
    
### 共有セーブの取得
  
メソッド |`window.RPGAtsumaru.experimental.storage.getSharedItems(userIds: number[], gameId?: number)`
:---|:---
説明|指定したユーザの `Atsumaru Shared` というキーで保存したセーブデータを取得する。
引数|<ul><li>`userIds` : 共有セーブを取得したいユーザーのニコニコユーザーIDの配列を自然数で、最大100件まで指定します。</li><li>`gameId` : 現在プレイ中のゲーム以外からセーブデータを取得する場合、ゲームのIDを自然数で指定します。</li></ul>
戻り値|`Promise<SharedSaveItems>`
    
 - `userIds` で指定したユーザーのセーブデータユーザーのデータを取得できます。
 - 第二引数の `gameId` を指定することで、別のゲームの共有セーブを取得できます。
    
#### 戻り値の型 SharedSaveItems について
戻り値で取得できる `SharedSaveItems` は以下のような型です。
    
```js
interface SharedSaveItems {
    [userId: number]: string;
}
```
    
プロパティの内容は次のようになっています。
    
|プロパティ|型|内容
:---|:---|:---
|[userId: number]|`string`|`userId` のIDのユーザーの共有セーブデータを収納します。
    
#### 戻り値の例
    
```js
// window.RPGAtsumaru.experimental.storage.getSharedItems([123, 456, 789]).then(function(v) { console.log(v) }) を実行
{
    123: "ユーザー123の共有データ",
    456: "ユーザー456の共有データ"
    // 789 のユーザーが取得先のゲームで「プレイヤー間通信の有効化」されていない場合は結果に含まれません！
}
```
    
#### 起こりうるエラーの種類
    
名前|説明
:---|:---
[BAD_REQUEST](/common/errors)|<ul><li>指定したグローバルサーバー変数IDがそのゲームのものではない</li><li>引数として不正な値を指定している</li></ul>
[FORBIDDEN](/common/errors)|`gameId` にアクセス不能なゲームのIDを指定した場合
[INTERNAL_SERVER_ERROR](/common/errors)|RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/errors)|短時間にRPGアツマール ゲームAPIを利用しすぎて、一時的に利用を制限されている
    
## 関連ドキュメント
    
ドキュメント|リンク|備考
:---|:---|:---
機能解説|[共有セーブ](/shared-save)|機能概要や全般的な解説
プラグインでの利用方法|[共有セーブ](/plugins/shared-save)|RPGツクールMVユーザー向け
    
## 最終更新日
 - 2020/02/28
