
$(document).ready( function() {
var count= 4;

var correct = 0;
var incorrect = 0;
var unanswered = 8;

$("#conclusion").css('display','none')
$("#game").css('display','none')

$("#startBtn").on("click", function() {
    $("#inception").css('display','none');
    $("#game").css('display','inherit');      

var counter=setInterval(timer, 1000); 

function timer()
{

  count = count-1;
  $("#timer").html("Time Remaining: " + count + " Seconds"); 
  if (count <= -1)
  {
    //If correct button is checked 
    if (document.getElementById('correct-answer-1').checked) {
        correct++;
        unanswered--;
    }
    //if wrong button is checked
    else if  (document.getElementById('firstWrongAnswer-1').checked || document.getElementById('firstWrongAnswer-2').checked || document.getElementById('firstWrongAnswer-3').checked) {
        incorrect++;
        unanswered--; 
    }
    //If no button is checked
    else {
        unanswered--;
    }


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