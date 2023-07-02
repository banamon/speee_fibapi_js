// expressモジュールを読み込む
const express = require('express');

// expressアプリを生成する
const app = express();

// http://localhost:3000/api/v1/list にアクセスしてきたときに
// TODOリストを返す
app.get('/', (req, res) => {
  const n = req.query.n;
  console.log(req);
  const response = {
    message: `hello` + n
  };
    res.json(response);
});

// ポート3000でサーバを立てる
// app.listen(3000, () => console.log('Listening on port 3000'));

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("listening server")
})