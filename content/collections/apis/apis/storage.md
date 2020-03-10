---
title: サーバーセーブ
slug: apis/storage
description: 「サーバーセーブ」のAPIでの利用方法
order: 5
navi: APIでの利用方法
---
    
## 目次
 - [セーブ全件取得API](#セーブ全件取得API)
 - [セーブ保存API](#セーブ保存API)
 - [セーブ削除API](#セーブ削除API)
    
## APIでの利用方法
### セーブ全件取得API
    
メソッド |`window.RPGAtsumaru.storage.getItems()`
:---|:---
説明|保存されているセーブデータを全件取得します。
引数|なし
戻り値|`Promise<{key: string, value: string}[]>`
    
### セーブ保存API
    
メソッド |`window.RPGAtsumaru.storage.setItems(items: {key: string, value: string}[])`
:---|:---
説明|引数に指定したitemsに対応するセーブデータを保存します。
引数|更新する対象のセーブ情報。型は {key: string, value: string}[]
戻り値|`Promise<void>`
    
#### 利用例
```js
window.RPGAtsumaru.storage.setItems([
    { key: "キー名", value: JSON.stringify(someObject) }
]);
```
    
### セーブ削除API
    
メソッド |`window.RPGAtsumaru.storage.removeItem(key: string)`
:---|:---
説明|指定したセーブデータを削除します。
引数|削除対象のセーブのキー。型はstring
戻り値|`Promise<void>`
    
## 関連ドキュメント

ドキュメント|リンク|備考
:---|:---|:---
機能解説|[サーバーセーブ](/storage)|機能概要や全般的な解説
    
※プラグインはありません
    
## 最終更新日
 - 2020/02/28
