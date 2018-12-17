---
title: グローバルサーバー変数
slug: global-server-variable
description: RPGアツマール上で動作するグローバルサーバー変数です。
order: 25
experimental: true
---

## 概要
![グローバルサーバー変数の概念図](/images/global-server-variable_concept.png)

グローバルサーバー変数はRPGアツマール内で動作する、ゲーム毎にユーザー共通の整数値をサーバーに記録できる仕組みです。

### なにができるのか
ユーザー間で共通の値を参照し、トリガーという機能で値を増減させるゲームが作成できます。  
各ゲームごとに複数個のグローバルサーバー変数が利用できるので、変数ごとに違う値を記録し利用することができます。

#### 利用想定／利用例
この機能は、以下のような使い方を想定しています。
- プレイヤーみんなで倒すレイドボス（ボスのHPをグローバルサーバー変数に設定、攻撃をトリガーに設定）
- 全プレイヤーでエンディングまで達成した回数カウントアップ（達成をトリガーにし、変数に+1していく）

例えば、次のサンプルゲームではこの機能を利用し、ボスのHPにグローバルサーバー変数を設定しています。
- [【ゲームAPIサンプル】レイドボス（グローバルサーバー変数API）](https://game.nicovideo.jp/atsumaru/games/gm9226)

## 機能詳細
 - グローバルサーバー変数を利用するには、**ゲームAPI設定ページから変数自体の設定と、対応するトリガーの設定が必要** です。
 - 新しく変数を作成すると、変数IDが発行されます。IDはすべての変数で一意（ユニーク）の値になっているため、複数の変数を利用したい場合などには、異なるIDで情報の登録・取得を行ってください。
 - 変数が作成されるとトリガーが作成できるようになります。トリガーIDもすべてのトリガーで一意（ユニーク）の値になっているため、複数のトリガーを利用したい場合などには、異なるIDで情報の登録・取得を行ってください。
 - ゲーム側からトリガーIDを指定して変数の変更を行い、グローバルサーバー変数IDを指定して値を取得します。
 - グローバルサーバー変数は、各ゲーム30個まで設定可能です。

### トリガーについて
グローバルサーバー変数をゲーム側から操作する機能を「トリガー」と呼びます。  
現在、トリガーは二種類用意されています。

トリガー|詳細
:---|:---
ゲーム内から実行|固定値を増減させることができます
ゲーム内で増減値を指定して実行|設定した幅の中で可変の値を増減させることができます


### ゲームAPI設定ページについて
次のURLでAPI設定ページを確認できます。gm[id]部分をご自分のゲームIDに差し替えてください。  
`https://game.nicovideo.jp/atsumaru/games/gm[id]/api-settings/global-server-variables`  
ここで「グローバルサーバー変数の設定」、「トリガーの設定」が利用できます。  

 ![API設定](/images/api_setting.png)  

 ![グローバルサーバー変数設定](/images/global-server-variable_setting.png)

#### グローバルサーバー変数の設定項目について

設定項目|詳細
:---|:---
変数名|管理しやすいように変数に名前を付けることができます。機能への影響はありません
現在値|現在の値です。ゲーム公開前は初期値を設定します
最小値|変数の最小値を整数で設定します。（※）
最大値|変数の最大値を整数で設定します。（※）
※値としてRPGアツマールがサポートしている範囲は -999,999,999,999,999 ～ +999,999,999,999,999 です。

#### トリガーの設定項目について

トリガー|設定項目|詳細
:---|:---|:---
ゲーム内から実行|メモ|管理しやすいようにメモを設定できます。機能への影響はありません
|差分|トリガー実行時にグローバルサーバー変数に与える数値を設定します（※）
ゲーム内で増減値を指定して実行|メモ|管理しやすいようにメモを設定できます。機能への影響はありません
|差分の最小値|トリガー実行時にグローバルサーバー変数に与える数値の下限を設定します（これ以下の数値は下限までに切り上げられます）（※）
|差分の最大値|トリガー実行時にグローバルサーバー変数に与える数値の上限を設定します（これ以上の数値は上限にまでに切り捨てられます）（※）
※値としてRPGアツマールがサポートしている範囲は -999,999,999,999,999 ～ +999,999,999,999,999 です。

## 利用方法

グローバルサーバー変数は次の方法で利用できます。

方法 | 場所
:---|:---
公式プラグイン | [Github](https://github.com/atsumaru/mv-plugins/blob/master/plugins/AtsumaruGlobalServerVariableExperimental.js)
ゲームAPI | 以下の「APIでの利用方法」を参考に、直接APIを呼び出してください

### 公式プラグインの利用方法

公式プラグインでグローバルサーバー変数を利用するには次のようにします。

1. プロジェクトのプラグインフォルダに [AtsumaruGlobalServerVariableExperimental.js](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruGlobalServerVariableExperimental.js) を右クリックし「保存」して設置
1. ゲームAPI設定ページでグローバルサーバー変数とトリガーを設定
1. プラグインコマンドでグローバルサーバー変数の取得 or トリガー発動

#### グローバルサーバー変数の取得

![グローバルサーバー変数取得](/images/global-server-variable_plugin_command_get.png)

公式プラグインを利用してグローバルサーバー変数の情報を変数に格納するには、プラグインコマンドで次のいずれかのように指定します。（どちらでも動作は同じです）

```
GetGlobalServerVariable {globalServerVariableId} {variableId1} {variableId2} {variableId3} {variableId4} {variableId5}
グローバルサーバー変数取得 {globalServerVariableId} {variableId1} {variableId2} {variableId3} {variableId4} {variableId5}
```
`{globalServerVariableId}`には取得したいグローバルサーバー変数IDを指定。`{variableId1~5}`には情報を格納したい変数のIDを指定してください(情報の内訳は以下の通り)。

##### 利用できる情報の一覧
名前 | 説明
:---|:---
variableId1 | グローバルサーバー変数の現在値
variableId2 | グローバルサーバー変数の最小値
variableId3 | グローバルサーバー変数の最大値
variableId4 | グローバルサーバー変数の変数名
variableId5 | グローバルサーバー変数の読み込みに失敗した場合、エラーメッセージを取得する。成功した場合は0がセットされる

なお、variableId2~5については、その情報が必要なければプラグインコマンドでの指定を省略しても構いません。

例：グローバルサーバー変数ID 1234 の現在値を取得
```
グローバルサーバー変数取得 1234 1
```

#### トリガー発動

![トリガー発動](/images/global-server-variable_plugin_command_trigger.png)

公式プラグインを利用してトリガーを発動させる場合、プラグインコマンドで次のいずれかのように指定します。（どちらでも動作は同じです）

```
TriggerCall {triggerId}
トリガー発動 {triggerId}
```

`{triggerId}`には発動したいトリガーのIDを半角数字で指定してください。

#### トリガー発動：応用

トリガーを発動させながら、発動に成功したかチェックする場合、プラグインコマンドで次のいずれかのように指定します。（どちらでも動作は同じです）

```
TriggerCall {triggerId} {errorVariableId}
トリガー発動 {triggerId} {errorVariableId}
```

記録に失敗した場合、`{errorVariableId}`で指定されたIDの変数にエラーメッセージがセットされます。記録に成功した場合は、単に0がセットされます。


### APIでの利用方法
APIを使ったグローバルサーバー変数の利用方法

#### グローバルサーバー変数取得
メソッド | window.RPGAtsumaru.experimental.globalServerVariable.getGlobalServerVariable(globalServerVariableId)
:---|:---
説明 | 引数に指定した globalServerVariableId のグローバルサーバー変数の情報を取得する
引数 | グローバルサーバー変数ID (自然数) ※ゲームAPI設定ページで設定
戻り値 | `Promise<GlobalServerVariableData>`
リリース日 | 2018/12/17
更新日 | 2018/12/17

##### GlobalServerVariableDataオブジェクトについて
名前 | 型 | 説明
:---|:---|:---
value | number | グローバルサーバー変数の現在値
minValue | number | グローバルサーバー変数の最小値
maxValue | number | グローバルサーバー変数の最大値
name | string | グローバルサーバー変数の変数名

##### 起こりうるエラーの種類
名前 | 説明
:---|:---
BAD_REQUEST | 指定したグローバルサーバー変数IDがそのゲームのものではない
INTERNAL_SERVER_ERROR | RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
API_CALL_LIMIT_EXCEEDED | 短時間にRPGアツマール ゲームAPIを利用しすぎて、一時的に利用を制限されている

#### トリガー発動
メソッド | window.RPGAtsumaru.experimental.globalServerVariable.triggerCall(triggerId)
:---|:---
説明 | 引数に指定したtriggeridのトリガーを発動させる
引数 | トリガーID (自然数) ※ゲームAPI設定ページで設定
戻り値 | `Promise<void>`
リリース日 | 2018/12/17
更新日 | 2018/12/17

##### 起こりうるエラーの種類
名前 | 説明
:---|:---
BAD_REQUEST | 指定したトリガーIDがそのゲームのものではない
INTERNAL_SERVER_ERROR | RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
API_CALL_LIMIT_EXCEEDED | 短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている
