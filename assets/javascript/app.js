$(document).ready( function() {

var count= 121;
var done = false;
var audio = new Audio("Bulls.mp4");

$("#conclusion").css('display','none')
$("#game").css('display','none')

$("#startBtn").on("click", function() {
    $("#inception").css('display','none');
    $("#game").css('display','inherit');   
    var correct = 0;
    var incorrect = 0;
    var unanswered = 8;
    audio.play();
    $("#doneBtn").on("click", function() {
        done = true
      })

var counter=setInterval(timer, 1000); 

function timer()
{   
  count = count-1;
  $("#timer").html("Time Remaining: " + count + " Seconds"); 
  if (count <= 0 || done === true)
  {
    if(document.getElementById('correct-answer-1').checked) {
        correct++;
        unanswered--;
    }
    else if  (document.getElementById('firstWrongAnswer-1').checked || document.getElementById('firstWrongAnswer-2').checked || document.getElementById('firstWrongAnswer-3').checked) {
        incorrect++;
        unanswered--; 
    }
    if(document.getElementById('correct-answer-2').checked) {
        correct++;
        unanswered--;
    }
    else if  (document.getElementById('secondWrongAnswer-1').checked || document.getElementById('secondWrongAnswer-2').checked || document.getElementById('secondWrongAnswer-3').checked) {
        incorrect++;
        unanswered--; 
    }
    if(document.getElementById('correct-answer-3').checked) {
        correct++;
        unanswered--;
    }
    else if  (document.getElementById('thirdWrongAnswer-1').checked || document.getElementById('thirdWrongAnswer-2').checked || document.getElementById('thirdWrongAnswer-3').checked) {
        incorrect++;
        unanswered--; 
    }
    if(document.getElementById('correct-answer-4').checked) {
        correct++;
        unanswered--;
    }
    else if  (document.getElementById('fourthWrongAnswer-1').checked || document.getElementById('fourthWrongAnswer-2').checked || document.getElementById('fourthWrongAnswer-3').checked) {
        incorrect++;
        unanswered--; 
    }
    if(document.getElementById('correct-answer-5').checked) {
        correct++;
        unanswered--;
    }
    else if  (document.getElementById('fifthWrongAnswer-1').checked || document.getElementById('fifthWrongAnswer-2').checked || document.getElementById('fifthWrongAnswer-3').checked) {
        incorrect++;
        unanswered--; 
    }
    if(document.getElementById('correct-answer-6').checked) {
        correct++;
        unanswered--;
    }
    else if  (document.getElementById('sixthWrongAnswer-1').checked || document.getElementById('sixthWrongAnswer-2').checked || document.getElementById('sixthWrongAnswer-3').checked) {
        incorrect++;
        unanswered--; 
    }
    if(document.getElementById('correct-answer-7').checked) {
        correct++;
        unanswered--;
    }
    else if  (document.getElementById('seventhWrongAnswer-1').checked || document.getElementById('seventhWrongAnswer-2').checked || document.getElementById('seventhWrongAnswer-3').checked) {
        incorrect++;
        unanswered--; 
    }
    if(document.getElementById('correct-answer-8').checked) {
        correct++;
        unanswered--;
    }
    else if  (document.getElementById('eigthWrongAnswer-1').checked || document.getElementById('eigthWrongAnswer-2').checked || document.getElementById('eigthWrongAnswer-3').checked) {
        incorrect++;
        unanswered--; 
    }

    audio.pause();
     $("#game").css('display','none')
     clearInterval(counter);
     $("#conclusion").css('display','inherit')
     $("#correct").html("Correct Answers: " + correct);
     $("#incorrect").html("Incorrect Answers: " + incorrect);
     $("#unanswered").html("Unanswered: " + unanswered);
     return;
  }   
}
});
});