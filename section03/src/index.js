// const moduleData=require("./math")
// console.log(moduleData);

// console.log(moduleData.add(1,2));
// console.log(moduleData.sub(2,1));

// const {add ,sub} = require("./math")

// console.log(add(1,2));
// console.log(sub(4,1));

//default로 가져온 함수는 이름을 바꿔도 된다.
import mul, { add, sub} from "./math.js"
import randomColor from "randomcolor"

const color  =randomColor();
console.log(color);
// console.log(add(1,2));
// console.log(sub(3,1));
// console.log(mul(4,3));

