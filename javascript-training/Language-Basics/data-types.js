//Data types in JavaScript are divided into two major categories. 

//1. Primitive data types (immutable data types) (meaning the original value won't change if we just perform some operation on top of that. )
//2. Non-Primitive Data Type (Mutable Data Types) (Meaning the original value will change if we just perform some operation on top of that. )

//Immutable
let a=10;
a+10;
console.log(a); //prints a=10

//Mutable
let empData ={
    "name" : "Sandeep",
    "empID" : 1234
}
empData.age=43;
console.log (empData); //{ name: 'Sandeep', empID: 1234, age: 43 }


//Primitive Datatypes

//number
//string
//boolean
//undefined
//null
//symbol

//number => The data type that can store numbers with decimals or without decimals, without any quotations 

let num1 =10;
let num2=10.5;
console.log(typeof num1);
console.log(typeof num2);

//String => The data type that can store text, characters, words, sentences, etc. It is always enclosed within single or double quotes or backticks. 
let empName="Sandeep";
let empRole='"Senior" Manager';
console.log(typeof empName);
console.log(typeof empRole); 

let empDetails="Emp name is "+empName+" and emp role is "+empRole;
let singlequote='Single quote - emp name is empName and emp role is empRole';
let backticks = `Backticks - Emp name is ${empName} and employee role is ${empRole}`;
console.log(empDetails);
console.log(singlequote);
console.log(backticks);

//Boolean => Boolean data type will be used to store the result of a condition in the form of true or false. 
let israining = true;
let issunny = false;
console.log(typeof israining);
console.log(typeof issunny);

//Undefined => Undefined represents a variable that has been declared but not assigned any value. 
let age;
console.log(age);

//Null => Null represents a variable that has been declared and assigned a null value or empty value. 
let salary = 1000;
console.log(salary);
salary = null;
console.log(salary);

//Symbol =. 


/*
*********************************
Non-Primitive Data Types
*********************************
*/

//Object => Object data type represents a collection of key-value pairs within the curly braces. 

// let empName = "Sand";
// let empID = 1234;
// let VisaStatus= true;

let empData = {
    "empName" : "Sandeep",
    "empID" : 1234,
    "Visastatus" : true,
    "address" : {
        "city" : "Chennai",
        "State" : "TN"
    }
}

//Accessing the data from the object 
console.log(empData.empName);
console.log (empData.address.city);

console.log(empData["empID"]);
console.log(empdata["address"]["city"])

//Array - > Array is nothing but a list of values in JavaScript. 
let fruits = ["Apple", "Banana", "Mango","Grapes"];
console.log(fruits.length);
console.log(fruits[2]);
let prices =[100,200,300,400];
console.log(prices[2]);

let fruitsandPrices = ["Apple", 100, "Banana", 200, "Mango",300, "Grapes"];
console.log(fruitsandPrices.length);
console.log(fruitsandPrices[3]);

//Function => Function is a data type that represents a block of code or collection of statements written together to complete a specific task. 
