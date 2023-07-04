## 実装の流れ

### 開発方針

REST API開発の経験がなかったため，ローカル環境で，GETで数字を送り，その値をJSON形式で{resulut : n}の形式で返すAPIの開発を目指す．

フィボナッチ数の計算は再帰的な処理で実装可能と想定し，そこまで難しくないと想定

言語はせっかくの機会なので，書いてみたかったGo言語を選択

参考記事

- [Go言語で基本的なCRUD操作を行うREST APIを作成](https://dev.classmethod.jp/articles/go-sample-rest-api/)
- [【Golang】初心者がAPIを作ってみる](https://zenn.dev/a5chin/articles/first_api_go)

<br>

### フィボナッチ数の計算

想定していた再帰的な処理を実装したところ，計算量が多く，nが大きいと処理時間がかかることが分かった

そのため，フィボナッチ数を求めるその他手法の調査を行った．

- 再帰処理：(O(2^n))
- 動的計画法：for文で足していく方法（O(n))
- メモ化：O(n)
- 行列計算：(O(log(n))

上記の中で計算量が少なく，実装が簡単そうな行列計算を採用し，実装を行った．

参考記事

- [ざっくりわかるプログラミング アルゴリズム](https://begin-javascript.set0gut1.com/algorithm.html)
- [フィボナッチ数列を求める高速なアルゴリズム](https://shakayami.github.io/programming/fibonacci.html)
- [フィボナッチ数列を計算する](https://qiita.com/jkr_2255/items/762d075cb65cbb87e996)

また，デバック中に，計算結果がintの数値を超えてしまうことが分かったため，big.Int型を使用

<br>

### Deploy

過去に1度経験があるherokuにデプロイしたところうまく動かない

参考資料

- ****[Golangに入門したので簡単なREST API作ってHerokuにデプロイする](https://qiita.com/aiiro_engineer/items/22b38c83268087d6db00)****
- ****[GolangのWebアプリケーションをとにかく簡単に公開したいのでHerokuにデプロイしてみた](https://zenn.dev/kazuhe/articles/golang-github-heroku)****
- ****[Golangに入門したのでAPI作ってHerokuにデプロイする](https://tech.fundasta.co.jp/2020/04/19/r_katada/107)****

提出期限があったため，過去に動かしたことのあるJavaScriptで書き直すことにした．

<br>

### JavaScriptでの記述

設計方針の中で，GETで数値を送り，JSON形式で返すAPI開発後に，実際にheorkuにデプロイして動作確認を行い，その後フィボナッチ数の処理も同様に実装した

jsでも同様に，int範囲を考慮してBigInt型を採用して実装したが，BigInt型からJSON形式への変換に苦戦し，制限時間が近かったため，一定の入力範囲であれば正常に動作するint型で対応した．

<br>

### Test作成

Testの作成経験がなかったため，調査して出てきたJestを採用して記述した．

参考資料

- ****[【JavaScriptの応用】テストフレームワーク -Jest](https://tcd-theme.com/2021/11/javascript-test-jest.html)****
- ****[【JavaScriptの応用】テストコードの書き方](https://tcd-theme.com/2021/12/javascript-testcode.html)****