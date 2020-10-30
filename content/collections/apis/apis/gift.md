---
title: ギフト
slug: apis/gift
description: 「ギフト」のAPIでの利用方法
order: 16
navi: APIでの利用方法
---
    
## 目次
 - [ギフト投稿画面表示](#ギフト投稿画面表示)
 - [ギフト累計ポイント取得](#ギフト累計ポイント取得)
 - [ギフト自己ポイント取得](#ギフト自己ポイント取得)
 - [ギフト履歴取得](#ギフト履歴取得)
 - [ギフトランキング取得](#ギフトランキング取得)
    
## APIでの利用方法

### ギフト投稿画面表示

メソッド |`window.RPGAtsumaru.gift.displayCatalogModal()`
:---|:---
説明|ギフトの一覧を表示し、投稿を促す画面を表示できます。プレイヤー本人がギフトボタン（プレゼントボックスのアイコン）を押したときと同じ動作をします。
引数|なし
戻り値|なし

### ギフト累計ポイント取得

メソッド |`window.RPGAtsumaru.gift.getTotalPoints()`
:---|:---
説明|このゲームに対して、すべてのユーザーが合計何ポイントギフトしたかを取得できます
引数|なし
戻り値|`Promise<number>`
制限|このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です

#### 戻り値の例
    
```js
// window.RPGAtsumaru.gift.getTotalPoints().then(function(v) { console.log(v) }) を実行
100000
```

#### 起こりうるエラーの種類
    
名前|説明
:---|:---
[INTERNAL_SERVER_ERROR](/common/error)|RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/error) |短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている

### ギフト自己ポイント取得
    
メソッド |`window.RPGAtsumaru.gift.getMyPoints()`
:---|:---
説明|このゲームに対して、プレイヤー本人が各ギフトごとに合計何ポイントギフトしたかを取得できます
引数|なし
戻り値|`Promise<GiftMyPoints>`
制限|このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です
    
#### 戻り値の型 GiftMyPoints について
戻り値で取得できる `GiftMyPoints` は以下のような型です。
    
```js
interface GiftMyPoints {
    [itemCode: string]: number;
}
```
    
プロパティの内容は次のようになっています。
    
|プロパティ|型|内容
:---|:---|:---
|[itemCode: string]|`number`| `itemCode` の種類のギフトに対して自分が合計何ポイントギフトしたか
    
#### 戻り値の例
戻り値で取得できる `GiftMyPoints` は以下のような型です。
    
```js
// window.RPGAtsumaru.gift.getMyPoints().then(function(v) { console.log(v) }) を実行
{
    "_og-flower": 3000,
    "_og-cake": 10000
}
```

#### 起こりうるエラーの種類
    
名前|説明
:---|:---
[UNAUTHORIZED](/common/error)|プレイヤーがログインしていない
[INTERNAL_SERVER_ERROR](/common/error)|RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/error) |短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている
    
### ギフト履歴取得
    
メソッド |`window.RPGAtsumaru.gift.getHistories()`
:---|:---
説明|このゲームに対してのギフトの履歴を、最新のものから順に最大30件まで取得します
引数|なし
戻り値|`Promise<GiftHistories>`
制限|このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です
    
#### 戻り値の型 GiftHistories について
戻り値で取得できる `GiftHistories` は以下のような型です。
    
```js
type GiftHistories = {
    sceneName: string;
    context: string;
    userName: string;
    point: number;
    comment: string;
    reply: string;
    thanks: boolean;
    createdAt: number;
}[]
```
    
プロパティの内容は次のようになっています。
    
|プロパティ|型|内容
:---|:---|:---
|(this)|`array`|ギフト履歴
|length|`number`|今回取得したギフト履歴の件数
|[n].sceneName|`string`|n+1番目のギフトのシーン名（※[コメント](/comment)に準じます）
|[n].context|`string`|n+1番目のギフトのコンテキスト（※[コメント](/comment)に準じます）
|[n].userName|`string`|n+1番目のギフトのユーザー名
|[n].point|`number`|n+1番目のギフトのポイント
|[n].comment|`string`|n+1番目のギフトに添えられたコメント
|[n].reply|`string`|n+1番目のギフトへの作者からの返信
|[n].thanks|`boolean`|n+1番目のギフトに作者からの感謝（ハートマーク）が送られているか
|[n].createdAt|`number`|n+1番目のギフトの投稿時刻
    
#### 戻り値の例
戻り値で取得できる `GiftPoints` は以下のような型です。
    
```js
// window.RPGAtsumaru.gift.getHistories().then(function(v) { console.log(v) }) を実行
[
    {
        sceneName: "__title",
        context: "v2/",
        userName: "アツマライオン",
        point: 1000,
        comment: "ゲーム開発、がんばライオン！",
        reply: "ありがライオン！！！！！",
        thanks: true,
        createdAt: 1534567890,
    },
    {
        sceneName: "map1",
        context: "v2/MapEvent1/page1/%E3%81%93%E3%81%AF",
        userName: "RPGアツマール開発チーム",
        point: 10000,
        comment: "",
        reply: "",
        thanks: false,
        createdAt: 1534517890,
    }
]
```
    
#### 起こりうるエラーの種類
    
名前|説明
:---|:---
[INTERNAL_SERVER_ERROR](/common/error)|RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/error) |短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている
    
### ギフトランキング取得
    
メソッド |`window.RPGAtsumaru.gift.getRanking()`
:---|:---
説明|このゲームに対してのギフトランキングを、最大5件まで取得します。
引数|なし
戻り値|`Promise<GiftRanking>`
制限|このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です
    
#### 戻り値の型 GiftRanking について
戻り値で取得できる `GiftRanking` は以下のような型です。
    
```js
type GiftRanking = {
    userName: string;
    point: number;
}[]
```
    
プロパティの内容は次のようになっています。
    
|プロパティ|型|内容
:---|:---|:---
|(this)|`array`|ギフトランキング
|length|`number`|ギフトランキングの件数（※必ず5件まで。同着の場合5位までは入り切らないことも）
|[n].userName|`string`|n+1番目のランキングのユーザー名
|[n].point|`number`|n+1番目のランキングのポイント
    
#### 戻り値の例
戻り値で取得できる `GiftRanking` は以下のような型です。
    
```js
// window.RPGAtsumaru.gift.getRanking().then(function(v) { console.log(v) }) を実行
[
    {
        userName: "RPGアツマール開発チーム",
        point: 30000
    },
    {
        userName: "アツマライオン",
        point: 3000
    }
]
```
#### 起こりうるエラーの種類
    
名前|説明
:---|:---
[INTERNAL_SERVER_ERROR](/common/error)|RPGアツマールのサービス側で何らかの問題が発生しているか、または通信に失敗した
[API_CALL_LIMIT_EXCEEDED](/common/error) |短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている
    
## 関連ドキュメント
    
ドキュメント|リンク|備考
:---|:---|:---
機能解説|[ギフト](/gift)|機能概要や全般的な解説
プラグインでの利用方法|[プラグインでの利用方法](/plugins)|RPGツクールシリーズユーザー向け

## 最終更新日
 - 2020/10/30
