---
title: グローバルサーバー変数プラグインを利用する
slug: global-server-variable/plugin
description: 公式プラグインを利用した、グローバルサーバー変数の利用方法について解説します。
order: 2
experimental: true
---

## 公式プラグインの利用方法

公式プラグインでグローバルサーバー変数を利用するには次のようにします。

1. プロジェクトのプラグインフォルダに [AtsumaruGlobalServerVariableExperimental.js](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruGlobalServerVariableExperimental.js) を右クリックし「保存」して設置
1. プラグインの設定で「現在値」「最大値」「最小値」「変数名」「エラーメッセージ」の代入先の変数IDを設定
1. [グローバルサーバー変数設定画面](/global-server-variable/setting)でグローバルサーバー変数とトリガーを設定
1. プラグインコマンドでグローバルサーバー変数の取得 or トリガー発動

![プラグインの設定](/images/global-server-variable/plugin_setting.png)


## グローバルサーバー変数の取得

### プラグインコマンドの実行

公式プラグインを利用してグローバルサーバー変数の情報を変数に格納するには、プラグインコマンドで次のいずれかのように指定します。（どちらでも動作は同じです）

```
GetGlobalServerVariable {globalServerVariableId}
グローバルサーバー変数取得 {globalServerVariableId}
```
`{globalServerVariableId}`には取得したいグローバルサーバー変数IDを指定します。

- 実行に成功すると、プラグインの設定で指定した変数に「現在値」「最大値」「最小値」「変数名」がの値が代入されます。
- 実行に失敗すると、プラグインの設定で指定した変数に「エラーメッセージ」が代入されます。

例：グローバルサーバー変数ID 1234 の現在値を取得
```
グローバルサーバー変数取得 1234
```

![グローバルサーバー変数取得](/images/global-server-variable/plugin_command_get.png)


## グローバルサーバー変数の取得(名前指定型)

### プラグインコマンドの実行

名前を指定してグローバルサーバー変数の情報を変数に格納するには、プラグインコマンドで次のいずれかのように指定します。（どちらでも動作は同じです）

```
GetGlobalServerVariableByName {globalServerVariableName}
名前でグローバルサーバー変数取得 {globalServerVariableName}
```
`{globalServerVariableName}`には取得したいグローバルサーバー変数名を指定します。

- 実行に成功すると、プラグインの設定で指定した変数に「現在値」「最大値」「最小値」「変数名」がの値が代入されます。
- 実行に失敗すると、プラグインの設定で指定した変数に「エラーメッセージ」が代入されます。

例：グローバルサーバー変数名 文字列変数1 の現在値を取得
```
名前でグローバルサーバー変数取得 文字列変数1
```

![グローバルサーバー変数取得](/images/global-server-variable/plugin_command_get.png)


## トリガー発動

### 「固定値を増減」トリガーの実行

公式プラグインを利用して「固定値を増減」トリガーを発動させる場合、プラグインコマンドで次のいずれかのように指定します。（どちらでも動作は同じです）

```
TriggerCall {triggerId}
トリガー発動 {triggerId}
```

`{triggerId}`には発動したいトリガーのIDを半角数字で指定してください。


- 実行に成功すると、[グローバルサーバー変数設定画面](/global-server-variable/setting)で指定された値だけグローバルサーバー変数の値が増加します。
- 実行に失敗すると、プラグインの設定で指定した変数に「エラーメッセージ」が代入されます。


![トリガー発動](/images/global-server-variable/plugin_command_trigger.png)


### 「最大値・最小値の範囲で増減」トリガーの実行

公式プラグインを利用して「最大値・最小値の範囲で増減」トリガーを発動させる場合、プラグインコマンドで次のいずれかのように指定します。（どちらでも動作は同じです）

```
TriggerCall {triggerId} {deltaVariableId}
トリガー発動 {triggerId} {deltaVariableId}
```

`{triggerId}`には発動したいトリガーのIDを半角数字で指定してください。 `{deltaVariableId}` には増減させる値が代入された変数のIDを指定してください。

- 実行に成功すると、引数で指定された値だけグローバルサーバー変数の値が増加します。
- 実行に失敗すると、プラグインの設定で指定した変数に「エラーメッセージ」が代入されます。


### 「値を代入」トリガーの実行

公式プラグインを利用して「値を代入」トリガーを発動させる場合、プラグインコマンドで次のいずれかのように指定します。（どちらでも動作は同じです）

```
TriggerCall {triggerId} {valueVariableId}
トリガー発動 {triggerId} {valueVariableId}
```

`{triggerId}`には発動したいトリガーのIDを半角数字で指定してください。 `{valueVariableId}` には代入させる値が代入された変数のIDを指定してください。

- 実行に成功すると、引数で指定された値だけグローバルサーバー変数の値が変化します。
- 実行に失敗すると、プラグインの設定で指定した変数に「エラーメッセージ」が代入されます。


## トリガー発動(名前指定型)

### 「固定値を増減」トリガーの実行

公式プラグインを利用して「固定値を増減」トリガーを発動させる場合、プラグインコマンドで次のいずれかのように指定します。（どちらでも動作は同じです）

```
TriggerCallByName {globalServerVariableName} {triggerName}
名前でトリガー発動 {globalServerVariableName} {triggerName}
```

`{globalServerVariableName}`には発動したいトリガーに紐づいた変数の名前を指定してください。`{triggerName}`には発動したいトリガーの名前を指定してください。


- 実行に成功すると、[グローバルサーバー変数設定画面](/global-server-variable/setting)で指定された値だけグローバルサーバー変数の値が増加します。
- 実行に失敗すると、プラグインの設定で指定した変数に「エラーメッセージ」が代入されます。


![トリガー発動](/images/global-server-variable/plugin_command_trigger.png)


### 「最大値・最小値の範囲で増減」トリガーの実行

公式プラグインを利用して「最大値・最小値の範囲で増減」トリガーを発動させる場合、プラグインコマンドで次のいずれかのように指定します。（どちらでも動作は同じです）

```
TriggerCallByName {globalServerVariableName} {triggerName} {deltaVariableId}
名前でトリガー発動 {globalServerVariableName} {triggerName} {deltaVariableId}
```

`{globalServerVariableName}`には発動したいトリガーに紐づいた変数の名前を指定してください。`{triggerName}`には発動したいトリガーの名前を指定してください。 `{deltaVariableId}` には増減させる値が代入された変数のIDを指定してください。

- 実行に成功すると、引数で指定された値だけグローバルサーバー変数の値が増加します。
- 実行に失敗すると、プラグインの設定で指定した変数に「エラーメッセージ」が代入されます。


### 「値を代入」トリガーの実行

公式プラグインを利用して「値を代入」トリガーを発動させる場合、プラグインコマンドで次のいずれかのように指定します。（どちらでも動作は同じです）

```
TriggerCallByName {globalServerVariableName} {triggerName} {valueVariableId}
名前でトリガー発動 {globalServerVariableName} {triggerName} {valueVariableId}
```

`{globalServerVariableName}`には発動したいトリガーに紐づいた変数の名前を指定してください。`{triggerName}`には発動したいトリガーの名前を指定してください。 `{valueVariableId}` には代入させる値が代入された変数のIDを指定してください。

- 実行に成功すると、引数で指定された値だけグローバルサーバー変数の値が変化します。
- 実行に失敗すると、プラグインの設定で指定した変数に「エラーメッセージ」が代入されます。
