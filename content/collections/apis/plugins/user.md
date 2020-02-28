---
title: ユーザー情報取得
slug: plugins/user
description: 「ユーザー情報取得」のプラグインでの利用方法
order: 8
navi: プラグインでの利用方法
experimental: true
---
    
## 目次
 - [プレイヤー自身のユーザー情報を取得](#プレイヤー自身のユーザー情報を取得)
 - [ユーザーIDを指定して特定のユーザー情報を取得](#ユーザーIDを指定して特定のユーザー情報を取得)
 - [現在のゲームを最近プレイしたユーザーの情報を取得](#現在のゲームを最近プレイしたユーザーの情報を取得)
 - [オンライン人数を取得](#オンライン人数を取得)
    
## プレイヤー自身のユーザー情報を取得
 - 現在のユーザーの情報を取得します。
 - ユーザーがプレミアム会員かどうかも取得できます。
 - プレイしているユーザーが[ログイン](/common/login)している必要があります。ログインしてない場合にエラーを返すため、それでユーザーのログイン状態を判別することができます。
 - このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です。
    
### プラグインの利用方法
1. プラグインのダウンロード：[AtsumaruGetSelfInformationExperimental.js](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruGetSelfInformationExperimental.js) を右クリックで「名前をつけて保存」してダウンロード
1. プロジェクトに追加：ダウンロードしたファイルをプロジェクトのプラグインフォルダに設置
1. 有効化：プロジェクトのプラグイン設定でプラグインをONにする
1. 設定：プラグイン設定で、取得した情報を収納する変数のIDを指定する。
    
プラグインコマンドで次のいずれかのように指定します（どちらでも動作は同じです）。
```
GetSelfInformation
```
あるいは
```
プレイヤー取得
```
    
## ユーザーIDを指定して特定のユーザー情報を取得
 - 引数でユーザーIDを指定し、指定したユーザーの情報を取得します。
 - 指定したIDのユーザーが[プレイヤー間通信の有効化](/common/interplayer)をしている必要があります。
 - このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です。
    
### プラグインの利用方法
1. プラグインのダウンロード：[AtsumaruGetUserInformationExperimental.js](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruGetUserInformationExperimental.js) を右クリックで「名前をつけて保存」してダウンロード
1. プロジェクトに追加：ダウンロードしたファイルをプロジェクトのプラグインフォルダに設置
1. 有効化：プロジェクトのプラグイン設定でプラグインをONにする
1. 設定：プラグイン設定で、取得した情報を収納する変数のIDを指定する。
    
プラグインコマンドで次のいずれかのように指定します（どちらでも動作は同じです）。
```
GetUserInformation <userIdVariableId>
```
あるいは
```
特定ユーザー取得 <userIdVariableId>
```
    
## 現在のゲームを最近プレイしたユーザーの情報を取得
 - [プレイヤー間通信の有効化](/common/interplayer)をしているユーザーを、最近現在のゲームをプレイした順番に取得します。
 - このAPIで取得できるユーザーは、 [プレイヤー間通信の有効化](/common/interplayer) を有効化しているユーザーのみです。
 - ゲーム内で有効に使うために、まずゲーム内で有効化APIを呼び出すようにすると良いでしょう。
 - このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です。
    
### プラグインの利用方法
1. プラグインのダウンロード：[AtsumaruGetRecentUsersExperimental.js](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruGetRecentUsersExperimental.js) を右クリックで「名前をつけて保存」してダウンロード
1. プロジェクトに追加：ダウンロードしたファイルをプロジェクトのプラグインフォルダに設置
1. 有効化：プロジェクトのプラグイン設定でプラグインをONにする
1. 設定：プラグイン設定で、取得した情報を収納する変数のIDを指定する。
    
プラグインコマンドで次のいずれかのように指定します（どちらでも動作は同じです）。
```
GetRecentUsers
```
あるいは
```
最新ユーザー取得
```
    
## オンライン人数を取得
 - 現在から1～60分前までの間にこのゲームをプレイしたログインユーザーの人数を取得します。
 - このAPIは[APIの呼び出し回数制限](/common/rate-limit)の対象です。
    
### プラグインの利用方法
1. プラグインのダウンロード：[AtsumaruGetActiveUserCountExperimental.js](https://raw.githubusercontent.com/atsumaru/mv-plugins/master/plugins/AtsumaruGetActiveUserCountExperimental.js) を右クリックで「名前をつけて保存」してダウンロード
1. プロジェクトに追加：ダウンロードしたファイルをプロジェクトのプラグインフォルダに設置
1. 有効化：プロジェクトのプラグイン設定でプラグインをONにする
1. 設定：プラグイン設定で、取得した情報を収納する変数のIDを指定する。
    
プラグインコマンドで次のいずれかのように指定します（どちらでも動作は同じです）。
```
GetActiveUserCount <minutes>
```
あるいは
```
オンライン人数取得 <minutes>
```
    
`<minutes>` には1～60までの数値を指定し、今から`<minutes>`分前までの間にこのゲームをプレイしたログインユーザーの人数を取得します
    
## 関連ドキュメント

ドキュメント|リンク|備考
:---|:---|:---
機能解説|[ユーザー情報取得](/user)|機能概要や全般的な解説
APIでの利用方法|[ユーザー情報取得](/apis/user)|他ゲームエンジンやより高度な利用を必要とするユーザー向け
    
## 最終更新日
 - 2020/02/28
