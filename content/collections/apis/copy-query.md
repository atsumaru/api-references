---
title: クエリ情報の取得
slug: copy-query
description: RPGアツマールでURLのquery情報を取得するにはこの機能を利用します。
order: 21
experimental: true
---

## 概要
ブラウザのロケーションバーに入力されたクエリパラメータを取得することができる機能です。
ただし、すべてのクエリパラメータが取得可能というわけではなく、あらかじめRPGアツマールで予約された、`param1` ~ `param9` までの固定パラメータのみ値を取得できます。

### なにができるのか

![クエリ情報の取得](/images/copyquery_example.png)

スクリーンショットのように、ブラウザのロケーションバーに入力されたクエリパラメータを参照できます。

#### 利用想定／利用例
以下のような利用を想定しています。

- 秘密のURLからゲームを起動したときだけプレイできる隠し要素
- 他のゲームから [外部リンク](/popup) 経由で開いてもらうことによる、ゲーム間連携
- [スクリーンショット撮影](/screenshot)時にクエリを付加しておき、Twitterからアクセスした時に特殊動作

## 利用方法

クエリ情報の取得は次の方法で利用できます。

方法 | 場所
:---|:---
公式プラグイン | [Github](https://github.com/atsumaru/mv-plugins/blob/master/plugins/AtsumaruQueryExperimental.js)
ゲームAPI | 以下の「APIでの利用方法」を参考に、直接APIを呼び出してください

### 公式プラグインの利用方法
公式プラグインでクエリパラメータを取得するには以下のようにします。
1. プロジェクトのプラグインフォルダに [AtsumaruQueryExperimental.js](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruQueryExperimental.js) を右クリックし「保存」して設置
1. イベントに `AtsumaruQueryExperimental` プラグインを設定
1. プラグインコマンドでクエリパラメータを取得

![クエリ情報取得プラグイン利用例](/images/copyquery_plugin_sample.png)

プラグインコマンドは次のいずれかのように指定します。（どちらでも動作は同じです）

```
CopyQuery {id1} {id2} ...
クエリ取得 {id1} {id2} ...
```

それぞれの `{id}` には任意の変数idを指定できます。
指定した順番に、 `param1` から `param9` までのクエリパラメータの値が順番にコピーされます。


#### プラグインコマンド例

##### 変数10番にparam1の値を、変数11番にparam2の値を、変数12番にparam3の値をコピーする
```
CopyQuery 10 11 12
クエリ取得 10 11 12
```

### APIでの利用方法
APIを利用したquery情報取得方法

####  query情報取得API
メソッド | `window.RPGAtsumaru.experimental.query[key]`
:---|:---
説明 | 引数のkeyに指定した文字列のquery情報を取得します。
引数 | query名を表す文字列
戻り値 | query名に指定したqueryの値
リリース日 | 2018/01/18
更新日 | 2018/01/18
