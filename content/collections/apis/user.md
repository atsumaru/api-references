---
title: ユーザー情報にアクセスする
slug: user
description: プレイヤー自身のユーザー情報や、他のプレイヤーのユーザー情報にアクセスできます。
order: 27
experimental: true
recommendTheory: true
---

## 概要

RPGアツマールを使ったことのあるniconicoユーザーの情報を取得できる機能です。


### なにができるのか

次の4種類の取得方法を提供しています。

- プレイヤー自身のユーザー情報を取得
- ユーザーIDを指定して特定のユーザー情報を取得
- 現在のゲームを最近プレイしたユーザーの情報を取得
- オンライン人数を取得

ただし、他人のユーザー情報を取得するには、そのユーザーが [プレイヤー間通信の有効化](/common/interplayer) を先にしている必要があります。


#### 利用想定／利用例

例えば、次のような利用を想定しています。

- プレイしているユーザーがログインしているかどうかを判別し、他のログイン必須APIを呼び出せるか事前に調べる
- idを指定したユーザーの情報を取得し、フレンド機能を実装する
- 最近プレイしたユーザーの情報を取得し、すれちがい通信のような機能を実装する

例えば、次のサンプルゲームではこの機能を利用し、フォームに入力されたuseridのユーザー情報を表示しています。ただし、[プレイヤー間通信の有効化](/common/interplayer)が必要なため、このゲームをプレイしたことがあるユーザーの情報のみになります。
- [【ゲームAPIサンプル】ユーザー情報取得できるくん（ユーザー情報取得API）](https://game.nicovideo.jp/atsumaru/games/gm9289)
 - [プロジェクトファイルダウンロードはこちら](/download/sample-projects#getUserInformation)

また、こちらのサンプルでは、最近プレイしたユーザーの情報を利用しています。
- [【ゲームAPIサンプル】AsyncProfile（ユーザー情報取得API・共有セーブAPI）](https://game.nicovideo.jp/atsumaru/games/gm9291)
 - [プロジェクトファイルダウンロードはこちら](/download/sample-projects#AsyncProfile)
- [【ゲームAPIサンプル】スライムバトラー（ユーザーシグナルAPI・共有セーブAPI）](https://game.nicovideo.jp/atsumaru/games/gm9294)
 - [プロジェクトファイルダウンロードはこちら](/download/sample-projects#SlimeBattler)

## 利用方法

- 本機能は次の方法で利用できます。

方法 | 場所
:---|:---
公式プラグイン | <ul><li>[プレイヤー自身のユーザー情報を取得](https://github.com/atsumaru/mv-plugins/blob/master/plugins/AtsumaruGetSelfInformationExperimental.js)</li><li>[ユーザーIDを指定して特定のユーザー情報を取得](https://github.com/atsumaru/mv-plugins/blob/master/plugins/AtsumaruGetUserInformationExperimental.js)</li><li>[現在のゲームを最近プレイしたユーザーの情報を取得](https://github.com/atsumaru/mv-plugins/blob/master/plugins/AtsumaruGetRecentUsersExperimental.js)</li><li>[オンライン人数を取得](https://github.com/atsumaru/mv-plugins/blob/master/plugins/AtsumaruGetActiveUserCountExperimental.js)</li></ul>
ゲームAPI | 以下の「APIでの利用方法」を参考に、直接APIを呼び出してください

### 公式プラグインの利用方法

#### プレイヤー自身のユーザー情報を取得

- 現在のユーザーの情報を取得します。
- ユーザーがプレミアム会員かどうかも取得できます。
- プレイしているユーザーが[ログイン](/common/login)している必要があります。ログインしてない場合にエラーを返すため、それでユーザーのログイン状態を判別することができます。
- このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です。

##### プラグイン設置方法

1. プロジェクトのプラグインフォルダに [AtsumaruGetSelfInformationExperimental.js](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruGetSelfInformationExperimental.js) を右クリックし「保存」して設置。
1. プロジェクトのプラグイン設定で `AtsumaruGetSelfInformationExperimental` プラグインをONにする。
1. プラグイン設定画面で、取得したユーザー情報の収納先変数を設定する。


##### 利用方法

プラグインコマンドは次のいずれかのように指定します。（どちらでも動作は同じです）

```
GetSelfInformation
プレイヤー取得
```

#### ユーザーIDを指定して特定のユーザー情報を取得

- 引数でユーザーIDを指定し、指定したユーザーの情報を取得します。
- 指定したIDのユーザーが[プレイヤー間通信の有効化](/common/interplayer)をしている必要があります。
- このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です。

##### プラグイン設置方法

1. プロジェクトのプラグインフォルダに [AtsumaruGetUserInformationExperimental.js](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruGetUserInformationExperimental.js) を右クリックし「保存」して設置。
1. プロジェクトのプラグイン設定で `AtsumaruGetUserInformationExperimental` プラグインをONにする。
1. プラグイン設定画面で、取得したユーザー情報の収納先変数を設定する。


##### 利用方法

プラグインコマンドは次のいずれかのように指定します。（どちらでも動作は同じです）

```
GetUserInformation <userIdVariableId>
特定ユーザー取得 <userIdVariableId>
```

#### 現在のゲームを最近プレイしたユーザーの情報を取得

- [プレイヤー間通信の有効化](/common/interplayer)をしているユーザーを、最近現在のゲームをプレイした順番に取得します。
- このAPIで取得できるユーザーは、 [プレイヤー間通信の有効化](/common/interplayer) を有効化しているユーザーのみです。
  - ゲーム内で有効に使うために、まずゲーム内で有効化APIを呼び出すようにすると良いでしょう。
- このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です。

##### プラグイン設置方法

1. プロジェクトのプラグインフォルダに [AtsumaruGetRecentUsersExperimental.js](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruGetRecentUsersExperimental.js) を右クリックし「保存」して設置
1. プロジェクトのプラグイン設定で `AtsumaruGetRecentUsersExperimental` プラグインをONにする。
1. プラグイン設定画面で、取得したユーザー情報を収納する変数のIDを指定する。


##### 利用方法

プラグインコマンドは次のいずれかのように指定します。（どちらでも動作は同じです）

```
GetRecentUsers
最新ユーザー取得
```

#### オンライン人数を取得

- 今から1～60分前までの間にこのゲームをプレイしたログインユーザーの人数を取得します。
- このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です。

##### プラグイン設置方法

1. プロジェクトのプラグインフォルダに [AtsumaruGetActiveUserCountExperimental.js](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruGetActiveUserCountExperimental.js) を右クリックし「保存」して設置
1. プロジェクトのプラグイン設定で `AtsumaruGetActiveUserCountExperimental` プラグインをONにする。
1. プラグイン設定画面で、取得したユーザーの人数を収納する変数のIDを指定する。


##### 利用方法

プラグインコマンドは次のいずれかのように指定します。（どちらでも動作は同じです）

```
GetActiveUserCount <minutes>
オンライン人数取得 <minutes>
```

&lt;minutes&gt;には1～60までの数値を指定し、今から&lt;minutes&gt;分前までの間にこのゲームをプレイしたログインユーザーの人数を取得します。

### APIでの利用方法
APIを利用したユーザー情報へのアクセス方法についてです。

#### プレイヤー自身のユーザー情報を取得

- 現在のユーザーの情報を取得します。
- ユーザーがプレミアム会員かどうかも取得できます。
- プレイしているユーザーが[ログイン](/common/login)している必要があります。ログインしてない場合にエラーを返すため、それでユーザーのログイン状態を判別することができます。
- このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です。

メソッド | `window.RPGAtsumaru.experimental.user.getSelfInformation()`
:---|:---
引数 | なし
戻り値 | `Promise<SelfInformation>`
リリース日 | 2018/12/17
更新日 | 2018/12/17

##### 戻り値の型 SelfInformation について
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

プロパティ名 | 型 | 内容
:---|:---|:---
id | `number` | ユーザーのニコニコユーザーID
name | `string` | ユーザーの名前
isPremium | `boolean` | ユーザーがニコニコのプレミアム会員かどうか
profile | `string` | ユーザーのプロフィール文
twitterId | `string` | ユーザーのtwitterId
url | `string` | ユーザーのサイトURL


##### 戻り値の例

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

##### 起こりうるエラーの種類
名前 | 説明
:---|:---
[UNAUTHORIZED](/common/errors) | プレイヤーがログインしていない
[INTERNAL_SERVER_ERROR](/common/errors) | RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/errors) | 短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている

#### ユーザーIDを指定して特定のユーザー情報を取得

- 引数でユーザーIDを指定し、指定したユーザーの情報を取得します。
- 指定したIDのユーザーが[プレイヤー間通信の有効化](/common/interplayer)をしている必要があります。
- このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です。

メソッド | `window.RPGAtsumaru.experimental.user.getUserInformation(userId: number)`
:---|:---
引数 | `userId` : ユーザー情報を取得したいユーザーのニコニコユーザーIDを自然数で指定します。
戻り値 | `Promise<UserInformation>`
リリース日 | 2018/12/17
更新日 | 2018/12/17


##### 戻り値の型 UserInformation について
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

プロパティ名 | 型 | 内容
:---|:---|:---
id | `number` | ユーザーのニコニコユーザーID
name | `string` | ユーザーの名前
profile | `string` | ユーザーのプロフィール文
twitterId | `string` | ユーザーのtwitterId
url | `string` | ユーザーのサイトURL

##### 戻り値の例

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

##### 起こりうるエラーの種類
名前 | 説明
:---|:---
[FORBIDDEN](/common/errors) | `userId` に[プレイヤー間通信の有効化](/common/interplayer)を行っていないユーザーのIDを指定した
[BAD_REQUEST](/common/errors) | 引数として不正な値を指定している
[INTERNAL_SERVER_ERROR](/common/errors) | RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/errors) | 短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている


#### 現在のゲームを最近プレイしたユーザーの情報を取得

- [プレイヤー間通信の有効化](/common/interplayer)をしているユーザーを、最近現在のゲームをプレイした順番に取得します。
- このAPIで取得できるユーザーは、 [プレイヤー間通信の有効化](/common/interplayer) を有効化しているユーザーのみです。
  - ゲーム内で有効に使うために、まずゲーム内で有効化APIを呼び出すようにすると良いでしょう。
- このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です。

メソッド | `window.RPGAtsumaru.experimental.user.getRecentUsers()`
:---|:---
引数 | なし
戻り値 | `Promise<UserIdName[]>`
リリース日 | 2018/12/17
更新日 | 2018/12/17

##### 戻り値の型 UserIdName について
戻り値で取得できる `UserIdName` は以下のような型です。

```js
interface UserIdName {
  id: number;
  name: string;
}
```

プロパティの内容は次のようになっています。

プロパティ名 | 型 | 内容
:---|:---|:---
id | `number` | ユーザーのニコニコユーザーID
name | `string` | ユーザーの名前


##### 戻り値の例

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

##### 起こりうるエラーの種類
名前 | 説明
:---|:---
[INTERNAL_SERVER_ERROR](/common/errors) | RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/errors) | 短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている

#### オンライン人数を取得

- 今から1～60分前までの間にこのゲームをプレイしたログインユーザーの人数を取得します。
- このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です。

メソッド | `window.RPGAtsumaru.experimental.user.getActiveUserCount(minutes: number)`
:---|:---
引数 | `minutes` : 現在から何分前までのプレイ人数を取得するかを1～60までの整数で指定します。
戻り値 | `Promise<number>`
リリース日 | 2019/07/11
更新日 | 2019/07/11

##### 戻り値の例

```js
// window.RPGAtsumaru.experimental.user.getActiveUserCount(1).then(function(v) { console.log(v) }) を実行
3
```

##### 起こりうるエラーの種類
名前 | 説明
:---|:---
[BAD_REQUEST](/common/errors) | `minutes` に1～60までの整数以外を指定した
[INTERNAL_SERVER_ERROR](/common/errors) | RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/errors) | 短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている
