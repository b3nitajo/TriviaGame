//VARIABLES 
var start = document.getElementById('start');
var quiz = document.getElementById('quiz');
var quesImg = document.getElementById('winningImage');
var question = document.getElementById('question');
var counter = document.getElementById('counter');
var timeGuage = document.getElementById('timeGuage');
var choiceA = document.getElementById('A');
var choiceB = document.getElementById('B');
var choiceC = document.getElementById('C');
var choiceD = document.getElementById('D');
var progress = document.getElementById('progress');
var scoreContainer = document.getElementById('endGameStats');
var answerRightImDiv = document.getElementById('answeredCorrect');
var answerWrongImDiv = document.getElementById('answeredWrong');

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
var questionTIme = 10;
var count = 0;
var TIMER = setInterval(count, 1000);
var lastQuestionIndex = gameQA.length - 1;
var runningQuesIndex = 0;

//FUNCTIONS

//ASSIGN gameQA Q/A VALUES TO Q/A DIVS
function renderQuestion(){
    var q = gameQA[runningQuesIndex];
    question.innerHTML = "<h1>" + q.question + "</h1>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

//COUNTER
function counterRender(){
    // COUNTER HEADER
    if(count <= questionTIme){
        counter.innerHTML = "Seconds Used " + count + " of 10";
        count++;
    }
    else{
    //WHEN TIME IS OUT, SET TIMER BACK TO ZERO AS LONG AS THERE ARE QUESTIONS LEFT
        count = 0;
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
    answerWrongImDiv.style.display = "block";
    answerRightImDiv.style.display = "none";
}

function showHappyImg(){
    answerRightImDiv.style.display = "block";
    answerWrongImDiv.style.display = "none";
}

//HIDE SAD OR HAPPY IMAGE WHEN GAME IS OVER
function stopImage(){
    answerRightImDiv.style.display = "none";
    answerWrongImDiv.style.display = "none";
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
        count = 0;
        runningQuesIndex++;
        renderQuestion();
    }
    else{
        stopImage();
        clearInterval(TIMER);
        scoreRender();
        quiz.style.display = "none";
        restart.style.display = "block";
    }
}

//SCORE CONTAINER LAYOUT FOR END OF GAME
function scoreRender(){
    scoreContainer.style.display = "block";
    var scorePerCent = numCorrectAns * 10;

    scoreContainer.innerHTML ="<h1>" + scorePerCent + "% Correct</h1><p>" + numCorrectAns + " correct and " + numWrongAns + " wrong";
}

//LISTENERS FOR START AND RESTART BUTTON PRESS TO TRIGGER GAME RESTART 
start.addEventListener("click", startQuiz);
restart.addEventListener("click", reset);

//GAME FUNCTION
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    counterRender();
    TIMER = setInterval(counterRender,1000);
    renderQuestion();
}

//FUNCTION TO RESET GAME AFTER FIRST ROUND
function reset(){
    numCorrectAns = 0;
    numWrongAns = 0;
    score = 0;
    questionTIme = 10;
    count = 0;
    TIMER = setInterval(count, 1000);
    lastQuestionIndex = gameQA.length - 1;
    runningQuesIndex = 0;
    restart.style.display = "none";
    scoreContainer.style.display = "none";
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    counterRender();
    TIMER = setInterval(counterRender,1000);
    renderQuestion();
}