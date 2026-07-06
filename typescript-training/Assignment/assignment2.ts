/* Create common function and then based on below details, print whether user is eligible to get the loan
or not */

let customerName:string = "John Doe";
let creditScore:number = 720;
let income:number = 55000.0;
let isEmployed:boolean = true;
const debtToIncomeRatio:number = 35.0;

if (creditScore >750){
    console.log("Your loan is approved");
}else if (creditScore <650){
    console.log("Your loan is rejected");
}else if (creditScore >650 && creditScore <750){
    if(income >= 50000){
        if (isEmployed = true){
            if(debtToIncomeRatio < 40){
                console.log("Loan is approved");
            }
        }
    } else {
        console.log("loan is denied");
    }

}