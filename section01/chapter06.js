// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는거

let num =10;
let str = "20";

// 문자열 덧셈은 문자열이 붙어서 나온다.
const result = num +str;
//console.log(result);
// 이렇게 오류가 나지 않도록 자스가 알아서 형변환해서 나온다.
// 다는 아니고 바꿧을 때 문제 없을 때 나옴옴

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 암시
// -> 문자열 -> 숫자
let str1 ="10";
let strToNum1 = Number(str1);
//console.log(10+strToNum1);

// let str2 = "10개"
// -> 이거는 안된다.
let str2 ="10개";
//let strToNum2 = Number(str2);
//console.log(strToNum2); -> NaN뜸
let strToNum2 = parseInt(str2);
//console.log(strToNum2);
// 위에 parseInt를 사용하면 10이 나옴 신기하다.

let num1 =20;
let numToStr1 = String(num1);

//console.log(numToStr1 + "입니다.") -> 20입니다 뜬다.