---
title: スコアボードAPIを利用する
slug: scoreboard/api
description: RPGアツマール ゲームAPIを使ったスコアボードの利用方法について解説します。
order: 3
experimental: true
---

## APIでの利用方法
APIを使ったスコアボードの利用方法についてです。

## スコアボードへの記録
メソッド | `window.RPGAtsumaru.experimental.scoreboards.setRecord(boardId: number, score: number)`
:---|:---
説明 | 引数の `boardId` を指定することによりスコアを記録するスコアボードを指定。<br>第2引数のscoreでスコアを指定し、記録するスコアの点数を記録。
引数 | <ul><li>スコアボードID(デフォルトは1〜10までの整数)</li><li>記録するスコアの点数。スコアの値としてRPGアツマールがサポートしている範囲は `-999,999,999,999,999` ～ `+999,999,999,999,999` です。</li></ul>
戻り値 | `Promise<void>`
リリース日 | 2018/06/15
更新日 | 2018/08/28

### 起こりうるエラーの種類
名前 | 説明
:---|:---
[BAD_REQUEST](/common/errors) | <ul><li>`bordId` に[スコアボード設定画面](/scoreboard/api)で設定している範囲外の値を指定した</li><li>引数として不正な値を指定している</li></ul>
[INTERNAL_SERVER_ERROR](/common/errors) | RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した


## スコアボードを表示する
メソッド | `window.RPGAtsumaru.experimental.scoreboards.display(boardId: number)`
:---|:---
説明 | 引数の `boardId` を指定することによりスコアを記録するスコアボードを指定してスコアボード表示
引数 | スコアボードID(デフォルトは1〜10までの整数)
戻り値 | `Promise<void>`
リリース日 | 2018/06/15
更新日 | 2018/06/15


## スコアボードからデータを読み込み
メソッド | `window.RPGAtsumaru.experimental.scoreboards.getRecords(boardId: number)`
:---|:---
説明 | 引数の `boardId` を指定することによりスコアボードの情報を取得
引数 | スコアボードID(デフォルトは1〜10までの整数)
戻り値 | `Promise<ScoreboardData>`
リリース日 | 2018/06/15
更新日 | 2018/06/15


### 戻り値の型 ScoreboardData について

戻り値で取得できる `ScoreboardData` は以下のような型です。

```js
interface ScoreboardData {
  myRecord: null | {
    isNewRecord: boolean,
    rank: number,
    score: number
  },
  ranking: Array<{
    rank: number,
    score: number,
    userName: string
  }>,
  myBestRecord: null | {
    rank: number,
    score: number,
    userName: string
  },
  boardId: number,
  boardName: string
}
```

プロパティの内容は次のようになっています。

プロパティ名 | 型 | 内容
:---|:---|:---
boardId | `number` | ボードID
boardName | `string` | ボードの名前
myRecord | `object &#124; null` | 今回の自己レコード
myRecord.rank | `number` | 今回の自己レコードのランキング順位
myRecord.score | `number` | 今回の自己レコードのスコア
myRecord.isNewRecord | `boolean` | 今回の自己レコードが自己新記録かどうか
myBestRecord | `object &#124; null` | 自己ベスト記録。ログインしていないと必ずnullになる
myBestRecord.rank | `number` | 自己ベスト記録のランキング順位
myBestRecord.userName | `string` | 自己ベスト記録のユーザ名
myBestRecord.score | `number` | 自己ベスト記録のスコア
ranking | `array` | ランキングデータ
ranking.length | `number` | ランキングデータの長さ
ranking[n].rank | `number` | n+1番目のランキング
ranking[n].userName | `string` | n+1番目のランクのユーザ名
ranking[n].score | `number` | n+1番目のランクのスコア

### 戻り値の例

```js
// window.RPGAtsumaru.experimental.scoreboards.getRecords(1).then(function(v) { console.log(v) }) を実行
{
  "myRecord": {
    "isNewRecord": false,
    "rank": 5,
    "score": 0
  },
  "ranking": [
    {
      "rank": 1,
      "score": 1000,
      "userName": "atsumalion"
    },
    {
      "rank": 2,
      "score": 500,
      "userName": "atsumatiger"
    },
    {
      "rank": 3,
      "score": 100,
      "userName": "atsumagorilla"
    }
  ],
  "myBestRecord": {
    "rank": 1,
    "score": 1000,
    "userName": "atsumalion"
  },
  "boardId": 1,
  "boardName": "スコアボードの名前"
}
```


### 起こりうるエラーの種類
名前 | 説明
:---|:---
[BAD_REQUEST](/common/errors) | <ul><li>`bordId` に[スコアボード設定画面](/scoreboard/api)で設定している範囲外の値を指定した</li><li>引数として不正な値を指定している</li></ul>
[INTERNAL_SERVER_ERROR](/common/errors) | RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
