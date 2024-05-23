
// #####----- JavaScript Strings -------------------------------------------------------------------------------------------------------#####

/*
#Strings
Strings are used to store and manupulate text data.
Strings can be declared using "text" (double quotes), 'text' (single quotes) and using `text` (backtick).
Multiple Strings can be inserted in a statement using string interpolation/templete literals `${str1} and ${str2}`.
To use special character in any statement \ can be used. for " write \" (escape sequence \" will be treated as single character).
\n New Line, \t Tab, \r Carriage Return.
 

*/

const firstName = "Bhanu";
const lastName = 'Bhashkar';
const nickName = `Tuttu`;

console.log(firstName);
console.log(lastName);
console.log(nickName);

//String interpolation and escape sequence
console.log(`The full name with nick name is ${firstName} ${lastName}\(${nickName}\).`);


