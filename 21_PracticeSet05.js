
// #####----- JavaScript Practice Set 05  -----------------------------------------------------------------------------------------------#####

const myArr =[];

for (let index = 1; index <= 30; index++) {
    myArr.push(index)
    //const element = array[index];
}
console.log(myArr);

const newArr = myArr.filter((element)=>{
    return element%10 == 0;
})
console.log(newArr);

const otherArray = myArr.map((element)=>{
    return element*element;
})
console.log(otherArray);

const nArr = [1,2,3,4,5]
const factN = nArr.reduce((prevValue,currValue)=>{
    return prevValue*currValue;
})
console.log(factN);



