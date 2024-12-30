const name = "ashu"
const repo = 34

console.log(name + repo + " value");

console.log(`hello my name is ${name} and my repo is ${repo}`);

const gameName = new String('bgmi');
 
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.charAt('g'));


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-4,2)
console.log(anotherString);


const newStringOne = "  ashu  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitest.com/hitesh%20sing"
console.log(url.replace('%20','_'));

console.log(url.includes('ashu'));
console.log(url.includes('rag'));

console.log(gameName.split());











