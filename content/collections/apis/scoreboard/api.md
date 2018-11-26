---
title: スコアボードAPIを利用する
slug: scoreboard/api
description: アツマールAPIを使ったスコアボードの利用方法について解説します。
order: 3
experimental: true
---

## APIを使ったスコアボードの利用方法

### スコアボードへの記録
メソッド | window.RPGAtsumaru.experimental.scoreboards.setRecord(board_id, score)
:---|:---
説明 | 引数のboard_idを指定することによりスコアを記録するスコアボードを指定。<br>第2引数のscoreでスコアを指定し、記録するスコアの点数を記録。
引数 | <ul><li>スコアボードID(1〜10までの整数)</li><li>記録するスコアの点数 扱える範囲は -999,999,999,999,999 ～ +999,999,999,999,999 です。</li></ul>
戻り値 | Promise[void]
リリース日 | 2018/06/15
更新日 | 2018/08/28


### スコアボードを表示する
メソッド | window.RPGAtsumaru.experimental.scoreboards.display(board_id)
:---|:---
説明 | 引数のboard_idを指定することによりスコアを記録するスコアボードを指定してスコアボード表示
引数 | スコアボードID(1〜10までの整数)
戻り値 | Promise[void]
リリース日 | 2018/06/15
更新日 | 2018/06/15

### スコアボードからデータを読み込み
メソッド | window.RPGAtsumaru.experimental.scoreboards.getRecords(board_id)
:---|:---
説明 | 引数のboard_idを指定することによりスコアボードの情報を取得
引数 | スコアボードID(1〜10までの整数)
戻り値 | Promise[<code>ScoreboardData</code>]
リリース日 | 2018/06/15
更新日 | 2018/06/15

#### ScoreboardDataオブジェクトについて
名前 | 型 | 説明
:---|:---|:---
boardId | number | ボードID
boardName | string | ボードの名前
myRecord | object or null | 今回の自己レコード
myRecord.rank | number | 今回の自己レコードのランキング順位
myRecord.score | number | 今回の自己レコードのスコア
myRecord.isNewRecord | boolean | 今回の自己レコードが自己新記録かどうか
myBestRecord | object or null | 自己ベスト記録。ログインしていないと必ずnullになる
myBestRecord.rank | number | 自己ベスト記録のランキング順位
myBestRecord.userName | string | 自己ベスト記録のユーザ名
myBestRecord.score | number | 自己ベスト記録のスコア
ranking | array | ランキングデータ
ranking.length | number | ランキングデータの長さ
ranking[n].rank | number | n+1番目のランキング
ranking[n].userName | string | n+1番目のランクのユーザ名
ranking[n].score | number | n+1番目のランクのスコア
