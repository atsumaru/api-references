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

メソッド | `window.RPGAtsumaru.experimental.globalServerVariable.getGlobalServerVariable(globalServerVariableId: number)`
:---|:---
説明 | 引数に指定した globalServerVariableId のグローバルサーバー変数の情報を取得する
引数 | グローバルサーバー変数ID (自然数) ※[グローバルサーバー変数設定画面](/global-server-variable/setting)で設定
戻り値 | `Promise<GlobalServerVariableData>`
リリース日 | 2018/12/17
更新日 | 2018/12/17

### 戻り値の型 GlobalServerVariableData について
戻り値で取得できる `GlobalServerVariableData` は以下のような型です。

```js
interface GlobalServerVariableData {
  name: string,
  maxValue: number,
  minValue: number,
  value: number
}
```

プロパティの内容は次のようになっています。

プロパティ名 | 型 | 内容
:---|:---|:---
value | `number` | グローバルサーバー変数の現在値
minValue | `number` | グローバルサーバー変数の最小値
maxValue | `number` | グローバルサーバー変数の最大値
name | `string` | グローバルサーバー変数の変数名

### 戻り値の例

```js
// window.RPGAtsumaru.experimental.globalServerVariable.getGlobalServerVariable(1).then(function(v) { console.log(v) }) を実行
{
  "name": "レイドボスHP",
  "maxValue": 10000,
  "minValue": 0,
  "value": 1234
}
```

### 起こりうるエラーの種類
名前 | 説明
:---|:---
[BAD_REQUEST](/common/errors) | <ul><li>指定したグローバルサーバー変数IDがそのゲームのものではない</li><li>引数として不正な値を指定している</li></ul>
[INTERNAL_SERVER_ERROR](/common/errors) | RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/errors) | 短時間にRPGアツマール ゲームAPIを利用しすぎて、一時的に利用を制限されている


## トリガー発動

予め設定したトリガーIDを指定して、グローバルサーバー変数の値を変化させます。

メソッド | `window.RPGAtsumaru.experimental.globalServerVariable.triggerCall(triggerId:number, delta?: number)`
:---|:---
説明 | 引数に指定したtriggeridのトリガーを発動させる
引数 | <ul><li>`triggerId`: トリガーID (自然数) ※[グローバルサーバー変数設定画面](/global-server-variable/setting)で設定</li><li>`delta`: 変数を増減させる値 (「ゲーム内で増減値を指定して実行」トリガーの場合のみ指定可能)</li></ul>
戻り値 | `Promise<void>`
リリース日 | 2018/12/17
更新日 | 2018/12/17

 - 引数 `delta` はトリガーの種別が「ゲーム内で増減値を指定して実行」のときのみ指定可能です。
  -「ゲーム内から実行」トリガーの場合は指定しないでください。

### 起こりうるエラーの種類
名前 | 説明
:---|:---
[BAD_REQUEST](/common/errors) | <ul><li>指定したトリガーIDがそのゲームのものではない</li><li>「ゲーム内から実行」トリガーで `delta` を指定した</li><li>「ゲーム内で増減値を指定して実行」トリガーで `delta` を省略した</li><li>引数として不正な値を指定している</li></ul>
[INTERNAL_SERVER_ERROR](/common/errors) | RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/errors) | 短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている


## グローバルサーバー変数一括取得

ゲームに定義されているグローバルサーバー変数とトリガーの情報をすべて取得します。

メソッド | `window.RPGAtsumaru.experimental.globalServerVariable.getAllGlobalServerVariables()`
:---|:---
説明 | グローバルサーバー変数とトリガーの情報をすべて取得する
戻り値 | `Promise<GlobalServerVariableDefinition[]>`
リリース日 | 2019/3/5
更新日 | 2019/3/5

### 戻り値の型 GlobalServerVariableDefinition について
戻り値で取得できる `GlobalServerVariableDefinition` は以下のような型です。

```js
interface GlobalServerVariableDefinition {
  globalServerVariableId: number,
  name: string,
  maxValue: number,
  minValue: number,
  value: number,
  triggers: GlobalServerVariableTrigger[]
}

interface GlobalServerVariableTrigger {
    triggerId: number;
    triggerType: string;
    memo: string | null;
    argument1: string | null;
    argument2: string | null;
    argument3: string | null;
    argument4: string | null;
    argument5: string | null;
}
```

プロパティの内容は次のようになっています。

プロパティ名 | 型 | 内容
:---|:---|:---
globalServerVariableId | `number` | グローバルサーバー変数ID
value | `number` | グローバルサーバー変数の現在値
minValue | `number` | グローバルサーバー変数の最小値
maxValue | `number` | グローバルサーバー変数の最大値
name | `string` | グローバルサーバー変数の変数名
triggers | `GlobalServerVariableTrigger[]` | トリガー一覧
triggerId | `number` | トリガーID
triggerType | `string` | トリガー種別 <ul><li>`callableByGames`: ゲーム内から実行</li><li>`specifiedValue`: ゲーム内で増減値を指定して実行</li></ul>
memo | `string &#124; null` | トリガー管理用メモ
argument1~5 | `string &#124; null` | トリガー種別ごとに異なる値が入ります <ul><li>ゲーム内から実行: <ul><li>`argument1`: 差分</li></ul></li><li>ゲーム内で増減値を指定して実行: <ul><li>`argument1`: 差分の最小値</li><li>`argument2`: 差分の最大値</li></ul></li></ul>

### 戻り値の例

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

### 起こりうるエラーの種類
名前 | 説明
:---|:---
[INTERNAL_SERVER_ERROR](/common/errors) | RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/errors) | 短時間にRPGアツマール ゲームAPIを利用しすぎて、一時的に利用を制限されている
