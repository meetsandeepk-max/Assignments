//Typescript = Javascript + Datatypes (Type safety)

//Data types in TypeScript are divided into two major categories. 

//1. primitive data types (immutable data types), meaning the original value won't change if we just perform some operations on top of that. 
//2. Non-primitive data types (immutable data types), meaning the original value will change if we just perform some operation on top of that 

//Syntax to store data in TypeScript  : declaration variable : datatype = data; 


/********************************* */
/***********Primitive Datatypes ******** */
/*****************************************/

//number => It can store numbers with decimals without decimals. 
let empID:number = 1234;
let hikePerct : number =98.3;

//string ==> The data type that can store text characters, words 

let empName:string = "Sandeep";
let empRole:string="Senior leead";

//boolean => Boolean datatype will be used to store the results. 

let isRaining:boolean = true;

//undefined.

let age:undefined;
console.log(age);

//null
let salary:null = null;
console.log(salary);

//Union => Union represents more than one data type that can be stored within a variable. 

let empAddress : string | number | boolean;
empAddress = "Hyd";
empAddress = 50056;
empAddress = true;


//any => Any represents any datatype that can be stored within the variable indirectly. We are removing the types empty. 

let empData :any;
empData = 1234;
empData="Sand";
empData=true;


/********************************* */
/***********Primitive Datatypes ******** */
/*****************************************/

//object => Object data type represents a collection of key-value pairs within the curly braces. 

//create template to store object. 

interface empInfo {
    "empName" : string;
    "empId":number;
    "visastatus":boolean;
    "address":{
        "city":string;
        "state": string;
    }
}

//storing the data.
let empDetails : empInfo = {
    "empName" : "Sandeep",
    "empId":1234,
    "visastatus":true,
    "address":{
        "city": "Chennai",
        "state": "TN",
    }
}

//Array => Array can store a list of values. 
let fruits : string []=["Apple","Banana","carrot"];
console.log(fruits.length);
console.log(fruits[2]);

let prices:number[]=[100,200,300];
console.log(prices[1]);
console.log(prices.length);

let FruitsnPrices : (string | number) [] = ["Apple", 100,"Banana", 200, "Carrot",300];
console.log(FruitsnPrices.length);
console.log(FruitsnPrices[2]);


//Tuples: Tuple is an ordered array that represents a list of values in a specific order. 

//Problem Statement : I want to store employee name, employee phone number, and employee visa status together. 

//Array
let empInformation : (string | number | boolean) [] = ["Sandeep",true, 993023342,"true"];


//Tuple:

let empDetail : [string , number , boolean] = ["Sandeep",993023342,true];


//Function => Function is a datatype that represents a block of code or collection of statements written together to complete a specific task. 

function logIntoApp(BrowserName:string, userName:string, Password:string):void { // void meaning no data returned.
    console.log('Launch the ${BrowserName} Browser');
    console.log("Enter the URL: https://www.icici.com");
    console.log('Enter the username as ${userName} and password as ${Password}');
    console.log("Click the login button");       
    }


    function getAccountBalance() {
        console.log("Navigate to Account balance Page");
        let accountBalance : number = 10000;
        return accountBalance;
    }

//Set => Set is a data type that represents a collection of unique values of any data type. 

let empIds: Set <number|string> =new Set(); //creating New Empty Set
empIds.add(1234); //adding value to the set.
empIds.add(1234);
empIds.add("Forty Fuve");
empIds.add(1234);
empIds.add(1234);

console.log(empIds.size);
console.log(empIds);


//Map => Map is a datatype that represents a collection of key-value pairs where the keys can be of any data type. 

let empDetail1 : Map<string, number|boolean|string> = new Map(); //Duplicate Keys are not allowed in the Map
empDetail1.set("empID",1234);
empDetail1.set("Visa",true);
empDetail1.set("Address","Chennai");
empDetail1.set("empID",1235); //Duplicate key, so the value will be updated to 1235.

console.log(empDetail1.size);
console.log(empDetail1.get("empID"));
