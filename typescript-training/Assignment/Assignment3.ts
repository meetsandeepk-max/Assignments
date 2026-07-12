/* Assignment -3 (Arrays/Datatypes/Operators)

1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
marks [75, 80, 82] Add 10 marks to each students using assignment operators and
store it into another array, after adding 10 marks identify the average marks of all
students

Expected Output:
Updated Marks:
Suresh: 85
Mahesh: 90
Naresh: 92
Average Marks: 89.0

*********************************************************************************** */


let studNames : string [] = ["Sandeep", "Ramesh", "Kumar", "Ravi", "Karthik"];
let marks : number [] = [20, 80, 70, 60, 50];
let totMarks:number =0 ;

console.log("Updated Marks:");
for (let i=0; i<studNames.length; i++){
        console.log(studNames[i] + " : " + (marks[i]! + 10));
        totMarks += (marks[i]!+10);

}

let avgMark : number =0;
avgMark = totMarks / marks.length;
console.log("Average Marks : " + avgMark);