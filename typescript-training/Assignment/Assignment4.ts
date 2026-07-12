/* Bank Transactions
Positive value refers Credit and Negative refers Debit Transaction
Transactions Amount
1 50000
2 -2000
3 3000
4 -15000
5 -200
6 -300
7 4000
8 -3000
First Store all the transactions in any data structure of Your Choice from collections, and by using
Loops and conditional statements
1. Print total number of credit and debit transactions completed
2. Print the total amount credited and debited in account
3. Print total amount remaining at the end in Bank Account
4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions */


let trans:number [] = [50000,-2000,3000,-15000,-200,-300,4000,-3000];

let totCredit : number =0;
let totDebit : number =0;
let totCreditAmt : number = 0;
let totDebitAmt : number =0;
let susTrans:number = 0;


for (let value of trans){
    if (value>0){
           totCredit++;
           totCreditAmt += value;
           if (value > 10000){
            console.log('Suspicious credit/ debit Transaction ${value}');
            susTrans ++;
           }
    } else {
        totDebit ++;
        totDebitAmt -= value;
        if (value < -10000){
             console.log('Suspicious credit/ debit Transaction ${value}');
            susTrans ++;
        }
    }
}

let finalBal : number = totCreditAmt - totDebitAmt;
console.log(`total number of credit  transactions completed is ${totCredit}`);
console.log(`total number of debit transactions completed is ${totDebit}`);
console.log(`total amount credited in account is ${totCreditAmt}`);
console.log(`total amount debited in account${totDebitAmt}`);
console.log(`total amount remaining at the end in Bank Account ${finalBal}`);
console.log(`transaction limit exceeds +/-10000 is ${susTrans}`);
