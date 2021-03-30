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
        },
        question11 = {
            question: "Whose room does Lucifer sleep in?",
            answers: ["Drizella", "Lady Tremaine", "Anastasia", "Cinderella"],
            correctAnswer: "Lady Tremaine",
            key: 11
        },
        question12 = {
            question: "When Walt was asked what his favorite scene from an animated film was, which scene from Cinderella did he choose?",
            answers: ["The dress transformation in the garden", 'The bubbles in "Oh Sing Sweet Nightingale"', "When Cinderella pulls out the other slipper", "When Prince Charming sees Cinderella for the first time"],
            correctAnswer: "The dress transformation in the garden",
            key: 12
        },
        question13 = {
            question: "What was the first year Cinderella was released on video?",
            answers: ["1986", "1987", "1988", "1989"],
            correctAnswer: "1988",
            key: 13
        },
        question14 = {
            question: "The Disney version of the Cinderella story is mostly inspired by what tale?",
            answers: ["Cenerentola, by Basile", "Aschenputtel, by the Brothers Grimm", "The Slipper and the Rose, by the Sherman Brothers", "Cendrillon, by Perrault"],
            correctAnswer: "Cendrillon, by Perrault",
            key: 14
        },
        question15 = {
            question: 'When her daughters start fighting after the music lesson, their mother reminds them, "Above all..."',
            answers: ["Etiquette", "Self-Control", "Cleanliness", "Politeness"],
            correctAnswer: "Self-Control",
            key: 15
        },
        question16 = {
            question: "What time does the clock chime wake up Cinderella?",
            answers: ["4", "5", "6", "7"],
            correctAnswer: "6",
            key: 16
        },
        question17 = {
            question: "Where was Cinderella forced to sleep once her stepmother took over the chateau?",
            answers: ["The cellar", "The kitchen", "The barn", "The tower"],
            correctAnswer: "The tower",
            key: 17
        },
        question18 = {
            question: "After Cinderella opens the mousetrap, what does Gus do when Jaq approaches him?",
            answers: ["Tries to tickle him", "Tries to fight him", "Tries to hug him", "Tries to run from him"],
            correctAnswer: "6Tries to fight him",
            key: 18
        },
        question19 = {
            question: "How many times does Cinderella lose a shoe?",
            answers: ["1", "2", "3", "4"],
            correctAnswer: "3",
            key: 19
        },
        question20 = {
            question: "When does Drizella tell Cinderella to have her ironing done?",
            answers: ["In 1 hour", "By the end of the day", "By lunch", "By tomorrow morning"],
            correctAnswer: "In 1 hour",
            key: 20
        },
        question21 = {
            question: "How many of Walt's Nine Old Men worked on Cinderella?",
            answers: ["None", "2", "8", "9"],
            correctAnswer: "9",
            key: 21
        },
        question22 = {
            question: "Which of these is not the name of a young lady Prince Charming meets at the ball?",
            answers: ["Princess Frederica Janie De la Fontain", "Mademoiselle Juliette Marie de la Rinaldi", "Mademoiselle Augustina DuBois", "Mademoiselle Lenora Mercedes De la Tour"],
            correctAnswer: "Mademoiselle Juliette Marie de la Rinaldi",
            key: 22
        },
        question23 = {
            question: "The family receives the invitation to the ball that is taking place how soon?",
            answers: ["That night", "The next night", "The following week", "A fortnight"],
            correctAnswer: "That night",
            key: 23
        },
        question24 = {
            question: 'When Cinderella is singing "Oh Sing Sweet Nightingale" what shakes her from her daydream?',
            answers: ["A knock at the door", "Lucifer", "Her stepmother", "The birds"],
            correctAnswer: "Lucifer",
            key: 24
        },
        question25 = {
            question: "What is the right color combination of sash and beads that the mice take from the stepsisters?",
            answers: ["Blue beads, pink sash", "White beads, pink sash", "Blue beads, blue sash", "Pink beads, blue sash"],
            correctAnswer: "Blue beads, pink sash",
            key: 25
        },
        question26 = {
            question: "What does Gus shout when Cinderella walks in to her room and sees the dress the mice have made over?",
            answers: ["Merry Christmas!", "Happy Birthday!", "Surprise!", "Congratulations!"],
            correctAnswer: "Happy Birthday!",
            key: 26
        },
        question27 = {
            question: 'Complete the quote: "Even miracles..."',
            answers: ["Are worth the wait", "Can happen to you", "Take a little time", "Happen everyday"],
            correctAnswer: "Take a little time",
            key: 27
        },
        question28 = {
            question: "The father of the prince wants the prince to find what?",
            answers: ["His missing gold", "A wife", "A New Horse", "A new house"],
            correctAnswer: "A wife",
            key: 28
        },
        question29 = {
            question: "What is the name of the mouse that is found in the mouse trap?",
            answers: ["Bob Bob", "Mel Mel", "Gus Gus", "Tom Tom"],
            correctAnswer: "Gus Gus",
            key: 29
        },
        question30 = {
            question: "When Cinderella comes downstairs in her dress for the ball, what do the stepsisters do?",
            answers: ["Go upstairs and change dresses", "Tell her she looks horrible", "Run out the door", "Rip her dress to shreds"],
            correctAnswer: "Rip her dress to shreds",
            key: 30
        },
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
        let randomChoice = Math.floor(Math.random() * 30);
        while (game.chosenQuestions.includes(randomChoice)) {
            randomChoice = Math.floor(Math.random() * 30);
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