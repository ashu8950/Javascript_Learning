// console.log("h");
// console.log("i");
// console.log("j");
// console.log("k");
// console.log("l");

function sayMyName() {
console.log("h");
console.log("i");
console.log("j");
console.log("k");
console.log("l");
}
//sayMyName //it's just a reference//
//sayMyName()

// function addtwoNumber(num1,num2) {
//     console.log(num1+num2);
    
// }
addtwoNumber(3,"4")

function addtwoNumber(num1,num2) {
    return num1 + num2;
    
}
const result =addtwoNumber(1,2);
console.log(result);


function loginUserMessage(userName ='sam') {
    if(userName === undefined){
        console.log("please enter username");
        return ;
        
    }
    return `${userName} just logged in`
    
}
//console.log(loginUserMessage("ashu"))
//console.log(loginUserMessage())


function calculateCostPrice(val1,val2,...num1) {
    return num1;
}
//console.log(calculateCostPrice(100,200,300,400));

const user ={
    username:"ashu",
    price:199
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
//handleObject(user)

handleObject({
    username:"sam",
    price:399
})

const myNewArr =[200,400,600]

function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200,400,600]));



