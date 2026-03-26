/*
Activity in Exp2.
1. Declare an an array , object,function and string.
2. Find largest number in an array.
3. Find reverse number in string.
4. Check palindrome in String
5. Write a code for fibonacci series.
6. Count vowels in string.
7. Remove duplicate number from array.
8. Function to find even or odd.
9. Write a code for sum of array
*/

//Activity 1.
console.log("Activity 1: Declare an an array , object,function and string.");
document.write("Activity 1: Declare an an array , object,function and string.<br>");

let arr = [1,2,3,4,5];
let str = "Rushikesh";
let obj = {"name":"Rushikesh","age":"22"};
function myfunction()
{
    console.log("Myfunction is called...");
    document.write("Myfunction is called...<br>");
}

console.log(arr);
console.log(obj);
console.log(str);

document.write(arr+"<br>");
document.write(obj+"<br>");
document.write(str+"<br>");

myfunction();
console.log("==========================================");
document.write("<hr><br>");

//Activity 2.
console.log("Activity 2. Find largest number in an array.");
document.write("Activity 2. Find largest number in an array.<br>");
let numbers = [10, 45, 23, 89, 12];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("Largest number is:", largest);
document.write("Largest number is:", largest+"<br>");

console.log("==========================================");
document.write("<hr><br>");


//Activity 3.
console.log("Activity 3. Find reverse number in string.");
document.write("Activity 3. Find reverse number in string.<br>");
let str1 = "hello";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log("Reversed string:", reversed);
document.write("Reversed string:", reversed+"<br>");
console.log("==========================================");
document.write("<hr><br>");


//Activity 4.
console.log("Activity 4. Check palindrome in String");
document.write("Activity 4. Check palindrome in String.<br>");

function isPalindrome(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    if (str === reversed) {
        console.log("Palindrome");
        document.write("Palindrome<br>");
    } 
    else{
        console.log("Not Palindrome");
        document.write("Not Palindrome<br>");
    }
}

console.log(isPalindrome("madam"));
console.log("==========================================");
document.write("<hr><br>");


//Activity 5.
console.log("Activity 5. Write a code for fibonacci series.");
document.write("Activity 5. Write a code for fibonacci series.");
function fibonacci(n) {
    let a = 0, b = 1;

    console.log(a);
    console.log(b);

    for (let i = 2; i < n; i++) {
        let next = a + b;
        console.log(next);
        document.write(next+"<br>")
        a = b;
        b = next;
    }
}

fibonacci(10);
console.log("==========================================");
document.write("<hr><br>");


//Activity 6.
console.log("Activity 6. Count vowels in string.");
document.write("Activity 6. Count vowels in string.<br>");
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
console.log("count is: ",count);
document.write("count is: "+count+"<br>");
console.log("==========================================");
document.write("<hr><br>");


//Activity 7.
console.log("Activity 7. Remove duplicate number from array.");
document.write("Activity 7. Remove duplicate number from array.<br>");

let arr1 = [1, 2, 3, 2, 4, 5, 3, 6];

let unique = [];

for (let i = 0; i < arr1.length; i++) {
    if (!unique.includes(arr1[i])) {
        unique.push(arr1[i]);
    }
}

console.log("Array without duplicates:", unique);
document.write("Array without duplicates: "+unique+"<br>");
console.log("==========================================");
document.write("<hr><br>");


//Activity 8.
console.log("Activity 8. Function to find even or odd.");
document.write("Activity 8. Function to find even or odd.<br>");
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(7));
document.write(checkEvenOdd(7)+"<br>");
console.log("==========================================");
document.write("<hr><br>");


//Activity 9.
console.log("Activity 9. Write a code for sum of array.");
document.write("Activity 9. Write a code for sum of array.<br>");
let arr2 = [10, 20, 30, 40];
let sum = 0;

for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
}

console.log("Sum of array:", sum);
document.write("Sum of array:"+ sum+"<br>");
document.write("<hr><br>");







