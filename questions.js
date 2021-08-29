// defiine the variables
var timer;
var time = 60; //in secs//
var questions;

//step 1: create variable to store quiz questions

// creating an array and passing the number, questions, options, and answers
var questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
];

//timer function

function startQuiz() {
  //Step 1: hide the start elements (Everything occurs on same page- just diff. things focused on)
  document.querySelector("#start-screen").classList.add("hide")

  //step 2: show quiz section questions
  document.querySelector("#questions").classList.remove("hide")

  //start the timer  - Set interval method (refrence mdn)
  timer = setInterval(function() {
    //countdown the time -- subtracting
    time--;

    //tell browser to display text of time section 
    document.querySelector("#time").textContent = time;

    // END function - how timer will trigger end of quiz
    if (time <= 0) { //if time is les than or equal to 0
      endQuiz();// Endgame function 
    }
  },1000);
  
  // Call question funtion
  showQuestions();
}; 


