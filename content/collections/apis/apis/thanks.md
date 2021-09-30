---
title: おれいポップアップ
slug: apis/thanks
description: 「おれいポップアップ」のAPIでの利用方法
order: 17
navi: APIでの利用方法
---
    
## APIでの利用方法

### おれいポップアップ表示

メソッド |`window.RPGAtsumaru.popups.displayThanksModal()`
:---|:---
説明|おれいポップアップを表示します
引数|なし
戻り値|`Promise<void>`

### おれいポップアップ設定

メソッド |`window.RPGAtsumaru.popups.setThanksSettings(thanksSettings: ThanksSettings)`
:---|:---
説明|おれいポップアップを自動表示するかどうかと、表示する画像やメッセージを設定します
引数|`ThanksSettings`
戻り値|なし
    
#### 引数の型 ThanksSettings について
引数で指定する `ThanksSettings` は以下のような型です。
    
```js
interface ThanksSettings {
    autoThanks?: boolean;
    thanksText?: string;
    thanksImage?: string;
    clapThanksText?: string;
    clapThanksImage?: string;
    giftThanksText?: string;
    giftThanksImage?: string;
}
```
    
プロパティの内容は次のようになっています。
    
|プロパティ|型|内容
:---|:---|:---
|autoThanks|`boolean`|おれいポップアップの自動表示を有効にするかどうか
|thanksText|`string`|おれいポップアップに表示される作者からのメッセージ
|thanksImage|`string`|おれいポップアップに表示される画像。ゲーム内のURL、またはData-Url形式も可
|clapThanksText|`string`|拍手されたときにおれいポップアップに表示される作者からのメッセージ
|clapThanksImage|`string`|拍手されたときにおれいポップアップに表示される画像。ゲーム内のURL、またはData-Url形式も可
|giftThanksText|`string`|ギフトされたときにおれいポップアップに表示される作者からのメッセージ
|giftThanksImage|`string`|ギフトされたときにおれいポップアップに表示される画像。ゲーム内のURL、またはData-Url形式も可
    
#### 引数の例
    
```js
RPGAtsumaru.popups.setThanksSettings({
    autoThanks: false,
    thanksText: "プレイありがとう！",
    thanksImage: "img/pictures/Actor1_1.png", // ゲーム内画像を指定する場合
    clapThanksImage: "data:******", // Data-Url形式も指定可。画像の動的生成などにどうぞ
    // 設定不要or前の設定のままにしておきたいプロパティは省略可
});
```

## 関連ドキュメント
    
ドキュメント|リンク|備考
:---|:---|:---
機能解説|[おれいポップアップ](/thanks)|機能概要や全般的な解説
プラグインでの利用方法|[プラグインでの利用方法](/plugins)|RPGツクールシリーズユーザー向け

## 最終更新日
 - 2021/09/30
