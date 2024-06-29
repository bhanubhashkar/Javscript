
// #####----- JavaScript Promise Multiple Handlers -------------------------------------------------------------------------------------------------#####

/*
Multiple handlers can be attached to one promise. 
It execute the independent handlers independentlty once the promise is resolved.
*/

let myPromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        //console.log('Promise One Fulfilled.');
        resolve('Promise is Fulfilled.')
    }, 2000);
});

// Runs Independently
myPromise.then((value)=>{
    console.log(value);
});

myPromise.then(()=>{
    setTimeout(() => {
        console.log('Handler Two.');
    }, 2000);
});

myPromise.then(()=>{
    console.log('Handler Three.');
});