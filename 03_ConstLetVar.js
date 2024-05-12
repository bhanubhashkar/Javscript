
// #####----- JavaScript Const Let & Var ---------------------------------------------------------------------------------------------------#####

/*
const   :   The values cannot be changed, one time initializastion during declaration, this will be treated as constant throughout the execution, the scope is block.
let     :   The values can be changed during runtime and this is used to declare block scope variables.
var     :   The scope is global and values can be changed throughout the execution, which is not a good thing. NOT RECOMMENDED to use because of scope issues.
*/

const accNum = "BANK_SA_987654";
let accBal = 998800;
var accType = "Savings"

console.log(accNum);
console.log(accBal);
console.log(accType);
