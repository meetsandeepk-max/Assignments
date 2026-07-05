

//how to store data in a program? 
//declaration variable  data;
// In Javascript, we can declare the variables by using three different keywords. 

// 1. Var ( We should avoid in modern Javascript)
//2.  let (use for the variables that can be re-assigned)
// 3. Constant (use for the variables that cannot be re-assigned)

// These three diff variables checlaration will differ mainly based on 4 important params
//1. Initialization
//2. Reassignment
//3. Re-declaration
//4. Scope. 


//1. Initialization >> Adding the value at the time of declaration. 
var a; //It is not mandatory to store the data at the begining. 
let b; //It is not mandatory to store the data at the begining. 
const c=10; //It is mandatory to store the data at the begining. 

//2. Reassignment =>> Changing the original value
a=10; //var will allow reassignment
b=20; //let will allow reassignment
//c=30; //const will NOT allow reassignment

//3. #Re-declaration =>> Declaring the same variable again to store diffe3re3nt data
var a= "sand3eep"; //var will allow re-decaration
//let b="sand1"; //let wont allow re-declaration
//const c= "Sunday"; //const wont allow re-declaration. 

//4. Scode =>> The are of the program where the variable is accessible 
//var => not block scoped
//let => block scoped
//const => block scoped

{
    let X=10;
    const Y=20;
    var C=30;

}
console.log(X);
console.log(Y);
console.log(C);


