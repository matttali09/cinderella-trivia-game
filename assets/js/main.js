// Var for the timer
var intervalId;

//Game object that holds all the questions and functions for the game
var game = {
    //Questions array 
    questions: [
        //Each question objectnis structured the same
        // The first line is for the questions being asked
        // The second line is a answers array which all four possible answers are stored
        // The third line is the correct answers as a string, used to compare to what the users clicks on
        // The final line is the key for the question, used to check which question will be displayed
        question1 = {
            question: "What Country does Cinderella Take Place in?",
            answers: ["England", "Germany", "France", "Italy"],
            correctAnswer: "France",
            key: 1
        },
        question2 = {
            question: "After both of Cinderella's parents die, with whom is she left to live?",
            answers: ["Your mom", "Her stepmother and two stepsisters", "Her Aunt", "Nobody"],
            correctAnswer: "Her stepmother and two stepsisters",
            key: 2

        },

        question3 = {
            question: 'FILL IN THE LINE FROM THE OPENING SONG: ♫ “CINDERELLA. IF YOU GIVE YOUR HEART A CHANCE IT WILL LEAD YOU_________"♫',
            answers: ["To the ball to find romance", "Anywhere you wish to dance", "To the kingdom of romance", "To the kingdom and you'll dance"],
            correctAnswer: "To the kingdom of romance",
            key: 3
        },

        question4 = {
            question: "The actress who provides the voice of Lady Tremaine also voiced a Disney villain in which movie?",
            answers: ["101 Dalmatians", "Alice in Wonderland", "Sleeping Beauty", "The Little Mermaid"],
            correctAnswer: "Sleeping Beauty",
            key: 4
        },

        question5 = {
            question: "What is Gus the mouse's real first name?",
            answers: ["Octavius", "Augustus", "Gustav", "Guston"],
            correctAnswer: "Octavius",
            key: 5
        },

        question6 = {
            question: "Who provided the speaking and singing voice of Cinderella?",
            answers: ["Mary Costa", "Paige O'Hara", "Adriana Caselotti", "Ilene Woods"],
            correctAnswer: "Ilene Woods",
            key: 6
        },

        question7 = {
            question: "Who did the dress in Cinderella's attic belong to?",
            answers: ["Lady Tremaine", "Cinderella's mother", "Cinderella's grandmother", "The King's first wife"],
            correctAnswer: "Cinderella's mother",
            key: 7
        },

        question8 = {
            question: "Which song from the film received an Academy Award nomination?",
            answers: ['"Oh Sing Sweet Nightingale"', '"So This Is Love"', '"A Dream is a Wish Your Heart Makes"', '"Bibbidi Bobbidi Boo"'],
            correctAnswer: '"Bibbidi Bobbidi Boo"',
            key: 8
        },

        question9 = {
            question: "Verna Felton voiced not only Cinderella's Fairy Godmother, but also which other Disney fairy?",
            answers: ["The Blue Fairy", "Fauna", "Flora", "Fairy Mary"],
            correctAnswer: "Flora",
            key: 9
        },

        question10 = {
            question: "What is the name of Cinderella's horse friend who becomes the coach driver?",
            answers: ["Major", "Maximus", "Pierre", "Sampson"],
            correctAnswer: "Major",
            key: 10
        }
    ],


    // Used to store the amount of correct answers
    rightAnswers: 0,
    // Used to store the amount of wrong answers
    wrongAnswers: 0,
    // Used for the timer
    time: 1,
    // Used to determine if the clock is running
    clockCount: false,
    // array to hold already chosen questions
    chosenQuestions: new Array,

    // Start game function that resets everything back and displays the gary gif
    startGame: function () {
        game.time = 20;
        game.rightAnswers = 0;
        game.wrongAnswers = 0;
        game.chosen = "";
        game.clockCount = false;
        game.chosenQuestions = new Array;
        $(".answersRight").text("")
        $(".answersWrong").text("")
        $(".question-background").css("background", "rgba(0,0,0,0.6)");
        $(".start").text("");
        $(".try-again").text("");
        $("#timer").text("");
        $("#question").text("");
        $("#aAnswer").text("");
        $("#bAnswer").text("");
        $("#cAnswer").text("");
        $("#dAnswer").text("");
        $("answer").text("");
        $("#gifsGoHere").html("");
        game.questionChooser();
        game.timer();
    },
    // This is used to display the questions
    questionChooser: function () {
        let randomChoice = Math.floor(Math.random() * 10);
        while (game.chosenQuestions.includes(randomChoice)) {
            randomChoice = Math.floor(Math.random() * 10);
        }
        console.log("randomChoice")
        console.log(randomChoice)
        game.chosenQuestions.push(randomChoice);
        $("#question").text(game.questions[randomChoice].question);
        $("#aAnswer").text(game.questions[randomChoice].answers[0]);
        $("#bAnswer").text(game.questions[randomChoice].answers[1]);
        $("#cAnswer").text(game.questions[randomChoice].answers[2]);
        $("#dAnswer").text(game.questions[randomChoice].answers[3]);
        $("#answer").text(game.questions[randomChoice].correctAnswer);
    },
    // This is used to check if the answer is correct
    checkAnswer: function (chosen) {
        game.clearTimer();
        $("#timer").text("")
        $("#question").text("");
        $("#aAnswer").text("");
        $("#bAnswer").text("");
        $("#cAnswer").text("");
        $("#dAnswer").text("");
        $("answer").text("");
        if (chosen === $("#answer").text() && game.chosenQuestions.length < 10) {
            game.rightAnswers++;
            $("#timer").text("You Got That Correct!");
            $("#gifsGoHere").html("<img src='./assets/images/Cinderella-Carriage.gif' class='giphy-embed'/>");
            setTimeout(function() {
                $("#gifsGoHere").html("");
                game.questionChooser();
                game.time = 20;
                game.timer();
            }, 3000)
        } else if (chosen !== $("#answer").text() && game.chosenQuestions.length < 10) {
            game.wrongAnswers++;
            $("#timer").text("You Got That Wrong...")
            setTimeout(function() {
                game.questionChooser();
                game.time = 20;
                game.timer();
            }, 3000)
        } else if (chosen === $("#answer").text()) {
            game.rightAnswers++;
            $("#gifsGoHere").html("<img src='./assets/images/Cinderella-Carriage.gif' class='giphy-embed'/>");
            game.gameOver()
        } else {
            game.wrongAnswers++;
            game.gameOver()
        }
    },

    // This is used to check if the game is over by comparing the gam.e stage to length of game.questions plus 1.
    gameOver: function () {
        $(".answer").text("");
        $("#question").text("");
        $(".question-background").css("background", "rgba(0,0,0,0)");
        $(".try-again").text("Try Again?");
        $(".answersRight").text(`You Got ${game.rightAnswers} Right!`);
        $(".answersWrong").text(`You Got ${game.wrongAnswers} Wrong!`);
        clearInterval(game.clockCount);
        $("#time").text("");
        if (game.rightAnswers > 6) {
            $("#gifsGoHere").html("<img src='./assets/images/wildcard.gif' class='giphy-embed'/>");
        }
    },
    // Used for the timer
    timer: function () {
        clearInterval(game.clockCount)
        $("#timer").text("20 Seconds Left!")
        game.clockCount = setInterval(function () {
            game.time--;
            $("#timer").text(game.time + " Seconds Left!")
            if (game.time === 0) {
                clearInterval(game.clockCount);
                game.questionChooser();
                game.checkAnswer();
            };
        }, 1000);
    },
    // fucntion to clear the timer
    clearTimer: function () {
        clearInterval(game.clockCount);
    },
}

// When the user clicks the start button than start the game and start the timer
$(".start").on("click", function () {
    game.startGame();
})
// When the user clicks the try again button than reset the game and start again
$(".try-again").on("click", function () {
    game.startGame();
})
// This is used to check the value of what the used clicks on.
$(".answer").on("click", function (event) {
    console.log(event.target.innerHTML)
    game.checkAnswer(event.target.innerHTML);
})