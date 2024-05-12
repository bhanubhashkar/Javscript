
// #####----- JavaScript Operators & Expressions -------------------------------------------------------------------------------------------#####

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
*/

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

/*
Assignment Operator 
    =   :   x = y	:   x = y
    +=	:   x += y	:   x = x + y
    -=	:   x -= y	:   x = x - y
    *=	:   x *= y	:   x = x * y
    /=	:   x /= y	:   x = x / y
    %=	:   x %= y	:   x = x % y
    **=	:   x **= y	:   x = x ** y
*/
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

/*
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

*/

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


/*
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

console.log("Logical Operator");
const descisionOne = true;
const descisionTwo = true;
const descisionThree = false;

console.log(descisionOne && descisionTwo);
console.log(descisionOne && descisionThree);
console.log(descisionOne || descisionTwo);
console.log(descisionOne || descisionThree);
console.log(!false);
console.log(!true);


