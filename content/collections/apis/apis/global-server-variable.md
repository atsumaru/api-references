---
title: グローバルサーバー変数
slug: apis/global-server-variable
description: 「グローバルサーバー変数」のAPIでの利用方法
order: 13
navi: APIでの利用方法
experimental: true
---
    
## 目次
 - [グローバルサーバー変数取得](#グローバルサーバー変数取得)
 - [グローバルサーバー変数取得(名前指定型)](#グローバルサーバー変数取得(名前指定型))
 - [トリガー発動](#トリガー発動)
 - [トリガー発動(名前指定型)](#トリガー発動(名前指定型))
 - [グローバルサーバー変数一括取得](#グローバルサーバー変数一括取得)
    
## APIでの利用方法
グローバルサーバー変数を利用するためには、あらかじめ、[グローバルサーバー変数設定画面](/global-server-variable/setting)で変数及びトリガーの設定を済ませておく必要があります。
    
### グローバルサーバー変数取得
 - グローバルサーバー変数のIDを指定し、現在値、最大値、最小値、変数名を取得します。
    
メソッド |`window.RPGAtsumaru.experimental.globalServerVariable.getGlobalServerVariable(globalServerVariableId: number)`
:---|:---
説明| 引数に指定した globalServerVariableId のグローバルサーバー変数の情報を取得する
引数|グローバルサーバー変数ID (自然数) ※[グローバルサーバー変数設定画面](/global-server-variable/setting)で設定
戻り値|`Promise<GlobalServerVariableData>`
    
#### 戻り値の型 GlobalServerVariableData について
戻り値で取得できる `GlobalServerVariableData` は以下のような型です。
    
```js
interface GlobalServerVariableData {
    name: string,
    maxValue: number,
    minValue: number,
    value: number | string,
}
```
    
プロパティの内容は次のようになっています。
  
|プロパティ|型|内容
:---|:---|:---
|value|`number &#124 string`|グローバルサーバー変数の現在値
|minValue|`number`|グローバルサーバー変数の最小値(変数が文字列型の場合は常に0になります)
|maxValue|`number`|グローバルサーバー変数の最大値(変数が文字列型の場合は常に0になります)
|name|`string`|グローバルサーバー変数の変数名
    
#### 戻り値の例
    
```js
// window.RPGAtsumaru.experimental.globalServerVariable.getGlobalServerVariable(1).then(function(v) { console.log(v) }) を実行
{
    "name": "レイドボスHP",
    "maxValue": 10000,
    "minValue": 0,
    "value": 1234
}
```
    
#### 起こりうるエラーの種類
    
名前|説明
:---|:---
[BAD_REQUEST](/common/errors)|<ul><li>指定したグローバルサーバー変数IDがそのゲームのものではない</li><li>引数として不正な値を指定している</li></ul>
[INTERNAL_SERVER_ERROR](/common/errors)|RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/errors)|短時間にRPGアツマール ゲームAPIを利用しすぎて、一時的に利用を制限されている
    
### グローバルサーバー変数取得(名前指定型)
 - グローバルサーバー変数の変数名を指定し、現在値、最大値、最小値、変数名を取得します。
 - 指定したIDのユーザーが[プレイヤー間通信の有効化](/common/interplayer)をしている必要があります。
 - このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です。
    
メソッド |`window.RPGAtsumaru.experimental.globalServerVariable.getGlobalServerVariableByName(globalServerVariableName: string)`
:---|:---
説明|引数に指定した globalServerVariableName のグローバルサーバー変数の情報を取得する
引数|グローバルサーバー変数名 (文字列) 
戻り値|`Promise<GlobalServerVariableData>`
    
#### 戻り値の型 GlobalServerVariableData について
戻り値で取得できる `GlobalServerVariableData` は以下のような型です。
    
```js
interface GlobalServerVariableData {
    name: string,
    maxValue: number,
    minValue: number,
    value: number | string,
}
```
    
プロパティの内容は次のようになっています。
    
|プロパティ|型|内容
:---|:---|:---
|value|`number &#124 string`|グローバルサーバー変数の現在値
|minValue|`number`|グローバルサーバー変数の最小値(変数が文字列型の場合は常に0になります)
|maxValue|`number`|グローバルサーバー変数の最大値(変数が文字列型の場合は常に0になります)
|name|`string`|グローバルサーバー変数の変数名
    
#### 戻り値の例
    
```js
// window.RPGAtsumaru.experimental.globalServerVariable.getGlobalServerVariableByName("変数1").then(function(v) { console.log(v) }) を実行
{
    "name": "変数1",
    "maxValue": 0,
    "minValue": 0,
    "value": "ハロルド"
}
```
    
#### 起こりうるエラーの種類
    
名前|説明
:---|:---
[BAD_REQUEST](/common/errors)|<ul><li>指定したグローバルサーバー変数名が見つからない</li><li>指定したグローバルサーバー変数名が複数存在する</li><li>引数として不正な値を指定している</li></ul>
[INTERNAL_SERVER_ERROR](/common/errors)|RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/errors)|短時間にRPGアツマール ゲームAPIを利用しすぎて、一時的に利用を制限されている
    
### トリガー発動
 - あらかじめ設定したトリガーIDを指定して、グローバルサーバー変数の値を変化させます。
    
メソッド | `window.RPGAtsumaru.experimental.globalServerVariable.triggerCall(triggerId: number, value?: number &#124 string)`
:---|:---
説明|引数に指定したtriggeridのトリガーを発動させる
引数|<ul><li>`triggerId`: トリガーID (自然数) ※[グローバルサーバー変数設定画面](/global-server-variable/setting)で設定</li><li>`value`: 変数を増減させる値/変数に設定する値 (「最大値・最小値の範囲で増減」トリガーと「値を代入」の場合のみ指定可能)</li></ul>
戻り値|`Promise<void>`
    
引数 `value` はトリガーの種別が「最大値・最小値の範囲で増減」「値を代入」のときのみ指定可能です。「固定値を増減」トリガーの場合は指定しないでください。
    
#### トリガーの呼び出し例
    
```js
// 1番トリガーの実行(1番トリガーはvalueが不要なトリガー)
window.RPGAtsumaru.experimental.globalServerVariable.triggerCall(1)
    .then(function() { /* 後続処理 */ })
// 2番トリガーの実行を実行して、変数の値に777加算する(2番トリガーは数値変数に付いた「ゲーム内で増減値を指定して実行」トリガー)
    window.RPGAtsumaru.experimental.globalServerVariable.triggerCall(2, 777)
.then(function() { /* 後続処理 */ })
    // 3番トリガーの実行を実行して、変数に「ぬるぽ」という文字列を代入する(3番トリガーは文字変数に付いた「ゲーム内で設定値を指定して実行」トリガー)
window.RPGAtsumaru.experimental.globalServerVariable.triggerCall(3, "ぬるぽ")
    .then(function() { /* 後続処理 */ })
```
    
#### 起こりうるエラーの種類
    
名前|説明
:---|:---
[BAD_REQUEST](/common/errors)|<ul><li>指定したトリガーIDがそのゲームのものではない</li><li>「固定値を増減」トリガーで `value` を指定した</li><li>「最大値・最小値の範囲で増減」トリガーで `value` を省略した</li><li>引数として不正な値を指定している</li></ul>
[INTERNAL_SERVER_ERROR](/common/errors)|RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/errors)|短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている
    
### トリガー発動(名前指定型)
 - あらかじめ設定した変数名とトリガー名を指定して、グローバルサーバー変数の値を変化させます。
    
メソッド | `window.RPGAtsumaru.experimental.globalServerVariable.triggerCallByName(globalServerVariableName:string, triggerName: string, value?: number &#124 string)`
:---|:---
説明|引数に指定した変数名とトリガー名のトリガーを発動させる
引数|<ul><li>`globalServerVariableName`: グローバルサーバ変数名 ※[グローバルサーバー変数設定画面](/global-server-variable/setting)で設定</li><li>`triggerName`: トリガー名 ※[グローバルサーバー変数設定画面](/global-server-variable/setting)で設定</li><li>`value`: 変数を増減させる値/変数に設定する値 (「最大値・最小値の範囲で増減」トリガーと「値を代入」の場合のみ指定可能)</li></ul>
戻り値|`Promise<void>`
    
引数 `value` はトリガーの種別が「最大値・最小値の範囲で増減」「値を代入」のときのみ指定可能です。「固定値を増減」トリガーの場合は指定しないでください。
    
#### トリガーの呼び出し例
    
```js
// 1番トリガーの実行(1番トリガーはvalueが不要なトリガー)
window.RPGAtsumaru.experimental.globalServerVariable.triggerCallByName("数値変数1", "増減値指定済み1")
    .then(function() { /* 後続処理 */ })
// 2番トリガーの実行を実行して、変数の値に777加算する(2番トリガーは数値変数に付いた「最大値・最小値の範囲で増減」トリガー
    window.RPGAtsumaru.experimental.globalServerVariable.triggerCallByName("数値変数2", "可算トリガー1", 777)
.then(function() { /* 後続処理 */ })
    // 3番トリガーの実行を実行して、変数に「ぬるぽ」という文字列を代入する(3番トリガーは文字変数に付いた「値を代入」トリガー)
window.RPGAtsumaru.experimental.globalServerVariable.triggerCallByName("文字列変数1", "代入トリガー1", "ぬるぽ")
    .then(function() { /* 後続処理 */ })
```
    
#### 起こりうるエラーの種類
    
名前|説明
:---|:---
[BAD_REQUEST](/common/errors)|<ul><li>指定したグローバルサーバ変数名が見当たらないか複数存在</li><li>指定したトリガー名が見当たらないか複数存在</li><li>「固定値を増減」トリガーで `value` を指定した</li><li>「最大値・最小値の範囲で増減」トリガーで `value` を省略した</li><li>引数として不正な値を指定している</li></ul>
[INTERNAL_SERVER_ERROR](/common/errors)|RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/errors)|短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている
    
### グローバルサーバー変数一括取得
 - ゲームに定義されているグローバルサーバー変数とトリガーの情報をすべて取得します。
    
メソッド |`window.RPGAtsumaru.experimental.globalServerVariable.getAllGlobalServerVariables()`
:---|:---
説明|グローバルサーバー変数とトリガーの情報をすべて取得する
引数|`Promise<GlobalServerVariableDefinition[]>`
戻り値|
    
#### 戻り値の型 GlobalServerVariableDefinition について
戻り値で取得できる `GlobalServerVariableDefinition` は以下のような型です。
    
```js
interface GlobalServerVariableDefinition {
    globalServerVariableId: number,
    name: string,
    maxValue: number,
    minValue: number,
    value: number | string,
    triggers: GlobalServerVariableTrigger[]
}

interface GlobalServerVariableTrigger {
        triggerId: number;
        triggerType: string;
        triggerName: string | null;
        memo: string | null;
        argument1: string | null;
        argument2: string | null;
        argument3: string | null;
        argument4: string | null;
        argument5: string | null;
}
```
    
プロパティの内容は次のようになっています。
    
|プロパティ|型|内容
:---|:---|:---
|globalServerVariableId|`number`|グローバルサーバー変数ID
|value|`number`|グローバルサーバー変数の現在値
|minValue|`number`|グローバルサーバー変数の最小値
|maxValue|`number`|グローバルサーバー変数の最大値
|name|`string`|グローバルサーバー変数の変数名
|triggers|`GlobalServerVariableTrigger[]`|トリガー一覧
|triggerId|`number`|トリガーID
|triggerType|`string`|トリガー種別 <ul><li>`callableByGames`: 固定値を増減</li><li>`specifiedValue`: 最大値・最小値の範囲で増減</li><li>`setValue`: 値を代入</li></ul>
|triggerName|`string &#124; null`|トリガー名
|memo|`string &#124; null`|トリガー管理用メモ
|argument1~5|`string &#124; null`|トリガー種別ごとに異なる値が入ります <ul><li>固定値を増減: <ul><li>`argument1`: 差分</li></ul></li><li>最大値・最小値の範囲で増減: <ul><li>`argument1`: 差分の最小値</li><li>`argument2`: 差分の最大値</li></ul></li></ul>
    
#### 戻り値の例
    
```js
// window.RPGAtsumaru.experimental.globalServerVariable.getAllGlobalServerVariables().then(function(v) { console.log(v) }) を実行
[
    {
    "name": "スコア",
    "maxValue": 100000,
    "minValue": 0,
    "value": 41,
    "globalServerVariableId": 2,
    "triggers": [
        {
        "triggerType": "callableByGames",
        "memo": "スコアアップ",
        "triggerName": "スコアアップ"
        "argument1": "1",
        "argument2": null,
        "argument3": null,
        "argument4": null,
        "argument5": null,
        "triggerId": 1
        },
        {
        "triggerType": "specifiedValue",
        "memo": "ボーナス",
        "triggerName": "",
        "argument1": "5",
        "argument2": "50",
        "argument3": null,
        "argument4": null,
        "argument5": null,
        "triggerId": 12
        }
    ]
    }
]
```
    
#### 起こりうるエラーの種類
    
名前|説明
:---|:---
[INTERNAL_SERVER_ERROR](/common/errors)|RPGアツマールもしくはニコニ広告のサービス側で何らかの問題が発生しているか、または通信に失敗した（※ユーザーが広告ブロックしている場合も含む）
[API_CALL_LIMIT_EXCEEDED](/common/errors) |短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている
    
## 関連ドキュメント
    
ドキュメント|リンク|備考
:---|:---|:---
機能解説|[グローバルサーバー変数](/global-server-variable)|機能概要や全般的な解説
プラグインでの利用方法|[グローバルサーバー変数](/plugins/global-server-variable)|RPGツクールMVユーザー向け
    
## 最終更新日
 - 2020/02/28
