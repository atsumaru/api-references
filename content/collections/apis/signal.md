---
title: シグナルを送信する
slug: signal
description: ゲーム内で、他のユーザーと小さなデータ（信号）をやり取りするためのAPIです。
order: 28
experimental: true
recommendTheory: true
---

## 概要

ユーザー間で小さなデータ（信号）をやり取りできる機能です。  
シグナルAPIには、そのゲームのプレイヤー全体に対する「グローバルシグナル」と個別ユーザー間の「ユーザーシグナル」があります。  

![グローバルシグナルAPI概念図](/images/signal_concept_global.png)
![ユーザーシグナルAPI概念図](/images/signal_concept_user.png)

### なにができるのか

- グローバルシグナルは、そのゲームをプレイしているユーザー全体への信号を送信できます。全プレイヤーのプレイログを取得したり、全員アイテムプレゼントなどが可能になります。
- ユーザーシグナルは、ユーザーIDで指定した相手に対して信号を送信できます。共有セーブと組み合わせて、所持アイテムの交換や、キャラクターの貸し出しなどが可能になります。

#### 利用想定／利用例
この機能は、以下のような使い方を想定しています。
- グローバルシグナル：全ユーザーの行動ログの送信、全ユーザーへ影響を与える指示
- ユーザーシグナル：個別ユーザー間での指示

例えば、次のサンプルゲームではグローバルシグナルを利用し、他ユーザーのプレイ状況を表示しています。
- [【ゲームAPIサンプル】プレイローグ（グローバルシグナルAPI・グローバルサーバー変数API）](https://game.nicovideo.jp/atsumaru/games/gm9292)


また、こちらのサンプルゲームでは、ユーザーシグナルを利用して、スライムのバトル結果を送信しています。（スライムの情報は[共有セーブ](/shared-save)を[最近プレイしたユーザー](/user)から取得しています）
- [【ゲームAPIサンプル】スライムバトラー（ユーザーシグナルAPI・共有セーブAPI）](https://game.nicovideo.jp/atsumaru/games/gm9294)

## 機能詳細
 - シグナルとは、最大100byteの任意の文字データです。
 - 受信できるシグナルにはサイズ・個数ともに上限があります。制限を回避するには、なるべく小さなサイズのシグナルを推奨します。
 - 制限詳細
  - 1シグナルのデータ上限は100byteまでです。
  - 積まれたシグナルは古いシグナルから順々に押し出され削除されます。
  - グローバルシグナルは、1ゲームあたり1,000件までです。
  - ユーザーシグナルは、1ユーザーあたり100KBまでです。更にその中で、ゲームあたり1ユーザー1,000件または10KBまでとなります。
    - 特に100KBまでの制限はゲーム間共通のため、シグナルが他ゲームからのシグナル送受信によって押し出される可能性があります。

## 利用方法

シグナル機能は次の方法で利用できます。

方法 | 場所
:---|:---
ゲームAPI | 以下の「APIでの利用方法」を参考に、直接APIを呼び出してください


### APIでの利用方法

#### グローバルシグナルの送信

メソッド | `window.RPGAtsumaru.experimental.signal.sendSignalToGlobal(data: string)`
:---|:---
説明 | ゲームのグローバルシグナルとして `data` で指定した文字列を送信します。
引数 | <ul><li>`data` : シグナルとして、任意の文字列を100byte以内で送信できます。</li></ul>
戻り値 | `Promise<void>`
リリース日 | 2018/12/17
更新日 | 2018/12/17

- 補足事項
  - グローバルシグナルはゲームあたり1,000件まで保存されます。


##### 起こりうるエラーの種類
名前 | 説明
:---|:---
[UNAUTHORIZED](/common/errors) | プレイヤーがログインしていない
[BAD_REQUEST](/common/errors) | <ul><li>`data` に100byte以上の文字列を指定した</li><li>引数として不正な値を指定している</li></ul>
[INTERNAL_SERVER_ERROR](/common/errors) | RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/errors) | 短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている


#### グローバルシグナルの取得

メソッド | `window.RPGAtsumaru.experimental.signal.getGlobalSignals()`
:---|:---
説明 | 送信されたゲームのグローバルシグナルを取得します。
引数 |
戻り値 | `Promise<GlobalSignal[]>`
リリース日 | 2018/12/17
更新日 | 2018/12/17

- 補足事項
  - グローバルシグナルはゲームあたり1,000件まで保存されます。

##### 戻り値の型 GlobalSignal について

戻り値で取得できる `GlobalSignal` は以下のような型です。

```js
interface GlobalSignal {
    id: number;
    senderId: number;
    senderName: string;
    data: string;
    createdAt: number;
}
```

プロパティの内容は次のようになっています。

プロパティ名 | 型 | 内容
:---|:---
id | `number` | シグナルそれぞれでユニークなID値
senderId | `number` | シグナルを送信したユーザーのニコニコユーザーID
senderName | `string` | シグナルを送信したユーザーのユーザー名
data | `string` | 送信したシグナル文字列
createdAt | `number` | シグナルが送信された日時(秒単位のunix timestamp)。すでに処理済みのシグナルを判別するために用います。


##### 戻り値の例

```js
// window.RPGAtsumaru.experimental.storage.getGlobalSignals().then(function(v) { console.log(v) }) を実行
[
  {
    createdAt: 1543397700,
    data: "test data",
    id: 3,
    senderId: 12345,
    senderName: "user1"
  },
  {
    createdAt: 1543397701,
    data: "test data2",
    id: 4,
    senderId: 12346,
    senderName: "user2"
  },
]
```


##### 起こりうるエラーの種類
名前 | 説明
:---|:---
[INTERNAL_SERVER_ERROR](/common/errors) | RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/errors) | 短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている

