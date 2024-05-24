
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

let myName = "Bhanu";
in below code
let     :   keyword
myName  :   identifier
=       :   assignment
Bhanu   :   literal
*/
```

```javascript
let myName = "Bhanu";

```

## Const Let & Var
```javascript
/*
const   :   The values cannot be changed, one time initializastion during declaration, this will be treated as constant throughout the execution, the scope is block.
let     :   The values can be changed during runtime and this is used to declare block scope variables.
var     :   The scope is global and values can be changed throughout the execution, which is not a good thing. NOT RECOMMENDED to use because of scope issues.
*/
```

```javascript
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
```

```javascript
console.log("Primitive Datatypes");
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

console.log("Non Primitive Datatypes/Objects");
const myArray = ['Bhanu Bhshkar','B.Tech', 2020, 8.92, true, undefined];
const myObject = {fullName : 'Bhanu Bhashkar', course : "B.Tech", session : 2020, cgpa : 8.92, status : true, other : undefined};
const myFunction = function greet(){console.log('Hi, Geetings from JavaScript.');};

console.log(myArray);
console.log(myArray[0]);
console.log(myObject);
console.log(myObject.course);
console.log(myObject['course']);
console.log(myFunction);
console.log(myFunction());

```

## Operators Expression
```javascript
/*
Arithmetic Operators
    +   :   Addition
    -   :   Subtraction
    *   :   Multiplication
    **  :   Exponentiation (ES2016)
    /   :   Division
    %   :   Modulus (Division Remainder)
    ++  :   Increment (pre & post)
    --  :   Decrement (pre & post)

Assignment Operator 
    =   :   x = y	:   Assign right side value to let side
    +=	:   x += y	:   Add left right value and assign result to left side
    -=	:   x -= y	:   Substract left right value and assign result to left side
    *=	:   x *= y	:   Multiply left with right and assign result to left side
    /=	:   x /= y	:   Divide right with left and assign quotient in float to left side 
    %=	:   x %= y	:   Divide right with left and assign remainder to left side 
    **=	:   x **= y	:   Perform to the power(right side as power) operation on left and assign result to left side

Comparision Operator
    ==  :   Check if both side values are equal
    ===	:   Check if both side values and data type are equal
    !=	:   Check if both side values are not equal
    !==	:   Check if both side values and data type are not equal
    >	:   Check if left value is greater than right value
    <	:   Check if left value is lesser than right value
    >=	:   Check if left value is greater or equal to right value
    <=	:   Check if left value is lesser or equal to right value
    ?	:   Ternary operator

Logical Operator
    &&	:   AND -   Check if left and right both values are true, if both true returns true else false.
    ||	:   OR  -   Check if left and right amy values are true, if any true returns true else false.
    !	:   NOT -   Reverse the boolean value, if true return false else true.

Logical Assignment Operator	
    Symbol  Example	        Same As
    &&= :   x &&= y	    :   x = x && (x = y)
    ||= :   x ||= y	    :   x = x || (x = y)
    ??= :   x ??= y	    :   x = x ?? (x = y)

Bitwise Operator	    
    Symbol  Meaning     Example     Same as	        Result	    Decimal
    &	:   AND	        5 & 1	    0101 & 0001	    0001	    1
    |	:   OR	        5 | 1	    0101 | 0001	    0101	    5
    ~	:   NOT	        ~ 5	        ~0101	        1010        10
    ^	:   XOR	        5 ^ 1	    0101 ^ 0001	    0100	    4
    <<	:   left shift	5 << 1	    0101 << 1	    1010	    10
    >>	:   right shift	5 >> 1	    0101 >> 1	    0010	    2
    >>>	:   unsigned right shift	5 >>> 1	0101 >>> 1	0010    2

Bitwise Assignment Operator	
    Symbol  Example	    Same As
    &=  :   x &= y	    x = x & y
    ^=  :   x ^= y	    x = x ^ y
    |=  :   x |= y	    x = x | y

*/
```

```javascript
console.log("Arithmetic Operators");
let myNum1 = 5;
let myNum2 = 2;

