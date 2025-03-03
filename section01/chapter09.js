// 1. if 조건문
// else if 의 갯수는 제한이 없다.
// 무조건 if로 시작해서 else로 끝나야한다. else가 elseif 위에 있을 수 없다.
// if로 끝내거나나
let num =8;

// if(num >= 10){
//     console.log("num은 10 이상입니다. ");
//     console.log("조건이 참입니다.");
// }
// else if(num >=5){
//     console.log("num은 5 이상입니다.")
// }
// else{
//     console.log("조건이 거짓입니다.")
//     console.log("num은 10 이하입니다.")
// }

// 2. switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 떄 if보다 더 직관적이다.

let animal = "pig";

switch (animal){
    case "cat":{
        console.log("고양이");
        break;
    }
    case "dog": {
        console.log("강아지");
        break;
    }
    case "bear":{
        console.log("곰");
        break;
    }
    case "snake":{
        console.log("뱀");
        break;
    }

    default:{
        console.log("그런 동물은 저는 모릅니다.")
    }
}