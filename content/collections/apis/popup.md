---
title: 外部リンクを表示する
slug: popup
description: RPGアツマールで外部リンクを設置したい場合は、専用のダイアログを開いてダイアログ内で外部リンクを表示します。
order: 20
---

## 概要
RPGアツマールで外部リンクを設置したい場合に、専用のダイアログを開いてダイアログ内で外部リンクを表示する機能です。

### なにができるのか

![外部リンクの表示](/images/popup_sample.png)

機能を実行した際に、スクリーンショットのようなウィンドウを開き、プレイヤーに指定したURLへの遷移を促すことができます。

特に、RPGアツマールのゲームページのURLを指定した際は、以下のようにリッチに表示されます。

![ゲームの表示](/images/popup_game_sample.png)

#### 利用想定／利用例

以下のような利用を想定しています。

- ゲーム内からご自身のサイトへの誘導
- 他の関連するゲームページへの誘導

RPGアツマール公式では例えば次のゲームでこの機能を利用しています。

- [タタの魔法使い](https://game.nicovideo.jp/atsumaru/games/gm7601)
  - タイトル画面での「公式サイトへ」ボタン

## 利用方法

外部リンクは次の方法で利用できます。


方法 | 場所
:---|:---
公式プラグイン | [Github](https://github.com/atsumaru/mv-plugins/blob/master/plugins/AtsumaruOpenLink.js)
ゲームAPI | 以下の「APIでの利用方法」を参考に、直接APIを呼び出してください

### 公式プラグインの利用方法

公式プラグインで外部リンクを設置するには以下のようにします。

1. プロジェクトのプラグインフォルダに [AtsumaruOpenLink.js](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruOpenLink.js) を右クリックし「保存」して設置
1. プラグインコマンドでリンク先の設定

#### 外部リンクダイアログを開く

![外部リンク表示プラグイン利用例](/images/open-link_plugin_sample.png)

プラグインコマンドは次のいずれかのように指定します。（どちらでも動作は同じです）

```
OpenLink https://game.nicovideo.jp/atsumaru
リンク表示 https://game.nicovideo.jp/atsumaru
```

#### 作者からの紹介コメント付きで、外部リンクダイアログを開く

以下のように、作者からリンク先がどのような内容であるかを紹介するコメントを追加した上でリンクを表示することもできます。

![コメントつき外部リンク](/images/popup_comment_sample.png)

プラグインコマンドは次のいずれかのように指定します。（どちらでも動作は同じです）

```
OpenLink https://game.nicovideo.jp/atsumaru こちらのサービスで、ゲームを遊んじゃおう！
リンク表示 https://game.nicovideo.jp/atsumaru こちらのサービスで、ゲームを遊んじゃおう！
```

※指定するコメントは、画面に収まらない場合はカットされることがあります。小さい画面でもカットされずに表示するためには、全角24文字までに抑えてください。

### APIでの利用方法

#### 外部リンク表示API
メソッド | `window.RPGAtsumaru.popups.openLink(url: string, comment?: string)`
:---|:---
説明 | `url` にリンク先を表す特定の文字列を渡すことにより、外部リンクを記載したダイアログを表示
引数 | <ul><li>`url` : 共有セーブを取得したいユーザーのニコニコユーザーIDの配列を自然数で、最大100件まで指定します。</li><li>`comment` : 作者からリンク先がどのような内容であるかを紹介するコメントを追加できます。未指定の場合は、表示されません。</li></ul>
戻り値 | `Promise<void>`
リリース日 | 2018/01/18
更新日 | 2019/06/27
