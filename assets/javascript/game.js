$(document).ready(function () {

    //  Global Variables

    var userScore = 0;
    var targetScore = 0;
    var targetComplete = false;
    var wins = 0;
    var losses = 0;
    var crystalOne = 0;
    var crystalTwo = 0;
    var crystalThree = 0;
    var crystalFour = 0;


    /*
    *   ----------------------------------------------------------------------------
    *   When page loads (document.ready)...
    *   ----------------------------------------------------------------------------
    */

    //  Generates random targetScore between 19-120

    targetScore = Math.floor((Math.random() * 102) + 19);
    console.log("target score: " + targetScore);

    //  Generates crystal amounts, each to random

    var generateCrystals = function () {
        crystalOne = Math.floor((Math.random() * 12) + 1);
        crystalTwo = Math.floor((Math.random() * 12) + 1);
        crystalThree = Math.floor((Math.random() * 12) + 1);
        crystalFour = Math.floor((Math.random() * 12) + 1);
    }
    generateCrystals();
    console.log("crystal one: " + crystalOne);
    console.log("crystal two: " + crystalTwo);
    console.log("crystal three: " + crystalThree);
    console.log("crystal four: " + crystalFour);

    /*
    *   ----------------------------------------------------------------------------
    *   When user clicks...
    *   ----------------------------------------------------------------------------
    */

    //  Listen for user to click on one of the crystals

    //  Increase userScore by crystal clicked

    //  Checks if target was exactly hit (userGuess === targetScore), returns 'true' or 'false'

    var winChecker = function () {
        if (userScore === targetScore) {
            targetComplete = true;
            console.log("you win");
        }
    }


    $("#crystal-one").on("click", function () {
        userScore += crystalOne;
        console.log(userScore);
        winChecker();
        if (targetComplete === true) {
            wins++;
            console.log("wins: " + wins);
            resetGame()
            generateCrystals();
        } else if (userScore > targetScore) {
            losses++;
            console.log("losses: " + losses);
            resetGame()
            generateCrystals();
        }
    });

    $("#crystal-two").on("click", function () {
        userScore += crystalTwo;
        console.log(userScore);
        winChecker();
        if (targetComplete === true) {
            wins++;
            console.log("wins: " + wins);
            resetGame()
            generateCrystals();
        } else if (userScore > targetScore) {
            losses++;
            console.log("losses: " + losses);
            resetGame()
            generateCrystals();
        }
    });

    $("#crystal-three").on("click", function () {
        userScore += crystalThree;
        console.log(userScore);
        winChecker();
        if (targetComplete === true) {
            wins++;
            console.log("wins: " + wins);
            resetGame()
            generateCrystals();
        } else if (userScore > targetScore) {
            losses++;
            console.log("losses: " + losses);
            resetGame()
            generateCrystals();
        }
    });

    $("#crystal-four").on("click", function () {
        userScore += crystalFour;
        console.log(userScore);
        winChecker();
        if (targetComplete === true) {
            wins++;
            console.log("wins: " + wins);
            resetGame()
            generateCrystals();
        } else if (userScore > targetScore) {
            losses++;
            console.log("losses: " + losses);
            resetGame()
            generateCrystals();
        }
    });

    var resetGame = function () {
        targetComplete = false;
        userScore = 0;
    }


    console.log("score: " + userScore)
    console.log("wins: " + wins);
    console.log("losses: " + losses);



    //  If statement: 
    //  if userScore === target Score, "You win!", call restart game function
    //  if userScore > targetScore, "You lose :(", call restart game function
    //  if userScore < targetScore, wait for another crystal to be clicked




});

