
// #####----- JavaScript Practice Set 03  -----------------------------------------------------------------------------------------------#####

// Log student marks from object using for loop
console.log("Log values using for loop :");
let studentMarks = {
    Bhanu : 95,
    Bhashkar : 96,
    Shashank : 98,
    Shekhar : 99,
    Shekhu : 100,
    Tuttu : 94
}

for (let index = 0; index < Object.keys(studentMarks).length; index++) {
    const key = Object.keys(studentMarks)[index];
    const value = studentMarks[key]
    console.log(`Mark of ${key} is ${value}.`);
}

console.log("Log values using forin loop :");
for (const key in studentMarks) {
    //const element = studentMarks[marks];
    console.log("Marks of " + key + " is " + studentMarks[key] + ".");
}

console.log("Ask user a number untill it matches with the current number :");
const currVal = 5;
let inputVal = 5;

while(currVal != inputVal){
    // get user input using prompt
    //inputVal = prompt("Enter a number :")
}

const mean = (a,b,c,d,e) => {
    meanRes = (a+b+c+d+e)/5;
    console.log(meanRes);
}
mean(1,2,3,4,5);