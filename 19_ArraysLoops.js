
// #####----- JavaScript Arrays with Loops -----------------------------------------------------------------------------------------#####


const myArr = ['Bhanu','Bhashkar','Tuttu', 9988776655, 'October', 'TCS', true];
const myNum = [2,4,6,8,10,12,14,16,18,20];

// Using For Loop
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}

// Using ForEach Loop, changes in existing array. it used to perform operation on existing array (value, index, whole array)
myNum.forEach((element, index, array) => {
    element = element * element;
    console.log(element); 
    console.log(index); 
    console.log(array); 
});

// Using For in Loop
for (const key in myArr) {
    const element = myArr[key];
    console.log(element);
}

// Using For of Loop
for (const iterator of myNum) {
    console.log(iterator);
}





