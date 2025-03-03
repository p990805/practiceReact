// 단락평가
// and or 에서 조건이 충족되면 두번째 값도 가지를 않음

function returnFalse(){
    console.log("False함수")
    return false;
}

function returnTrue(){
    console.log("true함수")
    return true;
}

//console.log(returnFalse() && returnTrue());
// -> false함수
// -> false만 print 된다 /단락평가 returnTrue함수에 접근조차 안함

//console.log(returnTrue() && returnFalse());
// 이건 먼저 2개는 다나옴 그대신 값은 false임


// 단락평가 활용 사례
function printName(person){
    
    console.log(person && person.name)
}

printName(); // -> undefined 


function printName2(person){
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName2(); // -> person의 값이 없음


// T && T 면 뒤에 T가 나온다.
// T || T 면 앞에 T가 나온다.

