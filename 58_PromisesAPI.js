
// #####----- JavaScript Promises API -----------------------------------------------------------------------------------------------------------------#####

/*
There are 6 static method of promise class. Through which we can get aggregate ressponse of multiple promises. 

Promise.all(promises)       :   Wait for all promises to resolved and return an array of their result. If any fails it became error and all other results are ignored.
Promise.allSettled(promies) :   Wait for all promises to settle and return an array of objects with status and values. Rejected and Resolved all promises results as an array.
Promise.race(promises)      :   Wait for the first fastest promise to settle and its result/error becomes an outcome.
Promise.any(promises)       :   Wait for the first fastest promise to fulfill/resolved(not rejected) and its result become an outcome. Throw aggregate error if all promises are rejected. If any promise resolved no error will be thrown.
Promise.resolve(value)      :   Makes a resolved promise with given value.
Promise.reject(value)       :   Makes a rejected promise with given error.

*/

// Resolved promise
let myPromiseOne = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("my PromiseOne is resolved after 1 seconds.")
    },1000)
})

let myPromiseTwo = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("my PromiseTwo is resolved after 2 seconds.")
    },2000)
})

let myPromiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("my PromiseThree is resolved after 3 seconds.")
    },3000)
})

// Rejected promise
let myPromiseReject = new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject(new Error("This promise is rejected."));
    },5000)
})

// all - Get reponse once all mentioned promised inside array is resolved.
let allPromiseRes1 = Promise.all([myPromiseOne,myPromiseTwo,myPromiseThree]);
allPromiseRes.then((value)=>{
    console.log(value);
})

// allSettled - Get reponse once all mentioned promised inside array is settled.
let allPromiseRes2 = Promise.allSettled([myPromiseOne,myPromiseTwo,myPromiseThree,myPromiseReject]);
allPromiseRej.then((value)=>{
    console.log(value);
})

// race - first fastest promise to settle and its result/error becomes an outcome
let allPromiseRes3 = Promise.race([myPromiseOne,myPromiseTwo,myPromiseThree]);
allPromiseRes.then((value)=>{
    console.log(value);
})

// any - first fastest promise to fulfill/resolved(not rejected) and its result become an outcome.
let allPromiseRes4 = Promise.any([myPromiseOne,myPromiseTwo,myPromiseThree,myPromiseReject]);
allPromiseRes.then((value)=>{
    console.log(value);
})

// Get reponse once promised is resolved/rejected.
myPromiseOne.then((value)=>{
    console.log(value)
})

myPromiseTwo.then((value)=>{
    console.log(value)
})

myPromiseThree.then((value)=>{
    console.log(value)
})

myPromiseReject.then((value)=>{
    console.log(value)
})


  