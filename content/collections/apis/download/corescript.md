---
title: コミュニティ版コアスクリプトをダウンロードする
slug: download/corescript
description:
order: 4
---

## 概要

- ここでは、RPGツクールMV用コアスクリプトの「コミュニティ版」を配布しています。  
- 本スクリプトを利用することで、製作中のゲームがこれまでよりもバグが少なく、安定し、高速になります。
- 本ページで配布しているのは『RPGツクールMV』コアスクリプトのオープンソース版です。配布者はドワンゴ、開発者はコミュニティのユーザーとなります。
- 本サイトで配布しているコアスクリプトは数ヶ月に１度KADOKAWA社よりRPGツクールMVに取り入れられ、配布される予定です。
- 利用に際しては、免責事項、[ライセンス](https://github.com/rpgtkoolmv/corescript/blob/master/LICENSE)等をご確認ください。

### オープンソースリポジトリ（GitHub）

- https://github.com/rpgtkoolmv/corescript

### 導入方法

- こちらのページで詳しく解説をしています。[コアスクリプトの更新方法](corescript-usage)
- ※コアスクリプトを置き換えたことにより、ゲーム及びプラグインの挙動が変化する場合があります。

### FAQ

- Q: 不具合が起きた場合はどうすればよいでしょうか？
- A: コミュニティ版コアスクリプトはオープンソースとして、専用 [Slack](https://rpg-atsumaru.slack.com/) で議論がされ、[Github](https://github.com/rpgtkoolmv/corescript) で開発が進められています。不具合報告は Slack に報告いただくか、Github で issue を立てていただければ改修に向けて精査されます。

## 免責事項

    ＜免責事項＞

    1.  利用者は、株式会社ドワンゴ（以下「当社」といいます）が無償で公開する株式会社KADOKAWAが提供するゲーム制作支援ソフトウェア「RPGツクール」で利用可能なコアスプリクト（以下「RPGアツマール版 コアスクリプト」といいます）の利用を、利用者自身の責任の下で行うものとします。当該利用に関わる一切の危険は利用者のみが負うものであり、当社は一切関与せず一切の責任も負わないことを利用者はここに確認し、同意するものとします。

    2.  当社は、RPGアツマール版 コアスクリプトに関し、その確実性、正確性、安全性、有用性、第三者権利侵害の有無、及び特定目的への適合性のいずれについても保証するものではありません。

    3.  当社は、RPGアツマール版 コアスクリプトに関し、利用者による利用開始時点におけるRPGアツマール版 コアスクリプトと同等の利用環境を永続的に保証するものではありません。

    4.  利用者は、RPGアツマール版 コアスクリプトの利用に起因して発生した一切の直接・間接の損害ないし危険はすべて利用者のみが負うことをここに確認し、当社は一切関与せず一切の責任も負わないものとします。

     以上

## ダウンロード

### 最新バージョン（Latest release）
**community-1.3b** (2019-01-07)
---
#### 概要
- community-1.3で指摘いただいた問題点の修正と、その他変更を加えました。
- community-1.3及び1.3bは、オリジナルのRPGツクールMVバージョン1.6.1に改良を加えています。 バージョン1.6.1までのコアスクリプトをお使いの場合は、ぜひお試しください。

#### 不具合修正
- オートセーブしたデータをロードした際に、移動前のマップのBGMが流れてしまう不具合を修正しました。
- ゲームウィンドウを縮小した後に、スクロールバーが表示されてしまう不具合を修正しました。
- *Community_Basic.js* プラグインの「常時ダッシュ」の初期値に関して、以前のバージョンとの互換性を回復しました。

*In English*
#### Fixes
- Fix previous map bgm sounds after loading auto save data
- Fix scroll bar showed after resize game window
- Recover compatibility of the "alwaysDash" value of *Community_Basic.js*

**[免責事項を確認の上、ダウンロードする](http://dl.cdn.nimg.jp/atsumaru/atsumaru/corescript/1/3/community-1.3b_190116.zip)**

### 以前のバージョン（Older relaeses）

#### community-1.1 (2017-03-10)

<details><summary>community-1.1 リリースノート</summary>
<div>

---------  
**概要**  
 今回のキーワードは「バグ修正」「WebGL」「プリロード（事前読み込み）」です。 特にモバイル端末でもWebGLモードを採用したことによってより高速で高級なゲームの描画が実現されました。 また、プリロードによって後に扱う画像をあらかじめバックグラウンドで（ゲームを固めずに）ロードするようにしましたので、回線が細い環境でもある程度快適に楽しんで頂けると思います！    
---------  
**新機能**  
画像のプリロード（事前読み込み）機能を追加しました。  
マップ、コモン、バトルの各イベントの開始時に、そのイベントページの命令を解析して使用する画像を先行して読み込みます。読み込んでいる間もゲームの動作は止まりませんので、体感的には読み込みが早くなります。このプリロードシステムはプラグインからも`ImageManager.requestXxxxx`の形で利用することが出来ます。  
---------  
**仕様変更**  
- メモリ管理機構を導入しました。  
あらかじめ機構で定められたメモリの使用量上限以上に画像を溜め込まないようになりました。この上限値は`ImageCache.limit`で定義されていますので、必要に応じてプラグインなどで変更することができます。  
- すべての環境でWebGLモードを採用しました。  
これまではモバイル端末では強制的にcanvasモードで起動してきましたが、上記のメモリ問題の解消にともなってWebGLモードを使用できるようになりました。WebGLはブラウザの新しい描画APIで、canvasモードよりも高速で高級な描画が可能になります。これによりモバイル端末でのゲームの動作速度が改善するほか、WebGLを用いたプラグインがモバイル端末でも動くようになるなど多岐にわたるメリットがあります。  
- フォントの読み込み方法を改善しました。  
一部のブラウザで有効なCSS Font Loadingという仕組みによる読み込みを採用しました。これにより対応ブラウザではフォントの読み込みに20秒以上かかってもFont load errorが出なくなります。また、Chromeで別のゲームのフォントが混ざる不具合が解消されます。  
- 「ムービーの再生」に関して複数の点を変更しました。    
まず、Androidでムービーの再生が出来ない不具合を修正しました。次にムービーが終了するまでイベントコマンドが進まないようにしました。また、iPod/iPhoneでのムービー再生はこれまでフルスクリーンとなっていましたが、ユーザー体験を統一するため他のデバイスと同じインライン方式にしました。  
- 顔画像つき文章の表示、アニメーションの表示、タイルセットの変更の際の画像読み込み待機を必要最小限にしました。  
これらの命令ではすべての画像が読み込まれるまで待機していましたが、関係ない画像が読み込まれるまで待つといたずらに時間がかかる可能性がありました。そこでそれぞれの命令で使用する画像のみ読み込みを待つように変更しました。  
---------  
**不具合修正**  
- 「ピクチャの消去」時にエラーが発生することがある不具合を修正しました。  
- 並列処理イベント実行中のセーブが失敗することがある不具合を修正しました。  
- boxWidth, boxHeightを変更していると表示がおかしくなる不具合を修正しました。  
- iOS8のSafariで動作しない不具合を修正しました。  
- ME演奏後や戦闘終了後にBGM/BGSの音量を変更できない不具合を修正しました。  
- 二つ目の武器のアニメーションが正しく反転されていない不具合を修正しました。  
- windowLayerにプラグインなどでスプライトを追加すると表示されないことがある不具合を修正しました。  
- mac及びiOSでゲーム画面に黒線が表示される不具合を修正しました。（Pixi4.4.1への更新による修正）  
---------  
**特にテストしてほしいところ**  
変えたところをテストして頂けるとありがたいです！（そりゃそうだ）  
特に画像の読み込み系の変更（メモリに関する修正とプリロード）は大きな改変ですので、画像をたくさん使ってるゲームがあったらテストしてもらえると助かります！  
矢継ぎ早にピクチャーを出しまくる、シーンを切り替えまくるなど画像を大量に使い、切り替えるテスト大歓迎です。  
テストの際は同梱の *Debug_ReportMemory.js* をお使いください！右上に読み込んでいる画像のサイズや数が表示されます。  
正常に動作していればこの数字が一定です。もしも増え続けるようだとやばいかもなので状況と共にご報告頂けるとうれしいです。  
---------  
**今回のコミッター（コードを書いた人）**   
- liply  
- くらむぼん  
- wilfrem  
- ivanpopelyshev  
---------  
**次回予告**  
はじめに、画像を読み込んで...ちくしょう！読み込みエラーだ！  
お前はいつもそうだ。このゲームはお前の人生そのものだ。  
お前は色んなゲームに手をつけるが、一つだってエラー無しでクリアできない。誰もお前を愛さない。  
次回、「さらば画像ロードエラー、来たれロードリトライ！」お楽しみに！  
---------  
**[免責事項を確認の上、ダウンロードする](http://dl.cdn.nimg.jp/atsumaru/atsumaru/corescript/1/1/community-1.1.zip?170310)**

</div></details>



#### community-1.1b (2017-03-13)

<details><summary>community-1.1b リリースノート</summary>
<div>

---------  
**概要**  
- community-1.1で指摘いただいた問題点を修正しました。  
 ---------  
**不具合修正**  
- コアスクリプトのファイル最上部にコミュニティバージョンを追記  
- すべての付属プラグインに日本語の説明文を追記  
- 画像の間違った範囲がくり抜かれることがあるバグを修正  
- 画像を暗号化しているとプレイできないエラーを修正  
- Pixiからの警告文が出ないように修正  
- プラグイン作者向け：循環参照のバグを修正  
---------  
**[免責事項を確認の上、ダウンロードする](http://dl.cdn.nimg.jp/atsumaru/atsumaru/corescript/1/1/community-1.1b.zip?170313)**

</div>
</details>

#### community-1.2 (2017-05-08)
<details><summary>community-1.2 リリースノート</summary>
<div>

---------  
**概要**  
今回のテーマは「ゲームが止まることを防ぐ」です。  
まず「データの読み込み失敗時にリトライする」機能を追加しました。これでもう、たった一度のロードエラーでゲームを台無しにして机の下に潜り込むことはありませんね！  
続いて「利用メモリの削減」をしました。ベストケースで画像のメモリ利用量が半分になり、多数の画像を用いても落ちにくくなります。他にもいくつか不具合修正や改善が行われています。  
---------  
**新機能**  
- リソースの読み込み失敗時にリトライする機能を追加しました。  
画像、音声、動画、マップデータ（これらをまとめて「リソース」と呼びます）の読み込みに失敗した場合、まず３回まで自動でロードをやり直します。それでもうまくいかない場合はロードに失敗したファイル名とリトライボタンを表示しますので、電波の入る位置に移動してからボタンをタッチ（または決定キーを押す）してください。  
- （技術者向け）マスターボリュームAPIを追加しました。  
`AudioManager.masterVolume`に数値（最小値:0,最大値:1,初期値:1） を代入すると、すべてのBGM,BGS,ME,SE,ムービーの音量を一括で変更できます（オプションや曲ごとの音量設定は掛け算されます）。  
---------  
**仕様変更**  
- canvasモードとWebGLモードの選択を自動選択にしました。  
canvasモードとWebGLモードの選択を自動選択（WebGLに対応している場合のみWebGLモード）にしました。Android4.4系の一部端末でWebGLモードに対応していなかったためです。ほとんどのモバイルデバイスでWebGLが使えるようになった点は変わりないのでご安心ください。  
- 画像のメモリ量を節約しました。  
Bitmapの内部動作を変更し、画像のメモリ量を節約しました。ベストケースで画像のメモリ量が半減します。  
---------  
**不具合修正**  
- モバイルデバイスのChromeでゲーム内をスワイプするとゲーム外部分がスクロールしてしまう不具合を修正しました。  
- Firefoxで正常に音声がフェードアウトしない不具合を修正しました。  
- *rpg_core.js* 内の説明コメントを修正しました。  
- コモンイベント内で同じコモンイベントを呼び出すとエラーが出る不具合を修正しました。  
- 画像暗号化モードで画像が読み込めなかった時にエラーが出ない不具合を修正しました。  
---------  
**特にテストしてほしいところ**  
今回も「リトライ」「画像メモリ節約」などの画像表示に関する新機能と変更が中心ですので、画像を色んなパターンで、たくさん使ったテストをしていただけるとありがたいです。ご自分のゲームでそのまま試して頂くのが手っ取り早いですね！  
リトライ機能をテストする時は同梱している *Debug_FailLoading.js* という読み込み失敗用のプラグインをお使いください！  
---------  
**今回のコミッター（コードを書いた人）**  
- liply  
- くらむぼん  
- wilfrem  
- niokasgami  
- ruたん  
---------  
**次回予告**  
やめて！ 長いボス専用演出に加えて派手な炎アニメーションを読み込ませられたら、スマホのバッテリーまで燃え尽きちゃう！   
お願い、死なないでバッテリー！ あんたが今ここで倒れたら、かれこれ３時間のゲームプレイはどうなっちゃうの？   
電池はまだ残ってる。ここを耐えれば、セーブポイントに辿り着けるんだから！  
次回、「バッテリー死す。謎のオートセーブの正体とは！？」お楽しみに！  
---------  
**[免責事項を確認の上、ダウンロードする](http://dl.cdn.nimg.jp/atsumaru/atsumaru/corescript/1/2/community-1.2.zip?170508)**

</div>
</details>



#### community-1.2b (2017-05-09)
<details><summary>community-1.2b リリースノート</summary>
<div>

---------  
**概要**  
- community-1.2で指摘いただいた問題点を修正しました。  
---------  
**不具合修正**  
- ツクール上の操作で多くの画像が拡大縮小された時にぼやける不具合を修正  
- フィールド上のFPSが本家ＲＰＧツクールよりも遅い問題を修正  
- Pixiのバージョンを本家RPGツクールMVのものに統一  
---------  
**in English**  
- fix images' blurring  
- fix FPS of field screen  
- unify pixi version to original RPGMakerMV  
----------  
**[免責事項を確認の上、ダウンロードする](http://dl.cdn.nimg.jp/atsumaru/atsumaru/corescript/1/2/community-1.2b.zip?170509)**
</div>
</details>

#### community-1.2c (2017-05-17)
<details><summary>community-1.2c リリースノート</summary>
<div>

---------  
**追記**  
- community-1.2c が RPGツクールMV ver1.5.0 のコアスクリプトとして採用されました。    
---------  
**概要**  
- community-1.2bで指摘いただいた問題点の修正と、その他変更を加えました。  
---------  
**変更点**  
- ピクチャーの変更時に前のピクチャーがちらつく問題を修正  
- リトライボタンが表示されている間はゲームをポーズするようにした  
- メモリリポートプラグインで重複する画像を複数回カウントしないようにした  
- 透明な上層チップを置くと、同じ位置の「前のマップの」不透明チップが置かれる不具合を修正  
- 同梱プラグインの *Debug_FailLoading.js* が動作しない不具合を修正  
- Scene_Baseに説明コメントを追加  
- コアスクリプトのファイルをすべて正しくコピーできているか確かめるヘルスチェックプラグインを追加  
- キャッシュ上限値や解像度、常時ダッシュの初期値などを設定できるベーシックプラグインを追加 。(2017/5/22更新：ウィンドウサイズも変更できるようにアップデートされています。)  
---------  
**in English**  
- Fix the previous picture flickers when changing pictures  
- Pause the game while the retry button is displayed  
- Change *Debug_MemoryReport.js* that duplicate images are not counted more than once  
- Fix opaque chips of the PREVIOUS map at the same position are placed when placing a transparent upper layer chip  
- Fix *Debug_FailLoading.js* does not work  
- Add docs to Scene_Base  
- Add *Debug_HealthCheck.js* to check that all core script files are correctly copied  
- Add *Community_Basic.js* that allows you to set cache upper limit value, resolution and default value of AlwaysDash  
---------  
**[免責事項を確認の上、ダウンロードする](http://dl.cdn.nimg.jp/atsumaru/atsumaru/corescript/1/2/community-1.2c_170522.zip)**
</div>
</details>


#### community-1.3 (2018-12-17)
<details><summary>community-1.3 リリースノート</summary>
<div>

---------  
**概要**  
みなさん、おまたせしました！  
一年間のブランクを空け、コミュニティ版コアスクリプトが戻ってきました！！  
今回は様々な不具合修正に加え、オートセーブやローディングバーなどの新機能を追加しました。  
新機能は *Community_Basic.js* プラグインによって有効化できますので、ぜひ活用してみてくださいー。  
---------  
**新機能**  
- マップ切替時にオートセーブする機能を追加しました。  
- シーン切替時に画像・音声の読み込み状況を表示するローディングバーを追加しました。  
- エラー発生時に詳細な情報（エラーが発生したイベントの情報・行番号やスタックトレースなど）を表示できるようになりました。  
- テキストスピードを変更できる機能を追加しました。文章の表示内で\S[数字]でスピードを変更でき、数字が大きいほどスピードが遅くなります（0で瞬間表示）。また、*Community_Basic.js* プラグインを用いてデフォルト値を指定できます。  
- 新機能はいずれも *Community_Basic.js* プラグインを用いて有効化することができます。  
---------  
**改善**  
- 敵キャラクター画像などがフラッシュする際の負荷を軽減しました。  
- ゲームをセーブ＆ロードする処理の負荷を軽減しました。  
- その他に数点、細かく効率を改善しました。  
---------  
**不具合修正**  
- Crosswalkを用いてAndroidアプリ版を出力するとゲームが正常に動作しない不具合を修正しました。  
- Enigma Virtual Boxを用いて出力したゲームで遊ぶとセーブができなくなる不具合を修正しました。  
- ブラウザ拡張によってエラーが発生した際に、ゲームが停止しないように修正しました。  
- iOSでローディングエラーが発生した場合に、リトライボタンをタッチできない不具合を修正しました。  
- 21pxよりも小さい文字を描画すると文字が滲む不具合を修正しました。  
- 状態異常などでアイテムを使用可能なパーティーメンバーが一人もいない状態でアイテムを使用するとエラーになる不具合を修正しました。  
- 大きな(ファイル名が$で始まる)キャラクターがウィンドウ内に正しく描画されない不具合を修正しました。  
- 一部のoggファイルのループタグを正しく読み込めない不具合を修正しました。  
- リフレッシュレートの高いモニターでプレイするとプレイ時間が早回しになる不具合を修正しました。  
- Safariブラウザで文字の描画位置が１ピクセルずれている不具合を修正しました。  
- `Object.create(null)` で作成されたオブジェクトをセーブした場合、エラーになる不具合を修正しました。  
- ゲーム画面がフォーカスを失った際に、画面をタッチしたままの状態になる不具合を修正しました。  
- マップイベントをロングタッチしていると、二重にイベントを起動することがある不具合を修正しました。  
- Chrome 69において、ウィンドウの背景や中身が正しく表示されないことがある不具合を修正しました。  
- バージョン1.5.0以降、ニューゲーム時に遠景よりもマップの表示が一瞬だけ遅れる（遠景がちらつく）不具合を修正しました。  
- ゲームをプレイ中にユーザーエージェントをiOS Safariから他のものへ切り替えると画面が停止する不具合を修正しました。  
- 極稀に音声が聞こえているのにもかかわらずゲーム画面が動かなくなる不具合を修正しました。  
- その他に、プラグインを用いた際に不具合の原因となるコードをいくつか修正しました。  
---------  
**今回のコミッター（コードを書いた人）**  
- liply  
- くらむぼん  
- しぐれん  
- bungcip  
- wilfrem  
- 白  
- ruたん  
- サンシロ  
---------  
**次回予告**  
問．たかし君がギターを演奏すると、PC版のゲームでは0.5秒後に、スマホ版では5秒後に聞こえました。 音の速さが340m/sだとすると、PC版とスマホ版の間の距離は何メートルでしょうか？  
答．どちらのゲームもあなたの目の前にありますが、音声の再生開始までに時間がかかっています。  
次回、「音を置き去りにしない！」お楽しみに！  
---------  
**In English**  
---------  
**Summary**  
Hi, everyone. The community version corescript is back!  
We fixed many of bugs, and added new features such as autosave and loading bar.  
New features can be activated by the *Community_Basic.js* plugin.  
Enjoy new corescript!  
---------  
**Features**  
- Add autosave when you move to another map.  
- Add a loading bar that displays loading status of images and sounds when switching to another scene.  
- Add detailed information (information of the event where the error occurred, line number, stack trace, etc.) when an error occurs.  
- Add changing text speed. Within the "Show text..." you can change the speed with \S[number], the higher the number the slower the speed (if 0, show all texts at once). You can also specify a default value using the *Community_Basic.js* plugin.  
- You can enable (or disable) each of these features by *Community_Basic.js* plugin.  
---------  
**Improvements**  
- Improve the efficiency of flushing images (such as enemy characters).  
- Improve the efficiency of processing to save and load games.  
- Several other points, the efficiency is improved.  
---------  
**Fixes**  
- Fix the game does not work properly when deploying to Android app using Crosswalk.  
- Fix cannot save when playing the game deployed using Enigma Virtual Box.  
- Fix to prevent the game from stopping when an error occurs due to browser extension.  
- Fix cannot touch the retry button when loading error occurred on iOS.  
- Fix letters blurred when drawing smaller characters than 21px.  
- Fix an error when using an item without party member that can use items due to a bad status or the like.  
- Fix large characters (whose filename begins with $) are not rendered correctly in the window.  
- Fix loop tag of some ogg files cannot be read correctly.  
- Fix playing time fast-forwarded when playing on a monitor with a higher refresh rate.  
- Fix where the drawing position of letters is shifted by 1 pixel in Safari browser.  
- Fix an error when saving objects created with `Object.create(null)`.  
- Fix keep touching when the game screen loses focus.  
- Fix double trigger events when long touching map events.  
- Fix the background and contents of the windows might not be displayed correctly on Chrome 69.  
- Fix rendering the map is delayed for a moment than the parallax at NewGame.  
- Fix the game freezes when user agent is changed from iOS Safari to another while playing the game.  
- Fix the game screen freezes despite sound being heard.  
- Several other points, fix some code that might cause the problem when using plugin.  
---------  
**Committers**  
- liply  
- krmbn0576  
- Sigureya  
- bungcip  
- wilfrem  
- white-mns  
- rutan  
- rev2nym  
---------  
**Trailer**  
Question: When Takashi-kun played the guitar, it sounded 0.5 seconds later in the RMMV game for PC and 5 seconds later for smartphone. If the sound speed is 340 m/s, how many meters is the distance between the PC version and the smartphone version?  
Answer: Both games are in front of you, but it takes time to start playing the sound.  
Next time, "Overcome delaying of sounds!" Look forward to it!  
---------  
**[免責事項を確認の上、ダウンロードする](http://dl.cdn.nimg.jp/atsumaru/atsumaru/corescript/1/3/community-1.3_181217.zip)**
</div>

</details>

### 付記
#### コアスクリプトバージョン ダイアグラム
『RPGツクールMV』本体のコアスクリプトとのバージョンの違いや関係性を表現しています。

![diagram](/images/download/corescript_version_diagram.png)  
<a href="/images/download/corescript_version_diagram.png" target="_blank">拡大表示</a>
