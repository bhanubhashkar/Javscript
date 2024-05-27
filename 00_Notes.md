
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
## Arrays Methods
```javascript
/*
new Array	    :   Creates a new Array
at()	        :   Returns an indexed element of an array
concat()	    :   Joins arrays and returns an array with the joined arrays
constructor	    :   Returns the function that created the Array prototype
copyWithin()    :   Copies array elements within the array, to and from specified positions
entries()	    :   Returns a key/value pair Array Iteration Object
every()	        :   Checks if every element in an array pass a test
fill()	        :   Fill the elements in an array with a static value
filter()	    :   Creates a new array with every element in an array that pass a test
find()	        :   Returns the value of the first element in an array that pass a test
findIndex()	    :   Returns the index of the first element in an array that pass a test
findLast()	    :   Returns the value of the last element in an array that pass a test
findLastIndex()	:   Returns the index of the last element in an array that pass a test
flat()	        :   Concatenates sub-array elements
flatMap()	    :   Maps all array elements and creates a new flat array
forEach()	    :   Calls a function for each array element
from()	        :   Creates an array from an object
includes()	    :   Check if an array contains the specified element
indexOf()	    :   Search the array for an element and returns its position
isArray()	    :   Checks whether an object is an array
join()	        :   Joins all elements of an array into a string
keys()	        :   Returns a Array Iteration Object, containing the keys of the original array
lastIndexOf()	:   Search the array for an element, starting at the end, and returns its position
length	        :   Sets or returns the number of elements in an array
map()	        :   Creates a new array with the result of calling a function for each array element
of()	        :   Creates an array from a number of arguments
pop()	        :   Removes the last element of an array, and returns that element
prototype	    :   Allows you to add properties and methods to an Array object
push()	        :   Adds new elements to the end of an array, and returns the new length
reduce()	    :   Reduce the values of an array to a single value (going left-to-right)
reduceRight()	:   Reduce the values of an array to a single value (going right-to-left)
reverse()	    :   Reverses the order of the elements in an array
shift()	        :   Removes the first element of an array, and returns that element
slice()	        :   Selects a part of an array, and returns the new array
some()	        :   Checks if any of the elements in an array pass a test
sort()	        :   Sorts the elements of an array
splice()	    :   Adds or Removes array elements
toReversed()	:   Reverses the order of array elements (to a new array)
toSorted()	    :   Sorts the elements of an array (to a new array)
toSpliced()	    :   Adds or Removes array elements (to a new array)
toString()	    :   Converts an array to a string, and returns the result
unshift()	    :   Adds new elements to the beginning of an array, and returns the new length
valueOf()	    :   Returns the primitive value of an array
with()	        :   Returns a new array with updated elements

*/
```
```javascript

const myArray = ['Bhanu', true, 9988776655,'Dummy Data'];
const basicArray = ['Bhashkar', false, 112233, 'Bhagalpur'];
const advanceArray = ['Tuttu',['Tarapur','Munger','Bihar',], 'India', ['TCS',['Engineer',['Full Stack','SRE'],true]], {key1:'value1',key2:'value2'}];
const otherArray= new Array('This','is','other','array,','created using','new & Array keyword.');


console.log(myArray);
console.log(basicArray);
console.log(advanceArray);
console.log(otherArray);

// Array to string
console.log(myArray.toString());

// Array to string with character as seperator.
console.log(myArray.join(' - '));

// Removes last element of an Array, returns removed element value, Changes done on existing array.
console.log(myArray.pop());
console.log(myArray);

// Add new element to last of an Array, return size of array after addtion. Changes done on existing array.
console.log(myArray.push('Add an Element'));
console.log(myArray);

// Remove first element of an Array, returns removed element value. Changes done on existing array.
console.log(myArray.shift());
console.log(myArray);

// Add new element to start of an Array, return size of array after addtion. Changes done on existing array.
console.log(myArray.unshift('Shekhu'));
console.log(myArray);

// Concatenate multiple single order array, returns new array, No changes done on existing array.
const newArr = myArray.concat(basicArray);
console.log(newArr);

// Convert any Object to an Array
const myName = 'Bhanu';
console.log(myName);
const myNameArr = Array.from(myName);
console.log(myNameArr);

```
```javascript

// Delete - Deletes the givem index element and change the value to undefined/empty, doest not change the array length.
const myArr =['Bhanu','Shashank','Tuttu','Name','Shekhu','Shekhar','Bhashkar'];

const myNums = [98,77,7,88,23,54,6,61,89,3,66,82];

console.log(myArr);
console.log(myArr.length);
delete myArr[3];
console.log(myArr[3]);
console.log(myArr);
console.log(myArr.length);

// Sort - Sort an array alphabeticaly, changes the actual array
console.log(myArr.sort());
console.log(myArr);

// Sort with copare function as argument - Sort an array as per the compare function, changes the actual array
const comp = (a,b) => {
    return a - b;   //Desc
    //return b - a;   //Asc
}
console.log(myNums.sort(comp));
console.log(myNums);

// Reverse - Reverse the order of an array, changes the actual array
console.log(myNums.reverse());
console.log(myNums);

// Splice - Remove the specifield elements and add new elements, changes the existing Array and returns the removed values (Remove start index, no of items to remove, elements to be added as comma seperated)
const wishList = ['Mac M1','Pixel 8','Samsung S23','Airpod','iPad Pro'];
console.log(wishList);
const removedItem = wishList.splice(1,2, 'iPhone 16+','Apple Watch', 'Apple Vision');
console.log(wishList);
console.log(removedItem);

// Slice - Retuen specified piece of an array as a new array, No changes in existing array. (start index, end index - if end index is not given it will return all elements after start index)
const myList = ['Mac M1','Pixel 8','Samsung S23','Airpod','iPad Pro'];
console.log(myList.slice(2,4));
console.log(myList);

```
## Array with Loops
```javascript
// Using For Loop
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}

// Using ForEach Loop, changes in existing array. it used to perform operation on existing array (value, index, whole array)
myNum.forEach((element, index, array) => {
    element = element * element;
    console.log(element); 
    console.log(index); 
    console.log(array); 
});

// Using For in Loop
for (const key in myArr) {
    const element = myArr[key];
    console.log(element);
}

// Using For of Loop
for (const iterator of myNum) {
    console.log(iterator);
}
```
## Map, Filter & Reduce
```javascript
// Map - Create a new array with all new elements using existig array, returns a new Array. (value, index, whole array), Accept a function in parameter.
const myNum = [10,20,30,40,50];
//console.log(myNum);

const newNum = myNum.map((element, index, array) => {
    console.log("Value at " + index + " is " + element + " and the whole array is " + array);
    return element * index;
})
console.log(newNum);

// Filter - Create a new array after applyling filter test on existing array, returns a new Array. (value, index, whole array), Accept a function in parameter.
const otherArray = myNum.filter((element,index,array)=>{
    //console.log(element,index,array);
    return element < 40;
})
console.log(otherArray);

// Reduce - Reduces an array in a single value. after appllying code logic of given function on array, iitially on first element and second element.
// After first iteration result of prev iteration will be considerd as first element. Returns a single value. (prevValue, currValue, currIndex, wholeArray), Accept a function in parameter.

const reducedArr = myNum.reduce((prev,curr,index,arr)=>{
    // console.log(prev);
    // console.log(curr);
    // console.log(index);
    // console.log(arr);
    return prev + curr;
})

console.log(reducedArr);
```
## Browser
```javascript
/*
The browser have Javascript Engine or Javascript runtimt which executes and runs the js code.
Javascript ability in browser is limited. Like a web page google.com js can not access client's machine memory and other webpages opens in same browser.

Developer Tools
Every browser have some tools for development purpose, usually known as Developer tools.
Elements    :   Shows web page elements
Console     :   Where all the console messages are logged
Sources     :   List of files/media and path used or attached to any webpage.
Network     :   Shows network call by browser 
Performansce:   Shows the performance of the web page, render speed
Memory      :   
Application 
Lighthouse
Recorder
*/
```
## Script Tag
```javascript
/*
Js can be added in any html page using <script> </script> Tag.
Javascript code can be written directly inside script tag in html head or body section.
Other way to add js is using src attribute of script tag.
Seperation of concern and rowser Caching

<script>
    console.log("Hello, This JS code is from script tag.");
</script>

<script src="JsFilePath/JsFileName.js"> </script>

*/
```
## Console
```javascript
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
```
```javascript
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
```
## Alert Prompt & Confirm
```javascript
let userName = 'Default User';
let userSession = '';

// Shows an popup in browser with the given message.
alert("Hi " + userName + ", Welcome this is a message from JS using prompt method.");

// Shows an popup in browser with the given message and expect an input (a string value).
userName = prompt ("Enter Your Name :");
alert("Hi " + userName + ", Welcome this is a message from JS using prompt method.");

// Shows an popup in browser with the given message and expect Ok/Cancel button click, where Ok means true and Cancel means false.
userSession = confirm("Do you want to logout ?");
alert("User choosed " + userSession + ".");

// Append the text content in HTML page body section.
document.write('This is added using document.write method');

// Alert Prompt and confirm blocks the main execution threads.

```
## BOM & DOM
```javascript
// Window   :   It is a global object. It represents the browser window and provides methods to control it.
console.log(window);
window.console.log(window);

// DOM      :   Represent the page content as HTML. Thw whole browser elements is converted as a JS object and named as DOM (Document Object Model).
console.log(document);
// Parse the body element of HTML Page as JS Object.
console.log(document.body);

// BOM      :   Represent the additional objects provided by the browser/host for working with everything except the document. Thw functions alert, prompt are the examples of BOM (Document Object Model).
alert("Hi Bhanu, Welcome this is a message from JS.");
// Refirect to any web address.
location.href='https://google.com';

```
```javascript
<<script>
let userAge = 0;
let userDrive = '';
let userRepeat = true;

do {
    userAge = Number.parseInt(prompt("Hi, Please enter your age :"));
    if (userAge < 0) {
        alert("Your entered age " + userAge + " which is invalid, Please try again with valid age.");
        console.error("Your entered age " + userAge + " which is invalid, Please try again with valid age.");
        userRepeat = true;
    }
    else if (userAge >= 18) {
        alert("Your age is " + userAge + ", You can drive :\) ");
        userRepeat = confirm("Do you want to see the prompt again ? ");
        if (userRepeat == true) {
            userRepeat = true;
        }
        else {
            userRepeat = false;
        }
    }
    else {
        userRepeat = confirm("Your age is " + userAge + ", You cannot drive :\( ");
        userRepeat = confirm("Do you want to see the prompt again ? ");
        if (userRepeat == true) {
            userRepeat = true;
        }
        else {
            userRepeat = false;
        }
    }

} while (userRepeat == true);
alert("Thank you for using driving age eligibility test.");
</script>

<script>
let userNum = 0;

userNum = Number.parseInt(prompt("Hi, Please enter number to redirect: \n 1: Google age \n 2: Facebook \n 3: Outlook :"));
if (userNum < 0 || userNum > 3) {
    alert("Your entered age " + userAge + " which is invalid, Please try again with valid age.");
}
else if (userNum == 1) {
    location.href = "https://google.com";
}
else if (userNum == 2) {
    location.href = "https://facebook.com";
}
else if (userNum == 3) {
    location.href = "https://outlook.com";
}
</script>

<script>
let userColor = 0;

userColor = prompt("Hi, Please enter color to change the background :");
document.body.style.backgroundColor=userColor;
</script>

```
```javascript
// DOM tree refers to the HTML page where all the nodes are objexts. There are 3 main type of node in DOM Tress :
// Text Node, Element Node & Comment Node
// In HTML page <html> is at root and <head>, <body> are its cildren.
// A text node is always a leaf of the tree.
// Document body can sometime be null if the JS is written before the body tag.

/*
document                    :   Returns the whole web page HTML element.
document.documentElement    :   Returns the whole web page HTML element in Object.
document.head               :   Returns haed section HTML element.
document.body               :   Returns body section HTML element.
document.title              :   Returns title of the web page in string.


<html lang="en">        :   Root Element - Main document
<head>                  :   Child
    <title>             :   Child
        Document        :   Text Node - Leaf Element
    </title>
</head>
<body>                  :   document.body 
    <h1>This is heading.</h1>   :   document.h1
</body>
</html>

const gameRound = 2;
let gameRepeat = '';
const preChar ='RPS';
const charLen = preChar.length;
*/

```
```javascript
32

```
```javascript
33

```
```javascript
34

```
```javascript
35

```