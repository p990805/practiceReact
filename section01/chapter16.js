// 1. 상수 객체

const animal = {
    type : "고양이",
    name : "나비",
    color : "black",
};

// 상수 이기 때문에 아래 코드는 오류가 난다.
// 아예 새롭게 할당할려고 하기 때문에 오류가 난다.
// 상수는 새롭게 할당할려고 하는 것에 대한 오류 이기 떄문문
//animal = {a:1};

animal.age =2; //추가
animal.name = "까망이"; // 수정
delete animal.color; //삭제

console.log(animal);

// 하지만 원래 있는 객체 에다가 추가 수정 삭제는 가능하다.

// 2. 메소드
// -> 값이 함수인 프로퍼티를 말함

const person ={
    name : "주찬",
    //aptjem
    sayHi(){
        console.log("hi");
    },
};

person.sayHi();
//이것도 가능하다.
person["sayHi"]();