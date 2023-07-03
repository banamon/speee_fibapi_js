const express = require('express');
const app = express();

app.get('/fib', (req, res) => {
  const n = req.query.n;

  // ERR判定
  if(isNaN(n) || n < 1){
    res.status(400).json({
      'message': 'Bad Request',
    })
    return;
  }else if(n > 102){
    res.status(400).json({
      'message': 'The Request is too long',
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

/**
 * 指定番号目のフィボナッチ数の取得
 * @param {*} n 取得するフィボナッチ数のインデックス
 * @returns n番目のフィボナッチ数
 */
function fibonacci(n) {
  // 行列の定義
  const matrix = [[1, 1], [1, 0]];

  /**
   * 行列累乗計算
   * @param {*} mat 行列1 
   * @param {*} p 累乗
   * @returns 行列matのp乗の計算結果
   */
  function matrixPower(mat, p) {
    if (p === 0) {
      return [[1, 0], [0, 1]];
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

  /**
   * 行列積計算
   * @param {*} mat1 行列1
   * @param {*} mat2 行列2
   * @returns 行列1と行列2の積
   */
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

  // フィボナッチ数を返す
  return initialMatrix[0][0];
}