//Loop Statement In TypeScript => Loop statements are nothing but the conditions that we are going to add along the statements To execute the same code multiple times .

//Loop statements are mainly divided into two different categories. 

//1. for loop => When we know the total number of iterations to be executed beforehand 
//2. while loop => When we are not sure about the total number of iterations to be executed 

//.1. for loop
//Syntax => for (condition-to-start;condition-to-end;interval){
//code to be executed
//}

let name:string = "Sandeep";
for(let i:number=1;i<=10;i++){
    console.log(name);
}

//2. while loop
//Syntax : while(condition-to-start){
//code to execute
//}

let j: number = 1;
let isPageLoaded : boolean = false;

while (j>0){
    if (j>5 || isPageLoaded){
        break; //stop the execution and come out of the loop.
    }
    console.log("Refresh the page");
    j++; //increment the count by 1

}

//Special cases in loops

//1. for...of loop => Used to iterate over the values of an array
//2. for..in loop => Used to iterate over the properties of an object. 
//3. do..while loop =>  used to execute the block of code at least once, even when the condition is not satisfied. 


//Array
let fruits:string []=["Apple","Banana","Grape","Mango"];

//normal for loop

for(let i:number =0 ; i<fruits.length; i++){
    console.log(fruits[i]);

}

//1. for...of loop  => I trade over each and every value of the given list.
//Syntax : for(let value of list{
//code to execute
//}

for(let fruit of fruits){
    console.log(fruit);
}


//2. for...in loop =>  Iterate over each and every property of the object
//Syntax : for(let property in object){
//code to execute
//}

//Create template to store object. 

interface empInfo{
    "empName":string,
    "empId":number,
    "visastatus":boolean,
    "address": {
        "city":string,
        "state":string,
    }
}
//storing the data

let empData : empInfo ={
    "empName" : "Sandeep",
    "empId" : 1234,
    "visastatus" : true,
    "address" :{
        "city" : "Chennai",
        "state" : "TN",
    }
}

/* for (let key in empData){
     console.log(key);
    }
for (let key in empData.address){
   console.log(key);
    console.log(empData.address[key as keyof empInfo["address"]]);
} */

for (let abc in empData){
   console.log(abc);
    console.log(empData.address[abc as keyof empInfo["address"]]);
}

//do..while loop => Execute the block of code at least once, even when the condition is not satisfied. 

//Syntax : do{
//execute the code
//}while(condition-to-start)

console.log("do..while loop example");
let x:number =0;
do{
    console.log("refresh the page");
    x++;
} while (x>0);
