// Truthy 와  Falsy
// 참이나 거짓을 의미하지 않는 값도, 조건문 내에서 참이나 거짓으로 평가하는 특징
// true나 false가 아니여도 알아서 조건문 내에서 true 나 false로 판단하는거

if (123){
    //console.log("123 is true");
} else {
    console.log("123 is false");
}

if(undefined){
    console.log("undefinde is true");
} else {
    //console.log("undefined is false");
}

// 1.Falsy 한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 ="";

// 빅인티저에서 사용하는 값
let f7 = 0n;

if (!f1){
    //console.log("falsy")
}



// 2. Truth 한 값
// -> 7가지 falsy 한 값을 제외한 나머지 모든 값

let t1 = "hello"
let t2 =123;
let t3 =[];
let t4 ={};
let t5 = () => {};

if (t5) {
    //console.log("truty");
}


// 3. 활용 사례
function printName (person) {
    if(person === undefined || person === null){
        console.log("person의 값이 없음")
        return;
    }
    console.log(person.Name);
}

let person;
printName(person);


function printName2 (person2) {
    if(!person2){
        console.log("person2의 값이 없음")
        return;
    }
    console.log(person2.name);
}

let person2 = {name : "주찬찬"};
printName2(person2);