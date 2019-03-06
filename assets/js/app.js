var wrong = 0;
var correct = 0;
var notAnswered = 0;

var scoreboard = $('#scoreboard');
scoreboard.css('display', 'none');

$('#buttonSubmit').on('click', function (event) {
    event.preventDefault();

    notAnswered = 0;
    correct = 0;
    //check selection
    function checkIfBlank(a) {
        if (!$(".btn")[a + 0].checked && !$(".btn")[a + 1].checked && !$(".btn")[a + 2].checked && !$(".btn")[a + 3].checked) {
            notAnswered++;
        }
    }

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

    $('#correct').text(correct);
    $('#wrong').text(wrong);
    $('#noanswered').text(notAnswered);

    var message;

    if(correct > 6){
        message = "Well Done, I always believed in you!";
    } else if(correct > 4){
        message = "Ok, just ok";
    } else {
        message = "You can do better, try again";
    }

    $('#message').text(message);



});