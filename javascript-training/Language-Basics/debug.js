
//1. At the break points (before the line where you want to manually execute the program. )
//2. Run the program in debug mode. 


//continue (F5) till next break point.
//stop (Shift + F5) --> Stop the execution of the program. 
//restart (Crtl+Shift+F5) --> Restart execution of the program from the begining. 
//Stepover (F10)  - Line by line execution. . Execute the current line and move to next line. 
//Step Into (F11) ->> Go inside the function. Check the internal code. 
//Step Out (Shift+F11) >> Come out of the functiona and move to the next line. 



console.log("Line number 1");
console.log("Line number 2");
console.log("Line number 3");
console.log("Line number 4");
sumOfNumbers(5,10);
console.log("Line number 5");
console.log("Line number 6");
console.log("Line number 7");
console.log("Line number 8");


//Logic of the function. 
function sumOfNumbers(a,b){
    c= a+b;
    console.log(c);
}

