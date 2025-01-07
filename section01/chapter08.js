// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자.

let var1;
let var2 = 10;
let var3 = 20;

// ?? 가 null 병합 연산자 이다.
// var1 은 undefined 상태태
let var4 = var1 ?? var2
//console.log(var4); /10

// 만약 두개 다 값이 있다면 앞에 있는것을 출력한다.
let var5 = var2 ?? var3;
//console.log(var5); / 10

let username = "박주찬";
let userNickName = "jc"

let displayName = username ?? userNickName;
//console.log(displayName);


// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을을 하는 연산자
let var7 =1;
var7 ="hello";

let t1 = typeof var7;
//console.log(t1); /string


// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자.
// -> 조건식을 이용해서 참,거짓을 때 값을 다르게 반환

let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> 짝, 홀수 -> 홀

let res = var8%2 === 0 ? "짝수" : "홀수";
//console.log(res); / 짝수

