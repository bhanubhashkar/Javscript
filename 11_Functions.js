
// #####----- JavaScript Loops -------------------------------------------------------------------------------------------------------#####

/*
#Function
Functionis a block of code which is designed to perform a particulat task. 
It increases code reusability.
Function may or may not return any value.

function funcName(parameter1, parameter2) {
    // Code to execute
    // return statement
}

const funcName = (para1, para2) => {
    // Code to execute
    // return statement

}
    Function declaration can be done using function keyword followed by function name parathesisi and scope.
    Function can also be stored in a variable.
    Other way to define arrow function is varble name = parameter in praranthesis arrow symbol and scope.
    Function may or may not take parameter or return naything.
    Function have to be called thena nd only function will be executed.
    Pasiing parameter will be copied to function local variables for execution.

*/

function hello(){
    console.log("Hello, welcome.");
}
hello();

const hi = () => {
    return("Hi, welcome.")
}
const greet = hi();
console.log(greet);

function add(num1,num2){
    console.log(num1+num2);
}
add(300,200);
add(100,800);

const sum = (num1,num2) => {
    console.log(num1+num2);
}
sum(300,200);
sum(100,800);

function multiply(num1,num2){
    res = num1*num2;
    return res;
}
const result = multiply(111,5);
console.log(result);

const factorial = (num) => {
    let fact = 1;
    for (let i = 1; i <= num; i++ ){
        fact = fact * i;
    }
    return fact;
}
console.log(factorial(5)); 



