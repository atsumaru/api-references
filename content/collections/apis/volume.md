---
title: マスターボリュームの設定
slug: volume
description: マスターボリュームの調整を行うにはVolumeAPIを利用してください。
order: 13
---

## 概要
- VolumeAPI はマスターボリューム設定を可能にするAPIです。このAPIを利用することで、ゲームページのボリュームボタンが有効になります。
- マスターボリュームはRPGアツマール全体共通のボリューム設定で、RPGツクールMVのゲーム内オプションで設定できる音量パラメータとは異なります。

### どんなことができるの？

機能を実行した際に、次のような操作を行います。

- ゲームページのボリュームボタンを有効にする
- マスターボリュームの調整

![ボリューム設定](/images/volume.png)

### 利用例

RPGツクールMV製でコアスクリプトv1.5.0以上のゲームの場合、RPGアツマールが挿入する `rpgatsumaru.js` によって自動的にこの機能を利用しています。例えば以下のゲームで、この機能を利用してゲーム音量を調整できます。

- [【防衛ゲーム】タタの魔法使い【異世界サバイバル】](https://game.nicovideo.jp/atsumaru/games/gm7601)
  - ゲーム画面左下のボリュームボタンから設定できます。

## 設置方法

マスターボリューム機能はアツマールAPIから利用可能です。

方法 | 場所
:---|:---
アツマール API | -

## APIを利用したサーバセーブ機能の利用

### ボリューム取得API
メソッド | window.RPGAtsumaru.volume.getCurrentValue()
:---|:---
説明 | 現在のRPGアツマールのマスターボリューム値を取得する。
引数 | なし
戻り値 | 0～1の実数で表されるマスターボリューム
リリース日 | 2017/12/20
更新日 | 2018/10/25

### ボリューム変更取得API
メソッド | window.RPGAtsumaru.volume.changed.subscribe(observer)
:---|:---
説明 | <ul><li>RPGアツマールのマスターボリューム情報の変更を取得する。</li><li>Observer, subscriptionについてはESNextのObservableを参照してください。</li></ul>
引数 | マスターボリューム情報を受け取るObserver
戻り値 | subscription
リリース日 | 2017/12/20
更新日 | 2018/10/25

### ボリューム変更時コールバックAPI
メソッド | window.RPGAtsumaru.volume.changed.subscribe(next)
:---|:---
説明 | window.RPGAtsumaru.volume.changed.subscribe(observer)の引数に、コールバック関数を受け付けられるようにしたもの。
引数 | マスターボリューム情報を受け取るコールバック
戻り値 | subscription
リリース日 | 2016/12/20
更新日 | 2018/10/25
