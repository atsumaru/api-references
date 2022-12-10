---
title: 共有セーブ
slug: plugins/shared-save
description: 「共有セーブ」のプラグインでの利用方法
order: 10
navi: プラグインでの利用方法
---
    
## 目次
 - [共有セーブの保存](#共有セーブの保存)
 - [共有セーブの取得](#共有セーブの取得)
    
## プラグインの利用方法
プラグインで共有セーブを利用するには以下のようにします。
1. プラグインのダウンロード：[AtsumaruSharedSave.js](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruSharedSave.js) を右クリックで「名前をつけて保存」してダウンロード
1. プロジェクトに追加：ダウンロードしたファイルをプロジェクトのプラグインフォルダに設置
1. 有効化：プロジェクトのプラグイン設定でプラグインをONにする
    
## 機能の呼び出し
    
### 共有セーブの保存
プラグインコマンドで次のいずれかのように指定します（どちらでも動作は同じです）。
```
SetSharedSave
```
あるいは
```
共有セーブ保存
```
    
プラグイン設定画面の `共有セーブの保存範囲(開始)` と `共有セーブの保存範囲(終了)` に設定した範囲のツクール変数が、自分の共有セーブデータとして保存されます。
    
### 共有セーブの取得
プラグインコマンドで次のいずれかのように指定します（どちらでも動作は同じです）。
```
GetSharedSave <userIdVariableId> <startVariableId>
```
あるいは
```
共有セーブ取得 <userIdVariableId> <startVariableId>
```
`<userIdVariableId>` で指定した変数からユーザーIDを読み取り、そのユーザーの共有セーブを `<startVariableId>` を先頭にして代入します。
    
#### 例：変数1番からユーザーIDを読み取り、そのユーザーの共有セーブを変数201番以降に展開（たとえば共有セーブの保存範囲が101-150で計50個の場合、201-250に代入）
```
共有セーブ取得 1 201
```
    
ただし、読み取る相手が[プレイヤー間通信の有効化](/common/interplayer)をしていないと、共有セーブを取得できないことにご注意ください。
    
## 関連ドキュメント
    
ドキュメント|リンク|備考
:---|:---|:---
機能解説|[共有セーブ](/shared-save)|機能概要や全般的な解説
APIでの利用方法|[共有セーブ](/apis/shared-save)|他ゲームエンジンやより高度な利用を必要とするユーザー向け
    
## 最終更新日
 - 2020/02/28