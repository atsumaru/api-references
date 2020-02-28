---
title: ユーザー情報取得
slug: apis/user
description: 「ユーザー情報取得」のAPIでの利用方法
order: 12
navi: APIでの利用方法
experimental: true
---
    
## 目次
 - [プレイヤー自身のユーザー情報を取得](#プレイヤー自身のユーザー情報を取得)
 - [ユーザーIDを指定して特定のユーザー情報を取得](#ユーザーIDを指定して特定のユーザー情報を取得)
 - [現在のゲームを最近プレイしたユーザーの情報を取得](#現在のゲームを最近プレイしたユーザーの情報を取得)
 - [オンライン人数を取得](#オンライン人数を取得)
    
## APIでの利用方法
### プレイヤー自身のユーザー情報を取得
 - 現在のユーザーの情報を取得します。
 - ユーザーがプレミアム会員かどうかも取得できます。
 - プレイしているユーザーが[ログイン](/common/login)している必要があります。ログインしてない場合にエラーを返すため、それでユーザーのログイン状態を判別することができます。
 - このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です。
    
メソッド |`window.RPGAtsumaru.experimental.user.getSelfInformation()`
:---|:---
引数|なし
戻り値|`Promise<SelfInformation>`
    
#### 戻り値の型 SelfInformation について
戻り値で取得できる `SelfInformation` は以下のような型です。
    
```js
interface SelfInformation {
    id: number;
    name: string;
    isPremium: boolean;
    profile: string;
    twitterId: string;
    url: string;
}
```
    
プロパティの内容は次のようになっています。
    
|プロパティ|型|内容
:---|:---|:---
|id|`number`|ユーザーのニコニコユーザーID
|name|`string`|ユーザーの名前
|isPremium|`boolean`|ユーザーがニコニコのプレミアム会員かどうか
|profile|`string`|ユーザーのプロフィール文
|twitterId|`string`|ユーザーのtwitterId
|url|`string`|ユーザーのサイトURL
    
#### 戻り値の例
    
```js
// window.RPGAtsumaru.experimental.user.getSelfInformation().then(function(v) { console.log(v) }) を実行
{
    id: 64341294,
    name: "RPGアツマール公式",
    profile: "やあ！ 僕はアツマライオン！\nみんなでゲームを作って遊んで楽しもうよ！",
    twitterId: "nico_indiesgame",
    url: "https://game.nicovideo.jp/atsumaru/",
    isPremium: false
}
```
    
#### 起こりうるエラーの種類
    
名前|説明
:---|:---
[UNAUTHORIZED](/common/errors) |プレイヤーがログインしていない
[INTERNAL_SERVER_ERROR](/common/errors)|RPGアツマールもしくはニコニ広告のサービス側で何らかの問題が発生しているか、または通信に失敗した（※ユーザーが広告ブロックしている場合も含む）
[API_CALL_LIMIT_EXCEEDED](/common/errors) |短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている
    
### ユーザーIDを指定して特定のユーザー情報を取得
 - 引数でユーザーIDを指定し、指定したユーザーの情報を取得します。
 - 指定したIDのユーザーが[プレイヤー間通信の有効化](/common/interplayer)をしている必要があります。
 - このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です。
    
メソッド |`window.RPGAtsumaru.experimental.user.getUserInformation(userId: number)`
:---|:---
説明|`userId` : ユーザー情報を取得したいユーザーのニコニコユーザーIDを自然数で指定します。
引数|なし <!-- `offsetAdId` : この引数に広告ID(nicoadId)を指定すると、最新からではなく指定したIDの次の広告から順に最大30件まで取得します -->
戻り値|`Promise<UserInformation>`
    
#### 戻り値の型 UserInformation について
戻り値で取得できる `UserInformation` は以下のような型です。
    
```js
interface UserInformation {
    id: number;
    name: string;
    profile: string;
    twitterId: string;
    url: string;
}
```
    
プロパティの内容は次のようになっています。
    
|プロパティ|型|内容
:---|:---|:---
|id|`number`|ユーザーのニコニコユーザーID
|name|`string`|ユーザーの名前
|profile|`string`|ユーザーのプロフィール文
|twitterId|`string`|ユーザーのtwitterId
|url|`string`|ユーザーのサイトURL
    
#### 戻り値の例
    
```js
// window.RPGAtsumaru.experimental.user.getUserInformation(64341294).then(function(v) { console.log(v) }) を実行
{
    id: 64341294,
    name: "RPGアツマール公式",
    profile: "やあ！ 僕はアツマライオン！\nみんなでゲームを作って遊んで楽しもうよ！",
    twitterId: "nico_indiesgame",
    url: "https://game.nicovideo.jp/atsumaru/"
}
```
    
#### 起こりうるエラーの種類
    
名前|説明
:---|:---
[FORBIDDEN](/common/errors)|`userId` に[プレイヤー間通信の有効化](/common/interplayer)を行っていないユーザーのIDを指定した
[BAD_REQUEST](/common/errors)|引数として不正な値を指定している
[INTERNAL_SERVER_ERROR](/common/errors)|RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/errors)|短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている
    
### 現在のゲームを最近プレイしたユーザーの情報を取得
 - [プレイヤー間通信の有効化](/common/interplayer)をしているユーザーを、最近現在のゲームをプレイした順番に取得します。
 - このAPIで取得できるユーザーは、 [プレイヤー間通信の有効化](/common/interplayer) を有効化しているユーザーのみです。
 - ゲーム内で有効に使うために、まずゲーム内で有効化APIを呼び出すようにすると良いでしょう。
 - このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です。
    
メソッド |`window.RPGAtsumaru.experimental.user.getRecentUsers()`
:---|:---
引数|なし
戻り値|`Promise<UserIdName[]>`
制限|このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です
    
#### 戻り値の型 UserIdName について
戻り値で取得できる `UserIdName` は以下のような型です。
    
```js
interface UserIdName {
    id: number;
    name: string;
}
```
    
プロパティの内容は次のようになっています。
    
|プロパティ|型|内容
:---|:---|:---
|id|`number`|ユーザーのニコニコユーザーID
|name|`string`|ユーザーの名前
    
#### 戻り値の例
    
```js
// window.RPGAtsumaru.experimental.user.getRecentUsers().then(function(v) { console.log(v) }) を実行
[
        {
        id: 64341294,
        name: "RPGアツマール公式"
        },
        {
        id: 63008093,
        name: "ツクール開発部公式"
    }
]
```
    
#### 起こりうるエラーの種類
    
名前|説明
:---|:---
[INTERNAL_SERVER_ERROR](/common/errors)|RPGアツマールもしくはニコニ広告のサービス側で何らかの問題が発生しているか、または通信に失敗した（※ユーザーが広告ブロックしている場合も含む）
[API_CALL_LIMIT_EXCEEDED](/common/errors) |短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている
    
### オンライン人数を取得
 - 今から1～60分前までの間にこのゲームをプレイしたログインユーザーの人数を取得します。
 - このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です。
    
メソッド |`window.RPGAtsumaru.experimental.user.getActiveUserCount(minutes: number)`
:---|:---
引数|`minutes` : 現在から何分前までのプレイ人数を取得するかを1～60までの整数で指定します。
戻り値|`Promise<number>`
    
#### 戻り値の例
    
```js
// window.RPGAtsumaru.experimental.user.getActiveUserCount(1).then(function(v) { console.log(v) }) を実行
3
```
    
#### 起こりうるエラーの種類
    
名前|説明
:---|:---
[BAD_REQUEST](/common/errors)|`minutes` に1～60までの整数以外を指定した
[INTERNAL_SERVER_ERROR](/common/errors)|RPGアツマールもしくはニコニ広告のサービス側で何らかの問題が発生しているか、または通信に失敗した（※ユーザーが広告ブロックしている場合も含む）
[API_CALL_LIMIT_EXCEEDED](/common/errors) |短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている
    
## 関連ドキュメント
    
ドキュメント|リンク|備考
:---|:---|:---
機能解説|[ユーザー情報取得](/user)|機能概要や全般的な解説
プラグインでの利用方法|[ユーザー情報取得](/plugins/user)|RPGツクールMVユーザー向け
    
## 最終更新日
 - 2020/02/28
