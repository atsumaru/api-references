---
title: コメント
slug: apis/comment
description: 「コメント」のAPIでの利用方法
order: 6
navi: APIでの利用方法
---
    
## 目次
 - [シーン設定API](#シーン設定API)
 - [シーン切り替えAPI](#シーン切り替えAPI)
 - [コンテキストファクターAPI](#コンテキストファクターAPI)
 - [マイナーコンテキストAPI](#マイナーコンテキストAPI)
 - [コンテキストAPI](#コンテキストAPI)
 - [表示コメント取得API](#表示コメント取得API)
 - [表示コメント取得コールバックAPI](#表示コメント取得コールバックAPI)
 - [入力コメント取得API](#入力コメント取得API)
 - [入力コメント取得コールバックAPI](#入力コメント取得コールバックAPI)
 - [verboseモードAPI](#verboseモードAPI)
 - [シーンコメント取得API](#シーンコメント取得API)
 - [gposモード設定API](#gposモード設定API)
    
## APIでの利用方法
### シーン設定API
    
メソッド |`window.RPGAtsumaru.comment.changeScene(sceneName: string)`
:---|:---
説明|<ul><li>コメントシステムのシーンを設定する。</li><li>シーンが切り替わると、そのシーンのコメント空間に切り替わる。</li><li>ツクールでは基本的にマップID=シーン名となる。</li><li>サーバーアクセスが発生する。（ただし直近5つのsceneはキャッシュされ、再アクセスには発生しない）</li><li>シーン名は64文字までのascii限定。</li></ul><br>※なお、アンダースコア２つで始まるシーン名は特殊用途として予約されています。<br>予約されている中で現在利用可能なシーン名は `__title` と `__gameover` の2つで、 `__title` は内部状態の初期値になっています。
引数|シーン名を表す文字列
戻り値|なし
    
### シーン切り替えAPI
    
メソッド |`window.RPGAtsumaru.comment.resetAndChangeScene(sceneName: string)`
:---|:---
説明|<ul><li>changeSceneと違い、context(contextfactorとminorcontext)による内部状態をリセットしつつシーンを切り替える</li><li>サーバーアクセスが発生する。（ただし直近5つのsceneはキャッシュされ、再アクセスには発生しない）</li><li>ツクール製ゲームではタイトルとゲームオーバーで全員同じコメントが流れる機能のために使用しています。</li></ul>
引数|シーン名を表す文字列
戻り値|なし
    
### コンテキストファクターAPI
    
メソッド |`window.RPGAtsumaru.comment.pushContextFactor(factor: string)`
:---|:---
説明|<ul><li>コメントシステムにContextFactorとなる値(ツクールでいうセリフと選択肢)をpushして、contextを更新する。</li><li>contextが更新されることでgposが更新され、文脈にあわせたコメントが流れる。</li><li>また、minorcontextを初期化する。</li><li>**gpos v2では無効なため、利用非推奨**</li></ul>
引数|コメントシステムにpushするコンテキストを表す文字列
戻り値|なし
    
### マイナーコンテキストAPI
    
メソッド |`window.RPGAtsumaru.comment.pushMinorContext()`
:---|:---
説明|<ul><li>コメントシステムのgposを更新する。</li><li>contextが更新されることでgposKeyが更新され、文脈にあわせたコメントが流れる。</li><li>内部的にminorcontext値を持っており、それを+1することでgposを更新している。pushContextFactorを使うと、minorcontext値は初期値に戻される。</li><li>MinorContextは「ContextFactorのさらに細かい状態」を想定している。</li><li>ツクールではエンジンにwaitがかかるような命令で使用している。</li><li>**gpos v2では無効なため、利用非推奨**</li></ul>
引数|なし
戻り値|なし
    
### コンテキストAPI
    
メソッド |`window.RPGAtsumaru.comment.setContext(context: string)`
:---|:---
説明|<ul><li>pushContextFactorと違い、contextを引数に渡した値で直接書き換える。</li><li>特定のScene内でまったく同じゲーム状態を厳密に作りたい場合に使う。</li><li>このときの context の値は、ascii 64文字以下推奨。</li></ul>
引数|コンテキスト値を表す文字列
戻り値|なし
    
### 表示コメント取得API
    
メソッド |`window.RPGAtsumaru.comment.cameOut.subscribe(observer: Observer)`
:---|:---
説明|<ul><li>ゲーム画面に流れるコメントを取得できるAPIです。</li><li>表示前のコメントは取得できません。</li><li>Observer, subscriptionについてはESNextのObservableを参照してください。</li></ul>
引数|RPGアツマールのコメント情報( `{ command: string, comment: string }[]` )を受け取るObserver
戻り値|`subscription`
    
### 表示コメント取得コールバックAPI
    
メソッド |`window.RPGAtsumaru.comment.cameOut.subscribe(next: (comment: { command: string, comment: string }[]) => void)`
:---|:---
説明|`window.RPGAtsumaru.comment.cameOut.subscribe(observer)` の引数に、コールバック関数を受け付けられるようにしたものです。
引数|RPGアツマールのコメント情報( `{ command: string, comment: string }[]` )を受け取るコールバック
戻り値|`subscription`
    
### 入力コメント取得API
    
メソッド |`window.RPGAtsumaru.comment.posted.subscribe(observer: Observer)`
:---|:---
説明|<ul><li>ユーザが投稿したコメント情報を取得できるAPIです。</li><li>Observer, subscriptionについてはESNextのObservableを参照してください。</li></ul>
引数|RPGアツマールのコメント情報( `{ command: string, comment: string }` )を受け取るObserver
戻り値|`subscription`
    
### 入力コメント取得コールバックAPI
    
メソッド |`window.RPGAtsumaru.comment.posted.subscribe(next: (comment: { command: string, comment: string }) => void)`
:---|:---
説明|`window.RPGAtsumaru.comment.posted.subscribe(observer)` の引数に、コールバック関数を受け付けられるようにしたものです。
引数|RPGアツマールのコメント情報( `{ command: string, comment: string }` )を受け取るコールバック
戻り値|`subscription`
    
### verboseモードAPI
    
メソッド |`window.RPGAtsumaru.comment.verbose`
:---|:---
説明|trueをセットすると、コメントのgpos(game position)計算の内部情報をコンソールに出力します
引数|`boolean`
戻り値|
    
#### verboseモードAPIのコンソールの出力例

gpos v1の場合

```
gamePos updated.
    texts: hoge/fuga/piyo
    increment: 1
```

gpos v2の場合

```
gpos v2 updated.
	scene: map1
	context: v2/MapEvent1/page1/%E3%81%93%E3%81%AF
	context(decoded): v2/MapEvent1/page1/こは
```

### シーンコメント取得API
    
メソッド |`window.RPGAtsumaru.comment.getSceneComments(sceneName: string)`
:---|:---
説明|シーン名を指定してそのシーンのコメントをまるごと取得します。
引数|シーン名を表す文字列
戻り値|`Promise<{ command: string, comment: string, context: string }>`

### gposモード設定API
    
メソッド |`window.RPGAtsumaru.comment.changeAutoGposMode(mode: string)`
:---|:---
説明|`v1` `v2` を指定するとgpos v1, v2に変更します。 `none` でgposの自動設定自体を無効にできます
引数|モードを表す文字列。 `v1` `v2` `none` のどれか一つ
戻り値|
    
## 関連ドキュメント

ドキュメント|リンク|備考
:---|:---|:---
機能解説|[コメント](/comment)|機能概要や全般的な解説
    
## 最終更新日
 - 2020/11/16
