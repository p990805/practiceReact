// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // new를 통해 부르는거를 생성자 라고 한다.
console.log(date1);

let date2 = new Date(1999,8,5,10,10,10);
console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01.00시 00분 00초"로 부터 몇 ms가 지났는지
//의미하는 숫자 값
//utc

let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date4)

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth(); //달은 0부터 시작해서 12월은 11로 나옴옴
let date = date1.getDate();

let hour = date1.getHours();
console.log(
    year,
    month,
    date,
)


// 4. 시간 수정하기
date1.setFullYear(2023);
console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(
    date1.toDateString()
)

console.log(date1.toLocaleString());