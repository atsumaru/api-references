---
title: スクリーンショットをシェアする
slug: screenshot
description: プレイ中のゲームのスクリーンショットを撮影し、Twitterに投稿することもできる「スクリーンショットダイアログ」の表示を行います。
order: 24
experimental: true
---

## 概要
RPGアツマールで遊んでいるゲームのスクリーンショットを撮影してTwitterにシェアするためのダイアログを起動できる機能です。  
このダイアログは、RPGアツマールのプレイヤーでスクリーンショットボタン ( ![スクリーンショットボタン](/images/screenshot_button.png) ) を押したときに表示されるものと同じものです。  
この機能を実行したタイミングで、RPGツクールMVの機能でスクリーンショットが撮影され、シェア時の文章などを入力できるダイアログが表示されます。  
また、RPGツクールMV以外のツールの場合は、シェアする画像が用意できれば、スクリーンショットボタンを押したときの挙動を変更するAPI（スクリーンショット画像差し替えAPI）を利用して、スクリーンショットのシェアに対応することができます。


### なにができるのか
現在のゲーム画面をスクリーンショットとして撮影し、それをTwitterに投稿するためのダイアログを開きます。ログインしているユーザーがTwitter連携し投稿ボタン ( ![投稿ボタン](/images/screenshot_tweet_button.png)  ) を押すことで、ユーザーが連携しているTwitterアカウントにゲームのスクリーンショットと文章・リンクのシェアを行うことができます。  
また、スクリーンショット画像差し替えAPIを使えば、RPGツクールMV以外でもTwitterに画像をシェアすることができます。

![スクリーンショット](/images/screenshot_1.png)


#### 利用想定／利用例

この機能は、以下のような使い方を想定しています。

- 高得点達成画面のシェア
- 友達同士でのゲームの紹介

RPGアツマール公式では例えば次のゲームでこの機能を利用しています。

- [邪神ちゃんドロップキック～和気あいあい殺伐バトル～](https://game.nicovideo.jp/atsumaru/games/gm6253)
  - スコア一覧の『ツイートする』ボタン

## 利用方法

スクリーンショットのシェアは次の方法で利用できます。

方法 | 場所
:---|:---
RPGアツマール公式プラグイン | [Github](https://github.com/atsumaru/mv-plugins/blob/master/plugins/AtsumaruScreenshotExperimental.js)
ゲームAPI | 以下の「APIでの利用方法」を参考に、直接APIを呼び出してください

### 公式プラグインの利用方法

公式プラグインで外部リンクを設置するには以下のようにします。

1. プロジェクトのプラグインフォルダに [AtsumaruScreenshotExperimental.js](https://github.com/atsumaru/mv-plugins/blob/master/plugins/AtsumaruScreenshotExperimental.js) を右クリックし「保存」して設置
1. イベントに `AtsumaruScreenshotExperimental` プラグインを設定

![スクリーンショットプラグイン利用例](/images/screenshot_plugin_sample.png)


プラグインコマンドは次のように指定します。

```
DisplayScreenshotModal
```

### APIでの利用方法
APIを利用したスクリーンショットの利用方法

#### スクリーンショットAPI
メソッド | window.RPGAtsumaru.experimental.screenshot.displayModal();
:---|:---
説明 | このメソッドを呼び出した時点でのスクリーンショットを撮影し、Twitterに投稿するダイアログを表示します
引数 | なし
戻り値 | `Promise<void>`
リリース日 | 2018/10/01
更新日 | 2018/10/01

### スクリーンショット画像差し替えAPI
メソッド | window.RPGAtsumaru.experimental.screenshot.setScreenshotHandler(handler);
:---|:---
説明 | スクリーンショットの内容を差し替えるハンドラを登録します。複数回登録した場合は最後の関数だけ有効になります
引数 | `() => Promise[string]` 型の関数。戻り値の文字列はjpeg形式かつ `data-url` な画像文字列
戻り値 | void
リリース日 | 2018/11/22
更新日 | 2018/11/22
