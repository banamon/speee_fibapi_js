
const axios = require('axios');
const url = "https://agile-beach-57940-72240a29fe8f.herokuapp.com/";
// const url = "http://localhost:3000/";

test('n=10のフィボナッチ数取得', async () => {
  const response = await axios.get(url + "fib?n=10");
  expect(response.status).toBe(200);
  expect(response.data).toEqual({ result: 55 });
});

test('負の入力に対するテスト', async () => {
  try{
    const response = await axios.get(url + "fib?n=-1");
    throw new Error('Expected an error response.');
  }catch(e){
    expect(e.response.status).toBe(400);
    expect(e.response.data).toEqual({ status: 400, message: "Bad Request" });
  }
});

test('整数以外に対するテスト', async () => {
  try{
    const response = await axios.get(url + "fib?n=1.1");
    throw new Error('Expected an error response.');
  }catch(e){
    expect(e.response.status).toBe(400);
    expect(e.response.data).toEqual({ status: 400, message: "Bad Request" });
  }
});

test('数値以外に対するテスト', async () => {
  try{
    const response = await axios.get(url + "fib?n=a");
    throw new Error('Expected an error response.');
  }catch(e){
    expect(e.response.status).toBe(400);
    expect(e.response.data).toEqual({ status: 400, message: "Bad Request" });
  }
});

test('入力がない場合対するテスト', async () => {
  try{
    const response = await axios.get(url + "fib");
    throw new Error('Expected an error response.');
  }catch(e){
    expect(e.response.status).toBe(400);
    expect(e.response.data).toEqual({ status: 400, message: "Bad Request" });
  }
});

test('大きすぎる入力テスト', async () => {
  try{
    const response = await axios.get(url + "fib?n=103");
    throw new Error('Expected an error response.');
  }catch(e){
    expect(e.response.status).toBe(400);
    expect(e.response.data).toEqual({ status: 400, message: "The Request is too long" });
  }
});