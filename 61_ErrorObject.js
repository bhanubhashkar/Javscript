
// #####----- JavaScript Error Object & Custom Error --------------------------------------------------------------------------------------------------#####

/*
The Error object provides error information when an error occurs. Two main properties of builtin errors.
name	    :   Sets or returns an error name
message	    :   Sets or returns an error message (a string)

Predefined Error Names :
EvalError	    Deprecated - use SyntaxError instead	 
RangeError	    A number "out of range" has occurred	
ReferenceError	An illegal reference has occurred	
SyntaxError	    A syntax error has occurred	
TypeError	    A type error has occurred	
URIError	    An error in encodeURI() has occurred

Syntax :
throw new ErrorType("Error Message")

let err = ew ErrorType("Error Message")
onsole.log(err);
*/

// Error Object
try {
    console.log(myName);
} catch (error) {
    //console.log(error);
    console.log(error.name);
    console.log(error.message);
    //console.log(error.stack);
}

// Custom Error
try {
    //console.log(myName);
    throw new Error("myName not available.")
} catch (error) {
    //console.log(error);
    console.log(error.name);
    console.log(error.message);
    //console.log(error.stack);
}

// Custom Error other
try {
    let myAge = 151;

    if (myAge>=150) {
        throw new Error("The given agae is may not true.")
    } else {
        console.log("Your Age is :" + myAge);
    }
    
} catch (error) {
    //console.log(error);
    console.log(error.name);
    console.log(error.message);
    //console.log(error.stack);
}