#### ユーザーシグナルの送信

メソッド | `window.RPGAtsumaru.experimental.signal.sendSignalToUser(receiverId: number, data: string)`
:---|:---
説明 | ユーザーシグナルとして `receiverId` で指定したユーザーIDのユーザーに `data` で指定した文字列を送信します。
引数 | <ul><li>`receiverId` : 送信先のニコニコユーザーIDを指定します。</li><li>`data` : シグナルとして、任意の文字列を100byte以内で送信できます。</li></ul>
戻り値 | `Promise<void>`
リリース日 | 2018/12/17
更新日 | 2018/12/17

- 補足事項
  - ユーザーシグナルは、ユーザーあたり100KBまで保存されます。
    - 他のゲームからのシグナル送信によっても消える可能性があります。
  - また、ゲームあたり1ユーザー10KBまたは1000件までとなります。
    - ゲームからのシグナル送信によって、古いシグナルから消えていきます。

##### 起こりうるエラーの種類
名前 | 説明
:---|:---
[UNAUTHORIZED](/common/errors) | プレイヤーがログインしていない
[FORBIDDEN](/common/errors) | `userId` に[プレイヤー間通信の有効化](/common/interplayer)を行っていないユーザーのIDを指定した
[BAD_REQUEST](/common/errors) | <ul><li>`data` に100byte以上の文字列を指定した</li><li>引数として不正な値を指定している</li></ul>
[INTERNAL_SERVER_ERROR](/common/errors) | RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/errors) | 短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている


#### ユーザーシグナルの取得

メソッド | `window.RPGAtsumaru.experimental.signal.getUserSignals()`
:---|:---
説明 | プレイしているユーザーのユーザーシグナルを取得します。
引数 |
戻り値 | `Promise<UserSignal[]>`
リリース日 | 2018/12/17
更新日 | 2018/12/17

- 補足事項
  - ユーザーシグナルは、ユーザーあたり100KBまで保存されます。
    - 他のゲームからのシグナル送信によっても消える可能性があります。
  - また、ゲームあたり1ユーザー10KBまたは1000件までとなります。
    - ゲームからのシグナル送信によって、古いシグナルから消えていきます。

##### 戻り値の型 UserSignal について

戻り値で取得できる `UserSignal` は以下のような型です。

```js
interface UserSignal {
    id: number;
    senderId: number;
    senderName: string;
    data: string;
    createdAt: number;
}
```

プロパティの内容は次のようになっています。

プロパティ名 | 内容
:---|:---
id | `number` | シグナルそれぞれでユニークなID値
senderId | `number` | シグナルを送信したユーザーのニコニコユーザーID
senderName | `string` | シグナルを送信したユーザーのユーザー名
data | `string` | 送信したシグナル文字列
createdAt | `number` | シグナルが送信された日時(秒単位のunix timestamp)。すでに処理済みのシグナルを判別するために用います。


##### 戻り値の例

```js
// window.RPGAtsumaru.experimental.signal.getUserSignals().then(function(v) { console.log(v) }) を実行
[
  {
    createdAt: 1543397700,
    data: "test data",
    id: 3,
    senderId: 12345,
    senderName: "user1"
  },
  {
    createdAt: 1543397701,
    data: "test data2",
    id: 4,
    senderId: 12346,
    senderName: "user2"
  },
]
```

##### 起こりうるエラーの種類
名前 | 説明
:---|:---
[UNAUTHORIZED](/common/errors) | プレイヤーがログインしていない
[INTERNAL_SERVER_ERROR](/common/errors) | RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/errors) | 短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている
