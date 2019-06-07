---
title: スクリーンショットをシェアする
slug: screenshot
description: プレイ中のゲームのスクリーンショットを撮影し、Twitterに投稿することもできる「スクリーンショットモーダル」の表示を行います。
order: 24
experimental: true
---

## 概要
RPGアツマールで遊んでいるゲームのスクリーンショットを撮影してTwitterにシェアするためのモーダルを起動できる機能です。  
このモーダルは、RPGアツマールのプレイヤーでスクリーンショットボタン ( ![スクリーンショットボタン](/images/screenshot_button.png) ) を押したときに表示されるものと同じものです。  
この機能を実行したタイミングで、RPGツクールMVの機能でスクリーンショットが撮影され、シェア時の文章（この内容もある程度ゲーム側から変更できます）などを入力できるモーダルが表示されます。
また、RPGツクールMV以外のツールの場合は、シェアする画像が用意できれば、スクリーンショットボタンを押したときの挙動を変更するAPI（スクリーンショット画像差し替えAPI）を利用して、スクリーンショットのシェアに対応することができます。


### なにができるのか
現在のゲーム画面をスクリーンショットとして撮影し、それをTwitterに投稿するためのモーダルを開きます。ログインしているユーザーがTwitter連携し投稿ボタン ( ![投稿ボタン](/images/screenshot_tweet_button.png)  ) を押すことで、ユーザーが連携しているTwitterアカウントにゲームのスクリーンショットと文章・リンクのシェアを行うことができます。  
また、スクリーンショット画像差し替えAPIを使えば、RPGツクールMV以外でもTwitterに画像をシェアすることができます。

![スクリーンショット](/images/screenshot_1.png)

さらに、公式プラグインの機能またはツイート内容差し替えAPIによりモーダル下部のツイート内容をある程度ゲーム側から変更できます。

#### 利用想定／利用例

この機能は、以下のような使い方を想定しています。

- 高得点達成画面のシェア
- 友達同士でのゲームの紹介

RPGアツマール公式では例えば次のゲームでこの機能を利用しています。

