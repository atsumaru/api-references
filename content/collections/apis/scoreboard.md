---
title: スコアボードを利用する
slug: scoreboard
description: RPGアツマール内で動作するゲームのスコア(点数)を記録・取得できる仕組みです。
---

## 概要
ゲーム内のスコアをサーバーに登録し、ランキングを表示する機能です。
ゲームをプレイするユーザの点数を取得したり、スコアボードごとに上位の点数を取得することができます。

![スコアボードの表示](/images/scoreboard_sample1.png)

- スコアボードはRPGアツマール内で動作する、ゲーム毎に値が記録できる仕組みです。各ゲームごとに複数個のスコアボードが利用できるので、スコアボードごとに違うスコアを記録し利用することができます。
- スコアボードを利用するには、スコアボードIDを指定してスコアの登録を行い、スコアボードIDごとにスコアを取得します。
- スコア情報はスコアボードIDごとに管理されているため、複数のランキングを利用したい場合などには、異なるスコアボードIDで情報の登録・取得を行ってください。
スコアボードIDはデフォルト1〜10までの半角数字の連番で、API設定ページから30まで設定可能です。

![スコアボードについて](/images/scoreboard_howtouse.png)

### スコアボード設定について
- スコアボードは後述のスコアボード設定画面にて、名前の設定、スコアのリセットを行うことができます。

