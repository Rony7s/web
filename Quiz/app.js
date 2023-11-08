/* Quiz source: w3schools.com */
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What is the capital city of Bangladesh?",
    "options": [
    {
    "a": "Dhaka",
    "b": "Rajshahi",
    "c": "Chittagong",
    "d": "Khulna"
    }
    ],
    "answer": "Dhaka",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Which river is the longest in Bangladesh and serves as a vital waterway for the country?",
    "options": [
    {
    "a": "Ganges",
    "b": "Brahmaputra",
    "c": "Jamuna",
	"d": "Padma"
    }
    ],
    "answer": "Brahmaputra",
    "score": 0,
    "status": ""
    },
	{
    "id": 3,
    "question": "Bangladesh gained independence from which country in 1971?",
    "options": [
    {
    "a": "India",
    "b": "Pakistan",
    "c": "Myanmar",
	"d": "Sri Lanka"
    }
    ],
    "answer": "Pakistan",
    "score": 0,
    "status": ""
    },
	{
    "id": 4,
    "question": "What is the official language of Bangladesh?",
    "options": [
    {
    "a": "Hindi",
    "b": "Bengali (Bangla)",
    "c": "Urdu",
	"d": "English"
    }
    ],
    "answer": "Bengali (Bangla)",
    "score": 0,
    "status": ""
    },
	{
    "id": 5,
    "question": "Which UNESCO World Heritage Site in Bangladesh is known for its historic mosque city with 60 domes?",
    "options": [
    {
    "a": "Sundarbans",
    "b": "Paharpur Vihara",
    "c": "Bagerhat",
	"d": "Srimangal Tea Gardens"
    }
    ],
    "answer": "Bagerhat",
    "score": 0,
    "status": ""
    },
	{
    "id": 6,
    "question": "Bangladesh 1st Digital University?",
    "options": [
    {
    "a": "BSMRDUB",
    "b": "BSMRDU",
    "c": "BDU",
	"d": "BDUB"
    }
    ],
    "answer": "BDU",
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