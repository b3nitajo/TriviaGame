//variables 

var numCorrectAns = 0;
var numWrongAns = 0;
userWrongAnswers = [];
userAnswerRight = [];
var gameQA = [
    {question: "What is the Snowman's name in Frozen?", answer: {
        a: "Kristoff",
        b: "Vladov",
        c: "Olaf",
        d: "Hansel"
    },
    correctAnswer: "c"
    },
    {question: "Who is the Villain in Pocahontas?", answer: {
        a: "Governor Ratcliffe",
        b: "Governor Ratigan",
        c: "Governor Gaston",
        d: "Governor Gothel"
    },
    correctAnswer: "a"
    },
    {question: "What is the 'Love Song' in Aladdin?", answer: {
        a: "Can you Feel the Love Tonight",
        b: "A Whole New World",
        c: "Part of Your World",
        d: "Colors of the Wind"
    },
    correctAnswer: "b"
    },
    {question: "Which Disney Princess has red hair?", answer: {
        a: "Jasmine",
        b: "Belle",
        c: "Cinderella",
        d: "Ariel"
    },
    correctAnswer: "d"
    },
    {question: "What country does 'Beauty and the Beast' take place?", answer: {
        a: "France",
        b: "Spain",
        c: "England",
        d: "Germany"
    },
    correctAnswer: "a"
    },
    {question: "What Kind of Dog is 'Pongo'", 
    answer: {
        a: "German Shepherd",
        b: "Poodle",
        c: "Dalmatian",
        d: "Labrador"
    },
    correctAnswer: "c"
    },
    {question: "Where does Kida Live?", 
    answer: {
        a: "The Galapagos Islands",
        b: "Isle of Man",
        c: "El Dorado",
        d: "Atlantis"
    },
    correctAnswer: "d"
    },
    {question: "What is the Prince's name in 'Sleeping Beauty'?", 
    answer: {
        a: "Charming",
        b: "Eric",
        c: "Philip",
        d: "Hans"
    },
    correctAnswer: "c"
    },
    {question: "What is Princess Jasmine's Tiger's name?", 
    answer: {
        a: "Rinjer",
        b: "Raja",
        c: "Rajeesh",
        d: "Rojo"
    },
    correctAnswer: "b"
    },
    {question: "What Disney characters are portrayed as a fox and bear?", 
    answer: {
        a: "Robin Hood and Little John",
        b: "Todd and Copper",
        c: "Dr. Doppler and Captain Amelia",
        d: "Bagheera and Baloo"
    },
    correctAnswer: "a"
    },
];



console.log(gameQA);

//FUNCTIONS
//Calculate correct answers, 
//incorrect answers, 

function keepScore(a){
   // var newScore = a + 1; 
    return a++;
}

keepScore(numCorrectAns);
keepScore(numWrongAns);

console.log(numCorrectAns);
console.log(numWrongAns);



//You'll create a trivia game that shows only one question until the player answers it 

//or their time runs out.

setTimeout(tenSeconds, 1000 * 10);
function tenSeconds() {
    $("time-left").append("<h2>Time: 00:10</h2>");
    console.log('10 Seconds Left');
}
function timeUp() {
    $("time-left").append("<h2>TIME UP!</h2>");
    console.log('TIME UP');
}
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

