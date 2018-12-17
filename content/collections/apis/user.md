---
title: ユーザー情報にアクセスする
slug: user
description: プレイヤー自身のユーザー情報や、他のプレイヤーのユーザー情報にアクセスできます。
order: 26
experimental: true
---

## 概要

RPGアツマールを使ったことのあるniconicoユーザーの情報を取得できる機能です。


### なにができるのか

次の3種類の取得方法を提供しています。

- 現在ゲームをプレイしているログインユーザーのユーザー情報を取得
- ユーザーIDを指定して特定のユーザー情報を取得
- 現在のゲームを最近プレイしたユーザーの情報の取得

ただし、他人のユーザー情報を取得するには、そのユーザーが [プレイヤー間通信の有効化](/common/interplayer) を先にしている必要があります。


#### 利用想定／利用例

例えば、次のような利用を想定しています。

- プレイしているユーザーがログインしているかどうかを判別し、他のログイン必須APIを呼び出せるか事前に調べる
- idを指定したユーザーの情報を取得し、フレンド機能を実装する
- 最近プレイしたユーザーの情報を取得し、すれちがい通信のような機能を実装する

例えば、次のサンプルゲームではこの機能を利用し、フォームに入力されたuseridのユーザー情報を表示しています。ただし、[プレイヤー間通信の有効化](/common/interplayer)が必要なため、このゲームをプレイしたことがあるユーザーの情報のみになります。
- [【ゲームAPIサンプル】ユーザー情報取得できるくん（ユーザー情報取得API）](https://game.nicovideo.jp/atsumaru/games/gm9289)

また、こちらのサンプルでは、最近プレイしたユーザーの情報を利用しています。
- [【ゲームAPIサンプル】AsyncProfile（ユーザー情報取得API・共有セーブAPI）](https://game.nicovideo.jp/atsumaru/games/gm9291)
- [【ゲームAPIサンプル】スライムバトラー（ユーザーシグナルAPI・共有セーブAPI）](https://game.nicovideo.jp/atsumaru/games/gm9294)

## 利用方法

- 本機能は次の方法で利用できます。

方法 | 場所
:---|:---
公式プラグイン | <ul><li>[現在ゲームをプレイしているログインユーザーのユーザー情報を取得](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruGetSelfInformationExperimental.js)</li><li>[ユーザーIDを指定して特定のユーザー情報を取得](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruGetUserInformationExperimental.js)</li><li>[現在のゲームを最近プレイしたユーザーの情報の取得](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruGetRecentUsersExperimental.js)</li></ul>
ゲームAPI | 以下の「APIでの利用方法」を参考に、直接APIを呼び出してください

### 公式プラグインの利用方法

#### 現在ゲームをプレイしているログインユーザーのユーザー情報を取得

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

#### 現在のゲームを最近プレイしたユーザーの情報の取得

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

### APIでの利用方法
APIを利用したユーザー情報へのアクセス

#### 現在ゲームをプレイしているログインユーザーのユーザー情報を取得

- 現在のユーザーの情報を取得します。
- 指定したユーザーがプレミアム会員かどうかも取得できます。
- プレイしているユーザーが[ログイン](/common/login)している必要があります。ログインしてない場合にエラーを返すため、それでユーザーのログイン状態を判別することができます。
- このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です。

メソッド | `window.RPGAtsumaru.experimental.user.getSelfInformation()`
:---|:---
引数 | なし
戻り値 | `Promise<{ id: number, name: string, profile: string, twitterId: string, url: string, isPremium: boolean }>`
リリース日 | 2018/12/17
更新日 | 2018/12/17

##### 戻り値の例

```js
{
  id: 64341294,
  name: "RPGアツマール公式",
  profile: "やあ！ 僕はアツマライオン！\nみんなでゲームを作って遊んで楽しもうよ！",
  twitterId: "nico_indiesgame",
  url: "https://game.nicovideo.jp/atsumaru/",
  isPremium: false
}
```

#### ユーザーIDを指定して特定のユーザー情報を取得

- 引数でユーザーIDを指定し、指定したユーザーの情報を取得します。
- 指定したIDのユーザーが[プレイヤー間通信の有効化](/common/interplayer)をしている必要があります。
- このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です。

メソッド | `window.RPGAtsumaru.experimental.user.getUserInformation(userId: number)`
:---|:---
引数 | `userId` : ユーザー情報を取得したいユーザーのニコニコユーザーIDを自然数で指定します。
戻り値 | `Promise<{ id: number, name: string, profile: string, twitterId: string, url: string }>`
リリース日 | 2018/12/17
更新日 | 2018/12/17

##### 戻り値の例

```js
{
  id: 64341294,
  name: "RPGアツマール公式",
  profile: "やあ！ 僕はアツマライオン！\nみんなでゲームを作って遊んで楽しもうよ！",
  twitterId: "nico_indiesgame",
  url: "https://game.nicovideo.jp/atsumaru/"
}
```

#### 現在のゲームを最近プレイしたユーザーの情報の取得

- [プレイヤー間通信の有効化](/common/interplayer)をしているユーザーを、最近現在のゲームをプレイした順番に取得します。
- このAPIで取得できるユーザーは、 [プレイヤー間通信の有効化](/common/interplayer) を有効化しているユーザーのみです。
  - ゲーム内で有効に使うために、まずゲーム内で有効化APIを呼び出すようにすると良いでしょう。
- このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です。

メソッド | `window.RPGAtsumaru.experimental.user.getRecentUsers()`
:---|:---
引数 | なし
戻り値 | `Promise<{ id: number, name: string }[]>`
リリース日 | 2018/12/17
更新日 | 2018/12/17

##### 戻り値の例

```js
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
