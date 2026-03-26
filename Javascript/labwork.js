//Activity 1

var a = 10;
var a = 20;

console.log("a = ",a)  // It means it's value is mutable and can be redeclared,reassigned.

const b = 30;
 // b = 40;  This means value can't be reassigned 
console.log("b  = ",b)


let d = 10;
d = 15; // allowed. it means it can be reassigned but can't be redeclared.
console.log("d = ",d)

//Activity  =>  Scope level test
//1. using function
function myfunction(){
    let x = 3
    const y = 4
    var z = 5

    console.log(x)
    console.log(y)
    console.log(z)
}

myfunction()

//console.log(x) //Can't be accessed out of scope
//console.log(y) //Can't be accessed out of scope
//console.log(z) //Can't be accessed out of scope(function scope)


//2. using if condition scope
let val = true
if (val) {
  var p = 10;
  let q = 20;
  const r = 30;
}

console.log(p); //a = 10 and it is accessible 
//console.log(q); // Can't be accessed out of scope
//console.log(r); // Can't be accessed out of scope

//Activity 2 Variables in js 
let l = 10;
let name = "Rushikesh";
let isValid = true;
let m;
let n = null;

console.log("l = ",l)
console.log("name = ",name)
console.log("isValid = ",isValid)
console.log("m = ",m)
console.log("n = ",n)

let student = { name: "Rushi", age: 22 };
console.log(student)
