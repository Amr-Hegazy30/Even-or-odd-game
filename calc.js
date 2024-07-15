let attempts = 0;
let score = 0;

function guess(userGuess) {
    // Increasing attempts by 1.
    attempts++;
    document.getElementById("attempts").innerHTML = attempts;

    // Generating a random number.
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Determining the correct answer.
    const correctAnswer = (randomNumber % 2) == 0 ? "even" : "odd";
    // SFX function
    function sfx(isCorrect) {
        let audio = isCorrect
            ? document.getElementById("correct")
            : document.getElementById("wrong");
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    }

    if (correctAnswer == userGuess) {
        // Update the display
        document.getElementById("display").innerHTML =
            "Correct! the number is " + randomNumber
        // Increaaing the player score
        score++;
        // Playing the player score
        document.getElementById("Score").innerHTML = score;
        // Playing the SFX
        sfx(true);
    }
    else {
        // Update the display
        document.getElementById("display").innerHTML =
            "Wrong! the number is " + randomNumber
        // Playing the SFX
        sfx(false);
    }
}