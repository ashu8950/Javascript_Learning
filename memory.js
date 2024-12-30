// stack , heap

//stack(primitive) , heap (Non - primitive)

let myName = "ashu"

let anotherName = myName
anotherName = "ramesh"

console.log(myName);
console.log(anotherName);

let user = {
    email : "ashu@gmail.com",
    upi : "usfj"
}

let user1 = user

user1.email = "asdf@gmail"

console.log(user.email);
console.log(user1.email);

