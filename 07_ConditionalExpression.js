
// #####----- JavaScript Conditional Expressions ---------------------------------------------------------------------------------------------#####

/*
# Conditional Expressions
Execute A block of code based on conditions.
There are four types of conditional Expresiions
if                  :   Executes if block code if the statement under if is true.
if else             :   Executes if block code if the statement under if is true else execute the else block code. Only one block execution will happen.
if else if nested   :   Executes any one if block code if the statement under if is true else execute the else block code. Only one block execution will happen.
switch case         :   Ececutes all the code once the case value matches including defaukt, only break statement can stop execution, if no case value matched default case block code will be executed. Multiple block execution can happen.
*/

const marks1 = 55;
const marks2 = 35 ;
const marks3 = 85 ;

// if conditional expression
if(marks1 > 40){
    console.log("Student Passed.");
}

// if else conditional expression
if(marks2 > 40){
    console.log("Passed.");
}
else{
    console.log("Failed");
}

// inline if else using ternary operator
console.log("You are", marks3>40 ? "Passed." : "Failed.");

// nested if else conditional expression
if(marks3 >= 80){
    console.log("Distinction");
}
else if(marks3 >= 60 || marks3 < 80){
    console.log("First");
}
else if(marks3 >= 50 || marks3 < 60){
    console.log("Second");
}
else if(marks3 >= 40 || marks3 < 50){
    console.log("Third");
}
else {
    console.log("Failed.");
}

// switch case
 const dayName = 3;

 switch (dayName) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;   
    case 3:
        console.log("Tuesday");
        break;   
    case 4:
        console.log("Wednesday");
        break;   
    case 5:
        console.log("Thursday");
        break;   
    case 6:
        console.log("Friday");
        break;   
    case 7:
        console.log("Saturday");
        break;   
 
    default:
        console.log("Enter valid day");
 }

