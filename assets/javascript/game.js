//VARIABLES 
var start = $("#start");
var restart = $("#restart");
var quiz = $('#quiz');
var quesImg = $('#winningImage');
var question = $('#question');
var counter = $('#counter');
var timeGuage = $('#timeGuage');
var choiceA = $('#A');
var choiceB = $('#B');
var choiceC = $('#C');
var choiceD = $('#D');
var progress = $('#progress');
var scoreContainer = $('#endGameStats');
var scoreDiv = $('#score');
var answerRightImDiv = $('#answeredCorrect');
var answerWrongImDiv = $('#answeredWrong');

//QUIZ QUESTIONS AND ANSWERS
var gameQA = [
    {question: "What is the Snowman's name in Frozen?",
    choiceA: "Kristoff",
    choiceB: "Vladov",
    choiceC: "Olaf",
    choiceD: "Hansel",
    correct: "C"
    },
    {question: "Who is the Villain in Pocahontas?", 
    choiceA: "Governor Ratcliffe",
    choiceB: "Governor Ratigan",
    choiceC: "Governor Gaston",
    choiceD: "Governor Gothel",
    correct: "A"
    },
    {question: "What is the 'Love Song' in Aladdin?", 
    choiceA: "Can you Feel the Love Tonight",
    choiceB: "A Whole New World",
    choiceC: "Part of Your World",
    choiceD: "Colors of the Wind",
    correct: "B"
    },
    {question: "Which Disney Princess has red hair?",
    choiceA: "Jasmine",
    choiceB: "Belle",
    choiceC: "Cinderella",
    choiceD: "Ariel",
    correct: "D"
    },
    {question: "What country does 'Beauty and the Beast' take place?", 
    choiceA: "France",
    choiceB: "Spain",
    choiceC: "England",
    choiceD: "Germany",
    correct: "A"
    },
    {question: "What Kind of Dog is 'Pongo'", 
    choiceA: "German Shepherd",
    choiceB: "Poodle",
    choiceC: "Dalmatian",
    choiceD: "Labrador",
    correct: "C"
    },
    {question: "Where does Kida Live?", 
    choiceA: "The Galapagos Islands",
    choiceB: "Isle of Man",
    choiceC: "El Dorado",
    choiceD: "Atlantis",
    correct: "D"
    },
    {question: "What is the Prince's name in 'Sleeping Beauty'?", 
    choiceA: "Charming",
    choiceB: "Eric",
    choiceC: "Philip",
    choiceD: "Hans",
    correct: "C"
    },
    {question: "What is Princess Jasmine's Tiger's name?", 
    choiceA: "Rinjer",
    choiceB: "Raja",
    choiceC: "Rajeesh",
    choiceD: "Rojo",
    correct: "B"
    },
    {question: "What Disney characters are portrayed as a fox and bear?", 
    choiceA: "Robin Hood and Little John",
    choiceB: "Todd and Copper",
    choiceC: "Dr. Doppler and Captain Amelia",
    choiceD: "Bagheera and Baloo",
    correct: "A"
    },
];

var numCorrectAns = 0;
var numWrongAns = 0;
var score = 0;
var questionTIme = 0;
var count = 15;
var TIMER = setInterval(count, 1000);
var lastQuestionIndex = gameQA.length - 1;
var runningQuesIndex = 0;

//FUNCTIONS

//ASSIGN gameQA Q/A VALUES TO Q/A DIVS
function renderQuestion(){
    var q = gameQA[runningQuesIndex];
    question.text(q.question);
    choiceA.text(q.choiceA);
    choiceB.text(q.choiceB);
    choiceC.text(q.choiceC);
    choiceD.text(q.choiceD);
}

//COUNTER
function counterRender(){
    // COUNTER HEADER
    if(count >= questionTIme){
        counter.text("seconds remaining  " + count);
        count--;
    }
    else{
    //WHEN TIME IS OUT, SET TIMER BACK TO ZERO AS LONG AS THERE ARE QUESTIONS LEFT
        count = 15;
        answerIsWrong();
        if(runningQuesIndex < lastQuestionIndex){
            runningQuesIndex++;
            renderQuestion();
        }
        else{
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

//KEEP TRACK OF RIGHT ANSWERS
function answerIsCorrect(){
    numCorrectAns++;
}

//KEEP TRACK OF WRONG ANSWERS
function answerIsWrong(){
    numWrongAns++;
}   

 //SHOW SAD IMAGE, WILL PLACE WHEN USER GUESS WRONG.
function showRandomSad(){
    answerWrongImDiv.show();
    answerRightImDiv.hide();
}

function showHappyImg(){
    answerRightImDiv.show();
    answerWrongImDiv.hide();
}

//HIDE SAD OR HAPPY IMAGE WHEN GAME IS OVER
function stopImage(){
    answerRightImDiv.hide();
    answerWrongImDiv.hide();
}

// CHECK ANSWER AND DO THE FOLLOWING
function checkAnswer(answer){
    if(gameQA[runningQuesIndex].correct === answer){
        score++;
        answerIsCorrect();
        showHappyImg();
    }
    else{
        answerIsWrong();
        showRandomSad();
    }
    if(runningQuesIndex < lastQuestionIndex){
        count = 10;
        runningQuesIndex++;
        renderQuestion();
    }
    else{
        stopImage();
        clearInterval(TIMER);
        scoreRender();
        quiz.hide();
        restart.show();
    }
}

//SCORE CONTAINER LAYOUT FOR END OF GAME
function scoreRender(){
    scoreContainer.show();
    scoreDiv.show();
    var scorePerCent = numCorrectAns * 10;

    scoreContainer.text(scorePerCent + "% Correct ");
    scoreDiv.text(numCorrectAns + " correct out of " + numWrongAns + " wrong");

}

//GAME FUNCTION
function startQuiz(){
   // start.style.display = "none";
   start.hide();
    renderQuestion();
  //  quiz.style.display = "block";
    quiz.show();
    counterRender();
    TIMER = setInterval(counterRender,1000);
    renderQuestion();
}

$(document).ready(function(){
    $("#start").click(function(){
      startQuiz();
    });
    $("#restart").click(function(){
        reset();
      });
  });

//FUNCTION TO RESET GAME AFTER FIRST ROUND
function reset(){
    numCorrectAns = 0;
    numWrongAns = 0;
    score = 0;
    questionTIme = 0;
    count = 15;
    TIMER = setInterval(count, 1000);
    lastQuestionIndex = gameQA.length - 1;
    runningQuesIndex = 0;
    restart.hide();
    scoreContainer.hide();
    scoreDiv.hide();
    start.hide();
    renderQuestion();
    quiz.show();
    counterRender();
    TIMER = setInterval(counterRender,1000);
    renderQuestion();
}