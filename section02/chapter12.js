function add(a,b,callback){
    setTimeout(()=>{
        const sum = a+b;
        callback(sum);
    },3000);
}

add(1,2,(value)=>{
    // console.log(value)
});


// 음식을 주문하는 상황
function orderFood(callback){
    setTimeout(()=>{
        const food = "떡뽁이"
        callback(food);
    },3000)
}

function cooldownfood(food,callback){
    setTimeout(()=>{
        const cooldownedfood = `식은 ${food}`;
        callback(cooldownedfood);

    },2000)
}

function freezeFood(food,callback){
    setTimeout(()=>{
        const freezedFood = `냉동된 ${food}` ;
        callback(freezedFood);
    },2000)
}

orderFood((food)=>{
    console.log(food);
    cooldownfood(food,(cooldownedfood)=>{
        console.log(cooldownedfood);

        freezeFood(cooldownedfood, (freezedFood) => {
            console.log(freezedFood);
        })
    });
})