// 1. 콜백 함수
// 자신이 아닌 다른 함수에 ,인수로써 전달된 함수를 의미함

function main(value){
    console.log("콜백 실행 전");
    value();
    console.log("콜백 실행 후")
}

function sub(){
    console.log('sub함수 내용 물');
}

// main(sub);
// 여기서 sub() 가 콜백함수라고 한다.
// 콜백이라는 뜻은 나중에 실행하는 그런 뜻이니까
// 메인 함수가 실행되면 나중에 실행되게 할려고 한다.

// 2. 콜백 함수의 활용
function repeat(count,callback){
    for(let i =1; i<=count;i++){
        callback(i);
    }
}

repeat(5, function (i){
    console.log(i*3);
});
repeat(5, (i) => {
    console.log(i*2);
});

// 아무튼 콜백 함수를 사용하면 중복코드를 제외하고 비슷한 기능을 함수
//에 대해서 빠르게 작성할수 있음

