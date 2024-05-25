
// #####----- JavaScript Arrays MAp Filter Reduce -----------------------------------------------------------------------------------------#####

// Map - Create a new array with all new elements using existig array, returns a new Array. (value, index, whole array), Accept a function in parameter.
const myNum = [10,20,30,40,50];
//console.log(myNum);

const newNum = myNum.map((element, index, array) => {
    console.log("Value at " + index + " is " + element + " and the whole array is " + array);
    return element * index;
})
console.log(newNum);

// Filter - Create a new array after applyling filter test on existing array, returns a new Array. (value, index, whole array), Accept a function in parameter.
const otherArray = myNum.filter((element,index,array)=>{
    //console.log(element,index,array);
    return element < 40;
})
console.log(otherArray);

// Reduce - Reduces an array in a single value. after appllying code logic of given function on array, iitially on first element and second element.
// After first iteration result of prev iteration will be considerd as first element. Returns a single value. (prevValue, currValue, currIndex, wholeArray), Accept a function in parameter.

const reducedArr = myNum.reduce((prev,curr,index,arr)=>{
    // console.log(prev);
    // console.log(curr);
    // console.log(index);
    // console.log(arr);
    return prev + curr;
})

console.log(reducedArr);
