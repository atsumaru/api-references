---
title: ニコニ広告情報を取得する
slug: nicoad
description: プレイ中のゲームに関するニコニ広告情報を取得します。
order: 29
experimental: true
---

## 概要

ニコニ広告情報を取得します。

### なにができるのか

次の3種類の取得方法を提供しています。

- ニコニ広告ポイント取得
- ニコニ広告履歴取得
- ニコニ広告貢献度ランキング取得

#### 利用想定／利用例

この機能は、以下のような使い方を想定しています。

- ゲームが広告されている間だけ、特別な部屋に入室できる
- 広告履歴をもとに、ゲームを広告してくれたユーザーの名前を表示してお礼を述べるシーンを作る

## 利用方法

本機能は次の方法で利用できます。

方法 | 場所
:---|:---
RPGアツマール公式プラグイン | [Github](https://github.com/atsumaru/mv-plugins/blob/master/plugins/AtsumaruNiconicoukokuExperimental.js)
ゲームAPI | 以下の「APIでの利用方法」を参考に、直接APIを呼び出してください

### 公式プラグインの利用方法

公式プラグインで外部リンクを設置するには以下のようにします。

1. プロジェクトのプラグインフォルダに [AtsumaruNiconicoukokuExperimental.js](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruNiconicoukokuExperimental.js) を右クリックし「保存」して設置
1. プロジェクトのプラグイン設定で `AtsumaruNiconicoukokuExperimental` プラグインをONにする。

#### ニコニ広告ポイント取得

- このゲームに対して、合計何ポイント広告されたかを取得できます。
- アクティブポイントとは、[広告期間](https://qa.nicovideo.jp/faq/show/9770)以内の広告の合計ポイントです。
- トータルポイントとは、広告期間が終了したものも含めたすべての広告の合計ポイントです。
- このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です。


1. プラグイン設定画面でプラグインパラメータ「アクティブポイント」「トータルポイント」「エラーメッセージ」にそれぞれの結果を代入する変数を設定します。
1. プラグインコマンドは次のいずれかのように指定します。（どちらでも動作は同じです）

```
GetNicoadPoints
ニコニ広告ポイント取得
```

### APIでの利用方法

#### ニコニ広告ポイント取得

メソッド | `window.RPGAtsumaru.experimental.nicoad.getPoints()`
:---|:---
説明 | このゲームに対して、合計何ポイント広告されたかを取得できます
引数 | なし
戻り値 | `Promise<NicoadPoints>`
制限 | このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です
リリース日 | 2019/07/22
更新日 | 2019/07/22

##### 戻り値の型 NicoadPoints について

戻り値で取得できる `NicoadPoints` は以下のような型です。

```js
interface NicoadPoints {
  activePoint: number;
  totalPoint: number;
}
```

プロパティの内容は次のようになっています。

プロパティ名 | 型 | 内容
:---|:---|:---
activePoint | `number` | アクティブポイント：[広告期間](https://qa.nicovideo.jp/faq/show/9770)以内の広告の合計ポイント
totalPoint | `number` | トータルポイント：広告期間が終了したものも含めたすべての広告の合計ポイント

##### 戻り値の例

```js
// window.RPGAtsumaru.experimental.nicoad.getPoints().then(function(v) { console.log(v) }) を実行
{
  activePoint: 3000,
  totalPoint: 10000
}
```

##### 起こりうるエラーの種類

名前 | 説明
:---|:---
[INTERNAL_SERVER_ERROR](/common/errors) | RPGアツマールもしくはニコニ広告のサービス側で何らかの問題が発生しているか、または通信に失敗した（※ユーザーが広告ブロックしている場合も含む）
[API_CALL_LIMIT_EXCEEDED](/common/errors) | 短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている

#### ニコニ広告履歴取得

メソッド | `window.RPGAtsumaru.experimental.nicoad.getHistories()`
:---|:---
説明 | このゲームに対してのニコニ広告の履歴を、最新のものから順に最大30件まで取得します
引数 | なし <!-- `offsetAdId` : この引数に広告ID(nicoadId)を指定すると、最新からではなく指定したIDの次の広告から順に最大30件まで取得します -->
戻り値 | `Promise<NicoadHistories>`
制限 | このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です
リリース日 | 2019/07/22
更新日 | 2019/07/22

##### 戻り値の型 NicoadHistories について

戻り値で取得できる `NicoadHistories` は以下のような型です。

```js
interface NicoadHistories {
  remainingCount: number;
  serverTime: number;
  histories: {
    advertiserName: string;
    nicoadId: number;
    adPoint: number;
    contribution: number;
    startedAt: number;
    endedAt: number;
  }[];
}
```

プロパティの内容は次のようになっています。

プロパティ名 | 型 | 内容
:---|:---|:---
remainingCount | `number` | 今回取得した広告履歴の他に、あと何件広告されたか
serverTime | `number` | サーバー時刻
histories | `array` | 広告履歴
histories.length | `number` | 今回取得した広告履歴の件数
histories[n].advertiserName | `string` | n+1番目の広告の広告者名
histories[n].nicoadId | `number` | n+1番目の広告の広告ID
histories[n].adPoint | `number` | n+1番目の広告のポイント
histories[n].contribution | `number` | n+1番目の広告の貢献度
histories[n].startedAt | `number` | n+1番目の広告の掲載開始時間
histories[n].endedAt | `number` | n+1番目の広告の掲載終了時間

##### 戻り値の例

```js
// window.RPGAtsumaru.experimental.nicoad.getHistories().then(function(v) { console.log(v) }) を実行
{
  remainingCount: 0,
  serverTime: 1534570000,
  histories: [
    {
      advertiserName: "アツマライオン",
      nicoadId: 1234567,
      adPoint: 1000,
      contribution: 3000,
      startedAt: 1534567890,
      endedAt: 1534654290,
    },
    {
      advertiserName: "RPGアツマール開発チーム",
      nicoadId: 1234560,
      adPoint: 10000,
      contribution: 30000,
      startedAt: 1534517890,
      endedAt: 1534604290,
    }
  ]
}
```

##### 起こりうるエラーの種類

名前 | 説明
:---|:---
[INTERNAL_SERVER_ERROR](/common/errors) | RPGアツマールもしくはニコニ広告のサービス側で何らかの問題が発生しているか、または通信に失敗した（※ユーザーが広告ブロックしている場合も含む）
[API_CALL_LIMIT_EXCEEDED](/common/errors) | 短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている

#### ニコニ広告貢献度ランキング取得

メソッド | `window.RPGAtsumaru.experimental.nicoad.getRanking()`
:---|:---
説明 | このゲームに対してのニコニ広告の貢献度ランキングを、最大30位まで取得します
引数 | なし
戻り値 | `Promise<NicoadRanking>`
制限 | このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です
リリース日 | 2019/07/22
更新日 | 2019/07/22

##### 戻り値の型 NicoadRanking について

戻り値で取得できる `NicoadRanking` は以下のような型です。

```js
type NicoadRanking = {
  advertiserName: string;
  totalContribution: number;
  rank: number;
}[]
```

プロパティの内容は次のようになっています。

プロパティ名 | 型 | 内容
:---|:---|:---
(this) | `array` | 広告貢献度ランキング
length | `number` | 広告貢献度ランキングの件数（※同着の場合両方含まれるため、31件以上の可能性あり）
[n].advertiserName | `string` | n+1番目のランキングの広告者名
[n].totalContribution | `number` | n+1番目のランキングの貢献度
[n].rank | `number` | n+1番目のランキングの順位

##### 戻り値の例

```js
// window.RPGAtsumaru.experimental.nicoad.getRanking().then(function(v) { console.log(v) }) を実行
[
  {
    advertiserName: "RPGアツマール開発チーム",
    totalContribution: 30000,
    rank: 1
  },
  {
    advertiserName: "アツマライオン",
    totalContribution: 3000,
    rank: 2
  }
]
```

##### 起こりうるエラーの種類

名前 | 説明
:---|:---
[INTERNAL_SERVER_ERROR](/common/errors) | RPGアツマールもしくはニコニ広告のサービス側で何らかの問題が発生しているか、または通信に失敗した（※ユーザーが広告ブロックしている場合も含む）
[API_CALL_LIMIT_EXCEEDED](/common/errors) | 短時間にゲームAPIを利用しすぎて、一時的に利用を制限されている
