---
title: ローカルストレージについて
slug: storage/localStorage
description: RPGアツマール上でのローカルストレージの取り扱いについて
order: 1
---

## RPGアツマールの localStorage の扱いについて

RPGアツマールでは、自動で挿入される `rpgatsumaru.js` によって、ブラウザの localStorage を独自のものに差し替えています。  
RPGアツマール上で localStorage を使用すると、`rpgatsumaru.js` が内部で storage API を使って、保存された内容を自動的にサーバーにアップロードします。  
この機能のために、いくつかの特別な仕様と制限が存在します。

### 仕様／制限一覧

#### 特別扱いされる key

`RPG Global`、`RPG FileN` (Nは数字) の2つの key は、RPGツクールMVのエンジンに組み込まれている `lzstring.js` によって、圧縮されたデータを読み書きするように設計されています。
そのため、RPGツクールMV以外のゲームがこの key を利用すると、データが正しく処理されず、破損する可能性があります。

RPGツクールMVは `RPG Config` に、デバイスごとの共通設定項目（音量設定や常時ダッシュ設定など）を保存するように設計されています。
そのため、この key だけは内部で storage API を使用せず、元の localStorage から読み書きするように設計されています。

#### エラーハンドリングの制限

storage API は非同期APIのため、同期APIである localStorage ではエラーハンドリングができません。localStorage を使っての例外処理をすることができませんので、例外処理が必要な場合は storage API を利用してください。

#### サーバー側とのズレ

localStorage は同期APIのため、常にサーバの最新情報を取得することができません。そのため、localStorage から得られる情報はサーバーセーブよりも古い可能性があります。最新のセーブを常に取りたい場合は storage API を利用してください。
