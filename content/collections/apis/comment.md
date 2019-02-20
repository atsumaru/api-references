---
title: コメントを利用する
slug: comment
description: RPGアツマールのコメント機能を利用するにはCommentAPIを利用してください。
order: 10
---

## 概要
RPGアツマールでは、ユーザーのゲーム体験を共有するためにコメント機能を提供しています。設計はRPGツクールMVでの利用を想定していますがAPIは汎用的にも利用可能です。

### なにができるのか

ゲームの内容に合わせてコメントを投稿・表示できます。  

#### 利用想定／利用例

RPGツクールMV製ゲームの場合、RPGアツマールが挿入する `rpgatsumaru.js` によって自動的にこの機能を利用しています。例えば以下のゲームで、この機能を利用してゲーム上にコメントを表示しています。

- [【防衛ゲーム】タタの魔法使い【異世界サバイバル】](https://game.nicovideo.jp/atsumaru/games/gm7601)
  - ゲーム開始時（scene=`__title`）などで、右から左にコメントが流れます。

## 機能詳細

本機能を実行した際に、次のような操作を行います。

- コメントシステムのscene設定
- sceneの切り替え
- contextfactorの設定
- contextの設定
- minorcontextの設定

コメント機能は「コメントシステム」にゲーム状態を伝えると、コメントがゲーム上に流れます。ゲームは動画と異なり、時系列のようにプレイヤー全員が共有しているコンテンツの内部状態が存在しないため、ゲームでは逐次ゲーム状態をコメントシステムに伝える必要があります。この「ゲーム状態」のことを本システムではgame position(**gpos**)と呼んでいます。

RPGツクールMVにおいては、イベントコマンドごとにgposをコメントシステムに伝達しています。そのため、例えば「ヒロインのセリフ」など特定の状態をプレイヤー間で共有できます。もし、あなたがアクションゲームをつくるなら「敵を倒した」「アイテムを得た」などのイベントをgposとしてコメントシステムに伝えることになります。

gpos は scene と contextfactor と minorcontext という３つのパラメーターで表現します。プログラム的に書けば以下のようになります。

```
gpos(scene, context(contextfactor[0,-1,-2]), minorcontext)
```

scene はコメントデータ群を表しています。scene 1つあたりで最新1,000件(※変更可能性有り)で、直近5つの scene をAPI側でキャッシュします。一般的なゲームではマップや戦闘画面、メニュー画面に相当します。

scene のコメントを、context の値で指定し取得することでコメントが描画されます。
context は状態遷移マシンになっており、contextfactor を push することで状態が1つ進みます。状態は最新の contextfactor 3つの複合キーで表されています。
context をさらに細かく分割する場合、たとえば「あるイベント内の時間」などを示すには minorcontext が便利です。minorcontext を push するごとに状態が細かく進み、それに応じたコメントが描画されます。

RPGツクールMVにおいては scene は map の id に対応します。
contextfactor は「セリフ」コマンドと「選択肢」コマンドで、minorcontext は「ウェイト」コマンドと、コマンド内の wait に対応します。minorcontext があることで、「セリフのあとにキャラクターが移動して演技する」ような演出に対して細かくコメントができます。

![概念図](/images/comment.png)


## 利用方法

コメント機能は次の方法で利用できます。

方法 | 場所
:---|:---
ゲームAPI | 以下の「APIでの利用方法」を参考に、直接APIを呼び出してください

### APIでの利用方法
APIを利用したコメント機能の利用

#### シーン設定API
メソッド | `window.RPGAtsumaru.comment.changeScene(sceneName: string)`
:---|:---
説明 | <ul><li>コメントシステムのシーンを設定する。</li><li>シーンが切り替わると、そのシーンのコメント空間に切り替わる。</li><li>ツクールでは基本的にマップID=シーン名となる。</li><li>サーバーアクセスが発生する。（ただし直近5つのsceneはキャッシュされ、再アクセスには発生しない）</li><li>シーン名は64文字までのascii限定。</li></ul><br>※なお、アンダースコア２つで始まるシーン名は特殊用途として予約されています。<br>予約されている中で現在利用可能なシーン名は `__title` と `__gameover` の2つで、 `__title` は内部状態の初期値になっています。
引数 | シーン名を表す文字列
戻り値 | 無し
リリース日 | 2016/12/27
更新日 | 2018/10/25

#### シーン切り替えAPI
メソッド | `window.RPGAtsumaru.comment.resetAndChangeScene(sceneName: string)`
:---|:---
説明 | <ul><li>changeSceneと違い、context(contextfactorとminorcontext)による内部状態をリセットしつつシーンを切り替える</li><li>サーバーアクセスが発生する。（ただし直近5つのsceneはキャッシュされ、再アクセスには発生しない）</li><li>ツクール製ゲームではタイトルとゲームオーバーで全員同じコメントが流れる機能のために使用しています。</li></ul>
引数 | シーン名を表す文字列
戻り値 | 無し
リリース日 | 2016/12/27
更新日 | 2018/10/25

#### コンテキストファクターAPI
メソッド | `window.RPGAtsumaru.comment.pushContextFactor(factor: string)`
:---|:---
説明 | <ul><li>コメントシステムにContextFactorとなる値(ツクールでいうセリフと選択肢)をpushして、contextを更新する。</li><li>contextが更新されることでgposが更新され、文脈にあわせたコメントが流れる。</li><li>また、minorcontextを初期化する。</li></ul>
引数 | コメントシステムにpushするコンテキストを表す文字列
戻り値 | 無し
リリース日 | 2016/12/27
更新日 | 2018/10/25

#### マイナーコンテキストAPI
メソッド | `window.RPGAtsumaru.comment.pushMinorContext()`
:---|:---
説明 | <ul><li>コメントシステムのgposを更新する。</li><li>contextが更新されることでgposKeyが更新され、文脈にあわせたコメントが流れる。</li><li>内部的にminorcontext値を持っており、それを+1することでgposを更新している。pushContextFactorを使うと、minorcontext値は初期値に戻される。</li><li>MinorContextは「ContextFactorのさらに細かい状態」を想定している。</li><li>ツクールではエンジンにwaitがかかるような命令で使用している。</li></ul>
引数 | 無し
戻り値 | 無し
リリース日 | 2016/12/27
更新日 | 2018/10/25

#### コンテキストAPI
メソッド | `window.RPGAtsumaru.comment.setContext(context: string)`
:---|:---
説明 | <ul><li>pushContextFactorと違い、contextを引数に渡した値で直接書き換える。</li><li>特定のScene内でまったく同じゲーム状態を厳密に作りたい場合に使う。</li><li>このときの context の値は、ascii 64文字以下推奨。</li></ul>
引数 | コンテキスト値を表す文字列
戻り値 | 無し
リリース日 | 2016/12/27
更新日 | 2018/10/25

#### 表示コメント取得API
メソッド | `window.RPGAtsumaru.comment.cameOut.subscribe(observer: Observer)`
:---|:---
説明 | <ul><li>ゲーム画面に流れるコメントを取得できるAPIです。</li><li>表示前のコメントは取得できません。</li><li>Observer, subscriptionについてはESNextのObservableを参照してください。</li></ul>
引数 | RPGアツマールのコメント情報( `{command: string, content: string}[]` )を受け取るObserver
戻り値 | `subscription`
リリース日 | 2017/07/27
更新日 | 2018/11/25

#### 表示コメント取得コールバックAPI
メソッド | `window.RPGAtsumaru.comment.cameOut.subscribe(next: (comment: {command: string, content: string}[]) => void)`
:---|:---
説明 | `window.RPGAtsumaru.comment.cameOut.subscribe(observer)` の引数に、コールバック関数を受け付けられるようにしたものです。
引数 | RPGアツマールのコメント情報( `{command: string, content: string}[]` )を受け取るコールバック
戻り値 | `subscription`
リリース日 | 2017/07/27
更新日 | 2018/11/25

#### 入力コメント取得API
メソッド | `window.RPGAtsumaru.comment.posted.subscribe(observer: Observer)`
:---|:---
説明 | <ul><li>ユーザが投稿したコメント情報を取得できるAPIです。</li><li>Observer, subscriptionについてはESNextのObservableを参照してください。</li></ul>
引数 | RPGアツマールのコメント情報( `{command: string, content: string}` )を受け取るObserver
戻り値 | `subscription`
リリース日 | 2017/07/27
更新日 | 2018/11/25

#### 入力コメント取得コールバックAPI
メソッド | `window.RPGAtsumaru.comment.posted.subscribe(next: (comment: {command: string, content: string}) => void)`
:---|:---
説明 | `window.RPGAtsumaru.comment.posted.subscribe(observer)` の引数に、コールバック関数を受け付けられるようにしたものです。
引数 | RPGアツマールのコメント情報( `{command: string, content: string}` )を受け取るコールバック
戻り値 | `subscription`
リリース日 | 2017/07/27
更新日 | 2018/11/25

#### verboseモードAPI
変数 | `window.RPGAtsumaru.comment.verbose`
:---|:---
説明 | trueをセットすると、コメントのgpos(game position)計算の内部情報をコンソールに出力します
型 | `boolean`
リリース日 | 2017/09/19
更新日 | 2018/11/25

##### verboseモードAPIのコンソールの出力例
```
gamePos updated.
  texts: hoge/fuga/piyo
  increment: 1
```

#### シーンコメント取得API

<experimental-note></experimantal-note>

メソッド | `window.RPGAtsumaru.experimental.comment.getSceneComments(sceneName: string)`
:---|:---
説明 | シーン名を指定してそのシーンのコメントをまるごと取得します。
引数 | シーン名を表す文字列
戻り値 | `Promise<{ content: string, command: string, context: string }>`
リリース日 | 2019/02/20
更新日 | 2019/02/20