- [邪神ちゃんドロップキック～和気あいあい殺伐バトル～](https://game.nicovideo.jp/atsumaru/games/gm6253)
  - スコア一覧の『ツイートする』ボタン

また、次のサンプルゲームでは後述のツイート文章の変更機能を利用し、クエリパラメータに福笑いの状態を設定しています。
- [【ゲームAPIサンプル】福笑いリレー](https://game.nicovideo.jp/atsumaru/games/gm11139)
  - [プロジェクトファイルダウンロードはこちら](/download/sample-projects#Tweetquery)

## 利用方法

スクリーンショットのシェアは次の方法で利用できます。

方法 | 場所
:---|:---
RPGアツマール公式プラグイン | [Github](https://github.com/atsumaru/mv-plugins/blob/master/plugins/AtsumaruScreenshotExperimental.js)
ゲームAPI | 以下の「APIでの利用方法」を参考に、直接APIを呼び出してください

### 公式プラグインの利用方法

公式プラグインで外部リンクを設置するには以下のようにします。

1. プロジェクトのプラグインフォルダに [AtsumaruScreenshotExperimental.js](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruScreenshotExperimental.js) を右クリックし「保存」して設置
1. プロジェクトのプラグイン設定で `AtsumaruScreenshotExperimental` プラグインをONにする。

#### スクリーンショット撮影＆モーダル表示

![スクリーンショットプラグイン利用例](/images/screenshot_plugin_sample.png)

プラグインコマンドは次のいずれかのように指定します。（どちらでも動作は同じです）

```
DisplayScreenshotModal
スクリーンショットモーダル表示
```

#### ツイート文章の変更

1. プラグイン設定画面でプラグインパラメータ「ツイート文章」に変数を設定
1. その変数に文章を代入すると、ツイート内容の文章部分が書き換わります

##### 例

「ゲーム情報編集」の「スクショツイート文言設定」が `占いゲーム` で、ゲームIDが `gm1234` の場合、そのままモーダルを開くと以下のツイート内容になります。

`占いゲーム #gm1234 #RPGアツマール https://game.nicovideo.jp/atsumaru/games/gm1234?link=share_twitter_sc`

そこでプラグインパラメータ「ツイート文章」に変数 `0001 ツイート文章` を設定し、この変数に文章を代入してみます。変数に文章を代入するには、「変数の操作」で「スクリプト」を選び、`'文章'` のように `'` で囲む必要があります。下の例のように `'` が含まれていることを確認してください。

`◆変数の操作：#0001 ツイート文章 = 'このユーザーの運勢は【大吉】でした。あなたも占ってみませんか？ #占い'`

上のイベントコマンドを実行してからモーダルを開くと、以下のようなツイート内容が表示されるようになります。

`このユーザーの運勢は【大吉】でした。あなたも占ってみませんか？ #占い #gm1234 #RPGアツマール https://game.nicovideo.jp/atsumaru/games/gm1234?link=share_twitter_sc`

##### 備考

- ハッシュタグ `#(ゲームID) #RPGアツマール` とゲームURLが自動的に必ず付加されます。
- 上の例の `#占い` のように `#` を用いた文章を含めれば、独自にハッシュタグを付加することができます。
- 変数に0を代入すると、最初の文章（上の例では `占いゲーム` ）に戻ります。
- あくまで最初にツイート欄に表示される内容なので、ここからさらにユーザーの手によりツイート内容を自由に編集できます。

#### ツイート内容のゲームURLにクエリを付加する

1. プラグイン設定画面でプラグインパラメータ「param1」～「param9」に必要な数だけ変数を設定
1. その変数に値を代入すると、ツイート内容のゲームURLにクエリが付加されます

##### 例

「ゲーム情報編集」の「スクショツイート文言設定」が `占いゲーム` で、ゲームIDが `gm1234` の場合、そのままモーダルを開くと以下のツイート内容になります。

`占いゲーム #gm1234 #RPGアツマール https://game.nicovideo.jp/atsumaru/games/gm1234?link=share_twitter_sc`

そこでプラグインパラメータ「param1」に変数 `0011 うんのよさ` を設定し、この変数に値を代入してみます。

`◆変数の操作：#0011 うんのよさ = 100`

上のイベントコマンドを実行してからモーダルを開くと、以下のようなツイート内容が表示されるようになります。

`占いゲーム #gm1234 #RPGアツマール https://game.nicovideo.jp/atsumaru/games/gm1234?link=share_twitter_sc&amp;param1=100`

ツイート内容のゲームURLの最後に `param1=100` という記述が追加されます。つまり、このツイートを見た人がこのURLからアクセスしてくると `param1=100` というデータも一緒に渡ってきます。

そこで[クエリ情報の取得](/copy-query)プラグインを用いて、ゲーム起動時にこの `param1` の情報を取得してみます。

`◆プラグインコマンド：CopyQuery 21`

これで変数 `0021 ツイート主のうんのよさ` に `100` が代入されます。ここから例えば、占いをしてツイート主とツイートを見てアクセスした人のどちらが運が良かったか比較したりできます。

##### 備考

- 変数に0を代入すると、そのparamは付加されません。

### APIでの利用方法
APIを利用したスクリーンショットの利用方法

#### スクリーンショットAPI
メソッド | `window.RPGAtsumaru.experimental.screenshot.displayModal()`
:---|:---
説明 | このメソッドを呼び出した時点でのスクリーンショットを撮影し、Twitterに投稿するモーダルを表示します
引数 | なし
戻り値 | `Promise<void>`
リリース日 | 2018/10/01
更新日 | 2018/10/01

#### スクリーンショット画像差し替えAPI
メソッド | `window.RPGAtsumaru.experimental.screenshot.setScreenshotHandler(handler: () => Promise<string>)`
:---|:---
説明 | スクリーンショットの内容を差し替えるハンドラを登録します。複数回登録した場合は最後の関数だけ有効になります
引数 | `() => Promise<string>` 型の関数。戻り値の文字列はjpegまたはpng形式かつ `data-url` な画像文字列
戻り値 | `void`
リリース日 | 2018/11/22
更新日 | 2018/11/22

#### ツイート内容差し替えAPI
メソッド | `window.RPGAtsumaru.experimental.screenshot.setTweetMessage(tweetSettings: TweetSettings \| null)`
:---|:---
説明 | スクリーンショットAPIやカメラボタンでモーダルを表示したときに、最初に表示されているツイート内容を差し替えます
引数 | `tweetSettings` : 差し替えるツイート内容を指定します。
戻り値 | `void`
リリース日 | 2019/05/31
更新日 | 2019/05/31

##### 引数の型 TweetSettings について
引数に指定できる `TweetSettings` は以下のような型です。

```js
interface TweetSettings {
    tweetText?: string;
    param1?: string;
    param2?: string;
    param3?: string;
    param4?: string;
    param5?: string;
    param6?: string;
    param7?: string;
    param8?: string;
    param9?: string;
}
```

プロパティの内容は次のようになっています。

プロパティ名 | 型 | 内容
:---|:---|:---
tweetText | `string` | ツイートの内容です。指定すると別途「ゲーム情報編集」の「スクショツイート文言設定」で設定した値（初期値）よりも本APIでの設定値が優先されます。指定しないと、初期値に戻ります。
param1 - param9 | `string` | ゲームURLにクエリを付加します。[クエリ情報の取得API](/copy-query)と合わせてURLからデータを取り込むことができます。

##### 引数の例

「ゲーム情報編集」の「スクショツイート文言設定」が `占いゲーム` で、ゲームIDが `gm1234` の場合、そのままモーダルを開くと以下のツイート内容になります。

`占いゲーム #gm1234 #RPGアツマール https://game.nicovideo.jp/atsumaru/games/gm1234?link=share_twitter_sc`

そこで次のようなJavaScriptを実行してみます。

```js
window.RPGAtsumaru.experimental.screenshot.setTweetMessage({
    tweetText: 'このユーザーの運勢は【大吉】でした。あなたも占ってみませんか？ #占い',
    param1: 'superlucky',
    param5: 'twitter'
});
```

すると、以下のように先頭の文章が `tweetText` の内容となり、ゲームURLに `param1 - param9` のうち指定したクエリが付加されます。

`このユーザーの運勢は【大吉】でした。あなたも占ってみませんか？ #占い #gm1234 #RPGアツマール https://game.nicovideo.jp/atsumaru/games/gm1234?link=share_twitter_sc&amp;param1=superlucky&amp;param5=twitter`

##### 備考

- ハッシュタグ `#(ゲームID) #RPGアツマール` とゲームURLが自動的に必ず付加されます。
- 上の例の `#占い` のように `#` を用いた文章を含めれば、独自にハッシュタグを付加することができます。
- 引数にnullを指定すると最初の文章（上の例では `占いゲーム` ）に戻り、クエリもすべて外されます。
- あくまで最初にツイート欄に表示される内容なので、ここからさらにユーザーの手によりツイート内容を自由に編集できます。
