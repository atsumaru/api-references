---
title: コメントを利用する
slug: comment
description: RPGアツマールのコメント機能を利用するにはCommentAPIを利用してください。
order: 10
---

## 概要
RPGアツマールでは、ユーザーのゲーム体験を共有するためにコメント機能を提供しています。設計はRPGツクールMVでの利用を想定していますがAPIは汎用的にも利用可能です。

### どんなことができるの？

機能を実行した際に、次のような操作を行います。

- コメントシステムのscene設定
- sceneの切り替え
- contextfactorの設定
- contextの設定
- minorcontextの設定

### 利用例

RPGツクールMV製ゲームの場合、RPGアツマールが挿入する `rpgatsumaru.js` によって自動的にこの機能を利用しています。例えば以下のゲームで、この機能を利用してゲーム上にコメントを表示しています。

- [【防衛ゲーム】タタの魔法使い【異世界サバイバル】](https://game.nicovideo.jp/atsumaru/games/gm7601)
  - ゲーム開始時（scene=`__title`）などで、右から左にコメントが流れます。

## 詳細
コメント機能は「コメントシステム」にゲーム状態を伝えると、コメントがゲーム上に流れてくるというものです。動画と異なり、時系列のようなプレイヤー全員が共有しているコンテンツの内部状態が存在しないため、ゲームでは逐次ゲーム状態をコメントシステムに伝える必要があります。この「とあるゲーム状態」のことを本システムではgame position(**gpos**)と呼んでいます。

RPGツクールMVにおいては、イベントコマンドごとにgposをコメントシステムに伝達しています。そのため、ヒロインのセリフなど特定の状態をプレイヤー間で共有できます。もし、あなたがアクションゲームをつくるなら「敵を倒した」「アイテムを得た」などのイベントをgposとしてコメントシステムに伝えることになるでしょう。

gposはsceneとcontextfactorとminorcontextという３つのパラメーターで表現します。プログラム的に書けば以下のようになるでしょう。

```
gpos(scene, context(contextfactor[0,-1,-2],minorcontext))
```

sceneはコメントデータ群を表しています。scene一つあたりで最新1,000件(変更可能性有り)で、直近5つのsceneをAPI側でキャッシュします。一般的なゲームではマップや戦闘画面、メニュー画面に相当します。

sceneのコメントを、contextの値で指定し取得することでコメントが描画されます。
contextは状態遷移マシンになっており、contextfactorをpushすることで状態が一つ進みます。状態はcontextfactor3つの複合キーで表されています。
一つの状態内でさらに細かく分割する場合、たとえば「あるイベント内の時間」などを示すにはminorcontextが便利です。minorcontextをpushするごとに状態が細かく進み、それに応じたコメントが描画されます。

RPGツクールMVにおいてはsceneはmapのidに対応します。
contextfactorは「セリフ」コマンドと「選択肢」コマンドで、minorcontextは「ウェイト」コマンドと、コマンド内のwaitに対応します。minorcontextがあることで、「セリフのあとにキャラクターが移動して演技する」ような演出に対して細かくコメントができます。

![概念図](/images/comment.png)


## 設置方法

コメント機能はアツマールAPIから利用可能です。

方法 | 場所
:---|:---
アツマール API | -

## APIを利用したコメント機能の利用

### シーン設定API
メソッド | window.RPGAtsumaru.comment.changeScene(sceneName)
:---|:---
説明 | <ul><li>コメントシステムのシーンを設定する。</li><li>シーンが切り替わると、そのシーンのコメント空間に切り替わる。</li><li>ツクールでは基本的にマップID=シーン名となる。</li><li>サーバーアクセスが発生する。（ただし直近5つのsceneはキャッシュされ、再アクセスには発生しない）</li><li>シーン名は64文字までのascii限定。</li></ul><br>※なお、アンダースコア２つで始まるシーン名は特殊用途として予約されています。<br>予約されている中で現在利用可能なシーン名は `__title` と `__gameover` の2つで、 `__title` は内部状態の初期値になっています。
引数 | シーン名を表す文字列
戻り値 | 無し
リリース日 | 2016/12/27
更新日 | 2018/10/25

### シーン切り替えAPI
メソッド | window.RPGAtsumaru.comment.resetAndChangeScene(sceneName)
:---|:---
説明 | <ul><li>changeSceneと違い、context(contextfactorとminorcontext)による内部状態をリセットしつつシーンを切り替える</li><li>サーバーアクセスが発生する。（ただし直近5つのsceneはキャッシュされ、再アクセスには発生しない）</li><li>ツクール製ゲームではタイトルとゲームオーバーで全員同じコメントが流れる機能のために使用しています。</li></ul>
引数 | シーン名を表す文字列
戻り値 | 無し
リリース日 | 2016/12/27
更新日 | 2018/10/25

### コンテキストファクターAPI
メソッド | window.RPGAtsumaru.comment.pushContextFactor(factor)
:---|:---
説明 | <ul><li>コメントシステムにContextFactorとなる値(ツクールでいうセリフと選択肢)をpushして、contextを更新する。</li><li>contextが更新されたことでgposが更新され、文脈にあわせたコメントが流れる。</li><li>また、minorcontextを初期化する。</li></ul>
引数 | コメントシステムにpushするコンテキストを表す文字列
戻り値 | 無し
リリース日 | 2016/12/27
更新日 | 2018/10/25

### マイナーコンテキストAPI
メソッド | window.RPGAtsumaru.comment.pushMinorContext()
:---|:---
説明 | <ul><li>コメントシステムのgposを更新する。</li><li>contextが更新されたことでgposKeyが更新され、文脈にあわせたコメントが流れる。</li><li>内部的にminorcontext値を持っており、それを+1することでgposを更新している。pushContextFactorを使うと、minorcontext値は初期値に戻される。</li><li>MinorContextは「ContextFactorのさらに細かい状態」を想定している。</li><li>ツクールではエンジンにwaitがかかるような命令で使用している。</li></ul>
引数 | 無し
戻り値 | 無し
リリース日 | 2016/12/27
更新日 | 2018/10/25

### コンテキストAPI
メソッド |window.RPGAtsumaru.comment.setContext(context)
:---|:---
説明 | <ul><li>pushContextFactorと違い、contextを引数に渡した値で直接書き換える。</li><li>特定のScene内でまったく同じゲーム状態を厳密に作りたい場合に使う。</li><li>このときの context の値は、ascii 64文字以下推奨。</li></ul>
引数 | コンテキスト値を表す文字列
戻り値 | 無し
リリース日 | 2016/12/27
更新日 | 2018/10/25
