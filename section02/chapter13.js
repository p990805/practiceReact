function add10(){


const promise = new Promise((resolve,reject)=>{
    //비동기 작업 실행하는 함수
    // executor

    setTimeout(()=>{
        const num = 10;
        if(typeof num === 'number'){
            resolve(num +10);
        } else{
            reject("num이 숫자가 아님")
        }
    
    }, 2000);

})
return promise;
}

add10(0)
    .then((result) =>{
    console.log(result);
    return add10(result);
})
.then((result) =>{
    console.log(result);
    return add10(result);
})
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})

// // then 메서드
// // -> 그 후에
// // -> 실패했을 경우에는 then은 실행 안된다.
// promise.then((value)=>{
//     // console.log(value)
// })

// // catch 메서드
// // -> promise 실패했을 떄 실행
// promise.catch((error)=>{
//     // console.log(error);
// })


// //then과 catch는 같은 promise객체를 반환하기 떄문에 
// // 아래와 같은 상태로 사용할수 있다.
// promise
//     .then((value)=>{
//         console.log(value)
//     })
//     .catch((error)=>{
//         console.log(error);
//     });