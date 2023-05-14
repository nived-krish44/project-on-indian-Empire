// Define the quiz questions
 const questions = [
    {
       question: "What was the capital of Gupta Empire?",
       answers: [
        { text: "pataliputra", correct: true},
        { text: "Hampi", correct: false},
        { text: "Kannouj", correct: false},
        { text:  "Kanchipuram", correct: false},
       ]
  },
     {      question: "Who was the founder of Gupta Empire?",    
 answers: [
   {text:"samudragupta", correct: false},
  {text:"chandragupta 1", correct: true},
   {text:"skandagupta", correct: false},
   {text:"kumaragupta", correct: false},
 ]
   
},
{      question: "Who was the famous poet in the court of ChandraGupta 2?",    
answers: [
  {text:"Harisena", correct: false},
 {text:"Kalidasa", correct: true},
  {text:"Bhanabhatta", correct: false},
  {text:"sreeharsha", correct: false},
]
  
},
{      question: "Who was the last great ruler of Gupta Empire?",    
answers: [
  {text:"samudragupta", correct: false},
 {text:"chnadragupta 1", correct: false},
  {text:"skandagupta", correct: true},
  {text:"kumaragupta", correct: false},
]
  
},
{      question: "Who was the foreign traveller who visited during Gupta period?",    
answers: [
  {text:"Xuan tsang", correct: false},
 {text:"Megasthenes", correct: false},
 {text:"Marcopolo", correct:false},
  {text:"Faxian", correct: true},
]
  
},
 ]

  // code for quiz

  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  var quiz = document.getElementById("app");

  let currentQuestionIndex  = 0;
  let score = 0;

  function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }

  function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("qbtn");
      answerButtons.appendChild(button);
      if(answer.correct){
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click",selectAnswer);

    });

  }
  startQuiz();   
  function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  function selectAnswer(e){
    const selectedBtn = e.target; 
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
      selectedBtn.classList.add("correct");
      score++;

    }else{
      selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
      if(button.dataset.correct === "true"){
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }
  function showScore(){
    resetState();
    questionElement.innerHTML = `your scored ${score} out of ${questions.length}!`;
    if(score == 5){
    quiz.style.background = "green";

    }
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
  }
  function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
      showQuestion();
    }else{
      showScore(); 
    }
  }

  nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
      handleNextButton();
    }else{
      startQuiz();
    }

  })
  startQuiz();

  // color changer

  // select the body element
const body = document.querySelector('body');
 const h1Element = document.querySelector('.sub-title');

// add event listener to window object for scroll event
window.addEventListener('scroll', () => {
  // check current scroll position
  if (window.scrollY > 1450 && window.scrollY <2030) {
    // change background color of body element
    body.style.backgroundColor = '#FFFFFF';
    h1Element.classList.add('h1-color');
  } else {
    // set back to original color if user scrolls back up
    body.style.backgroundColor = '#000000';
    h1Element.classList.remove('h1-color');
  }
});

// ----menu bar----

var sidemenu = document.getElementById('sidemenu');
function openMenu(){
    sidemenu.style.left = "0px";
    console.log("hello this is working");
}
function closeMenu(){
    sidemenu.style.left = "-200px";
    console.log("it is working");
}
// code for The Guptas sessiom
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}