
# Javascript Notes
[Click here](url)

## Variables
```javascript
/*
Variables are memory containers which can hold data.
in JS varibles data types can be changed during run time.
Size of varibles can also be increased during runtime as JS is dynamically typed programming language.
Once any variable is declared the initial value of that variable will be undefined.

Varbales names are case sensitive in javascript. myName and myname both will be treated as seperated variables.
Variable name can consist of letter, digit, underscore and $ only.
Variable name must be started with letter, undserscore or $ sign.
Variable naeme cannot be started with numbers.
Reserved words cannort be used as variable name.
*/

let myName = "Bhanu";

/*
let myName = "Bhanu";
in above code
let     :   keyword
myName  :   identifier
=       :   assignment
Bhanu   :   literal
*/

```

## Const Let & Var
```javascript
/*
const   :   The values cannot be changed, one time initializastion during declaration, this will be treated as constant throughout the execution, the scope is block.
let     :   The values can be changed during runtime and this is used to declare block scope variables.
var     :   The scope is global and values can be changed throughout the execution, which is not a good thing. NOT RECOMMENDED to use because of scope issues.
*/

const accNum = "BANK_SA_987654";
let accBal = 998800;
var accType = "Savings"

```

## Primitive & Objects
```javascript
/*
# Primitive Datatypes 
There are Seven Types of Primitive Datatypes (NNSSBBU)
null        :   Hold nothing
number      :   Hold numerical data
string      :   Hold alpha numerical data
symbol      :   Hold symbol
boolean     :   Hold boolean data true/false
BigInt      :   Hold large numerical data
undefied    :   Blank variable, Yet to be initialized

# Non Primitive/Objects or Reference Type Datatype (AOF)
There are three types of Non Primitive Data Types, which are also called as Objects, Function or Object Function.
array       :   Holds mutiple data which can be of different datatypes
object      :   Holds object or data in key : value pair format
function    :   Holds function definition
*/

const myNull = null;
const myNumber = 998877;
const myString  = "This is A string";
const mySymbol = Symbol("I am A symbol");
const boolean = true;
const boolean2 = Boolean(0);
const myBigint = 1234567n; 
const myBigint2 = BigInt("12345");
const myUndefined = undefined;

console.log(myArray);
console.log(myObject);
console.log(myFunction);
console.log(myFunction());

```

## Primitive & Objects
```javascript
/*

*/


```