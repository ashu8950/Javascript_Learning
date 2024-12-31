 const coding = ["js","ruby","python","java"]
// coding.forEach(function (item){
//     console.log(item)
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe);

// coding.forEach((item,idx,arr)=>{
//     console.log(item,idx,arr);
    
// })

const myCoding = [
    {
        language: "javascript",
        languageFileName: "js"
    },
    {
        language: "Java",
        languageFileName: "java"
    },
    {
        language: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.language);
    
})