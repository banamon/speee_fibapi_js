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
├main.test.js
├getfib.js
└main.js
```

main.jsでGETを受け付け，フィボナッチ数をgetfib.js側で処理するようにしています．
また，テストはmain.test.jsで行うことを想定しています．