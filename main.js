// expressモジュールを読み込む
const express = require('express');

// expressアプリを生成する
const app = express();

app.get('/fib', (req, res) => {
  const n = req.query.n;

  // ERR判定
  if(isNaN(n) || n < 1){
    res.status(400).json({
      'message': 'Bad Request',
    })
    return;
  }


  const response = {
    result: fibonacci(n)
  };
  res.json(response);
});

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("listening server")
})

function fibonacci(n) {
  // 行列の定義
  const matrix = [[1, 1], [1, 0]];

  // 行列の累乗を計算する関数
  function matrixPower(mat, p) {
    if (p === 0) {
      return [[1, 0], [0, 1]]; // 単位行列を返す
    }

    if (p % 2 === 0) {
      const half = matrixPower(mat, p / 2);
      return matrixMultiply(half, half);
    } else {
      const half = matrixPower(mat, Math.floor(p / 2));
      const multiplied = matrixMultiply(half, half);
      return matrixMultiply(mat, multiplied);
    }
  }

  // 2つの行列の積を計算する関数
  function matrixMultiply(mat1, mat2) {
    const result = [];
    for (let i = 0; i < mat1.length; i++) {
      result[i] = [];
      for (let j = 0; j < mat2[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < mat1[0].length; k++) {
          sum += mat1[i][k] * mat2[k][j];
        }
        result[i][j] = sum;
      }
    }
    return result;
  }

  // 初期行列を計算
  const initialMatrix = matrixPower(matrix, n - 1);

  // フィボナッチ数を取得
  return initialMatrix[0][0];
}