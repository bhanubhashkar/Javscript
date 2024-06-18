

// #####----- JavaScript Promises API -------------------------------------------------------------------------------------------------------#####

/*
There are 6 static method of romise class.

Promise.all(promises)       :   Wait for all promises to resolved and return an array of their result. If any fails it became error and all other results are ignored.
Promise.allSettled(promies) :   Wait for all promises to settle and return an array of objects with status and values.
Promise.race(promises)      :   Wait for the first fastest promise to settle and its result/error becomes an outcome.
Promise.any(promises)       :   Wait for the first fastest promise to fulfill(not rejected) and its reult become an outcoe. Throw aggregate error if all promises re rejected.
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

// Get reponse once all mentioned promised inside array is resolved.
// let allPromiseRes = Promise.all([myPromiseOne,myPromiseTwo,myPromiseThree]);
// allPromiseRes.then((value)=>{
//     console.log(value);
// })

// Get reponse once all mentioned promised inside array is settled.
// let allPromiseRej = Promise.allSettled([myPromiseOne,myPromiseTwo,myPromiseThree,myPromiseReject]);
// allPromiseRej.then((value)=>{
//     console.log(value);
// })

// first fastest promise to settle and its result/error becomes an outcome
// let allPromiseRes = Promise.race([myPromiseOne,myPromiseTwo,myPromiseThree]);
// allPromiseRes.then((value)=>{
//     console.log(value);
// })


// first fastest promise to settle and its result/error becomes an outcome
// let allPromiseRes = Promise.any([myPromiseOne,myPromiseTwo,myPromiseThree,myPromiseReject]);
// allPromiseRes.then((value)=>{
//     console.log(value);
// })


// Get reponse once promised is resolved/rejected.
// myPromiseOne.then((value)=>{
//     console.log(value)
// })

// myPromiseTwo.then((value)=>{
//     console.log(value)
// })

// myPromiseThree.then((value)=>{
//     console.log(value)
// })

// myPromiseReject.then((value)=>{
//     console.log(value)
// })







