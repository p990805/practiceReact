// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// String이나 Integer등 사용이 가능하나 if문이나 for문 같은 것은 쓸수 가 없다.

// 2. 숫자, 문자열, 배열 값만 랜더링 된다.
// boolean, undefined,null 등은 랜더링 되지 않는다.
// obj 는 바로는 안되고 프로퍼티에 접근해야한다 obj.name 이렇게게

// 3. 모든 태크는 닫혀있어야 한다. <h1></h1>
// 4. 최상위 태그는 반드시 하나여야만 한다.
// 여기에 main태그가 있는데 main태그 말고 다른 태그가 있따면 오류가 난다.
// 마땅히 main 태그같은게 없다면 그냥 빈태크로 하면 된다.

import "./Main.css";
const Main = () => {
    // const number = 10;
    const user = {
        name : "박주찬",
        isLogin : true,
    }

    if (user.isLogin){
        return <div className="logout">로그아웃</div>;
    } else{
        return <div>로그인</div>;
    }
//     return (
//         // <main>
//         // <h1>main</h1>
//         // <h2>{number % 2===0 ? "짝" : "홀홀"}</h2>
//         // {10}
//         // {number}
//         // {[1,2,3]}
//         // </main>
        
//         // <>
//         // {user.isLogin ? <div>로그아웃 </div> : <div>로그인</div>}
        
//         // </>
//     )
 }
export default Main;