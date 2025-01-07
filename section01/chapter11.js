// 함수 선언

// function greeting (){
//     console.log("안녕하세요!")
// }

// console.log("호출 전")
// greeting();
// console.log("호출 후후")

//함수 호출되면 함수 선언문 안으로 들어간다.
// 호출 전 - 안녕하세요 - 호출 후 순으로 나온다.


// 함수 매개변수에 let이나 const를 쓸 필요가 없다.
function getArea(width,height){
    function another(){
        console.log("중첩 함수")
    }
    another();
    let area = width*height;
    // console.log(area);
    //return 문이 나오면 함수가 끝나므로 return아래는 코드를 작성할수 없음음
    return area
}

// 인수라고 한다.
let area1 =getArea(10,20);
let area2= getArea(30,20);
console.log(area1);

// 자바 스크립트는 함수의 위치가 호출문 아래에 있어도 실행을 시켜준다.
// 호이스팅 -> 끌어올리다.