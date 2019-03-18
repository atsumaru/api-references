---
title: セーブを保存する
slug: storage
description: セーブ機能を利用するにはStorageAPIを利用してください。
order: 12
---

## 概要

StorageAPIを使うと、ゲーム内のデータをセーブしたり、セーブしたデータを取得することができます。

保存したセーブデータはユーザーのログイン状態や通信状況などによって、一時セーブまたはサーバーセーブとして保存されます（詳しくは[こちら](https://qa.nicovideo.jp/faq/show/6584)）が、ゲーム作者側はそれを意識することなくセーブデータを読み書きできます。

セーブに成功した場合、以下のようなポップアップが表示されます。

![セーブ](/images/storage.png)

### RPGアツマールの localStorage の扱いについて
RPGアツマール上でlocalStorageを使用した場合は、内部的にはこのStorageAPIが代わりに動作します。

### 利用想定／利用例
前節の通り、RPGツクールMVを含む `localStorage` を利用するゲームエンジンは、自動的にこの機能を利用していることになります。例えば以下のゲームがこの機能を利用してセーブを実行しています。
- [【防衛ゲーム】タタの魔法使い【異世界サバイバル】](https://game.nicovideo.jp/atsumaru/games/gm7601)

## 詳細
Stringを保存するシンプルなKVS（Key-Valueストア)になっています。セーブはゲームID(gm123等)ごとに独立しています。
セーブデータの保存領域にはニコニコユーザーIDごとに上限があります。1kbで1ブロックとして、90ブロックまで保存ができます。セーブデータは保存時に自動的に圧縮され、圧縮後のファイルサイズを見ています。StorageAPIは複数端末からセーブされることを想定しています。

### 保存のkeyについて
`RPG Config`、`RPG Global`、`RPG FileN` (Nは数字) の3種の key は、RPGツクールMVのエンジンに組み込まれている `lzstring.js` によって、圧縮されたデータを読み書きするように設計されています。そのため、RPGツクールMV以外のゲームがこの key を利用すると、データが正しく処理されず、破損する可能性があります。RPGツクールMV以外ではこれらの key にセーブしないようにご注意ください。

またRPGツクールMVは `RPG Config` に、デバイスごとの共通設定項目（音量設定や常時ダッシュ設定など）を保存するように設計されています。
そのため、この key だけはすべてのゲームで共通のデータとなります。

推奨のkeyは `system` と `dataN`(Nは数字) と `Atsumaru Shared` です。この3種の key はRPGアツマール側のセーブ管理画面で、それぞれ「システムファイル」「ファイル N」「共有セーブ」として扱われます。これら以外はゲーム上で「その他」と表示されます。また、共有セーブについては他のユーザーからもデータを読み取ることができる特徴があります。詳しくは[共有セーブ](/shared-save)を参照してください。

## 利用方法

セーブ機能は次の方法で利用できます。

方法 | 場所
:---|:---
localStorageを使う | 内部的に、以下のAPIに差し替えられます
ゲームAPI | 以下の「APIでの利用方法」を参考に、直接APIを呼び出してください

### APIでの利用方法
APIを利用したセーブ機能の利用です。

#### セーブ全件取得API
メソッド | `window.RPGAtsumaru.storage.getItems()`
:---|:---
説明 | 保存されているセーブデータを全件取得します。
引数 | なし
戻り値 | `Promise<{key: string, value: string}[]>`
リリース日 | 2016/12/27
更新日 | 2019/03/18

#### セーブ保存API
メソッド | `window.RPGAtsumaru.storage.setItems(items: {key: string, value: string}[])`
:---|:---
説明 | 引数に指定したitemsに対応するセーブデータを保存します。
引数 | 更新する対象のセーブ情報。型は {key: string, value: string}[]
戻り値 | `Promise<void>`
リリース日 | 2016/12/27
更新日 | 2019/03/18

##### 利用例

```js
window.RPGAtsumaru.storage.setItems([
  { key: "キー名", value: JSON.stringify(someObject) }
]);
```

#### セーブ削除API
メソッド | `window.RPGAtsumaru.storage.removeItem(key: string)`
:---|:---
説明 | 指定したセーブデータを削除します。
引数 | 削除対象のセーブのキー。型はstring
戻り値 | `Promise<void>`
リリース日 | 2016/12/27
更新日 | 2019/03/18
