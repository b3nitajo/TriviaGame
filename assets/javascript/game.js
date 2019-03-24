//variables 

var numCorrectAns = 0;
var numWrongAns = 0;
var score = 0;
userWrongAnswers = [];
userAnswerRight = [];
//var TIMER = "";
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
var questionTIme = 10;
var guageWidth = 150;
var count = 0;
var guageProgressUnit = guageWidth/questionTIme;

var gameQA = [
    {question: "What is the Snowman's name in Frozen?",
    imgSrc: "./images/olaf.png",
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

var lastQuestionIndex = gameQA.length - 1;
var runningQuesIndex = 0;


function renderQuestion(){
    var q = gameQA[runningQuesIndex];
    quesImg.innerHTML = "img src" + q.imgSrc + ">";
    question.innerHTML = "<h1>" + q.question + "</h1>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}



var TIMER = setInterval(count, 1000);
//clearInterval(TIMER);


function renderProgress(){
    for(var qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
        progress.innerHTML +="<div class='prog' id=" + qIndex + "></div>";
    }
}

function counterRender(){
    if(count <= questionTIme){
        counter.innerHTML = count;
        timeGuage.style.width = guageProgressUnit * count + "px";
        count++;
    }
    else{
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




function answerIsCorrect(){
    numCorrectAns++;
    //document.getElementById(runningQuesIndex).style.backgroundColor = "green"
}

function answerIsWrong(){
    numWrongAns++;
    //document.getElementById(runningQuesIndex).style.backgroundColor = "red"
}

function checkAnswer(answer){
    if(gameQA[runningQuesIndex].correct === answer){
        score++;
        answerIsCorrect();
    }
    else{
        answerIsWrong();
    }
    if(runningQuesIndex < lastQuestionIndex){
        count = 0;
        runningQuesIndex++;
        renderQuestion();
    }
    else{
        clearInterval(TIMER);
        scoreRender();
        restart.style.display = "block";
        quiz.style.display = "none";
    }
}



function scoreRender(){
    scoreContainer.style.display = "block";

    //calculate the amount of question percent answered by user
    var scorePerCent = numCorrectAns * 10;

    scoreContainer.innerHTML ="<h1>" + scorePerCent + "% Correct</h1><p>" + numCorrectAns + " correct and " + numWrongAns + " wrong";
}
console.log(gameQA[0].question);

//FUNCTIONS
//Calculate correct answers, 
//incorrect answers, 


//You'll create a trivia game that shows only one question until the player answers it 

//or their time runs out.



//press start to start game

start.addEventListener("click", startQuiz);

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    counterRender();
    TIMER = setInterval(counterRender,1000);
    renderQuestion();
}


//start.onclick = function(){
//   $("#start").hide();
//};


//If the player selects the correct answer, show a screen congratulating them for choosing the right option. 
//After a few seconds, display the next question -- do this without user input.

//id the player selects the wrong answers and time-outs.

//If the player runs out of time
//tell the player that time's up 
//and display the correct answer. 
//Wait a few seconds, then show the next question.


//If the player chooses the wrong answer, tell the player they selected the wrong option //and then display the correct answer. 
//Wait a few seconds, then show the next question.
//and add option to restart the game (without reloading the page).

