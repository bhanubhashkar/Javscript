
// #####----- JavaScript Async Await ------------------------------------------------------------------------------------------------------------------#####

/*
Async functions implicitly return promises, makes a function return a Promise.
Await pauses the execution until the promise is resolved, makes a function wait for a Promise.

This simplifies asynchronous code and enhances readability by making it appear synchronous. async and await make promises easier to write.

Syntax :
All three function result will be same but myFunctionOne & myFunctionTwo act as promise and can be accessed using .then.

async function myFunctionOne() {
  return await "Hello";
}

function myFunctionTwo() {
  return Promise.resolve("Hello");
}

function myFunctionThree() {
  return "Hello";
}

myFunctionOne().then((value)=>{
  console.log(value);
})

myFunctionOTwo().then((value)=>{
  console.log(value);
})

console.log(myFunctionThree);
*/


// One async await function
async function myFunctionOne() {
  return await "Hello, functionOne.";
}
functionOneResult = myFunctionOne();
console.log(functionOneResult);

setTimeout(() => {
  console.log(functionOneResult);
},500)

// Multi async await function
async function myFunctionTwo (){
  let myPromiseOne = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("My PromiseOne is resolved after 1 seconds.")
    },2000);
  });
  
  let myPromiseTwo = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("My PromiseTwo is resolved after 4 seconds.")
    },4000);
  });

  console.log('Execution Started...');
  console.log('Waiting for promiseOne...');
  let proOne = await myPromiseOne;
  console.log("INFO promiseOne : "+ proOne);
  console.log('Waiting for promiseOne...');
  let proTwo = await myPromiseTwo;
  console.log("INFO promiseTwo : "+ proTwo);
  console.log("Execution completed.");

  return [proOne,proTwo]
}

let functionTwoResult = myFunctionTwo()
console.log(functionTwoResult)

setTimeout(() => {
  console.log(functionTwoResult);
},5000)

