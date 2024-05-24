
// #####----- JavaScript Arrays  -------------------------------------------------------------------------------------------------------#####

/*
#Array
Arrays are the type of variable which can hold multiple values that can be of different datatypes.
Arrays are mutable and it can be changed. It stores/behaves as sn object.
Even if the array is declared as constant it can be changed because the name of the array will store the reference location of actual array.

*/

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


