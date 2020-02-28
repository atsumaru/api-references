---
title: シグナル
slug: apis/signal
description: 「シグナル」のAPIでの利用方法
order: 15
navi: APIでの利用方法
experimental: true
---
    
## 目次
 - [グローバルシグナルの送信](#グローバルシグナルの送信)
 - [グローバルシグナルの取得](#グローバルシグナルの取得)
 - [ユーザーシグナルの送信](#ユーザーシグナルの送信)
 - [ユーザーシグナルの取得](#ユーザーシグナルの取得)
    
## グローバルシグナル
    
### グローバルシグナルの送信
    
メソッド |`window.RPGAtsumaru.experimental.signal.sendSignalToGlobal(data: string)`
:---|:---
説明|ゲームのグローバルシグナルとして `data` で指定した文字列を送信します。
引数|`data` : シグナルとして、任意の文字列を100byte以内で送信できます。
戻り値|`Promise<void>`
    
 - グローバルシグナルは1ゲームあたり1,000件まで保存されます。
    
#### 起こりうるエラーの種類
    
名前|説明
:---|:---
[UNAUTHORIZED](/common/errors)|プレイヤーがログインしていない
[BAD_REQUEST](/common/errors)|<ul><li>`data` に100byte以上の文字列を指定した</li><li>引数として不正な値を指定している</li></ul>
[INTERNAL_SERVER_ERROR](/common/errors)|RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/errors)|短時間にRPGアツマール ゲームAPIを利用しすぎて、一時的に利用を制限されている
    
### グローバルシグナルの取得
    
メソッド |`window.RPGAtsumaru.experimental.signal.getGlobalSignals()`
:---|:---
説明|送信されたゲームのグローバルシグナルを取得します。
引数|なし
戻り値|`Promise<GlobalSignal[]>`
    
 - グローバルシグナルは1ゲームあたり1,000件まで保存されます。
    
#### 戻り値の型 GlobalSignal について
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
    
|プロパティ|型|内容
:---|:---|:---
|d|`number`|シグナルそれぞれでユニークなID値
|senderId|`number`|シグナルを送信したユーザーのニコニコユーザーID
|senderName|`string`|シグナルを送信したユーザーのユーザー名
|data|`string`|送信したシグナル文字列
|createdAt|`number`|シグナルが送信された日時(秒単位のunix timestamp)。すでに処理済みのシグナルを判別するために用います。
    
#### 戻り値の例
    
```js
// window.RPGAtsumaru.experimental.signal.getGlobalSignals().then(function(v) { console.log(v) }) を実行
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
    
#### 起こりうるエラーの種類
    
名前|説明
:---|:---
[INTERNAL_SERVER_ERROR](/common/errors)|RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/errors)|短時間にRPGアツマール ゲームAPIを利用しすぎて、一時的に利用を制限されている
    
## ユーザーシグナル

### ユーザーシグナルの送信
    
メソッド |`window.RPGAtsumaru.experimental.signal.sendSignalToUser(receiverId: number, data: string)`
:---|:---
説明|ユーザーシグナルとして `receiverId` で指定したユーザーIDのユーザーに `data` で指定した文字列を送信します。
引数|<ul><li>`receiverId` : 送信先のニコニコユーザーIDを指定します。</li><li>`data` : シグナルとして、任意の文字列を100byte以内で送信できます。</li></ul>
戻り値|`Promise<void>`
    
 - ユーザーシグナルは、ユーザーあたり100KBまで保存されます。
 - 他のゲームからのシグナル送信によっても消える可能性があります。
 - また、ゲームあたり1ユーザー10KBまたは1000件までとなります。
 - ゲームからのシグナル送信によって、古いシグナルから消えていきます。
    
#### 起こりうるエラーの種類
    
名前|説明
:---|:---
[UNAUTHORIZED](/common/errors)|プレイヤーがログインしていない
[FORBIDDEN](/common/errors) |`userId` に[プレイヤー間通信の有効化](/common/interplayer)を行っていないユーザーのIDを指定した
[BAD_REQUEST](/common/errors)|<ul><li>`data` に100byte以上の文字列を指定した</li><li>引数として不正な値を指定している</li></ul>
[INTERNAL_SERVER_ERROR](/common/errors)|RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/errors)|短時間にRPGアツマール ゲームAPIを利用しすぎて、一時的に利用を制限されている
    
### ユーザーシグナルの取得
    
メソッド |`window.RPGAtsumaru.experimental.signal.getUserSignals()`
:---|:---
説明|プレイしているユーザーのユーザーシグナルを取得します。
引数|なし
戻り値|`Promise<UserSignal[]>`
    
 - ユーザーシグナルは、ユーザーあたり100KBまで保存されます。
 - 他のゲームからのシグナル送信によっても消える可能性があります。
 - また、ゲームあたり1ユーザー10KBまたは1000件までとなります。
 - ゲームからのシグナル送信によって、古いシグナルから消えていきます。
#### 戻り値の型 UserSignal について
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
    
|プロパティ|型|内容
:---|:---|:---
|id|`number`|シグナルそれぞれでユニークなID値
|senderId|`number`|シグナルを送信したユーザーのニコニコユーザーID
|senderName|`string`|シグナルを送信したユーザーのユーザー名
|data|`string`|送信したシグナル文字列
|createdAt|`number`|シグナルが送信された日時(秒単位のunix timestamp)。すでに処理済みのシグナルを判別するために用います。
    
#### 戻り値の例
    
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
    
#### 起こりうるエラーの種類
    
名前|説明
:---|:---
[UNAUTHORIZED](/common/errors) |プレイヤーがログインしていない
[INTERNAL_SERVER_ERROR](/common/errors)|RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/errors)|短時間にRPGアツマール ゲームAPIを利用しすぎて、一時的に利用を制限されている
    
## 関連ドキュメント
    
ドキュメント|リンク|備考
:---|:---|:---
機能解説|[シグナル](/signal)|機能概要や全般的な解説
プラグインでの利用方法|[シグナル](/plugins/signal)|RPGツクールMVユーザー向け
    
## 最終更新日
 - 2020/02/28
