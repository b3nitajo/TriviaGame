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

//assign gameQA array's property Q/A index value to Q/A divs
function renderQuestion(){
    var q = gameQA[runningQuesIndex];
    question.innerHTML = "<h1>" + q.question + "</h1>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

//assigns what happens in counter
function counterRender(){
    // if timer is less than or eqaul to time gives for question
    if(count <= questionTIme){
        counter.innerHTML = count;
        count++;
    }
    else{
    //if time is out, set counter back to zero
        count = 0;
        answerIsWrong();
        if(runningQuesIndex < lastQuestionIndex){
            runningQuesIndex++;
            renderQuestion();
        }
        else{
            quiz.style.display = "none"; 
            restart.style.display = "block"; 
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

function showHappyImg(){
    quiz.style.display = "none";
    answerRightImDiv.style.display = "block";
    var showImage = setInterval( function(){
        answerRightImDiv.style.display = "none";
        quiz.style.display = "block";    
    },1000);
}

function stopImage(){
    clearInterval(showHappyImg);
    clearInterval(showRandomSad);
}

   

 //write code to show random sad face disney image from three when user selects wrong naser
function showRandomSad(){
    quiz.style.display = "none";
    answerWrongImDiv.style.display = "block";
    var showImage = setInterval( function(){
        answerWrongImDiv.style.display = "none";
        quiz.style.display = "block";    
    },1000);
}

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
        stopImage();
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

function scoreRender(){
    scoreContainer.style.display = "block";
    //calculate the amount of question percent answered by user
    var scorePerCent = numCorrectAns * 10;

    scoreContainer.innerHTML ="<h1>" + scorePerCent + "% Correct</h1><p>" + numCorrectAns + " correct and " + numWrongAns + " wrong";
}




//press start to start game

start.addEventListener("click", startQuiz);
restart.addEventListener("click", reset);

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    counterRender();
    TIMER = setInterval(counterRender,1000);
    renderQuestion();
}