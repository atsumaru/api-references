---
title: プレイヤー間通信の有効化
slug: apis/interplayer
description: 「プレイヤー間通信の有効化」のAPIでの利用方法
order: 1
navi: APIでの利用方法
---
    
## APIでの利用方法
### 現在のログインユーザーのプレイヤー間通信の有効化
 - このAPIの利用には[ログイン](/common/login)が必須です。
 - このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です。
    
メソッド |`RPGAtsumaru.interplayer.enable()`
:---|:---
引数|なし
戻り値|`Promise<void>`
    
#### 起こりうるエラーの種類
    
名前|説明
:---|:---
[UNAUTHORIZED](/common/error)|プレイヤーがログインしていない
[INTERNAL_SERVER_ERROR](/common/error)|RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/error)|短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている
    
## 関連ドキュメント
    
ドキュメント|リンク|備考
:---|:---|:---
機能解説|[プレイヤー間通信の有効化](/interplayer)|機能概要や全般的な解説
プラグインでの利用方法|[プラグインでの利用方法](/plugins)|RPGツクールシリーズユーザー向け
    
## 最終更新日
 - 2020/02/28
