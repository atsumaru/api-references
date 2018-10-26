---
title: スコアボードプラグインを利用する
slug: scoreboard/plugin
description: 公式プラグインを利用した、スコアボードの利用方法について解説します。
order: 2
experimental: true
---

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
