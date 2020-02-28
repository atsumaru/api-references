---
title: グローバルサーバー変数
slug: plugins/global-server-variable
description: 「グローバルサーバー変数」のプラグインでの利用方法
order: 9
navi: プラグインでの利用方法
experimental: true
---
    
## 目次
 - [グローバルサーバー変数の取得](#グローバルサーバー変数の取得)
 - [グローバルサーバー変数の取得(名前指定型)](#グローバルサーバー変数の取得(名前指定型))
 - [「固定値を増減」トリガーの実行](#「固定値を増減」トリガーの実行)
 - [「最大値・最小値の範囲で増減」トリガーの実行](#「最大値・最小値の範囲で増減」トリガーの実行)
 - [「値を代入」トリガーの実行](#「値を代入」トリガーの実行)
 - [「固定値を増減」（名前指定型）トリガーの実行](#「固定値を増減」（名前指定型）トリガーの実行)
 - [「最大値・最小値の範囲で増減」（名前指定型）トリガーの実行](#「最大値・最小値の範囲で増減」（名前指定型）トリガーの実行)
 - [「値を代入」（名前指定型）トリガーの実行](#「値を代入」（名前指定型）トリガーの実行)
    
## プラグインの利用方法
プラグインでグローバルサーバー変数を利用するには以下のようにします。
1. プラグインのダウンロード：[AtsumaruGlobalServerVariableExperimental.js](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruGlobalServerVariableExperimental.js) を右クリックで「名前をつけて保存」してダウンロード
1. プロジェクトに追加：ダウンロードしたファイルをプロジェクトのプラグインフォルダに設置
1. 有効化：プロジェクトのプラグイン設定でプラグインをONにする
1. 設定：プラグイン設定で、取得した情報を収納する変数のIDを指定する。
    
![プラグインの設定](/images/global-server-variable/plugin_setting.png)
    
## 機能の呼び出し
    
### グローバルサーバー変数の取得
プラグインコマンドで次のいずれかのように指定します（どちらでも動作は同じです）。
```
GetGlobalServerVariable <globalServerVariableId>
```
あるいは
```
グローバルサーバー変数取得 <globalServerVariableId>
```
    
 - `<globalServerVariableId>`には取得したいグローバルサーバー変数IDを指定します。
 - 実行に成功すると、プラグインの設定で指定した変数に「現在値」「最大値」「最小値」「変数名」の値が代入されます。
 - 実行に失敗すると、プラグインの設定で指定した変数に「エラーメッセージ」が代入されます。
    
#### 例：グローバルサーバー変数ID 1234 の現在値を取得
```
グローバルサーバー変数取得 1234
```
    
![グローバルサーバー変数取得](/images/global-server-variable/plugin_command_get.png)
    

### グローバルサーバー変数の取得(名前指定型)
プラグインコマンドで次のいずれかのように指定します（どちらでも動作は同じです）。
```
GetGlobalServerVariableByName <globalServerVariableName>
```
あるいは
```
名前でグローバルサーバー変数取得 <globalServerVariableName>
```
    
 - `<globalServerVariableName>`には取得したいグローバルサーバー変数IDを指定します。
 - 実行に成功すると、プラグインの設定で指定した変数に「現在値」「最大値」「最小値」「変数名」の値が代入されます。
 - 実行に失敗すると、プラグインの設定で指定した変数に「エラーメッセージ」が代入されます。

#### 例：グローバルサーバー変数ID 文字列変数1 の現在値を取得
```
名前でグローバルサーバー変数取得 文字列変数1
```
    
![グローバルサーバー変数取得](/images/global-server-variable/plugin_command_get_byname.jpg)
    

### 「固定値を増減」トリガーの実行
プラグインコマンドで次のいずれかのように指定します（どちらでも動作は同じです）。
```
TriggerCall <triggerId>
```
あるいは
```
トリガー発動 <triggerId>
```
    
 - `<triggerId>`には発動したいトリガーのIDを半角数字で指定してください。
 - 実行に成功すると、[グローバルサーバー変数設定画面](/global-server-variable/setting)で指定された値だけグローバルサーバー変数の値が増加します。
 - 実行に失敗すると、プラグインの設定で指定した変数に「エラーメッセージ」が代入されます。
    
![トリガー発動](/images/global-server-variable/plugin_command_trigger.png)
    

### 「最大値・最小値の範囲で増減」トリガーの実行
プラグインコマンドで次のいずれかのように指定します（どちらでも動作は同じです）。
```
TriggerCall <triggerId> <deltaVariableId>
```
あるいは
```
トリガー発動 <triggerId> <deltaVariableId>
```
    
 - `<triggerId>`には発動したいトリガーのIDを半角数字で指定してください。
 - `<deltaVariableId>` には増減させる値が代入された変数のIDを指定してください。
 - 実行に成功すると、引数で指定された値だけグローバルサーバー変数の値が増加します。
 - 実行に失敗すると、プラグインの設定で指定した変数に「エラーメッセージ」が代入されます。
    

### 「値を代入」トリガーの実行
プラグインコマンドで次のいずれかのように指定します（どちらでも動作は同じです）。
```
TriggerCall <triggerId> <valueVariableId>
```
あるいは
```
トリガー発動 <triggerId> <valueVariableId>
```
    
 - `<triggerId>`には発動したいトリガーのIDを半角数字で指定してください。
 - `<valueVariableId>` には代入させる値が代入された変数のIDを指定してください。
 - 実行に成功すると、引数で指定された値だけグローバルサーバー変数の値が変化します。
 - 実行に失敗すると、プラグインの設定で指定した変数に「エラーメッセージ」が代入されます。
    
### 「固定値を増減」（名前指定型）トリガーの実行
プラグインコマンドで次のいずれかのように指定します（どちらでも動作は同じです）。
```
TriggerCallByName <globalServerVariableName}> <triggerName>
```
あるいは
```
名前でトリガー発動 <globalServerVariableName}> <triggerName>
```
    
 - 実行に成功すると、[グローバルサーバー変数設定画面](/global-server-variable/setting)で指定された値だけグローバルサーバー変数の値が増加します。
 - 実行に失敗すると、プラグインの設定で指定した変数に「エラーメッセージ」が代入されます。
    
![トリガー発動](/images/global-server-variable/plugin_command_trigger_byname.jpg)
    

### 「最大値・最小値の範囲で増減」（名前指定型）トリガーの実行
プラグインコマンドで次のいずれかのように指定します（どちらでも動作は同じです）。
```
TriggerCallByName <globalServerVariableName> <triggerName> <deltaVariableId>
```
あるいは
```
名前でトリガー発動 <globalServerVariableName> <triggerName> <deltaVariableId>
```
    
 - `<globalServerVariableName>`には発動したいトリガーに紐づいた変数の名前を指定してください。
 - `<triggerName>`には発動したいトリガーの名前を指定してください。
 - `<deltaVariableId>` には増減させる値が代入された変数のIDを指定してください。
 - 実行に成功すると、引数で指定された値だけグローバルサーバー変数の値が増加します。
 - 実行に失敗すると、プラグインの設定で指定した変数に「エラーメッセージ」が代入されます。
    

### 「値を代入」（名前指定型）トリガーの実行
プラグインコマンドで次のいずれかのように指定します（どちらでも動作は同じです）。
```
TriggerCallByName <globalServerVariableName> <triggerName> <valueVariableId>
```
あるいは
```
名前でトリガー発動 <globalServerVariableName> <triggerName> <valueVariableId>
```
    
 - `<globalServerVariableName>`には発動したいトリガーに紐づいた変数の名前を指定してください。
 - `<triggerName>`には発動したいトリガーの名前を指定してください。 
 - `<valueVariableId>` には代入させる値が代入された変数のIDを指定してください。
 - 実行に成功すると、引数で指定された値だけグローバルサーバー変数の値が変化します。
 - 実行に失敗すると、プラグインの設定で指定した変数に「エラーメッセージ」が代入されます。
    
## 関連ドキュメント

ドキュメント|リンク|備考
:---|:---|:---
機能解説|[グローバルサーバー変数](/global-server-variable)|機能概要や全般的な解説
APIでの利用方法|[グローバルサーバー変数](/apis/global-server-variable)|他ゲームエンジンやより高度な利用を必要とするユーザー向け
    
## 最終更新日
 - 2020/02/28
