
// #####----- JavaScript Console -------------------------------------------------------------------------------------------------------#####

/*
# Console Methods
Method	    :   Description
assert()	:   Writes an error message to the console if a assertion is false
clear()	    :   Clears the console
count()	    :   Logs the number of times that this particular call to count() has been called
error()	    :   Outputs an error message to the console
group()	    :   Creates a new inline group in the console. This indents following console messages by an additional level, until console.groupEnd() is called
groupCollapsed():   Creates a new inline group in the console. However, the new group is created collapsed. The user will need to use the disclosure button to expand it
groupEnd()  :   Exits the current inline group in the console
info()	    :   Outputs an informational message to the console
log()	    :   Outputs a message to the console
table()	    :   Displays tabular data as a table
time()	    :   Starts a timer (can track how long an operation takes)
timeEnd()	:   Stops a timer that was previously started by console.time()
trace()	    :   Outputs a transaction stack trace to the console
warn()	    :   Outputs a warning message to the console
*/

let user = {
    fName : "Bhanu",
    lName : "Bhashkar",
    nName : "Tuttu",
    course: "B.Tech"
}

console.log("This is a simple log from log Method. 01");
console.info("This is an info log from info Method. 02");
console.warn("This is a warning log from warn Method. 03");
console.error("This is an error log from error Method. 04");
//console.clear("Clearing the log. 05");
console.time("userObjLog");
console.table(user);
console.timeEnd("userObjLog");

function myFunction() {
    myOtherFunction();
}
function myOtherFunction() {
    console.trace("This is a transaction trace log from trace Method.");
}

for (let index = 0; index < 3; index++) {
    console.count("This is a message from Count Method, Current Count ");
}

console.group("This is group message from group Method. 06");
console.log("Test 07");
console.log("Test 08");
console.log("Test 09");
console.groupEnd();

console.groupCollapsed("This is collapsed group message from group Method. 10");
console.log("Test 11");
console.log("Test 12");
console.log("Test 13");
console.groupEnd();

let x = 5;
let y = 5;
let z = 6;

console.assert(x + y == 10, "If true, log nothing. Only log if assertion is false.");
console.assert(x + z == 10, "If true, log nothing. Only log if assertion is false.");


