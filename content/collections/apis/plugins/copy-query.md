---
title: クエリ情報取得
slug: plugins/copy-query
description: 「クエリ情報取得」のプラグインでの利用方法
order: 5
navi: プラグインでの利用方法
experimental: true
---
    
## プラグインの利用方法
プラグインでクエリ情報取得を利用するには以下のようにします。
1. プラグインのダウンロード：[AtsumaruQueryExperimental.js](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruQueryExperimental.js) を右クリックで「名前をつけて保存」してダウンロード
1. プロジェクトに追加：ダウンロードしたファイルをプロジェクトのプラグインフォルダに設置
1. 有効化：プロジェクトのプラグイン設定でプラグインをONにする
    
## 機能の呼び出し
    
### クエリパラメータを取得する
![クエリ情報取得プラグイン利用例](/images/copyquery_plugin_sample.png)
    
プラグインコマンドで次のいずれかのように指定します（どちらでも動作は同じです）。
```
CopyQuery <id1> <id2> ...
```
あるいは
```
クエリ取得 <id1> <id2> ...
```
それぞれの `<id>` には任意の変数idを指定できます。指定した順番に、 `param1` から `param9` までのクエリパラメータの値が順番にコピーされます。
    
#### 例：変数10番にparam1の値を、変数11番にparam2の値を、変数12番にparam3の値をコピーする
```
CopyQuery 10 11 12
```
あるいは
```
クエリ取得 10 11 12
```
    
## 関連ドキュメント
    
ドキュメント|リンク|備考
:---|:---|:---
機能解説|[クエリ情報取得](/copy-query)|機能概要や全般的な解説
APIでの利用方法|[クエリ情報取得](/apis/copy-query)|他ゲームエンジンやより高度な利用を必要とするユーザー向け
    
## 最終更新日
 - 2020/02/28