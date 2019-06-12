$(document).ready(function () {

    //  Global Variables

    var userScore = 0;
    var targetScore = 0;
    // var targetComplete = false;
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

    var startGame = function() {
        resetGame();
        generateCrystals();
        displayScores();
    }

    var resetGame = function () {
        userScore = 0;
        targetScore = Math.floor((Math.random() * 102) + 19);
    }

    var displayScores = function () {
        $("#wins-losses-text").html("Wins: " + wins + " Losses: " + losses);
        $("#target-score-text").html("Target Score: " + targetScore);
        $("#user-score-text").html("Your score is: " + userScore);
    }

    var winChecker = function () {
        if (userScore === targetScore) {
            wins ++;
            startGame();
        } else if (userScore > targetScore) {
            losses++;
            startGame();
        }
    }

    startGame();

    /*
    *   ----------------------------------------------------------------------------
    *   When user clicks...
    *   ----------------------------------------------------------------------------
    */

    //  Listen for user to click on one of the crystals

    //  Increase userScore by crystal clicked

    //  Checks if target was exactly hit (userGuess === targetScore), returns 'true' or 'false'




    $("#crystal-one").on("click", function () {
        userScore += crystalOne;
        winChecker();
        displayScores();
    });

    $("#crystal-two").on("click", function () {
        userScore += crystalOne;
        winChecker();
        displayScores();
    });

    $("#crystal-three").on("click", function () {
        userScore += crystalOne;
        winChecker();
        displayScores();
    });

    $("#crystal-four").on("click", function () {
        userScore += crystalOne;
        winChecker();
        displayScores();
    });




    console.log("score: " + userScore)
    console.log("wins: " + wins);
    console.log("losses: " + losses);



    //  If statement: 
    //  if userScore === target Score, "You win!", call restart game function
    //  if userScore > targetScore, "You lose :(", call restart game function
    //  if userScore < targetScore, wait for another crystal to be clicked




});

