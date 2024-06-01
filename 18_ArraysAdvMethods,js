
// #####----- JavaScript Arrays Advance Methods --------------------------------------------------------------------------------------#####

// Delete - Deletes the givem index element and change the value to undefined/empty, doest not change the array length.
const myArr =['Bhanu','Shashank','Tuttu','Name','Shekhu','Shekhar','Bhashkar'];

const myNums = [98,77,7,88,23,54,6,61,89,3,66,82];

console.log(myArr);
console.log(myArr.length);
delete myArr[3];
console.log(myArr[3]);
console.log(myArr);
console.log(myArr.length);

// Sort - Sort an array alphabeticaly, changes the actual array
console.log(myArr.sort());
console.log(myArr);

// Sort with copare function as argument - Sort an array as per the compare function, changes the actual array
const comp = (a,b) => {
    return a - b;   //Desc
    //return b - a;   //Asc
}
console.log(myNums.sort(comp));
console.log(myNums);

// Reverse - Reverse the order of an array, changes the actual array
console.log(myNums.reverse());
console.log(myNums);

// Splice - Remove the specifield elements and add new elements, changes the existing Array and returns the removed values (Remove start index, no of items to remove, elements to be added as comma seperated)
const wishList = ['Mac M1','Pixel 8','Samsung S23','Airpod','iPad Pro'];
console.log(wishList);
const removedItem = wishList.splice(1,2, 'iPhone 16+','Apple Watch', 'Apple Vision');
console.log(wishList);
console.log(removedItem);

// Slice - Retuen specified piece of an array as a new array, No changes in existing array. (start index, end index - if end index is not given it will return all elements after start index)
const myList = ['Mac M1','Pixel 8','Samsung S23','Airpod','iPad Pro'];
console.log(myList.slice(2,4));
console.log(myList);


