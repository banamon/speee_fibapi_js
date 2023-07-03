# Speee技術課題 問題1. フィボナッチ数を返すAPIサービスの開発 回答

## 概要
指定したn番目のフィボナッチ数を返すREST APIです．

環境
サーバのエンドポイントURL:\
https://agile-beach-57940-72240a29fe8f.herokuapp.com/

デモ
```
C:\Users> curl -X GET -H "Content-Type: application/json" "https://agile-beach-57940-72240a29fe8f.herokuapp.com/fib?n=10"

{"result":55}
```

## 構成
```
speee_fibapi_js
├node_modules
└main.js
```

