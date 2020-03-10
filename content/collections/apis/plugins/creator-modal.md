---
title: 作者情報表示
slug: plugins/creator-modal
description: 「作者情報表示」のプラグインでの利用方法
order: 6
navi: プラグインでの利用方法
---
    
## プラグインの利用方法
プラグインで作者情報表示を利用するには以下のようにします。
1. プラグインのダウンロード：[AtsumaruCreatorInformationModal.js](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruCreatorInformationModal.js) を右クリックで「名前をつけて保存」してダウンロード
1. プロジェクトに追加：ダウンロードしたファイルをプロジェクトのプラグインフォルダに設置
1. 有効化：プロジェクトのプラグイン設定でプラグインをONにする
    
## 機能の呼び出し
    
![作者情報表示プラグイン利用例](/images/creator-modal_plugin_sample.png)
    
プラグインコマンドで次のいずれかのように指定します（どちらでも動作は同じです）。
```
DisplayCreatorInformationModal <niconicoUserId>
```
あるいは
```
作者情報ダイアログ表示 <niconicoUserId>
```
`<niconicoUserId>` 部分は省略可能で、省略した場合はプラグインを設置しているゲームの作者自信の情報が表示されます。自分以外の作者情報を表示したい場合は、`<niconicoUserId>` にniconicoユーザーIDを指定することも可能です。
    
#### 例：現在のゲームの作者情報(=自分の作者情報)を表示する
```
DisplayCreatorInformationModal
```
あるいは
```
作者情報ダイアログ表示
```
    
#### 例：niconicoユーザーID 64341294 のユーザーの作者情報を表示する
```
DisplayCreatorInformationModal 64341294
```
あるいは
```
作者情報ダイアログ表示 64341294
```
    
## 関連ドキュメント
    
ドキュメント|リンク|備考
:---|:---|:---
機能解説|[作者情報表示](/creator-modal)|機能概要や全般的な解説
APIでの利用方法|[作者情報表示](/apis/creator-modal)|他ゲームエンジンやより高度な利用を必要とするユーザー向け
    
## 最終更新日
 - 2020/02/28
