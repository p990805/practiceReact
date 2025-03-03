// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    {name: "박주찬", hobby:"coding"},
    {name: "tone", hobby:"python"},
    {name:"ghod", hobby:"coding"},
];

const codingPeople = arr1.filter((item) => item.hobby==="coding"); 
// console.log(codingPeople);


// 2. map
// 굉장히 중요함
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그결과값들을 모아서 
// 새로운 배열을 반환

let arr2 =[1,2,3];
const mapresult = arr2.map((item,idx,arr) => item*2)
// console.log(mapresult);

let names = arr1.map((item) => item.name);
// console.log(names);


// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 =["b","c","a"];
arr3.sort();
// console.log(arr3);

// 숫자는 그냥 하면 안됨
let arr4 =[10,3,5];
arr4.sort();
// console.log(arr4);

//오름 차순 정리// 내림차순은 이거 반대로 하면 됌됌
let arr5 = [10,3,5];
arr5.sort((a,b) =>{
    if(a>b){
        //b가 a앞에 와라
        // 양수를 반환 시 작은게 앞으로 감
        return 1;
    } else if (a<b){
        //a가 b 앞에 와라
        return -1
    } else{
        // 같으면 자리를 바꾸지 마라라
        return 0;
    }
})

// console.log(arr5);


// 4. toSorted
// sort는 원본 배열을 정렬하지만
// toSorted는 새로운 배열을 반환하는 메서드이다.

let arr6 = ["b","a","c"];
const sorted = arr6.toSorted();
console.log(arr6);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr7 =["he", "ll","o"]
const joined = arr7.join();
console.log(joined)
//he,ll,o

const fixjoined = arr7.join("");
console.log(fixjoined);
//hello