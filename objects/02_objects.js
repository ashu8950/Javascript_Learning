//const tinderUser = new Object() //singlton object
 const tinderUser ={} //non singletonObject

 tinderUser.id = "123abc"
 tinderUser.name = "ashu"
 tinderUser.isLoggedIn = false
 
// console.log(tinderUser);


const regularUser = {
    email: "ashu@gmail.com",
    fullName : {
        userFullname:{
            firstName: "ashu",
            lastName: "singh"
        }
    }

}

//console.log(regularUser.fullName.userFullname.firstName);

const obj1 ={1:'a',2:'b'}
const obj2 = {3:'a',4:"b"}

// const obj3 ={obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2) //all the element in obj1 and obj2 move in 1 column if we didn't give empty parenthesis it will move to  obj1
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users =[
    {
        id:1,
        email:"ashu@gmail.com"
    },
    {
        id:1,
        email:"ashu@gmail.com"
    },
    {
        id:1,
        email:"ashu@gmail.com"
    },
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));




