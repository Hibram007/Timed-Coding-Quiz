//Dynamically link all Html elements 
//Variable created to house info for a certain elements

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".rule-box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");



//Initial page alert
alert("Welcome Earthling, click the button to start the quiz");

//start button funtion + adding an event listener
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show rules for game
}


// Need to link to a countdown timer

//Need to write coditional to subtract time or add points


// Question 1:


//Question 2:



//Question 3: