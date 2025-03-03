function funcA(){
    console.log("funcA")
}

let varA = funcA;
varA();
// 함수를 변수 안에 넣으면 그 변수를 함수처럼 사용가능


// 이런 케이스 같은 경우 선언이 된게 아니라 값으로 서 써진거다.
// 함수 표현식이다.
// 함수 표현식은 값으로 사용되기 때문에 호이스팅이 되지 않는다.
// varB가 이 표현식  위에 있으면 오류가 난다.
let varB = function funcB(){
    console.log("funcB");
};
//이거는 가능하지만
varB();

//이거는 불가능하다.
//funcB();
//-> 이거를 익명 함수라고 한다.
// 그래서 이름을 없애도 상관없다.

let varC = function(){
    console.log("funcC");
};

varC();


// 2. 화살표 함수
// let varD =() => {
//     return D;
// }
// 만약 위에처럼 값을 반환하기만 한다면 return문이랑 중괄호를 없애도 된다.
let varD = (value) => value+1;

console.log(varD(10));