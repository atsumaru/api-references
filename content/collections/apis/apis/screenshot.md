---
title: スクリーンショットのシェア
slug: apis/screenshot
description: 「スクリーンショットのシェア」のAPIでの利用方法
order: 4
navi: APIでの利用方法
---
    
## 目次
 - [スクリーンショットAPI](#スクリーンショットAPI)
 - [スクリーンショット画像差し替えAPI](#スクリーンショット画像差し替えAPI)
 - [ツイート内容差し替えAPI](#ツイート内容差し替えAPI)
    
## APIでの利用方法
### スクリーンショットAPI
    
メソッド |`window.RPGAtsumaru.screenshot.displayModal()`
:---|:---
説明|このメソッドを呼び出した時点でのスクリーンショットを撮影し、Twitterに投稿するモーダルを表示します
引数|なし
戻り値|`Promise<ScreenshotModalResults>`
    
#### 戻り値の型 ScreenshotModalResults について
戻り値で取得できる `ScreenshotModalResults` は以下のような型です。
```js
interface ScreenshotModalResults {
    tweeted: boolean
}
```
    
プロパティの内容は次のようになっています。
    
プロパティ名|型|内容
:---|:---|:---
tweeted|`boolean`|このAPIで表示したモーダルから実際にツイートしたかどうか
    
#### 戻り値の例
戻り値で取得できる `ScreenshotModalResults` は以下のような型です。
```js
// window.RPGAtsumaru.screenshot.displayModal().then(function(v) { console.log(v) }) を実行
{
    tweeted: true
}
```

### スクリーンショット画像差し替えAPI	
メソッド |`window.RPGAtsumaru.screenshot.setScreenshotHandler(handler: () => Promise<string>)`	
:---|:---	
説明|スクリーンショットの内容を差し替えるハンドラを登録します。複数回登録した場合は最後の関数だけ有効になります	
引数|`() => Promise<string>` 型の関数。戻り値の文字列はjpegまたはpng形式かつ `data-url` な画像文字列	
戻り値|`void`

### ツイート内容差し替えAPI
    
メソッド |`window.RPGAtsumaru.screenshot.setTweetMessage(tweetSettings: TweetSettings \| null)`
:---|:---
説明|スクリーンショットAPIやカメラボタンでモーダルを表示したときに、最初に表示されているツイート内容を差し替えます
引数|`tweetSettings` : 差し替えるツイート内容を指定します。
戻り値|`void`
    
#### 引数の型 TweetSettings について
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
    
プロパティ名|型|内容
:---|:---|:---
tweetText|`string`|ツイートの内容です。指定すると別途「ゲーム情報編集」の「スクショツイート文言設定」で設定した値（初期値）よりも本APIでの設定値が優先されます。指定しないと、初期値に戻ります。
param1 - param9|`string`|ゲームURLにクエリを付加します。[クエリ情報の取得API](/copy-query)と合わせてURLからデータを取り込むことができます。
    
#### 引数の例
「ゲーム情報編集」の「スクショツイート文言設定」が `占いゲーム` で、ゲームIDが `gm1234` の場合、そのままモーダルを開くと以下のツイート内容になります。
>占いゲーム #gm1234 #ゲームアツマール https://game.nicovideo.jp/atsumaru/games/gm1234?link=share_twitter_sc
    
そこで次のようなJavaScriptを実行してみます。
```js
window.RPGAtsumaru.screenshot.setTweetMessage({
    tweetText: 'このユーザーの運勢は【大吉】でした。あなたも占ってみませんか？ #占い',
    param1: 'superlucky',
    param5: 'twitter'
});
```
    
すると、以下のように先頭の文章が `tweetText` の内容となり、ゲームURLに `param1 - param9` のうち指定したクエリが付加されます。
>このユーザーの運勢は【大吉】でした。あなたも占ってみませんか？ #占い #gm1234 #ゲームアツマール https://game.nicovideo.jp/atsumaru/games/gm1234?link=share_twitter_sc&amp;param1=superlucky&amp;param5=twitter
    
#### 備考
 - ハッシュタグ `#(ゲームID) #ゲームアツマール` とゲームURLが自動的に必ず付加されます。
 - 上の例の `#占い` のように `#` を用いた文章を含めれば、独自にハッシュタグを付加することができます。
 - 引数にnullを指定すると最初の文章（上の例では `占いゲーム` ）に戻り、クエリもすべて外されます。
 - あくまで最初にツイート欄に表示される内容なので、ここからさらにユーザーの手によりツイート内容を自由に編集できます。
    
## 関連ドキュメント
    
ドキュメント|リンク|備考
:---|:---|:---
機能解説|[スクリーンショットのシェア](/screenshot)|機能概要や全般的な解説
プラグインでの利用方法|[プラグインでの利用方法](/plugins)|RPGツクールシリーズユーザー向け
    
## 最終更新日
 - 2020/02/28
