---
title: プレイヤー間通信の有効化
slug: common/interplayer
description: 特定のプレイヤー間でデータをやり取りできるAPIに必要な、プレイヤー間通信の有効化APIについてです。
order: 3
---

## プレイヤー間通信の有効化とは
一部のRPGアツマール ゲームAPIは、ゲームをプレイしているユーザーとは別のユーザーの情報を取得することができます。
そのようなAPIは、本ページで説明する **「プレイヤー間通信の有効化」** 情報を取得される相手ユーザーが行っている場合のみ、情報の取得が可能です。

知らないうちに他人から情報を参照されたり、シグナルを送られたりしてしまわないよう、このような仕組みとなっています。

プレイヤー間通信の有効化は、ユーザーそれぞれがゲームごとに設定できる値です。あるゲームで通信が有効化されているユーザーでも、別のゲームでは改めて有効化しないとそのゲームではそのユーザーの情報に、他のユーザーがアクセスすることはできません。

### 呼び出しに有効化が必要なAPI
次の相手ユーザーの情報を利用するAPIは、利用の際に相手ユーザーの「プレイヤー間通信の有効化」がされている必要があります。有効化されていないユーザーに対してこれらのAPIを呼び出した場合、 [FORBIDDEN](/common/errors) エラーとなります。

- [ユーザー情報取得API](/user) のうち「ユーザーIDを指定して特定のユーザー情報を取得」
- [シグナル送信API](/signal) のうち「ユーザーシグナルの送信」

### 有効化されていない場合に結果が変化するAPI
次の相手ユーザーの情報を利用するAPIは、プレイヤーの有効化状態によって結果が変化します。

- [共有セーブAPI](/shared-save)
  - 引数に有効化されていないユーザーIDを含めた場合、そのユーザーのぶんのデータは取得できません。
- [ユーザー情報取得API](/user) のうち「現在のゲームを最近プレイしたユーザーの情報の取得」
  - 有効化されているユーザーのリストが取得できます。


## 利用方法

有効化APIは次の方法で利用できます。

方法 | 場所
:---|:---
公式プラグイン | [Github](https://github.com/atsumaru/mv-plugins/blob/master/plugins/AtsumaruInterplayerEnableExperimental.js)
ゲームAPI | 以下の「APIでの利用方法」を参考に、直接APIを呼び出してください

### 公式プラグインの利用方法
公式プラグインでプレイヤー間通信を有効化するには以下のようにします。
1. プロジェクトのプラグインフォルダに [AtsumaruInterplayerEnableExperimental.js](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruInterplayerEnableExperimental.js) を右クリックし「保存」して設置
1. イベントからプラグインを利用

プラグインコマンドは次のいずれかのように指定します。（どちらでも動作は同じです）

```
EnableInterplayer
プレイヤー間通信有効化
```


### APIでの利用方法
APIを利用したプレイヤー間通信の有効化

#### 現在のログインユーザーのプレイヤー間通信の有効化

- このAPIの利用には[ログイン](/common/login)が必須です。
- このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です。

メソッド | `RPGAtsumaru.experimental.interplayer.enable()`
:---|:---
引数 | なし
戻り値 | `Promise<void>`
リリース日 | 2018/12/17
更新日 | 2018/12/17

##### 起こりうるエラーの種類
名前 | 説明
:---|:---
[UNAUTHORIZED](/common/errors) | プレイヤーがログインしていない
[INTERNAL_SERVER_ERROR](/common/errors) | RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/errors) | 短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている
