const user ={
    username : "ashu",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username ='sam'
// user.welcomeMessage()
// console.log(this);

// function chai() {
//     let username = 'ashu'
//     console.log(this);
    
// }
// chai()


// const chai = function () {
//     let username = 'ashu'
//     console.log(username);
    
// }

const chai = () =>{
    let username = 'ashu'
    console.log(username);
}

chai()

//Arrow function
//explicit return 
const addtwo = (num1,num2) => {
    return num1+num2
}
console.log(addtwo(3,2));

//implicit return for arrow function no need to write return keyword
//const addTwo = (num1,num2) => num1+num2;
//console.log(addTwo(4,3));

const addTwo = (num1,num2) => ({username: "ashu"})
console.log(addTwo());
