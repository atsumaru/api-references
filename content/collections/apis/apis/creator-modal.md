---
title: 作者情報表示
slug: apis/creator-modal
description: 「作者情報表示」のAPIでの利用方法
order: 10
navi: APIでの利用方法
---
    
## APIでの利用方法
### 作者情報API
    
メソッド |`window.RPGAtsumaru.popups.displayCreatorInformationModal(niconicoUserId?: number &#124; null)`
:---|:---
説明|引数の `niconicoUserId` にniconicoユーザIDをint値で渡すことにより、作者情報ダイアログを表示するメソッド。<br>引数に渡す文字列の形式は整数で、省略(null)も可能。省略した場合は実行しているゲームの作者情報を表示。
引数|niconicoユーザID(整数)。またはnull
戻り値|`Promise<void>`
    
## 関連ドキュメント
    
ドキュメント|リンク|備考
:---|:---|:---
機能解説|[作者情報表示](/creator-modal)|機能概要や全般的な解説
プラグインでの利用方法|[プラグインでの利用方法](/plugins)|RPGツクールシリーズユーザー向け
    
## 最終更新日
 - 2020/02/28
