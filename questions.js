// rename to script.js

//create and store questions
var questions = [
  {
     title: "What does HTML stand for?",
     choices: [ 
     "Hyper Text Preprocessor",
     "Hyper Text Markup Language",
     "Hyper Text Multiple Language",
     "Hyper Tool Multi Language"
],
     answer: "Hyper Text Markup Language"
  },
  {
      title: "What does CSS stand for?",
     choices: [ 
     "Card-Playing Style Sheet",
     "Colorful Style Sheet",
     "Computer-based Style Sheet",
     "Cascading Style Sheet"
],
     answer: "Cascading Style Sheet"
  },
  {
      title: "What is the Web API learned about in module 4?",
     choices: ["The DOM", "jQuery", "The RON","Bootstrap"],
     answer: "The Dom"
  },
  {
      title: "What is most common Remote repo site we have been using in class?",
     choices: ["SlurpSpot", "GitHub", "GetHoney","SuperDooperAPPS"],
     answer: "Github"
  }
];

var timer;
var time = 60;
function startQuiz() {
  //hide the start elements
  document.querySelector("#start-screen").classList.add("hide")

  //show the questions contianer
  document.querySelector("#questions").classList.remove("hide")

  //start the timer
  timer = setInterval(function() {
      //decrease time
      time--;

      //show the decreased time
      document.querySelector("#time").textContent = time;

      //end quiz if time runs out
      if (time <= 0) {
          endQuiz();
      }
  },1000);

  //show the first question
  showQuestions();
};

document.querySelector("#start").addEventListener("click", startQuiz);

var questionIndex = 0;
function showQuestions() {
  //create question markup
  var questionHTML = `
      <div class="question">
          <h2 class="question-title">${questions[questionIndex].title}</h2>
          <div class="choices-container">
              <div class="question-choice">${questions[questionIndex].choices[0]}</div>
              <div class="question-choice">${questions[questionIndex].choices[1]}</div>
              <div class="question-choice">${questions[questionIndex].choices[2]}</div>
              <div class="question-choice">${questions[questionIndex].choices[3]}</div>
          </div>
      </div>
  `;

  //convert string html into html and add it to the page
  document.querySelector("#questions").innerHTML = questionHTML;

  //assign event listener to each question choice
  var arrayChoices = document.querySelectorAll(".question-choice");
  for (let i = 0; i < arrayChoices.length; i++) {
      arrayChoices[i].addEventListener("click", handleAnswerClick);
  }
}

var score = 0;
function handleAnswerClick(e) {
  //check if answer is correct
  if (e.target.textContent === questions[questionIndex].answer) {
      score++;
  } else {
      time -= 10;
  }

  //show the next question
  questionIndex++;

  if (questionIndex === questions.length) {
      endQuiz();
  } else {
      showQuestions();
  }
}

function endQuiz() {
  //stop the timer
  clearInterval(timer);

  //hide the question CredentialsContainer
  document.querySelector("#questions").classList.add("hide");

  //display the final score
  document.querySelector("#final-score").textContent = score;

  //show the end screen
  document.querySelector("#end-screen").classList.remove("hide");
}
