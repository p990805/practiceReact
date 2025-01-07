// 1. 대입 연산자 (=)
let var1 = 1;

// 2. 산술 연산자
let num1 = 3+2;
let num2 = 3-2;
let num4 = 3*2;
let num3 = 3/2;
let num5 = 3%2;

// 당연히 곱셈 연산자가 우선순위가 높고 가로를 () 열면 ()가 우선이 된다.
let num6 = 1+2*10;
//console.log(num6);

// 3. 복합 대입 연산자 
// 산술 + 대입 연산자(+=,-=,*=,/=,%=)
let num7 =10;
num7 += 20;
//console.log(num7)


//4. 증강 연산자
// 1씩 더해주는거
// num8++ 이면 그 코드 다음줄에 반영이 된다. 28줄 실행 -> 29줄 반영영
// ++num8 전위연산
// num8-- 후위연산
let num8 =10;
++num8; 
// console.log(num8);
// console.log(num8++);
// console.log(num8);

// 5. 논리 연산자
let or = true || false;

let and = true && false;

let not = !true;
// console.log(or, and, not) / true false false

// 6. 비교 연산자
let comp1 =1 === 2;
let comp2 =1 !== 2;
//console.log(comp1, comp2); / false true
// == 2번만 쓰면 자료형도 같은지는 확인을 안한다.
// === 자료형도 같고 값도 똑같은지 봐야한다.
// 1== '1' 하면 true가 나오게 된다.

let comp3 = 2 > 1;
let comp4 = 2 < 1;
//console.log(comp3, comp4); true false

let comp5 = 2>=2;
let comp6 = 2 <=2;
//console.log(comp5, comp6); / true true
