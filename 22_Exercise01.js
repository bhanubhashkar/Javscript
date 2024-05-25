
// #####----- JavaScript Exercise 01 ----------------------------------------------------------------------------------------------------#####

let numEntered = 5;

const numToGuess = (Math.floor((Math.random() * 10) + 1));
console.log("Welcome, Enter to start guessing the number.");

console.log(numToGuess);

for (let numOfAttempt = 0; numOfAttempt < 10; numOfAttempt++) {
    console.log("Start Guessing");
    //let numEntered = Number(prompt("Enter a  number"));
    if (numEntered == numToGuess) {
        console.log("You guessed the correct number.");
        numOfAttempt = 10;
    }
    else {
        if (numEntered > numToGuess) {
            console.log("Guessed number is greater try again.");
            numOfAttempt--;
        }
        else if (numEntered < numToGuess) {
            console.log(" Guessed number is less try again.");
            numOfAttempt--;
        }
    }
}
// console.log(numToGuess);





