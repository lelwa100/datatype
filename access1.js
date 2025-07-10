//global scope
let globalVar = "This is a global variable"

function myVars(){
   let localVar = "This is a local variable"
   return localVar;
}
console.log(globalVar +", it is accessible everywhere")
console.log  (myVars() + "is only accesiible inside a method or "+ "function");

