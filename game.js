// Simple Guessing Game

function guessingGame() {
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    let guess = 0;
    let attempts = 0;

    console.log("Welcome to the Guessing Game!");
    console.log("Guess a number between 1 and 100:");

    while (guess !== targetNumber) {
        guess = parseInt(prompt("Enter your guess: ")); 
        attempts++;

        if (guess < targetNumber) {
            console.log("Too low! Try again.");
        } else if (guess > targetNumber) {
            console.log("Too high! Try again.");
        } else {
            console.log(`Congratulations! You've guessed the number ${targetNumber} in ${attempts} attempts.`);
        }
    }
}

guessingGame();