### スコアの保存について
- プレミアム会員のスコアは半永久的に残り、一般会員のスコアは直近の一定数が残る仕様となっています。
未ログインユーザーは、ランキングの表示はできますがサーバーに保存されません。
- 利用に際しては[ヘルプ](https://qa.nicovideo.jp/faq/show/12127)も合わせてご確認下さい。

### アツマール公式での利用例

例えば、RPGアツマール公式では次のゲームでこの機能を利用しています。

- [ちおちゃんの通学路](https://game.nicovideo.jp/atsumaru/games/gm6444)

## 設置方法

スコアボードを利用するには下記2つの方法が利用できます。

方法 | 場所
:---|:---
アツマール公式プラグイン | [Github](https://github.com/atsumaru/mv-plugins/blob/master/plugins/AtsumaruScoreboardsExperimental.js)
アツマール API | -


## 公式プラグインの利用方法

公式プラグインでスコアボードを設置するには次のようにします。

1. プロジェクトのプラグインフォルダに [AtsumaruScoreboardsExperimental.js](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruScoreboardsExperimental.js) を右クリックし「保存」して設置
1. イベントに記録・取得・表示イベントの設定
1. プラグインコマンドでスコアの記録・取得・表示


### スコアボードへの記録

![スコアボードへの記録](/images/set-record-to-scoreboard_plugin_sample.png)

<br>

公式プラグインを利用してスコアボードへの記録を行う場合、プラグインコマンドで次のいずれかのように指定します。（どちらでも動作は同じです）

```
SetRecordToScoreboard {boardId} {variableId}
スコア送信 {boardId} {variableId}
```

<code>{boardId}</code>にはスコアを記録したいスコアボードのIDを半角数字で指定してください。また、<code>{variableId}</code>にはスコアが格納されている変数のIDを記載してください。

<br>

#### スコアボードへの記録：応用

スコアボードへの記録を行いながら、記録に成功したかチェックする場合、プラグインコマンドで次のいずれかのように指定します。（どちらでも動作は同じです）

```
SetRecordToScoreboard {boardId} {variableId} {errorVariableId}
スコア送信 {boardId} {variableId} {errorVariableId}
```

記録に失敗した場合、<code>{errorVariableId}</code>で指定されたIDの変数にエラーメッセージがセットされます。記録に成功した場合は、単に0がセットされます。

<br>

### スコアボードの表示

![スコアボードの表示](/images/display-scoreboard_plugin_sample.png)

<br>

公式プラグインを利用してスコアボードへの記録を行う場合、プラグインコマンドで次のいずれかのように指定します。（どちらでも動作は同じです）

```
DisplayScoreboard {boardId}
スコア表示 {boardId}
```

<code>{boardId}</code>には表示したスコアボードのIDを半角数字で指定してください。


### スコアボードのデータの読み込み

スコアボード内の情報を取得し利用するには、

1. スコアボードからデータの読み込み
1. 利用する情報を指定(ターゲットの指定)して変数に格納

の手順が必要です。

公式プラグインを利用してスコアボード内の情報を取得するには、プラグインコマンドで次のいずれかのように指定します。（どちらでも動作は同じです）

```
FetchRecordsFromScoreboard {boardId}
スコア受信 {boardId}
```

<code>{boardId}</code>には取得したいスコアボードのIDを半角数字で指定してください。

<br>

### スコアボード内の情報利用
スコアボード内に格納されている情報を利用するには、事前に上述の方法でスコアボードからデータを読み込み、下記の方法で利用する情報をターゲットとして指定し変数に格納してください。

![スコアボード内の情報利用](/images/get-data-from-scoreboard-record_plugin_sample.png)

<br>

公式プラグインを利用してスコアボード内の情報を変数に格納するには、プラグインコマンドで次のいずれかのように指定します。（どちらでも動作は同じです）

```
GetDataFromScoreboardRecords {target} {variableId}
スコア取得 {target} {variableId}
```
<code>{target}</code>には取得したいターゲットを指定(下部に利用できるターゲットを記載)。<code>{variableId}</code>には格納したい変数のIDを指定してください。

#### 利用できるターゲットの一覧
ターゲット | 説明
:---|:---
myRecord | 今回の自己レコードの有無を取得。ある場合は1、ない場合は0がセットされる
myRecord.rank | 今回の自己レコードのランキング順位を取得。ない場合は0がセットされる
myRecord.score | 今回の自己レコードのスコアを取得。ない場合は0がセットされる
myRecord.isNewRecord | 今回の自己レコードが自己新記録かどうかを取得。自己新記録なら1、そうでない場合は0がセットされる
myBestRecord | 自己ベスト記録の有無を取得。ある場合は1、ない場合（または非ログイン）は0がセットされる
myBestRecord.rank | 自己ベスト記録のランキング順位を取得。ない場合（または非ログイン）は0がセットされる
myBestRecord.score | 自己ベスト記録のスコアを取得。ない場合（または非ログイン）は0がセットされる
ranking.length | ランキングデータの長さの取得
ranking[n].rank | n+1番目のランキングを取得
ranking[n].userName | n+1番目のランクのユーザ名を取得
ranking[n].score | n+1番目のランクのスコアを取得
errorMessage | スコアの読み込みに失敗した場合、エラーメッセージを取得する。成功した場合は0がセットされる

## APIを使ったスコアボードの利用方法

### スコアボードへの記録
メソッド | window.RPGAtsumaru.experimental.scoreboards.setRecord(board_id, score)
:---|:---
説明 | 引数のboard_idを指定することによりスコアを記録するスコアボードを指定。<br>第2引数のscoreでスコアを指定し、記録するスコアの点数を記録。
引数 | <ul><li>スコアボードID(1〜10までの整数)</li><li>記録するスコアの点数</li></ul>
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

## スコアボード設定画面
- 各ゲームのAPI設定ページから「利用スコアボード数の設定」、「スコアボード名の設定」、「スコアのリセット」が利用できます。

![API設定](/images/api_setting.png)

### スコアボード数の設定
- スコアボードは1ゲームあたり30個まで利用できます。ただし、デフォルトの設定では10個までの設定となっているため、10以上利用する場合はAPI設定ページから利用ボード数を変更してください。

### スコアボード名の設定
- スコアボードには任意で個別に名前を設定することができます。全半角合わせて10文字以内で設定してください。

### スコアのリセット
- 登録済みのスコアをすべて削除することができます。テストで登録したご自分のデータを削除したり、イベントなどで期間を区切ってランキングを扱いたい場合などにご利用ください。

![スコアボード設定](/images/scoreboard_setting.png)
