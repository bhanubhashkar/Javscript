
// #####----- JavaScript Error Try Catch --------------------------------------------------------------------------------------------------------------#####

/*
The try statement allows us to define a block of code to be tested for errors while it is being executed.
The catch statement allows us to define a block of code to be executed, if an error occurs in the try block.
The try & catch JavaScript statements come in pairs. catch block is ignored if try block executes without any error.
Only synchronus code will be handled using try catch, if any scheduled (setTimeout) code is there in try block it wont go to catch block even if there is an eroor in try.
Immediate code in try block will be only considerd for err handling/check. To handle such cases try catch nees to be used inside scheduled code/task.

Syntax :
try {
    console.log("Execute try block code and give output.")
}
catch(err) {
    console.log("If any error occur in try block, execute catch block code.")
    console.log("Something went wrong :"+ err)
}
*/


//let myName ='Bhanu Bhashkar';

// Error handling using try catch
try {
    console.log(myName);
}
catch(err) {
    console.log("Something broke...01 " + err);
}

// scheduled caode error handling try catch ( work)
try {
    setTimeout(() => {
        try {
            console.log(myName);
        }
        catch(err) {
            console.log("Something broke...02 " + err);
        }
    },500)
}
catch(err) {
    console.log("Something broke... 03" + err);
}

// scheduled caode error handling try catch (won't work)
try {
    setTimeout(() => {
        console.log(myName);
    },500)
}
catch(err) {
    console.log("Something broke... 04" + err);
}
