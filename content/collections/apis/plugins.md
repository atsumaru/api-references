---
title: プラグインでの利用方法
slug: plugins
description: プラグインでの利用方法
order: 20
---
  
## 概要
RPGツクールシリーズでアツマールAPIを簡易的に利用できるように、各ツクール用プラグインを提供しています。

## RPGツクール2000/2003の場合

RPGツクール2000及びRPGツクール2003にはプラグイン機能がありませんが、代わりに注釈コマンドを用いて一部機能を利用できます。詳しくは[RPGツクール2000/2003プレイヤー](/download/200x-player)をご覧ください。

## RPGツクールMVの場合

以下のページで各APIごとにRPGツクールMV用プラグインの配布と、具体的な利用方法を解説を行っています。

 - [プレイヤー間通信の有効化](/plugins/interplayer)
 - [スクリーンショットのシェア](/plugins/screenshot)
 - [コメント](/plugins/comment)
 - [スコアボード](/plugins/scoreboard)
 - [外部リンク表示](/plugins/popup)
 - [クエリ情報取得](/plugins/copy-query)
 - [作者情報表示](/plugins/creator-modal)
 - [ニコニ広告情報取得](/plugins/nicoad)
 - [ユーザー情報取得](/plugins/user)
 - [グローバルサーバー変数](/plugins/global-server-variable)
 - [共有セーブ](/plugins/shared-save)
 - [シグナル](/plugins/signal)
 - [ギフト](/plugins/gift)
 - [おれいポップアップ](/plugins/thanks)

## RPGツクールMZの場合

1. プラグインのダウンロード：[WaitCommandUntilPromiseSettled.js](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/WaitCommandUntilPromiseSettled.js) を右クリックで「名前をつけて保存」してダウンロード
1. プラグインのダウンロード：[AtsumaruApi.js](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruApi.js) を右クリックで「名前をつけて保存」してダウンロード
1. プロジェクトに追加：ダウンロードした２ファイルをプロジェクトのプラグインフォルダに設置
1. 有効化：プロジェクトのプラグイン設定でプラグインを両方ともONにする
1. 利用したい機能に対応するプラグインコマンドをAtsumaruApiプラグインから利用する

また以下の表に各コマンドに対応する機能解説ページをまとめていますので、詳しくはこちらもご参照ください。

プラグインコマンド|機能解説ページ
:---|:---
アツマールかどうか判定|なし
プレイヤー間通信の有効化|[プレイヤー間通信の有効化](/interplayer)
コメントgposモード設定|[コメント](/comment)
コメントシーン設定|[コメント](/comment)
コメントコンテキスト設定|[コメント](/comment)
コメントgpos表示|[コメント](/comment)
リンク表示|[外部リンク表示](/popup)
作者情報表示|[作者情報表示](/creator-modal)
スクリーンショットを撮影|[スクリーンショットのシェア](/screenshot)
スクリーンショットのツイート内容を変更|[スクリーンショットのシェア](/screenshot)
クエリ取得|[クエリ情報取得](/copy-query)
ユーザー情報取得|[ユーザー情報取得](/user)
自己情報取得|[ユーザー情報取得](/user)
最新ユーザー取得|[ユーザー情報取得](/user)
オンライン人数取得|[ユーザー情報取得](/user)
スコア送信|[スコアボード](/scoreboard)
スコア表示|[スコアボード](/scoreboard)
スコア取得|[スコアボード](/scoreboard)
グローバルサーバー変数取得|[グローバルサーバー変数](/global-server-variable)
グローバルサーバー変数のトリガー発動|[グローバルサーバー変数](/global-server-variable)
共有セーブ保存|なし
共有セーブ取得|[共有セーブ](/shared-save)
グローバルシグナル送信|[シグナル](/signal)
グローバルシグナル受信|[シグナル](/signal)
ユーザーシグナル送信|[シグナル](/signal)
ユーザーシグナル受信|[シグナル](/signal)
ニコニ広告ポイント取得|[ニコニ広告情報取得](/nicoad)
ニコニ広告履歴取得|[ニコニ広告情報取得](/nicoad)
ニコニ広告ランキング取得|[ニコニ広告情報取得](/nicoad)
ギフト投稿画面表示|[ギフト](/gift)
合計ギフトポイント取得|[ギフト](/gift)
自己ギフトポイント取得|[ギフト](/gift)
ギフト履歴取得|[ギフト](/gift)
ギフトランキング取得|[ギフト](/gift)
おれいポップアップ表示|[おれいポップアップ](/thanks)
コメント・ギフトが流れたらコモンイベント起動|[コメント](/comment)・[ギフト](/gift)
おれいポップアップ設定|[おれいポップアップ](/thanks)

## 最終更新日
 - 2021/09/30
