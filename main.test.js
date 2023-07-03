const express = require('express');
const request = require('supertest');

const app = express();

test('フィボナッチ数を返すテスト', async () => {
  const response = await  request(app).get('/fib').query({ n: 10 });
  expect(response.status).toBe(200); // ステータスコードが正常であることを確認
  expect(response.body).toEqual({ result: 55 });
})

test('負の値の入力に対するテスト', async () => {
  const response = await  request(app).get('/fib').query({ n: -1 });
  expect(response.status).toBe(400); // ステータスコードが正常であることを確認
  expect(response.body).toEqual({ message: "Bad Request" });
})

// 数値以外場合
// 入力がない場合
// 大きすぎる入力
