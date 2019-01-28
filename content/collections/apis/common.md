---
title: ★ 共通事項
slug: common
description: RPGアツマール ゲームAPI共通の決まりごとについてです。
order: -999
---

## 概要

この項目では、すべてのRPGアツマール ゲームAPIに対して共通の事項について解説します。


## 共通事項一覧

- [APIの呼び出し回数制限](/common/rate-limit)
  - 一部のAPIには、RPGアツマールの負荷対策としてAPIの呼び出し回数に制限があり、制限に達するとその機能はしばらく利用できなくなります。制限の条件と制限内容について説明します。
- [niconicoログインについて](/common/login)
  - 一部のAPIはゲームをプレイしているユーザーの情報を利用するため、利用するためにはログインが必要となります。
- [プレイヤー間通信の有効化](/common/interplayer)
  - 一部のAPIでは、プレイしているユーザーが更に別のユーザーの情報をゲーム上で呼び出すことができます。そのようなAPIは事前に呼び出される側のユーザーが「プレイヤー間通信の有効化」を行っている必要があります。
- [エラーハンドリング](/common/errors)
  - すべてのAPIは呼び出し方の間違いや、RPGアツマールのサーバー側での不備などで失敗する可能性があります。失敗時にAPIがどのような振る舞いをするかについて説明します。

## ゲームコードサンプル

ゲーム制作ツールに依存しないJavaScript(TypeScript)を使用したゲームプロジェクトのコードサンプルとして[game-code-sample](https://github.com/atsumaru/game-code-sample)を用意しています。
game-code-sampleの実際の動作はRPGアツマール上にアップロードされた[【サンプル】game-code-sample](https://game.nicovideo.jp/atsumaru/games/gm9765?key=82e2a11047e0)にて確認することができます。
