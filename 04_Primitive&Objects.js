
// #####----- JavaScript Primitive & Objects ----------------------------------------------------------------------------------------------#####

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

console.log(myNull);
console.log(myNumber);
console.log(myString);
console.log(mySymbol);
console.log(boolean);
console.log(boolean2);
console.log(myBigint);
console.log(myBigint2);
console.log(myUndefined);

console.log(typeof(myNull));
console.log(typeof(myNumber));
console.log(typeof(myString));
console.log(typeof(mySymbol));
console.log(typeof(boolean));
console.log(typeof(boolean2));
console.log(typeof(myBigint));
console.log(typeof(myBigint2));
console.log(typeof(myUndefined));

const myArray = ['Bhanu Bhshkar','B.Tech', 2020, 8.92, true, undefined];
const myObject = {fullName : 'Bhanu Bhashkar', course : "B.Tech", session : 2020, cgpa : 8.92, status : true, other : undefined};
const myFunction = function greet(){console.log('Hi, Geetings from JavaScript.');};

console.log(myArray);
console.log(myObject);
console.log(myFunction);
console.log(myFunction());

console.log(typeof(myArray));
console.log(typeof(myObject));
console.log(typeof(myFunction));

