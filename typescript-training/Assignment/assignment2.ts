/* Create common function and then based on below details, print whether user is eligible to get the loan
or not */

let customerName:string = "John Doe";
let creditScore:number = 700;
let income:number = 50000.0;
let isEmployed:boolean = true;
const debtToIncomeRatio:number = 35.0;

/* function evalloan(
    customerName:String,
    creditScore:number,
    income:number,
    isEmployed:Boolean,
    debtToIncomeRatio:number,
): void {
    console.log("loan Evaluation result for: " + customerName); */

if (creditScore >750){
    console.log("Your loan is approved");
}else if (creditScore >= 650){
        if(income >= 50000){
        if (isEmployed){
            if(debtToIncomeRatio < 40){
                console.log("Loan is Approved");
            }else {
                console.log("Loan is Denied of Debt Ratio");
            }
        } else {
                console.log("Loan is Denied of Employment");
            }
    } else {
                console.log("Loan is Denied of Income");
            }
} else {
        console.log("loan is Denied of CreditScore");
    } 
//}
