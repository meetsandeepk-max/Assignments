//Conditional Statement: Statements along with conditions. 

//Statement : Line of code. 

//There are two different types of conditional statements we have in Time Script. 
//1. If-else conditional statement:: When we don't know the result of the condition before itself 
//2. switch case conditional statement:: When we want to choose one option among multiple options available 

//If Else Statement

//Syntax
/* 
if (condition1){
    //code to be executed if Condition1 is true
} else if (condition2){
    //code to be executed if Condition2 is true
} else if (condition3){
    //code to be executed if Condition3 is true

}else{
    ////code to be executed if all the conditions are false
} */


//1-1 : Nested if-else conditional statement.
/* if (condition1){
    //code to be executed if Condition1 is true
    if (condition1a){
        //execute this if condition 1a is true. 
    } else{}
} else if (condition2){
    //code to be executed if Condition2 is true
} else if (condition3){
    //code to be executed if Condition3 is true

}else{
    ////code to be executed if all the conditions are false.
} */

let percentage : number = 90;

if (percentage > 90){
    console.log(`You Have scored ${percentage}, Distinction`);
}else if (percentage >70){
    console.log(`You Have scored ${percentage}, First Class`);
}else if (percentage>60){
    console.log(`You Have scored ${percentage}, Second class`);
}else {console.log(`You Have scored ${percentage}, Poor Perf`);}

/* //Eg of Nested If-else
let perct : number = 90;

if (perct > 90){
    console.log(`You Have scored ${perct}, Distinction`);
    if(perct >= 95){
        console.log("Will get Gold medal");
    }else{
        console.log("Will get Silver Medal");
    }
}else if (percentage >70){
    console.log(`You Have scored ${perct}, First Class`);
}else if (percentage>60){
    console.log(`You Have scored ${perct}, Second class`);
}else {console.log(`You Have scored ${perct}, Poor Perf`);}
 */

//Example of switch case conditional statement 
let env:string = "QA";

switch(env){
    case"dev":
    console.log("Run the app in Dev env");
    break; //Break keyword is used to exit from the switch case block when the case is matched. 
    case "QA":
        console.log("Run the app in QA env");
    break;
    case "prod":
        console.log("Run the app in Prod env");
    break;
}
