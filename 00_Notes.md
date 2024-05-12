
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

const myArray = ['Bhanu Bhshkar','B.Tech', 2020, 8.92, true, undefined];
const myObject = {fullName : 'Bhanu Bhashkar', course : "B.Tech", session : 2020, cgpa : 8.92, status : true, other : undefined};
const myFunction = function greet(){console.log('Hi, Geetings from JavaScript.');};

console.log(myNull);
console.log(myNumber);
console.log(myString);
console.log(mySymbol);
console.log(boolean);
console.log(boolean2);
console.log(myBigint);
console.log(myBigint2);
console.log(myUndefined);

console.log(myArray);
console.log(myArray[0]);
console.log(myObject);
console.log(myObject.course);
console.log(myObject['course']);
console.log(myFunction);
console.log(myFunction());

```

## Primitive & Objects
### 
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