console.log(myNum1+myNum2);
console.log(myNum1-myNum2);
console.log(myNum1*myNum2);
console.log(myNum1**myNum2);
console.log(myNum1/myNum2);
console.log(myNum1%myNum2);
// Pre Increament Decreement
console.log(++myNum1);
console.log(--myNum1);
// Post Increament Decreement
console.log(myNum2++);
console.log(myNum2--);

console.log("Assignment Operator");
let num1 = 5;
let num2 = 5;
let num3 = 5;
let num4 = 5;
let num5 = 5;
let num6 = 5;

num1+=2;
num2-=2;
num3*=2;
num4/=2;
num5%=2;
num6**=2;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);

console.log("Coparision Operator");
const myNewmun1 = 1
const myNewNum2 = 5
const myNewStr1 = '1';

console.log(myNewmun1 == myNewStr1);
console.log(myNewmun1 === myNewStr1);
console.log(myNewmun1 != myNewNum2);
console.log(myNewmun1 !== myNewStr1);
console.log(myNewmun1 < myNewNum2);
console.log(myNewmun1 > myNewNum2);
console.log(myNewmun1 <= myNewNum2);
console.log(myNewmun1 >= myNewNum2);

console.log("Logical Operator");
const descisionOne = true;
const descisionTwo = true;
const descisionThree = false;
const res1 = 11;
const res2 = 15;

console.log(descisionOne && descisionTwo);
console.log(descisionOne && descisionThree);
console.log(descisionOne || descisionTwo);
console.log(descisionOne || descisionThree);
console.log(res1 < 10 && res2 >10);
console.log(res1 < 10 || res2 >10);
console.log(!false);
console.log(!true);

```

## Conditional Expression
```javascript
/*
Execute A block of code based on conditions.
There are four types of conditional Expresiions
if                  :   Executes if block code if the statement under if is true.
if else             :   Executes if block code if the statement under if is true else execute the else block code. Only one block execution will happen.
if else if nested   :   Executes any one if block code if the statement under if is true else execute the else block code. Only one block execution will happen.
switch case         :   Ececutes all the code once the case value matches including defaukt, only break statement can stop execution, if no case value matched default case block code will be executed. Multiple block execution can happen.

*/
```
```javascript

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

```

## Loops
```javascript
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

for in   :
for (ObjectKey in ObjectName) {
    console.log("Marks of",ObjectKey +" is",ObjectName[ObjectKey]);
}
    ObjectKey   :   Capture the key of sekected object one by one 
    ObjectName  :   The selected object
    Values can be accessed like ObjectName[ObjectKey] inside loop.
    Can be used on array and objects.
---------------------------------------------------------------------------------

for of   :
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
```
```javascript

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
    console.log("Marks of" + marks + " is " + studentMarks[marks] + ".");
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

```

## Functions
```javascript
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
```
```javascript
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
```
## Strings
```javascript
/*
#Strings
Strings are used to store and manupulate text data, Strings are ummutable once declared it cant be changed.
Strings can be declared using "text" (double quotes), 'text' (single quotes) and using `text` (backtick).
Multiple Strings can be inserted in a statement using string interpolation/templete literals `${str1} and ${str2}`.
To use special character in any statement \ can be used. for " write \" (escape sequence \" will be treated as single character).
\n New Line, \t Tab, \r Carriage Return.
 
*/
```
```javascript
const firstName = "Bhanu";
const lastName = 'Bhashkar';
const nickName = `Tuttu`;

console.log(firstName);
console.log(lastName);
console.log(nickName);

