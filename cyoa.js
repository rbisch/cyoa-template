
// variables
var name = "";
var messages = [];
var choices;
var answer;
var newLine = "";



//check for UI Do not edit
try{ var web = document.getElementById("border"); }
catch(e) {
    if(e.name == "ReferenceError") {  
    }
}

if (web==undefined){
    newLine = '\n';
    console.log("no web");
var tools = require('./cmdHelper');
var askQuestion = tools.askQuestion;
var delayText = tools.delayText;
var story = tools.story;
module.exports.checkAnswers = checkAnswers;
}else{
    newLine = '</br>';
    console.log("web");
    setup();
}



//game

function checkAnswers(answer) {
    if (answer == "answer1") {
        function1();
    }else if(answer=="answer2"){
        function2();
    }
}


// start

story("Start your story here"+
newLine +"this is a second line");

choices = ["answer1", "answer2", "answer3"];
askQuestion(choices);


// Places
function function1() {
    story("you picked answer1");
   
    choices = ["next1", "next2"];
     askQuestion(choices);
   
}

function function2() {
    story("you picked answer2");
   
    choices = ["next1", "next2"];
     askQuestion(choices);
}




// for cmd ui Do not edit
if (web==undefined){
module.exports.checkAnswers = checkAnswers;
}