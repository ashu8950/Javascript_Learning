// const coding = ["js","ruby","python","java"]


// const value = coding.forEach((item)=>{
//     //console.log(item);
//     return item;
// })
// console.log(value);


//const myNum = [1,2,3,4,5,6,7,8,9]

//let newNum = myNum.filter((num)=>num>4)
// const newNum = []
// myNum.forEach((num)=>{
//     if(num>4){
//         newNum.push(num)
//     }
// });
// console.log(newNum);


// const val = myNum.map((num)=>{
// return num+10
// })
// console.log(val);

// const newNum = myNum.map((num)=>num*10).map((num)=>num + 1).filter((num)=>num>=15)
// console.log(newNum);


//reduce

// const myTotal = myNum.reduce(function (acc,curr){
//     console.log(`acc: ${acc} and currVal: ${curr}`);
    
//     return acc+curr
// },0)

// console.log(myTotal);



const shopptinCart =[
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "Py Course",
        price: 11000
    },
    {
        itemName: "java Course",
        price: 20000
    }
]

const priceToPay = shopptinCart.reduce((acc,item)=>(acc + item.price),0)
console.log(priceToPay);
