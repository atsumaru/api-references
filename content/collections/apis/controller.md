---
title: コントローラーを利用する
slug: controller
description: スマートフォンでのゲームプレイ時に、バーチャルコントローラーからの入力を受け取るためのAPIです。
order: 11
---

## 概要
RPGアツマールではスマートフォンでゲームをプレイする際に、バーチャルコントローラーを表示しています。その入力を受け取るAPIです。バーチャルコントローラーは設定により非表示になっていることがあります。

![コントローラー](/images/controller.png)

### なにができるのか

 バーチャルコントローラーで入力された操作を受け取れます


#### 利用想定／利用例

RPGツクールMV製ゲームの場合、RPGアツマールが挿入する `rpgatsumaru.js` によって自動的にこの機能を利用しています。例えば以下のゲームで、この機能を利用してゲームを操作できます。

- [【防衛ゲーム】タタの魔法使い【異世界サバイバル】](https://game.nicovideo.jp/atsumaru/games/gm7601)
  - PCの場合は、ゲーム画面左下にあるバーチャルコントローラーボタンを押すと左右に表示されます。
  - スマートフォンの場合は、デフォルトでゲーム画面下に表示されます。

## 利用方法

バーチャルコントローラーは次の方法で利用できます。

方法 | 場所
:---|:---
ゲームAPI | 以下の「APIでの利用方法」を参考に、直接APIを呼び出してください

### APIでの利用方法
APIを利用したコントローラー機能の利用

#### コントローラー入力取得API
メソッド | `window.RPGAtsumaru.controllers.defaultController.subscribe(observer: Observer)`
:---|:---
説明 | <ul><li>RPGアツマールのスマホ版にあるコントローラーの入力情報を取得できるAPIです。</li><li>Observer, subscriptionについてはESNextのObservableを参照してください。</li></ul>
引数 | RPGアツマールのコントローラーの入力情報( `{type: string, key: string}` )を受け取るObserver
戻り値 | `subscription`
リリース日 | 2016/12/27
更新日 | 2018/10/25

#### コントローラー入力取得コールバックAPI
メソッド | `window.RPGAtsumaru.controllers.defaultController.subscribe(next: (info: {type: string, key: string}) => void)`
:---|:---
説明 | `window.RPGAtsumaru.controllers.defaultController.subscribe(observer)` の引数に、コールバック関数を受け付けられるようにしたものです。
引数 | RPGアツマールのコントローラー入力情報( `{type: string, key: string}` )を受け取るコールバック
戻り値 | `subscription`
リリース日 | 2016/12/27
更新日 | 2018/10/25
