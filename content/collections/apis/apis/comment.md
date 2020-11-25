---
title: コメント
slug: apis/comment
description: 「コメント」のAPIでの利用方法
order: 6
navi: APIでの利用方法
---
    
## 目次
 - [シーン設定API](#シーン設定API)
 - [シーン切り替えAPI](#シーン切り替えAPI)
 - [コンテキストファクターAPI](#コンテキストファクターAPI)
 - [マイナーコンテキストAPI](#マイナーコンテキストAPI)
 - [コンテキストAPI](#コンテキストAPI)
 - [表示コメント取得API](#表示コメント取得API)
 - [投稿コメント取得API](#投稿コメント取得API)
 - [verboseモードAPI](#verboseモードAPI)
 - [シーンコメント取得API](#シーンコメント取得API)
 - [gposモード設定API](#gposモード設定API)
    
## APIでの利用方法
### シーン設定API
    
メソッド |`window.RPGAtsumaru.comment.changeScene(sceneName: string)`
:---|:---
説明|<ul><li>コメントシステムのシーンを設定する。</li><li>シーンが切り替わると、そのシーンのコメント空間に切り替わる。</li><li>ツクールでは基本的にマップID=シーン名となる。</li><li>サーバーアクセスが発生する。（ただし直近5つのsceneはキャッシュされ、再アクセスには発生しない）</li><li>シーン名は64文字までのascii限定。</li></ul><br>※なお、アンダースコア２つで始まるシーン名は特殊用途として予約されています。<br>予約されている中で現在利用可能なシーン名は `__title` と `__gameover` の2つで、 `__title` は内部状態の初期値になっています。
引数|シーン名を表す文字列
戻り値|なし
    
### シーン切り替えAPI
    
メソッド |`window.RPGAtsumaru.comment.resetAndChangeScene(sceneName: string)`
:---|:---
説明|<ul><li>changeSceneと違い、context(contextfactorとminorcontext)による内部状態をリセットしつつシーンを切り替える</li><li>サーバーアクセスが発生する。（ただし直近5つのsceneはキャッシュされ、再アクセスには発生しない）</li><li>ツクール製ゲームではタイトルとゲームオーバーで全員同じコメントが流れる機能のために使用しています。</li></ul>
引数|シーン名を表す文字列
戻り値|なし
    
### コンテキストファクターAPI
    
メソッド |`window.RPGAtsumaru.comment.pushContextFactor(factor: string)`
:---|:---
説明|<ul><li>コメントシステムにContextFactorとなる値(ツクールでいうセリフと選択肢)をpushして、contextを更新する。</li><li>contextが更新されることでgposが更新され、文脈にあわせたコメントが流れる。</li><li>また、minorcontextを初期化する。</li><li>**gpos v2では無効なため、利用非推奨**</li></ul>
引数|コメントシステムにpushするコンテキストを表す文字列
戻り値|なし
    
### マイナーコンテキストAPI
    
メソッド |`window.RPGAtsumaru.comment.pushMinorContext()`
:---|:---
説明|<ul><li>コメントシステムのgposを更新する。</li><li>contextが更新されることでgposKeyが更新され、文脈にあわせたコメントが流れる。</li><li>内部的にminorcontext値を持っており、それを+1することでgposを更新している。pushContextFactorを使うと、minorcontext値は初期値に戻される。</li><li>MinorContextは「ContextFactorのさらに細かい状態」を想定している。</li><li>ツクールではエンジンにwaitがかかるような命令で使用している。</li><li>**gpos v2では無効なため、利用非推奨**</li></ul>
引数|なし
戻り値|なし
    
### コンテキストAPI
    
メソッド |`window.RPGAtsumaru.comment.setContext(context: string)`
:---|:---
説明|<ul><li>pushContextFactorと違い、contextを引数に渡した値で直接書き換える。</li><li>特定のScene内でまったく同じゲーム状態を厳密に作りたい場合に使う。</li><li>このときの context の値は、ascii 64文字以下推奨。</li></ul>
引数|コンテキスト値を表す文字列
戻り値|なし
    
### 表示コメント取得API
    
メソッド |`window.RPGAtsumaru.comment.cameOut.subscribe(next: (comment: CameoutComments) => void)`
:---|:---
説明|<ul><li>ゲーム画面に今まさに流れるコメントをリアルタイムで取得できるAPIです。</li><li>表示前のコメントは取得できません。</li><li>このAPIでは[ギフト](/gift)についてもコメントの一種として取り扱うため、一緒くたに取得できます。</li></ul>
引数|RPGアツマールのコメント情報( `CameoutComments` )を受け取るコールバック関数
戻り値|`subscription` .unsubscribe(); 呼び出しにより、コールバック関数を解除できます

#### コメントの型 CameoutComments について
取得できる `CameoutComments` は以下のような型です。
    
```js
type CameoutComments = ({
    type: "comment"
    command: string
    comment: string
    createdAt: number
} | {
    type: "gift"
    command: string
    comment: string
    createdAt: number
    userName: string
    point: number
    thanks: boolean
    reply: string
})[]
```
    
プロパティの内容は次のようになっています。
    
|プロパティ|型|内容
:---|:---|:---
|(this)|`array`|現在のシーンに表示されたコメントのリスト
|length|`number`|コメントの件数
|[n].type|`string`|通常のコメントの場合 `comment` 、ギフトの場合 `gift`
|[n].command|`string`|n+1番目のコメントのコマンド
|[n].comment|`string`|n+1番目のコメントの内容
|[n].createdAt|`number`|n+1番目のコメントの投稿時刻（unix time sec）
|[n].userName|`string?`|n+1番目のギフトのユーザー名（※匿名でないギフトの場合のみ）
|[n].point|`number?`|n+1番目のギフトのポイント（※ギフトの場合のみ）
|[n].thanks|`boolean?`|n+1番目のギフトに作者からの感謝（ハートマーク）が送られているか（※ギフトの場合のみ）
|[n].reply|`string?`|n+1番目のギフトへの作者からの返信（※ギフトの場合のみ）
    
#### 使い方の例
    
```js
// まずsubscribeにより「画面上にコメントが表示されたらどうするか」を関数として登録する
var subscription = window.RPGAtsumaru.comment.cameOut.subscribe(function(comments) {
    // この関数は「ゲームの場面(gpos)が切り替わるたびに」実行され、
    // 引数のcommentsにはこの画面上に流れるコメントの情報が入っている
    console.log(comments);
});

// console.logの結果の例
[
    {
        // コメントの場合はcommand, comment, createdAtだけが取得でき、残りはundefined
        type: "comment",
        command: "",
        comment: "１ゲット",
        createdAt: 1534567890,
        userName: undefined,
        point: undefined,
        reply: undefined,
        thanks: undefined,
    },
    {
        // ギフトの場合はすべての項目が存在する。ただしcommentやreplyが空欄だったり、匿名のためuserNameが空欄なことはありうる
        type: "gift",
        command: "red shita big",
        comment: "ゲーム開発、がんばライオン！",
        createdAt: 1534567890,
        userName: "アツマライオン",
        point: 1000,
        reply: "ありがライオン！！！！！",
        thanks: true,
    }
]

// 登録を解除したい場合はunsubscribe
subscription.unsubscribe();
```

### 投稿コメント取得API
    
メソッド |`window.RPGAtsumaru.comment.posted.subscribe(next: (comment: PostedComment) => void)`
:---|:---
説明|<ul><li>このユーザーが今まさに投稿したコメント情報をリアルタイムで取得できるAPIです。</li><li>あくまで投稿時（コメントが黄色い枠で囲まれているとき）に取得できるAPIです。本人の投稿であっても、後に同じシーンに再訪した際は前述の表示コメントAPIの方に流れます。</li><li>このAPIでは[ギフト](/gift)についてもコメントの一種として取り扱うため、一緒くたに取得できます。</li></ul>
引数|RPGアツマールのコメント情報( `PostedComment` )を受け取るコールバック関数
戻り値|`subscription` .unsubscribe(); 呼び出しにより、コールバック関数を解除できます

#### コメントの型 PostedComments について
取得できる `PostedComment` は以下のような型です。
    
```js
type PostedComment = {
    type: "comment"
    command: string
    comment: string
} | {
    type: "gift"
    command: string
    comment: string
    point: number
}
```
    
プロパティの内容は次のようになっています。
    
|プロパティ|型|内容
:---|:---|:---
|type|`string`|通常のコメントの場合 `comment` 、ギフトの場合 `gift`
|command|`string`|投稿したコメントのコマンド
|comment|`string`|投稿したコメントの内容
|point|`number?`|投稿したギフトのポイント（※ギフトの場合のみ）
    
#### 使い方の例
    
```js
// まずsubscribeにより「このユーザーがコメントを投稿したらどうするか」を関数として登録する
var subscription = window.RPGAtsumaru.comment.posted.subscribe(function(comment) {
    // この関数は「このユーザーがコメントまたはギフトを投稿するたび」実行され、
    // 引数のcommentには投稿されるコメントの情報が入っている
    console.log(comment);
});

// console.logの結果の例（コメントの場合）
{
    type: "comment",
    command: "",
    comment: "１ゲット",
    point: undefined, // コメントの場合はpointはundefined
}

// console.logの結果の例（ギフトの場合）
{
    type: "gift",
    command: "red shita big",
    comment: "ゲーム開発、がんばライオン！",
    point: 1000, // ギフトの場合はpointにギフトの価格（消費ポイント）が入る。無料なら0
}

// 登録を解除したい場合はunsubscribe
subscription.unsubscribe();
```

### verboseモードAPI
    
変数 |`window.RPGAtsumaru.comment.verbose`
:---|:---
説明|trueを代入すると、コメントのgpos(game position)計算の内部情報をコンソールに出力します
代入値|`boolean`
    
#### verboseモードAPIのコンソールの出力例

gpos v1の場合

```
gamePos updated.
    texts: hoge/fuga/piyo
    increment: 1
```

gpos v2の場合

```
gpos v2 updated.
	scene: map1
	context: v2/MapEvent1/page1/%E3%81%93%E3%81%AF
	context(decoded): v2/MapEvent1/page1/こは
```

### シーンコメント取得API
    
メソッド |`window.RPGAtsumaru.comment.getSceneComments(sceneName: string)`
:---|:---
説明|シーン名を指定してそのシーンのコメントをまるごと取得します。このAPIには、ギフトは含まれません
引数|シーン名を表す文字列
戻り値|`Promise<{ command: string, comment: string, context: string }>`

### gposモード設定API
    
メソッド |`window.RPGAtsumaru.comment.changeAutoGposMode(mode: string)`
:---|:---
説明|`v1` `v2` を指定するとgpos v1, v2に変更します。 `none` でgposの自動設定自体を無効にできます
引数|モードを表す文字列。 `v1` `v2` `none` のどれか一つ
戻り値|
    
## 関連ドキュメント

ドキュメント|リンク|備考
:---|:---|:---
機能解説|[コメント](/comment)|機能概要や全般的な解説
プラグインでの利用方法|[プラグインでの利用方法](/plugins)|RPGツクールシリーズユーザー向け
    
## 最終更新日
 - 2020/11/25
