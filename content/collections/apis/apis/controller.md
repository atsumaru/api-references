---
title: コントローラー
slug: apis/controller
description: 「コントローラー」のAPIでの利用方法
order: 2
navi: APIでの利用方法
---
    
## APIでの利用方法
### コントローラー入力取得API
    
メソッド |`window.RPGAtsumaru.controllers.defaultController.subscribe(observer: Observer)`
:---|:---
説明|<ul><li>ゲームアツマールのスマホ版にあるコントローラーの入力情報を取得できるAPIです。</li><li>Observer, subscriptionについてはESNextのObservableを参照してください。</li></ul>
引数|ゲームアツマールのコントローラーの入力情報( `{type: string, key: string}` )を受け取るObserver
戻り値|`subscription`
    
### コントローラー入力取得コールバックAPI
    
メソッド |`window.RPGAtsumaru.controllers.defaultController.subscribe(next: (info: {type: string, key: string}) => void)`
:---|:---
説明|`window.RPGAtsumaru.controllers.defaultController.subscribe(observer)` の引数に、コールバック関数を受け付けられるようにしたものです。
引数|ゲームアツマールのコントローラー入力情報( `{type: string, key: string}` )を受け取るコールバック
戻り値|`subscription`
    
## 関連ドキュメント
    
ドキュメント|リンク|備考
:---|:---|:---
機能解説|[コントローラー](/controller)|機能概要や全般的な解説
    
※プラグインはありません
    
## 最終更新日
 - 2020/02/28
