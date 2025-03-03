// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

// 뭐든지 넣어도 됌됌
let arrC = [1,2,3,true,"hello","null",];
console.log(arrC);

// 2. 배열 요소 접근
let item1 = arrC[0];
console.log(item1);

arrC[0] = "hello";
console.log(arrC[0]);