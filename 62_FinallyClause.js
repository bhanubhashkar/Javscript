
// #####----- JavaScript Finally Clause ---------------------------------------------------------------------------------------------------------------#####

/*
The finally clause is usually used with try catch & block, the code inside finally will always gong to be executed.
Even if there is no error in try or in catch both block. If it exists it will run in all cases. 
If there is a return statement inside try or catch block, still finally will be executed just before giving the control to outer block/code.

Syntax :
try {
  tryCode - Code block to run
}
catch(err) {
  catchCode - Code block to handle errors
}
finally {
  finallyCode - Code block to be executed regardless of the try result
  close file, exit loop, log in file
}
*/

try {
    //console.log(myName);
    throw new Error("myName not available.")
} catch (error) {
    //console.log(error);
    //console.log(error.name);
    console.log(error.message);
    //console.log(error.stack);
}
finally{
    console.log("This message is from first finally block.");
}

try {
    //console.log(myName);
    throw new Error("myName not available.")
} catch (error) {
    //console.log(error);
    //console.log(error.name);
    console.log(error.message);
    console.log(myName);
}
finally{
    console.log("This message is from second finally block.");
}


