---
title: 外部リンクを表示する
slug: popup
description: RPGアツマールで外部リンクを設置したい場合は、専用のダイアログを開いてダイアログ内で外部リンクを表示します。
order: 20
---

## 概要
アツマール上でゲームを投稿している作者の情報を表示する機能です。ゲームを作成しているご自身の情報または、IDで指定した任意の作者の情報を表示できます。
作者情報にはアツマール設定ページで設定できる、プロフィール、Twitter、サイトURLのほか、その作者の関連ゲームも含まれます。

### どんなことができるの？

![外部リンクの表示](/images/popup_sample.png)

機能を実行した際に、スクリーンショットのようなウィンドウを開き、プレイヤーに指定したURLへの遷移を促すことができます。以下のような利用を想定しています。

- ゲーム内からご自身のサイトへの誘導
- 他の関連するゲームページへの誘導

### アツマール公式での利用例

アツマール公式では例えば次のゲームでこの機能を利用しています。

- [タタの魔法使い](https://game.nicovideo.jp/atsumaru/games/gm7601)
  - タイトル画面での「公式サイトへ」ボタン



## 設置方法

外部リンクを利用するには下記2つの方法が利用できます。

方法 | 場所
:---|:---
アツマール公式プラグイン | [Github](https://github.com/atsumaru/mv-plugins/blob/master/plugins/AtsumaruOpenLink.js)
アツマール API | -

## 公式プラグインの利用方法

公式プラグインで外部リンクを設置するには以下のようにします。

1. プロジェクトのプラグインフォルダに [AtsumaruOpenLink.js](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruOpenLink.js) を右クリックし「保存」して設置
1. イベントに `AtsumaruOpenLink` プラグインを設定
1. プラグインコマンドでリンク先の設定

![外部リンク表示プラグイン利用例](/images/open-link_plugin_sample.png)

<br>

プラグインコマンドは次のいずれかのように指定します。（どちらでも動作は同じです）

```
OpenLink http://example.com/
リンク表示 http://example.com/
```

### プラグインコマンド例

#### https://game.nicovideo.jp/atsumaru を開く
```
OpenLink https://game.nicovideo.jp/atsumaru
リンク表示 https://game.nicovideo.jp/atsumaru
```




## APIを利用した外部リンク設置方法

### 外部リンク表示API
メソッド | window.RPGAtsumaru.popups.openLink(openLink_url)
:---|:---
説明 | 引数のopenLink_urlにリンク先を表す特定の文字列を渡すことにより、外部リンクを記載したダイアログを表示するメソッド。<br>引数に渡す文字列の形式は `OpenLink http://example.com/` (url部分は任意のURLに置き換え)
引数 | リンクの値を表す文字列
戻り値 | Promise[void]
リリース日 | 2018/01/18
更新日 | 2018/08/30
