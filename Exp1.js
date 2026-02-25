//Activity 1 (Student info)

let obj1 = {
    "name": "Rushikesh",
    "age": "21",
    "marks" :"100"
};

console.log("Activity 1 Display student info\n");
document.write("Activity 1 Display student info<br><br>")
console.log(obj1.name);
console.log(obj1.age);
console.log(obj1.marks);

document.write(obj1.name+"<br>")
document.write(obj1.age+"<br>")
document.write(obj1.marks+"<br>")

let obj2 = {
    "name": "shree",
    "age": "21",
    "marks" :"100"
};

//Activity 2 
    console.log("\nActivity 2 Check condition\n");
    document.write("<br>Activity 2 Check condition<br><br> ")

    if(obj1.marks == obj2.marks)
    {
        console.log("Marks are equal");
        document.write("Marks are equal<br>")
    }
    else
    {
        console.log("Marks are not equal");
        document.write("Marks are not equal<br>")
    }

//Activity 3 
 console.log("\nActivity 3 Printing numbers\n");
 document.write("<br>Activity 3 Printing numbers<br>")

 for(let i = 1;i <= 10; i++)
 {
     console.log(i);
     document.write(i+"<br>")
 }

 //Activity 4 
  console.log("\nActivity 4 pass or fail\n");
  document.write("<br>Activity 4 pass or fail<br>")
  
 if(obj1.marks>40)
 {
     console.log("Result is Pass");
     document.write("Result is Pass<br>")
 }
 else
{
     console.log("Result is Fail");
     document.write("Result is Fail")
}

//Activity 5
console.log("\nActivity 5 Changing values\n");
document.write("<br>Activity 5 Changing values<br>")

let a = 10;
let b = a;

a = 30;

console.log("a = ",a);
document.write(a+"<br>")
console.log("b = ",b);
document.write(b+"<br><br>")

console.log("Activity 6 : These Values are displayed at console\n");
document.write("Activity 6 : These Values are displayed at console<br><br>")

console.log("Activity 7 Display Values on html page\n")
document.write("Activity 7 Display Values on html page<br>")




