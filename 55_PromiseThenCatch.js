
// #####----- JavaScript Promise Then Catch -----------------------------------------------------------------------------------------------------------#####

/*
Then and Catch is used to receive the final outcome of a promise and execute code basis on resolve/reject. If error is not handled then an runtime error will be shown by JS engine.

Syntax :
promiseName.then((result)=>{
    console.log('Promise returned Result.');
},
(error)=>{
    console.log('Promise returned Error.');
})

*/

let myPromiseResolve = new Promise((resolve,reject)=>{
    console.log('Promise res is pending...');
    setTimeout(()=>{
        console.log('Promise res is fulfiled after 2 Sec.');
        resolve(true)
        //console.log(myPromiseResolve);
    },2000)
})
//console.log(myPromiseResolve);


let myPromiseReject = new Promise((resolve,reject)=>{
    console.log('Promise rej is pending...');
    setTimeout(()=>{
        console.log('Promise rej is failed after 4 Sec.');
        reject(false)
        //console.log(myPromiseReject);
    },4000)
})
//console.log(myPromiseReject);

// use then to get the result
myPromiseResolve.then((value)=>{
    console.log(value);
})

myPromiseReject.then((value)=>{
    console.log(value);
})

// use catch to get the error
myPromiseResolve.catch((error)=>{
    console.log('Some Error Occured One.');
})

myPromiseReject.catch((error)=>{
    console.log('Some Error Occured Two.');
})

// Pass two function result and error both in then
myPromiseResolve.then((result)=>{
    console.log('Promise returned Result.');
},
(error)=>{
    console.log('Promise returned Error.');
})

myPromiseReject.then((result)=>{
    console.log('Promise returned Result.');
},
(error)=>{
    console.log('Promise returned Error.');
})
