---
title: グローバルサーバー変数APIを利用する
slug: global-server-variable/api
description: RPGアツマール ゲームAPIを使ったグローバルサーバー変数の利用方法について解説します。
order: 3
experimental: true
---

APIを使ったグローバルサーバー変数の利用方法について解説します。予め、[グローバルサーバー変数設定画面](/global-server-variable/setting)で変数及びトリガーの設定を済ませておく必要があります。

## グローバルサーバー変数取得

グローバルサーバー変数のIDを指定し、現在値、最大値、最小値、変数名を取得します。

メソッド | `window.RPGAtsumaru.experimental.globalServerVariable.getGlobalServerVariable(globalServerVariableId)`
:---|:---
説明 | 引数に指定した globalServerVariableId のグローバルサーバー変数の情報を取得する
引数 | グローバルサーバー変数ID (自然数) ※[グローバルサーバー変数設定画面](/global-server-variable/setting)で設定
戻り値 | `Promise<GlobalServerVariableData>`
リリース日 | 2018/12/17
更新日 | 2018/12/17

### GlobalServerVariableDataオブジェクトについて
名前 | 型 | 説明
:---|:---|:---
value | number | グローバルサーバー変数の現在値
minValue | number | グローバルサーバー変数の最小値
maxValue | number | グローバルサーバー変数の最大値
name | string | グローバルサーバー変数の変数名

### 起こりうるエラーの種類
名前 | 説明
:---|:---
BAD_REQUEST | 指定したグローバルサーバー変数IDがそのゲームのものではない
INTERNAL_SERVER_ERROR | RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
API_CALL_LIMIT_EXCEEDED | 短時間にRPGアツマール ゲームAPIを利用しすぎて、一時的に利用を制限されている

## トリガー発動

予め設定したトリガーIDを指定して、グローバルサーバー変数の値を変化させます。

メソッド | `window.RPGAtsumaru.experimental.globalServerVariable.triggerCall(triggerId)`
:---|:---
説明 | 引数に指定したtriggeridのトリガーを発動させる
引数 | トリガーID (自然数) ※[グローバルサーバー変数設定画面](/global-server-variable/setting)で設定
戻り値 | `Promise<void>`
リリース日 | 2018/12/17
更新日 | 2018/12/17

### 起こりうるエラーの種類
名前 | 説明
:---|:---
BAD_REQUEST | 指定したトリガーIDがそのゲームのものではない
INTERNAL_SERVER_ERROR | RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
API_CALL_LIMIT_EXCEEDED | 短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている
