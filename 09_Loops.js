
// #####----- JavaScript Loops -------------------------------------------------------------------------------------------------------#####

/*
# Loops
Loops are used to iterate or do repeated task multiple times.
There are five types of loops in javascript.
for         :   Execute block of code for certain times untill the condition is true.
for in      :   Loops through the keys of an object.
for of      :   Lopps through the values of an object.
while       :   Execute block of code on a specific condition.
do while    :   Execute block of code one time then execute on a specific condition.

---------------------------------------------------------------------------------

for :
for (statement1; statement2; statement3;){
    // loop body
}
    statement1  :   Executed one time
    statement2  :   Condition on which loop body will be executed
    statement3  :   Executed every time Loop body is executed
---------------------------------------------------------------------------------

forin   :
for (ObjectKey in ObjectName) {
    console.log("Marks of",ObjectKey +" is",ObjectName[ObjectKey]);
}
    ObjectKey   :   Capture the key of sekected object one by one 
    ObjectName  :   The selected object
    Values can be accessed like ObjectName[ObjectKey] inside loop.
    Can be used on array and objects.
---------------------------------------------------------------------------------

forof   :
for (ObjectValue of ObjectName) {
    console.log("Marks of",ObjectKey +" is",ObjectName[ObjectKey]);
}
    ObjectValue :   Capture the key of sekected object one by one 
    ObjectName  :   The selected object
    Values can be accessed by ObjectValue.
    Can be used only on array and string, not on objects.
---------------------------------------------------------------------------------

while   :
while (condition) {
    //if condition true run this block of code
}
    The condition inside while will be evaluated if true then while block code will be executed.
    The while block code will run till the condition inside while will became false.
    Force stop of loop can be done using break; statement.
---------------------------------------------------------------------------------

dowhile   :
do {
    //this block of code will executed then condition will be evaluated.
} while (condition;
    The do block code will be executed then the condition will be checked if true again do block code will be executed.
    Do block cod will be executed untill the condition inside while became false.
    Atlease one time execution going to heppen in do while loop.
---------------------------------------------------------------------------------

*/

console.log("Log N numbers using for loop :");
for (let index = 1; index <=5; index++) {
    let element = index;
    console.log(element);
}

console.log("Log values using forin loop :");
let studentMarks = {
    Bhanu : 95,
    Bhashkar : 96,
    Shashank : 98,
    Shekhar : 99,
    Shekhu : 100,
    Tuttu : 94
}
for (const marks in studentMarks) {
    //const element = studentMarks[marks];
    console.log("Marks of " + marks + " is " + studentMarks[marks] + ".");
}

console.log("Log values using forof loop :");
const nameChar = "Bhanu Bhashkar";
for (const value of nameChar) {
    //const element = studentMarks[marks];
    console.log("Chracters at place __ is " + value + "." );
}

console.log("Log values using while loop :");
let newNum1 = 1;
while (newNum1 <= 5) {
    console.log(newNum1);
    newNum1++;
}

console.log("Log values using dowhile loop :");
let newNum2 = 1;
do {
    console.log(newNum2);
    newNum2++;
} while (newNum2 <= 10);


// Add n Natural number
console.log("Sum of N numbers :");
let element =0
for (let index = 1; index <=5; index++) {
    element = element+index;
    console.log(element);
}
