var wrong = 0;
var correct = 0;
var notAnswered = 0;

var welcome = $('#welcome');
welcome.css('display', 'block');

var scoreboard = $('#scoreboard');
scoreboard.css('display', 'none');

var questions = $('#questions');
questions.css('display', 'none');

var loser = $('#loser');
loser.css('display', 'none');


//lose 
function youLose() {
    clearInterval(timerClock);

    engine();

    //clear answers
    $('.btn').prop("checked", false);

    questions.css('display', 'none');
    loser.css('display', 'block');

    //displaying the score system
    $('.correct').text(correct);
    $('.wrong').text(wrong);
    $('.noanswered').text(notAnswered);

   
}

// Timer 
var countDDown = 3;
$('#timer').text(countDDown);
var timerClock;

function startcountDDown() {
    timerClock = setInterval(function () {
        countDDown--;
        if (countDDown >= 0) {
            $('#timer').text(countDDown);
        } else {
            youLose();
        }
    }, 1000);

}
//start game here
$('#startBtn').on('click', function (e) {
    e.preventDefault();

    //clear answers
    $('.btn').prop("checked", false);

    welcome.css('display', 'none');
    questions.css('display', 'block');
    startcountDDown();

})

function engine(){

    //check selection
    function checkIfBlank(a) {
        if (!$(".btn")[a + 0].checked && !$(".btn")[a + 1].checked && !$(".btn")[a + 2].checked && !$(".btn")[a + 3].checked) {
            notAnswered++;
        }
    }

    //check correct answers
    function answer(answer) {
        if ($(".btn")[answer].checked) {
            correct++;
        }
    }

    checkIfBlank(0);
    checkIfBlank(4);
    checkIfBlank(8);
    checkIfBlank(12);
    checkIfBlank(16);
    checkIfBlank(20);
    checkIfBlank(24);
    checkIfBlank(28);

    //right answers
    answer(3);
    answer(6);
    answer(10);
    answer(13);
    answer(17);
    answer(22);
    answer(25);
    answer(28);

    //wrong answers
    wrong = 8 - correct - notAnswered;
}

var message;

// submit the answers
$('#buttonSubmit').on('click', function (event) {
    event.preventDefault();

    notAnswered = 0;
    correct = 0;

    engine();

    //displaying the score system
    $('.correct').text(correct);
    $('.wrong').text(wrong);
    $('.noanswered').text(notAnswered);

    

    if (correct > 6) {
        message = "Well Done, I always believed in you!";
    } else if (correct > 4) {
        message = "Ok, just ok";
    } else {
        message = "You can do better, try again";
    }

    $('#message').text(message);

    //showing the right screen
    questions.css('display', 'none');
    scoreboard.css('display', 'block');


    //clear answers
    $('.btn').prop("checked", false);

    //stop the clock
    clearInterval(timerClock);
});

// play again
$('.playAgain').on('click', function () {
    loser.css('display', 'none');
    scoreboard.css('display', 'none');
    questions.css('display', 'block');
    clearInterval(timerClock);
    countDDown = 30;
    startcountDDown();
    //clear answers
    $('.btn').prop("checked", false);
    notAnswered = 0;
    correct = 0;
})

// exit play
$('.exit').on('click', function () {
    loser.css('display', 'none');
    scoreboard.css('display', 'none');
    questions.css('display', 'none');
    welcome.css("display", 'block');
    clearInterval(timerClock);
    countDDown = 30;
    //clear answers
    $('.btn').prop("checked", false);
    notAnswered = 0;
    correct = 0;
})

