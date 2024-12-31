// singleton

//object literal
const mySym = Symbol("key1")
const jsUser ={
    name: "ashu",
    "location":"jaipur",
    "full Name":"ramesh",
    [mySym]:"myKey1",
    age : 18,
    email: 'shabsingh@gmail.com',
    isLggedIn:false,
    lastLoging: ["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser.location);
// console.log(jsUser["location"]);
// console.log(jsUser["full Name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser.mySym);

jsUser.email ="rakjak@gmail.com"
//Object.freeze(jsUser) //so that no body can override
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("hello user");
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function () {
    console.log(`hello user , ${this.name}`);
}
console.log(jsUser.greetingTwo());





