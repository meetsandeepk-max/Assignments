//How to store data in a program? 
//Syntax: declaration variable = data;
/* 
Operators in JavaScript 
Operators are nothing but a set of special characters used in JavaScript to perform different types of operations. 

There are mainly five different types of operators we are having in JavaScript. 

1. Arithmetic operators
2. Assignment operators
3. Comparison operators
4. Logical operators
5. Ternary operator 
*/

//1. Arithmetic Operators: They are the special characters used to perform mathematical operations.  (+,-,*,/,%,++,--)
/* - + is addition
- - is subtraction
- * is multiplication
- / is division
- % is modulus or remainder
- ++ is increment (increase the previous value by one)
- -- is decrement (decrease the previous value by one)
*/

let a=10;
let b=20;

//a++ => post-increment (Post execution of this line, increase the value by 1)
//b-- => post-decrement (Post execution of this line, decrease the value by 1)
console.log("**********Post Increment / Decrement*********") 
console.log(a++); // a= 10 >> 10+1 = 11
//console.log(a); //next line after post increment.
console.log(b--);
//console.log(b); //next line post decrement 


//a++ => pre-increment (Before execution of this line, increase the value by 1)
//b-- => pre-decrement (Before execution of this line, decrease the value by 1)
console.log("**********Pre Increment / Decrement*********") 
console.log(++a);
console.log(a); //next line after post increment.
console.log(--b);
console.log(b);
console.log(b); //next line post decrement

//2. Assignment operators: special characters used to assign values to the variable (=,+=,-=,*=,/=,%=)

let i=10;
console.log("Initial Value of i is: "+ i);

i+=10 //i=i+10, 10+10 = 20;
console.log("After using += the value of i is: "+ i);

i-=10 //i=i-10, 20+10 = 10;
console.log("After using -= the value of i is: "+ i);

i*=10 //i=i+10, 10*10 =100;
console.log("After using *= the value of i is: "+ i);

i/=10 //i=i+10, 100/10 = 10;
console.log("After using /= the value of i is: "+ i);

//3. Comparison Operators: Special characters used to compare two values (==,====,!=,>,<,>=,<=)
//== Represents Lose Equality. (Lose Equality Compares Only Data )
//=== Represents strict equality. [Strict equality compares data along with its datatype.] 

let x=10;
let y="10";
let z=10;

console.log(x==y); //true
console.log(x==z); //true

console.log(x===y); //False >> Datatype mismatch
console.log(x===z); //True

console.log(x!=z); //false
console.log(x>z); //false
console.log(x>=z);  //true
console.log(x<z); //False
console.log(x<=z); //true


//4. Logical Operators ==> Special characters used to build the logic by combining multiple conditions together (&&(and), ||(or), !(not))

//&&(and) => We will get a result as true only if all the conditions are true. 
//|| (or) => Will the result be true if Any one of the conditions is true. 
//!(not) => We will get the result is true if the condition is false. 

let p=10;
let q = 20;
let r =30;

console.log(p<q && q>r); // true && False = False
console.log(p<q || q>r); //True || False = True
console.log(!(p<q));  //not(true)=False

//5. Ternary Operator: Special character used to write a condition in a single line or short hand of an if-else conditional statement (?)


//Syntax : let result = condition ? value-if-true : value-if-false;

let age=20;

let Voting = (age>18) ? "Eligible to Vote" : "Not eligible to vote";
console.log("You are " + Voting );
