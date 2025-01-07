// 1. 배열의 구조 분해 할당
let arr = [1,2,3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

//let [one, two, three] = arr;
//console.log(one, two,three);
// -> 1 2 3

let [one, two, three,four] = arr;
console.log(one, two,three,four);
// -> 1 2 3 undefined



// 2. 갹체의 구조 분해 할당
let person = {
    name : "박주찬",
    age: 27,
    hobby : "코딩"
}

let {
    name,
    age :myAge, // 새로운 ㄱ변수에 대입 가능능
    hobby} = person;
//console.log(name, myAge, hobby);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name,age,hobby}) =>{
    console.log(name,age,hobby)
}

func(person)