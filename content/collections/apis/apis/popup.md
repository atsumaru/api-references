---
title: 外部リンク表示
slug: apis/popup
description: 「外部リンク表示」のAPIでの利用方法
order: 8
navi: APIでの利用方法
experimental: 
---
    
## APIでの利用方法
### 外部リンク表示API
    
メソッド |`window.RPGAtsumaru.popups.openLink(url: string, comment?: string)`
:---|:---
説明|`url` にリンク先を表す特定の文字列を渡すことにより、外部リンクを記載したダイアログを表示
引数|<ul><li>`url` : 共有セーブを取得したいユーザーのニコニコユーザーIDの配列を自然数で、最大100件まで指定します。</li><li>`comment` : 作者からリンク先がどのような内容であるかを紹介するコメントを追加できます。未指定の場合は、表示されません。</li></ul>
戻り値|`Promise<void>`
    
## 関連ドキュメント
    
ドキュメント|リンク|備考
:---|:---|:---
機能解説|[外部リンク表示](/popup)|機能概要や全般的な解説
プラグインでの利用方法|[外部リンク表示](/plugins/popup)|RPGツクールMVユーザー向け
    
## 最終更新日
 - 2020/02/28
