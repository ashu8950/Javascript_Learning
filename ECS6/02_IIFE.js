// imediate invoked function IIFE
// what is iiFe
// global object k polution ki wajh se kai bar problem hoti hai to usko remove krne k lie IIFE ka use krte hai 
//polution mean any var declared
//after invoke they dont know where to stop so need semicolon
(function chai(){
    //name iife mean with name function is returned
console.log(`DB connected`);
})();

((name)=>{
    //without name
    console.log(`DB connected ${name}`);
    
})("ashu")