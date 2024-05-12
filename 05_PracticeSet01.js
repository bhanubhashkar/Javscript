
// #####----- JavaScript Practice Set 01  -----------------------------------------------------------------------------------------------#####

// Add number in string and check datatype
let myStr = "Bhanu";
let myNum = 123;
let addStrNum = myStr + myNum;

console.log(typeof (myStr));
console.log(typeof (myNum));

console.log(addStrNum);
console.log(typeof (addStrNum));

// Replace string value with number and check datatype
myStr = 9876;
console.log(myStr);
console.log(typeof (myStr));

// Assign anything to a const object variable
const myObject = {firstName : 'Bhashkar ', course : "B.Tech", session : 2020, cgpa : 8.92, status : true, other : undefined};
console.log(myObject);
// myObject = "Replaced Data"; // Assignment to const can not be done

// Assign anything to a let object variable
let myObject2 = {firstName : 'Bhanu ', course : "B.Tech", session : 2020, cgpa : 8.92, status : true, other : undefined};
console.log(myObject2);
myObject2 = "Replaced Data";
console.log(myObject2);

// Change and Add data in an const Object
const myObject3 = {firstName : 'Bhashkar ', course : "B.Tech", session : 2020, cgpa : 8.92, status : true, other : undefined};
console.log(myObject3);

myObject3['firstName'] = "Bhanu";
console.log(myObject3);

myObject3['lastName'] = "Bhashkar";
console.log(myObject3);

// Create data with student name & marks
const myStudent = {
    Bhanu : 80, 
    Bhashkar : 75, 
    Shashank : 87, 
    Shekhar : 73
};

console.log(myStudent);
console.log(myStudent.Bhashkar);
console.log(myStudent['Shashank']);



