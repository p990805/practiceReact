// 1. 객체
let obj1 = new Object() // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성(name.age.hobby같은거))
let person = {
    name : "박주찬",
    age : 26,
    hobby : "코딩",
    10:20,
    extra : {}
};
// key : value 형식이다.
// name 프로퍼티 이렇게 불린다.
// key는 자유롭게 사용할수 잇음

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;

// name의 밑줄은  우리가 아닌 typescript에 경고하는거임
//console.log(name);

// 괄호 표기법 
// 무조건 쌍따옴표를 넣어야 한다.
let age = person["age"]
//console.log(age);

let property = "hobby";
let hobby = person[property];
//console.log(hobby);

// 3.1 새로운 프로퍼티를 추가하는 방법
person.job = "개발자"
person["favorite"] = "떡볶이이";
//console.log(person);

person.job = "교육자";
person["favorite"] = "치킨";
//console.log(person);


// 프로퍼티를 삭제하는 방법
//delete 삭제하고 싶은거
// delete person.job
// delete person["favorite"]

// 프로퍼티 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
console.log(result1);
let result2 = "cat" in person;
console.log(result2);