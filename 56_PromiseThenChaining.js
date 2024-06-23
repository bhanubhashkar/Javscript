
// #####----- JavaScript Promise Then Chaining -------------------------------------------------------------------------------------------------#####

/*
Using promise chaining the resolve values can be passed to one aother using return keyword inside then block. The promise can be directlty returned using return new Promise and not storing them in any vaiable.
The maim idea of promise chaining to pass the results through the chain of .then handlers. 
*/

// Promise Chaining
let myPromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        //console.log('Promise One Fulfilled.');
        resolve('Promise One Fulfilled.')
    }, 2000);

}).then((value)=>{
    console.log(value);
    let newPromise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            //console.log('Promise Two Fulfilled.');
            resolve('Promise Two Fulfilled.')
        }, 2000);
    })
    return newPromise

}).then((value)=>{
    console.log(value);
    let otherPromise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            //console.log('Promise Three Fulfilled.');
            resolve('Promise Three Fulfilled.')
        }, 2000);
    })
    return otherPromise

}).then((value)=>{
    console.log(value); 
    return true;

}).then(()=>{
    console.info('All Promise reolved.');
})


