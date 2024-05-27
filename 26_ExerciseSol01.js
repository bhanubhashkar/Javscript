let numToGuess = Math.floor(Math.random() * 10) ;
let numOfGuess = 10;
let gameAttempt = 10;
let gameScore = 10;
let numInput = 5;
console.log(numToGuess);

console.log("Welcome, Start guessing you have total 10 guess :");
for (let index = 0; index < numOfGuess; index++) {
    console.log("Enter number");
    numInput = prompt("Enter no to Guess")
    numInput = parseInt(numInput);
    gameAttempt = gameAttempt - 1;
    if (gameAttempt > 0) {
        gameScore = gameScore - index;
        if(numInput == numToGuess){
            console.log("Congrarts... You have guessed it right, your score is : " + gameScore);
            gameAttempt = 0;
            index = 11;
        }
        else if(numInput < numToGuess){
            
            console.log("The guessed number is small, your have : " + gameAttempt + " guess left.");
        }
        else if(numInput > numToGuess){
            gameAttempt = gameAttempt - 1;
            console.log("The guessed number is big, your have : " + gameAttempt + " guess left.");
        }
    } 
    else {
        console.log("Oops... You have exhaused the total number of attempts, Please try again.");
        gameAttempt = 10;
        index = 11;
    }
}




