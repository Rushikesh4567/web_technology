/*
1. Difference between arrow function and Simple function.
2. this keyword==> why we use this keyword in simple and arrow function and if not then why?
3. Write a code for arrow functions with two example.
4. Write a code for switch case in js.
5. How to use truthy and falsy values in js.
6. How to use ternary operator in js.
7. write a code for how to use loops in array.(All loops).
8. Difference between for-in and for-of loop.(These are special loops)
9. How to use filter and map function in js?
10. How to use reduce method in js?
*/

//Activity 1. Simple vs Arrow function
console.log("Activity 1. Simple vs Arrow function<br>")
document.write("Activity 1. Simple vs Arrow function.<br>");
function greet(name) {
    console.log("Hello"+name);
    document.write("Hello"+name+"<br>");
}

console.log(greet("Rushikesh"));

const greetArrow = (name) => {
    return "Hello " + name;
};

console.log(greet("Rushikesh(Simple function)"));
console.log(greetArrow("Rushikesh(Using arrow function)"));

document.write(greet("Rushikesh(Simple function)")+"<br>");
document.write(greetArrow("Rushikesh(Using arrow function)")+"<hr>");

//Activity 2. use of this keyword in simple and arrow function.
console.log("Activity 2. use of this keyword in simple and arrow function.");
document.write("Activity 2. use of this keyword in simple and arrow function.<br>");
let person1 = {
    name: "Rushikesh",
    greet: function() {
        console.log(this.name);
        document.write(this.name+"<br>");
    }
};

person1.greet(); 

let person2 = {
    name: "Rushikesh",
    greet: () => {
        console.log(this.name);
        document.write(this.name+"<br>");
    }
};

person2.greet(); // undefined  Because it takes 'this; from parent/global scope.
document.write("<hr>");
//Activity 3. Array function with two example
console.log("Activity 3. Array function with two example");
document.write("Activity 3. Array function with two example<br>");

const add = (a, b) => a + b;
console.log(add(5, 3));
document.write(add(5,3)+"<br>");

const isEven = num => num % 2 === 0;
console.log(isEven(10));
document.write("<hr>");

//Activity 4. Write a code for switch case in js.
console.log("Activity 4. Write a code for switch case in js.");
document.write("Activity 4. Write a code for switch case in js.<br>");
let day = 3;

switch(day) {
    case 1:
        console.log("Monday");
        document.write("Monday<br>");
        break;
    case 2:
        console.log("Tuesday");
        document.write("Tuesday<br>");
        break;
    case 3:
        console.log("Wednesday");
        document.write("Wednesday<br>");
        break;
    default:
        console.log("Invalid Day");
        document.write("Invalid Day<br>");
}
document.write("<hr>");

//Activity 5. How to use truthy and falsy values in js.
console.log("Activity 5. How to use truthy and falsy values in js.");
document.write("Activity 5. How to use truthy and falsy values in js.<br>");

let value = "";

if (value) {
    console.log("Truthy");
    document.write("Truthy<br>");
} else {
    console.log("Falsy");
    document.write("Falsy<br>");
}
document.write("<hr>");

//Activity 6. How to use ternary operator in js.
console.log("Activity 6. How to use ternary operator in js.");
document.write("Activity 6. How to use ternary operator in js.<br>");
let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);
document.write(result+"<br>");
document.write("<hr>");

//Activity 7. write a code for how to use loops in array.(All loops).
console.log("Activity 7. write a code for how to use loops in array.(All loops).");
document.write("Activity 7. write a code for how to use loops in array.(All loops).<br>");
//Loops==> 
    //1. For loop
let arr = [10, 20, 30];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    document.write(arr[i]+"<br>");
}

//2. While loop
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    document.write(arr[i]+"<br>");
    i++;
}

//3. do-while loop
let j = 0;
do {
    console.log(arr[j]);
    document.write(arr[i]);
    j++;
} while (j < arr.length);

//4. forEach loop
arr.forEach(function(value) {
    console.log(value);
    document.write(value+"<br>");
});

//5. for-in
for (let index in arr) {
    console.log(index); // index
    document.write(index+"<br>");
}

//6. for-of
for (let value of arr) {
    console.log(value);
    document.write(value+"<br>");
}
document.write("<hr>");

//Activity 8. Difference between for-in and for-of loop.(These are special loops)
console.log("Activity 8. Difference between for-in and for-of loop.(These are special loops)");
document.write("Activity 8. Difference between for-in and for-of loop.(These are special loops)<br>");
let arr1 = [10, 20, 30];

for (let i in arr1) {
    console.log(i); // 0 1 2
    document.write(i+"<br>");
}

for (let value of arr1) {
    console.log(value); // 10 20 30
    document.write(value+"<br>");
}
document.write("<hr>");

//Activity 9. How to use filter and map function in js?
console.log("Activity 9. How to use filter and map function in js?");
document.write("Activity 9. How to use filter and map function in js?<br>");
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);
console.log(doubled);
document.write(doubled);


console.log("\nUsing filter function.");
document.write("Using filter function.");
let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);
document.write(evenNumbers+"<br>");
document.write("<hr>");

//Activity 10.How to use reduce method in js?
console.log("Activity 10.How to use reduce method in js?");
document.write("Activity 10.How to use reduce method in js?<br>");
let numbers1 = [10, 20, 30];

let sum = numbers1.reduce((acc, current) => {
    console.log(acc + current);
    document.write(acc+current+"<br>");
}, 0);

console.log(sum);
document.write(sum);