//String interpolation and escape sequence
console.log(`The full name with nick name is ${firstName} ${lastName}\(${nickName}\).`);
```
## Strings (Methods & Properties)
```javascript
/*
String property can be used directlt after string with dot operator. str.length
String method have to be execusted after string using dot operator. str.toUpperCase()

#Strings Properties and Methods
Name	            Description
charAt()	    :   Returns the character at a specified index (position)
charCodeAt()    :   Returns the Unicode of the character at a specified index
concat()	    :   Returns two or more joined strings
constructor	    :   Returns the string's constructor function
endsWith()	    :   Returns if a string ends with a specified value
fromCharCode()  :   Returns Unicode values as characters
includes()      :	Returns if a string contains a specified value
indexOf()	    :   Returns the index (position) of the first occurrence of a value in a string
lastIndexOf()	:   Returns the index (position) of the last occurrence of a value in a string
length	        :   Returns the length of a string
localeCompare()	:   Compares two strings in the current locale
match()	        :   Searches a string for a value, or a regular expression, and returns the matches
prototype	    :   Allows you to add properties and methods to an object
repeat()	    :   Returns a new string with a number of copies of a string
replace()	    :   Searches a string for a pattern, and returns a string where the first match is replaced
replaceAll()	:   Searches a string for a pattern and returns a new string where all matches are replaced
search()	    :   Searches a string for a value, or regular expression, and returns the index (position) of the match
slice()	        :   Extracts a part of a string and returns a new string
split()	        :   Splits a string into an array of substrings
startsWith()	:   Checks whether a string begins with specified characters
substr()	    :   Extracts a number of characters from a string, from a start index (position)
substring()	    :   Extracts characters from a string, between two specified indices (positions)
toLocaleLowerCase() :   Returns a string converted to lowercase letters, using the host's locale
toLocaleUpperCase() :   Returns a string converted to uppercase letters, using the host's locale
toLowerCase()   :   Returns a string converted to lowercase letters
toString()	    :   Returns a string or a string object as a string
toUpperCase()	:   Returns a string converted to uppercase letters
trim()	        :   Returns a string with removed whitespaces
trimEnd()	    :   Returns a string with removed whitespaces from the end
trimStart()	    :   Returns a string with removed whitespaces from the start
valueOf()	    :   Returns the primitive value of a string or a string object


#HTML wrapper methods   :   return a string wrapped inside an HTML tag.
Method	        Description
anchor()	:   Displays a string as an anchor
big()	    :   Displays a string using a big font
blink()	    :   Displays a blinking string
bold()	    :   Displays a string in bold
fixed()	    :   Displays a string using a fixed-pitch font
fontcolor()	:   Displays a string using a specified color
fontsize()	:   Displays a string using a specified size
italics()	:   Displays a string in italic
link()	    :   Displays a string as a hyperlink
small()	    :   Displays a string using a small font
strike()	:   Displays a string with a strikethrough
sub()	    :   Displays a string as subscript text
sup()	    :   Displays a string as superscript text

*/
```
```javascript
const myName = "Bhanu Bhashkar";
const nickName = "Tuttu";

console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.slice(0,5));
console.log(myName.slice(6));

const concatName = myName.concat(" is name & nick name is ",nickName);
console.log(myName);
console.log(concatName);

```
## Arrays
```javascript
/*
#Array
Arrays are the type of variable which can hold multiple values that can be of different datatypes.
Arrays are mutable and it can be changed. It stores/behaves as sn object.
Even if the array is declared as constant it can be changed because the name of the array will store the reference location of actual array.

*/
```
```javascript
const myArray = ['Bhanu Bhashkar', 9876554433, {course : 'B.tech', score : 9.51}, ['TCS','AWS','eTeam'], true];

// Accessing an array
console.log(myArray);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[2].course);
console.log(myArray[2].score);
console.log(myArray[3]);
console.log(myArray[3][0]);
console.log(myArray[3][1]);
console.log(myArray[3][2]);
console.log(myArray[4]);

console.log(myArray.length);
console.log(typeof(myArray));

// Adding new value to an array
myArray[5] = false;
console.log(myArray);
console.log(myArray.length);

console.log("Access using for loop");
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

console.log("Access using forof loop");
for (const element of myArray) {
    console.log(element);
}

console.log("Access using forin loop");
for (const key in myArray) {
    const element = myArray[key];
    console.log(element);
}

console.log("Access using foreach loop");
myArray.forEach(element => {
    console.log(element);
});
```
```javascript
/*

*/
```
```javascript

```
```javascript
/*

*/
```
```javascript

```