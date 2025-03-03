// 6가지 요소 조작 메서드

// 1.psuh
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
// 그리고 변경경된 길이값도 반환한다.
let arr1 =[1,2,3];
const newLength = arr1.push(4,5,6); // ->6

// 2.pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 =[1,2,3]
const poppedItem = arr2.pop();


// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 =[1,2,3]
const shiftItem = arr3.shift()


// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
// push와 마찬가지로 변경된 길이의 값을 반환한다.

let arr4 = [1,2,3]
const newLength2 = arr4.unshift(0);

// 속도는 popdl shift보다 빠르다 인덱스를 건드려야하기 떄문에


// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 =[1,2,3,4,5,6,7];
let sliced = arr5.slice(0,3)
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-3)

// console.log(sliced3);  / -> 5,6,7 

// 이걸 잘라내도 원본 값은 변하지 않는다
// 새로운 배열로 반환하기 떄문에에


// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환

let arr6 =[1,3]
let arr7 = [5,7]

let concatArr = arr6.concat(arr7);
console.log(concatArr);