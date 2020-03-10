---
title: マスターボリューム
slug: apis/volume
description: 「マスターボリューム」のAPIでの利用方法
order: 3
navi: APIでの利用方法
---
    
## APIでの利用方法
### ボリューム取得API
    
メソッド |`window.RPGAtsumaru.volume.getCurrentValue()`
:---|:---
説明|現在のRPGアツマールのマスターボリューム値を取得する。
引数|なし
戻り値|`number` 0～1の実数で表されるマスターボリューム
    
### ボリューム変更取得API
    
メソッド |`window.RPGAtsumaru.volume.changed.subscribe(observer: Observer)`
:---|:---
説明|<ul><li>RPGアツマールのマスターボリューム情報の変更を取得する。</li><li>Observer, subscriptionについてはESNextのObservableを参照してください。</li></ul>
引数|マスターボリューム情報を受け取るObserver
戻り値|`subscription`
    
### ボリューム変更時コールバックAPI
    
メソッド |`window.RPGAtsumaru.volume.changed.subscribe(next: (volume: number) => void)`
:---|:---
説明|`window.RPGAtsumaru.volume.changed.subscribe(observer)` の引数に、コールバック関数を受け付けられるようにしたもの
引数|マスターボリューム情報を受け取るコールバック
戻り値|`subscription`
    
## 関連ドキュメント
    
ドキュメント|リンク|備考
:---|:---|:---
機能解説|[マスターボリューム](/volume)|機能概要や全般的な解説
    
※プラグインはありません
    
## 最終更新日
 - 2020/02/28
