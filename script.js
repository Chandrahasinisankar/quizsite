var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What percentage of the human body is water?",
    "options": [
    {
    "a": "66%",
    "b": "77%",
    "c": "40%",
    "d": "80%"
    }
    ],
    "answer": "66%",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Cells related to _________ divide remarkably faster than other cells in the body.",
    "options": [
    {
    "a": "nails",
    "b": "skin",
    "c": "hair"
    }
    ],
    "answer": "hair",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "The smallest bones in the human body are found in the...",
    "options": [
    {
    "a": "nose",
    "b": "ears",
    "c": "toes"
    }
    ],
    "answer": "ears",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "What position does Harry play on the Gryffindor Quidditch team?",
    "options": [
    {
    "a": "seeker",
    "b": "goal keeper"
    }
    ],
    "answer": "seeker",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "where is captin america from?",
    "options": [
    {
    "a": "america",
    "b": "brooklyn",
    "c": "canada",
    "d": "denmark",
    }
    ],
    "answer": "brooklyn",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "Where did Iron Man's origin story originally take place?",
    "options": [
    {
    "a": "korea",
    "b": "vietnam",
    "c": "afghanistan",
    }
    ],
    "answer": "vietnam",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "The name 'Wiener schnitzel' uses the German word for which nation’s capital city?",
    "options": [
    {
    "a": "denmark",
    "b": "austria",
    "c": "russia",
    }
    ],
    "answer": "austria",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "How to write an IF statement in JavaScript?",
    "options": [
    {
    "a": "if i = 5 then",
    "b": "if i == 5 then",
    "c": "if (i == 5)",
    "d": " if i = 5",
    }
    ],
    "answer": "if (i == 5)",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "Which of the following is a disadvantage of using JavaScript?",
    "options": [
    {
    "a": "Client-side JavaScript does not allow the reading or writing of files.",
    "b": "JavaScript can not be used for Networking applications because there is no such support available.",
    "c": "JavaScript doesn't have any multithreading or multiprocess capabilities.",
    "d": "All of the above."
    }
    ],
    "answer": "All of the above.",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "How to write an IF statement for executing some code if &quot;i&quot; is NOT equal to 5?",
    "options": [
    {
    "a": "if (i <> 5)",
    "b": "if i <> 5",
    "c": "if (i != 5)",
    "d": "if i =! 5 then",
    }
    ],
    "answer": "if (i != 5)",
    "score": 0,
    "status": ""
    }
    ]
    }
    var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
    this.displayQuiz = function (cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
    $("#tque").html(totalque);
    $("#previous").attr("disabled", false);
    $("#next").attr("disabled", false);
    $("#qid").html(quiz.JS[this.currentque].id + '.');
    $("#question").html(quiz.JS[this.currentque].question);
    $("#question-options").html("");
    for (var key in quiz.JS[this.currentque].options[0]) {
    if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
    $("#question-options").append(
    "<div class='form-check option-block'>" +
    "<label class='form-check-label'>" +
    "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
    quiz.JS[this.currentque].options[0][key] +
    "</span></label>"
    );
    }
    }
    }
    if (this.currentque <= 0) {
    $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
    $('#next').attr('disabled', true);
    for (var i = 0; i < totalque; i++) {
    this.score = this.score + quiz.JS[i].score;
    }
    return this.showResult(this.score);
    }
    }
    this.showResult = function (scr) {
    $("#result").addClass('result');
    $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
    for (var j = 0; j < totalque; j++) {
    var res;
    if (quiz.JS[j].score == 0) {
    res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
    } else {
    res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
    }
    $("#result").append(
    '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
    '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
    '<div class="last-row"><b>Score:</b> &nbsp;' + res +
    '</div>'
    );
    }
    }
    this.checkAnswer = function (option) {
    var answer = quiz.JS[this.currentque].answer;
    option = option.replace(/</g, "&lt;") //for <
    option = option.replace(/>/g, "&gt;") //for >
    option = option.replace(/"/g, "&quot;")
    if (option == quiz.JS[this.currentque].answer) {
    if (quiz.JS[this.currentque].score == "") {
    quiz.JS[this.currentque].score = 1;
    quiz.JS[this.currentque].status = "correct";
    }
    } else {
    quiz.JS[this.currentque].status = "wrong";
    }
    }
    this.changeQuestion = function (cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
    }
    }
    var jsq = new quizApp();
    var selectedopt;
    $(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
    //var radio = $(this).find('input:radio');
    $(this).prop("checked", true);
    selectedopt = $(this).val();
    });
    });
    $('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
    });
    $('#previous').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
    });