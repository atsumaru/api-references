---
title: FAQ
slug: general/faq
description: RPGアツマール ゲームAPI の FAQ
order: 4
navi: 一般ドキュメント
experimental: 
---
  
## 概要
RPGアツマール ゲームAPIに関するFAQを掲載しています。
  
サービスのヘルプ、FAQも合わせてご確認ください。
  
[https://qa.nicovideo.jp/category/show/683](https://qa.nicovideo.jp/category/show/683)
  
## FAQ
 - [Q:共有セーブのデータ最大サイズいくつですか？](#Q:共有セーブのデータ最大サイズいくつですか？)
 - [Q:グローバル変数の全取得はプラグインには含まれていませんがサーバー側の負担大きいですか？](#Q:グローバル変数の全取得はプラグインには含まれていませんがサーバー側の負担大きいですか？)
  
### Q:共有セーブのデータ最大サイズいくつですか？
A:通常のセーブと同様です。保存領域も通常セーブと同じです。
つまり、大きくしようと思えば、大きくできますが、一人当たりのサーバーセーブ容量は決まっているため、空き容量がなければ保存できず、利用できないことになります。
他に、localstorageの上限=端末やブラウザ依存などによっても制限はあります。
巨大なデータでも問題が無いかどうかは、現時点では予想できない事態もありそうなので、通常のセーブ程度で検討いただければ幸いです。
  
### Q:グローバル変数の全取得はプラグインには含まれていませんがサーバー側の負担大きいですか？
A:基本的にはどのAPIも「APIの呼び出し回数制限」で定められた回数は耐えられるように設計されており、問題ありません。
  
### この他のご質問、・ご意見について
追加のご質問、ご意見は随時受け付けております。[Twitter](https://twitter.com/nico_indiesgame)などでいただけますと幸いです。
    
## 最終更新日
 - 2020/02/28