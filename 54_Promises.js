
// #####----- JavaScript Console -------------------------------------------------------------------------------------------------------#####

/*
A promise is a promise of code execution, the cde either will be sucessfully executed or fail in both case subscriber will be notified. 


Syntax :
let PromiseName = new Promise(function(resolve, reject){
    //Code to be executed
})

Resolve and Reject are two callbacks provided by javascript itself, If the promise fulfills then Resolve will be called if the promise fails Reject will be called.

The Promise object returned by the new Promise constructor has these properties, which cannot be accesed using dot (.) operator.
state   : Initially pending, then changes to fulfiled or rejected as per the result/execution.
result  : Initially undefined changes to value if resolved (resolve(value)) and error if rejected (reject(rror)).

*/
// Promise
let myPomise = new Promise(function(resolve,reject){
    console.log("I am a promise.");
    resolve('myPromise is Resolved.')
});
console.log(myPomise);

// Resolved Promise
let myPromiseResolve = new Promise(function(resolve,reject){
    console.log("I am an log in promise.");
    setTimeout(()=>{
        resolve('myPromiseResolve Promise resolved.')
    },2000)
})
console.log(myPromiseResolve);

setTimeout(()=>{
    console.log(myPromiseResolve);
},3000)

// Rejected Promise
let myPromiseReject = new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject('myPromiseReject is rejected.')
    },5000)
})
console.log(myPromiseReject);

setTimeout(()=>{
    console.log(myPromiseReject);
},6000)

