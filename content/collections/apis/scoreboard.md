---
title: スコアボードを利用する
slug: scoreboard
description: RPGアツマール内で動作するゲームのスコア(点数)を記録・取得できる仕組みです。
---

## 概要
ゲーム内でのスコアをアツマールのサーバーに登録し、ランキングを表示する機能です。
ゲームをプレイするユーザの点数を取得したり、スコアボードごとに上位の点数を取得することができます。

![スコアボードの表示](/images/scoreboard_sample1.png)

### スコアボードの仕様について
- プレミアム会員のスコアは半永久的に残り、一般会員のスコアは直近の一定数が残る仕様となっています。
未ログインユーザーは、ランキングの表示はできますがサーバーに保存されません。
- その他スコアボード機能自体の仕様については[ヘルプ](https://qa.nicovideo.jp/faq/show/12127)をご確認下さい。


### アツマール公式での利用例

アツマール公式では例えば次のゲームでこの機能を利用しています。

- [ちおちゃんの通学路](https://game.nicovideo.jp/atsumaru/games/gm6444)



## 設置方法

スコアボードを利用するには下記2つの方法が利用できます。

方法 | 場所
:---|:---
アツマール公式プラグイン | [Github](https://github.com/atsumaru/mv-plugins/blob/master/plugins/AtsumaruScoreboardsExperimental.js)
アツマール API | -

## スコアボードについて

![スコアボードについて](/images/scoreboard_howtouse.png)

スコアボードは、RPGアツマール内で動作するゲーム毎にスコアが記録できる仕組みです。各ゲーム毎に10個のスコアボードが利用できるので、スコアボード毎に違うスコアを記録し利用することができます。スコアボードを利用するには、スコアボードIDを指定してスコアの登録を行い、スコアボードID毎にスコアを取得します。スコア情報はスコアボードID毎に管理されているため、複数のスコアランキングを利用したい場合などには異なるスコアボードIDで情報の登録・取得を行ってください。

スコアボードIDは1〜10の半角数字の連番です。

## 公式プラグインの利用方法

公式プラグインでスコアボードを設置するには次のようにします。

1. プロジェクトのプラグインフォルダに [AtsumaruScoreboardsExperimental.js](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruScoreboardsExperimental.js) を右クリックし「保存」して設置
1. イベントに記録・取得・表示イベントの設定
1. プラグインコマンドでスコアの記録・取得・表示


### スコアボードへの記録

![スコアボードへの記録](/images/set-record-to-scoreboard_plugin_sample.png)

<br>

公式プラグインを利用してスコアボードへの記録を行う場合、プラグインコマンドで

```
SetRecordToScoreboard {boardId} {variableId}
```

と記載してください。<code>{boardId}</code>にはスコアを記録したいスコアボードのIDを半角数字で指定してください。また、<code>{variableId}</code>にはスコアが格納されている変数のIDを記載してください。

<br>

### スコアボードの表示

![スコアボードの表示](/images/display-scoreboard_plugin_sample.png)

<br>

公式プラグインを利用してスコアボードへの記録を行う場合、プラグインコマンドで

```
DisplayScoreboard {boardId}
```

と記載してください。<code>{boardId}</code>には表示したスコアボードのIDを半角数字で指定してください。


### スコアボードのデータの読み込み

スコアボード内の情報を取得し利用するには、

1. スコアボードからデータの読み込み
1. 利用する情報を指定(ターゲットの指定)して変数に格納

の手順が必要です。

公式プラグインを利用してスコアボード内の情報を取得するには、プラグインコマンドで

```
FetchRecordsFromScoreboard {boardId}
```

と記載してください。<code>{boardId}</code>には取得したいスコアボードのIDを半角数字で指定してください。

<br>

### スコアボード内の情報利用
スコアボード内に格納されている情報を利用するには、事前に上述の方法でスコアボードからデータを読み込み、下記の方法で利用する情報をターゲットとして指定し変数に格納してください。

![スコアボード内の情報利用](/images/get-data-from-scoreboard-record_plugin_sample.png)

<br>

公式プラグインを利用してスコアボード内の情報を変数に格納するには、プラグインコマンドで

```
GetDataFromScoreboardRecords {target} {variableId}
```
と記載してください。<code>{target}</code>には取得したいターゲットを指定(下部に利用できるターゲットを記載)。<code>{variableId}</code>には格納したい変数のIDを指定してください。

#### 利用できるターゲットの一覧
ターゲット | 説明
:---|:---
myRecord | 今回の自己レコードの有無を取得。ある場合は1、ない場合は2がセットされる
myRecord.rank | 今回の自己レコードのランキングを取得。ある場合はスコアが、非ログインの場合は0がセットされる
myRecord.score | 今回の自己レコードのスコアがセットされる
myRecord.isNewRecord | 今回の自己レコードが自己新記録かどうかを取得。自己新記録なら1、そうでない場合は0がセットされる
myBestRecord | 自己ベスト記録の有無を取得。ある場合は1、ない場合は0がセットされる
myBestRecord.rank | 自己ベスト記録のランキング順位を取得。非ログインの場合は0がセットされる
myBestRecord.score | 自己ベスト記録のスコアを取得。非ログインの場合は0がセットされる
ranking.length | ランキングデータの長さの取得
ranking[n].rank | n+1番目のランキングを取得
ranking[n].userName | n+1番目のランクのユーザ名を取得
ranking[n].score | n+1番目のランクのスコアを取得

## APIを使ったスコアボードの利用方法

### スコアボードへの記録
メソッド | window.RPGAtsumaru.experimental.scoreboards.setRecord(board_id, score)
:---|:---
説明 | 引数のboard_idを指定することによりスコアを記録するスコアボードを指定。<br>第2引数のscoreでスコアを指定し、記録するスコアの点数を記録。
引数 | <ul><li>スコアボードID(1〜10までの整数)</li><li>記録するスコアの点数</li></ul>
戻り値 | 無し
リリース日 | 2018/06/15
更新日 | 2018/08/28


### スコアボードを表示する
メソッド | window.RPGAtsumaru.experimental.scoreboards.display(board_id)
:---|:---
説明 | 引数のboard_idを指定することによりスコアを記録するスコアボードを指定してスコアボード表示
引数 | スコアボードID(1〜10までの整数)
戻り値 | 無し
リリース日 | 2018/06/15
更新日 | 2018/06/15

### スコアボードからのデータ取得・利用
スコアボード内の情報を取得し利用するには、

1. スコアボードからデータを読み込み
1. 利用する情報を指定(ターゲットの指定)して変数に格納

の手順が必要です。

### スコアボードからデータを読み込み
メソッド | window.RPGAtsumaru.experimental.scoreboards.getRecords(board_id)
:---|:---
説明 | 引数のboard_idを指定することによりスコアボードの情報を取得
引数 | スコアボードID(1〜10までの整数)
戻り値 | <code>result</code>
リリース日 | 2018/06/15
更新日 | 2018/06/15

#### 利用できるターゲットの一覧
ターゲット | 説明
:---|:---
myRecord | 今回の自己レコードの有無を取得。ある場合は1、ない場合は2がセットされる
myRecord.rank | 今回の自己レコードのランキングを取得。ある場合はスコアが、非ログインの場合は0がセットされる
myRecord.score | 今回の自己レコードのスコアがセットされる
myRecord.isNewRecord | 今回の自己レコードが自己新記録かどうかを取得。自己新記録なら1、そうでない場合は0がセットされる
myBestRecord | 自己ベスト記録の有無を取得。ある場合は1、ない場合は0がセットされる
myBestRecord.rank | 自己ベスト記録のランキング順位を取得。非ログインの場合は0がセットされる
myBestRecord.score | 自己ベスト記録のスコアを取得。非ログインの場合は0がセットされる
ranking.length | ランキングデータの長さの取得
ranking[n].rank | n+1番目のランキングを取得
ranking[n].userName | n+1番目のランクのユーザ名を取得
ranking[n].score | n+1番目のランクのスコアを取得
