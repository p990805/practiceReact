// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 =[1,2,3];
let arr2 =[4,...arr1,5,6];
//-> ... 개별로 풀어 해쳐

//console.log(arr2);
// -> [4,1,2,3,5,6]

let obj1 ={
    a:1,
    b:2,
};
let obj2 ={
    ...obj1,
    c:3,
    d:4,
}

//console.log(obj2);
// a:1,
// b:2,
// c:3,
// d:4


function funcA(p1,p2,p3){
    console.log(p1,p2,p3);
    // 1 2 3
}
funcA(...arr1);


// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

//이거는 ()안에 매개변수이기때문에 spread연산자랑 다른거다
// rest매개변수는 항상 맨 뒤에 와야하고 뒤에 다른 매개변수가 올 수 없다.

function funcB(one,...rest){
    console.log(rest);
}

funcB(...arr1)