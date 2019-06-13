/*
*   ----------------------------------------------------------------------------------------------------------------------
*   When page loads (document.ready)...
*   ----------------------------------------------------------------------------------------------------------------------
*/

$(document).ready(function () {

    //  Global Variables
    var userScore = 0;
    var targetScore = 0;
    var wins = 0;
    var losses = 0;
    var crystalOne = 0;
    var crystalTwo = 0;
    var crystalThree = 0;
    var crystalFour = 0;

    //  Generates crystal amounts, each to random
    var generateCrystals = function () {
        crystalOne = Math.floor((Math.random() * 12) + 1);
        crystalTwo = Math.floor((Math.random() * 12) + 1);
        crystalThree = Math.floor((Math.random() * 12) + 1);
        crystalFour = Math.floor((Math.random() * 12) + 1);
    }

    //  Starts game, is called at initially when page loads and after a win or loss
    var startGame = function () {
        resetGame();
        generateCrystals();
        displayScores();
    }

    //  Resets user score and target score
    var resetGame = function () {
        userScore = 0;
        targetScore = Math.floor((Math.random() * 102) + 19);
    }

    //  Displays text for target score, user score, and wins/losses
    var displayScores = function () {
        $("#wins-losses-text").html("Wins: " + wins + " Losses: " + losses);
        $("#target-score-text").html("Target Score: " + targetScore);
        $("#user-score-text").html(userScore);
    }

    //  Checks if target was exactly hit (userGuess === targetScore) and adds to wins or losses accordingly
    var winChecker = function () {
        if (userScore === targetScore) {
            wins++;
            startGame();
        } else if (userScore > targetScore) {
            losses++;
            startGame();
        }
    }

    /*
    *   ----------------------------------------------------------------------------------------------------------------------
    *   When user clicks on a crystal, add to userscore and call winChecker, then displayScores
    *   ----------------------------------------------------------------------------------------------------------------------
    */

    //  Function for each crystal, listens for user to click, adds that crystal's amount to user score, checks for a win and
    //  updates text to be displayed
    $("#crystal-one").on("click", function () {
        userScore += crystalOne;
        winChecker();
        displayScores();
    });

    $("#crystal-two").on("click", function () {
        userScore += crystalTwo;
        winChecker();
        displayScores();
    });

    $("#crystal-three").on("click", function () {
        userScore += crystalThree;
        winChecker();
        displayScores();
    });

    $("#crystal-four").on("click", function () {
        userScore += crystalFour;
        winChecker();
        displayScores();
    });

    //  Initializes the game
    startGame();
});

