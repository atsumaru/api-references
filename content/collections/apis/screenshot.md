---
title: スクリーンショットをシェアする
slug: screenshot
description: プレイ中のゲームのスクリーンショットを撮影し、Twitterに投稿することもできる「スクリーンショットダイアログ」の表示を行います。
order: 24
experimental: true
---

## 概要
- RPGアツマールで遊んでいるゲームのスクリーンショットを撮影してTwitterにシェアするためのダイアログを起動できる機能です。
  - このダイアログは、アツマールのプレイヤーでスクリーンショットボタン ( ![スクリーンショットボタン](/images/screenshot_button.png) ) を押したときに表示されるものと同じものです。
- この機能を実行したタイミングで、RPGツクールMVの機能でスクリーンショットが撮影され、シェア時の文章などを入力できるダイアログが表示されます。
- RPGツクールMV以外のゲームでスクリーンショットを撮影する機能ではありませんので、ご注意ください。


### どんなことができるの？

![スクリーンショット](/images/screenshot_1.png)

現在のゲーム画面をスクリーンショットとして撮影し、それをTwitterに投稿するためのダイアログを開きます。ログインしているユーザーがTwitter連携し投稿ボタン ( ![投稿ボタン](/images/screenshot_tweet_button.png)  ) を押すことで、ユーザーが連携しているTwitterアカウントにゲームのスクリーンショットと文章・リンクのシェアを行うことができます。この機能は、以下のような使い方を想定しています。

- 高得点達成画面のシェア
- 友達同士でのゲームの紹介


### RPGアツマール公式での利用例

RPGアツマール公式では例えば次のゲームでこの機能を利用しています。

- [邪神ちゃんドロップキック～和気あいあい殺伐バトル～](https://game.nicovideo.jp/atsumaru/games/gm6253)
  - スコア一覧の『ツイートする』ボタン



## 設置方法

スクリーンショットシェアを利用するには下記2つの方法が利用できます。

方法 | 場所
:---|:---
アツマール公式プラグイン | [Github](https://github.com/atsumaru/mv-plugins/blob/master/plugins/AtsumaruScreenshotExperimental.js)
アツマール API | -

## 公式プラグインの利用方法

公式プラグインで外部リンクを設置するには以下のようにします。

1. プロジェクトのプラグインフォルダに [AtsumaruScreenshotExperimental.js](https://github.com/atsumaru/mv-plugins/blob/master/plugins/AtsumaruScreenshotExperimental.js) を右クリックし「保存」して設置
1. イベントに `AtsumaruScreenshotExperimental` プラグインを設定

![スクリーンショットプラグイン利用例](/images/screenshot_plugin_sample.png)


プラグインコマンドは次のように指定します。

```
DisplayScreenshotModal
```

## APIを利用した外部リンク設置方法

### スクリーンショットAPI
メソッド | window.RPGAtsumaru.experimental.screenshot.displayModal();
:---|:---
説明 | このメソッドを呼び出した時点でのスクリーンショットを撮影し、Twitterに投稿するダイアログを表示します
引数 | なし
戻り値 | Promise[void]
リリース日 | 2018/10/01
更新日 | 2018/10/01
