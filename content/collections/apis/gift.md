---
title: ギフト
slug: gift
description: プレイ中のゲームのギフト情報を取得する機能について
order: 16
navi: 機能解説
---
    
## 概要
ギフトの投稿画面を開いたり、情報を取得します。

## ギフトとは

プレイヤーがニコニコポイントを使用して、ギフトを購入すると、ゲーム画面上にギフトアニメーションが表示されることで、ゲームを盛り上げることが可能な機能です。

またギフトは収入を得ることができます。収入を得るには作品登録が必要です。

詳しくは[リリース](https://ch.nicovideo.jp/indies-game/blomaga/ar1930287)もご参照ください。

## なにができるのか

ギフトの一覧を表示し、投稿を促す画面を表示できます。

また、次のギフト情報を取得できます。
 - ギフトポイント取得（全ユーザー合計/自分のみ）
 - ギフト履歴取得
 - ギフトランキング取得

    
## 例
以下のような利用を想定しています。
 - ゲームをクリアしたあと、「ご満足いただけたら作者へのご支援、お願いします！」というメッセージと共にギフト投稿画面を表示
 - ゲームへのギフト合計が一定値を超えると、特別なイベントが開催される
 - ギフト履歴をもとに、ゲームをギフトしてくれたユーザーの名前を表示してお礼を述べるシーンを作る

## 利用方法

方式|利用方法|備考
:---|:---|:---
プラグイン|[プラグインでの利用方法](/plugins)を参照|RPGツクールシリーズユーザー向け
API|APIでの利用方法の「[ギフト](/apis/gift)」項を参考に、APIを実装してください|他ゲームエンジンやより高度な利用を必要とするユーザー向け

## 最終更新日
 - 2020/10/30
