// 1. 변수
let age;
 age =30;


 // 2. 상수 -> 변수와 다르게 변수의 값을 바꿀수 없다.
 // 상수는 선언 후 변경이 안되기 때문에 선언과 동시에 값이 있어야 한다.
 // const birth -> 이거 안된다.
const birth = "1999.08.05"

// 3. 변수 명명 규칙(네이밍 규칙)
// 3-1. $,_ 제외한 기호는 사용할 수 없다.
// ex let #name, name# -> 이거 안됨
let $_name;

// 3-2. 숫자로 시작할수 없다.
// 3name 이렇게는 안됨 name3는 가능
let name1;
let $1name;

// 3-3. 예약어를 사용할 수 없다.
// let let/ let if


// 4. 변수 명명 가이드
let a =1;
let b =2;
let c = a-b;
// 이렇게 하면 혼자하면 괜찮지만 누군가 알아보기 힘듬
let salesCount =1;
let refundCount =1;
let totalSalesCount = salesCount - refundCount;





