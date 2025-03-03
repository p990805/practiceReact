// math 모듈
export function add(a,b){
    return a+b;
}

export function sub(a,b){
    return a-b;
}

//이 모듈의 대표값으로 지정이 된다.
export default function multiply(a,b){
    return a*b;
}

//CJS
// module.exports = {
//     add,
//     sub,
// }

//ESM
// package 에 설정하면 CJS를 함꼐 사용할수 없다.
//그래서 require를 쓸수 없음 CJS

// export{ add, sub };