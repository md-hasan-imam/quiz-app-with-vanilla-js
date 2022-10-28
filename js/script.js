function loadAllQuestions() {
    fetch('../data.json')
        .then(res => res.json())
        .then(data => displayQuestion(data))
}

loadAllQuestions();

function displayQuestion(data) {
    let questionField = document.getElementById("exam-questions");
    let score = 0;

    for (let i = 0; i < data.length; i++) {
        // console.log(data[i]);

        const question = document.createElement('div');
        question.setAttribute('id', 'single_question');


        question.innerHTML = `
        <h2 id="question"><span id="question${[i + 1]}">${[i + 1]}. </span>  ${data[i].title}</h2>
        <ul class="option_field" style="margin-left:30px">
            <li class="option">
                <input type="radio" name="quizOptionofquestion${i + 1}" id="option${i + 1 +"1"}" value="${data[i].options[0]}" class="answer">
                <label for="option${i + 1 +"1"}" >${data[i].options[0]}</label>
            </li>
            <li class="option">
                <input type="radio" name="quizOptionofquestion${i + 1}" id="option${i + 1 +"2"}" value="${data[i].options[1]}" class="answer">
                <label for="option${i + 1 +"2"}" ">${data[i].options[1]}</label>
            </li>
            <li class="option">
                <input type="radio" name="quizOptionofquestion${i + 1}" id="option${i + 1 +"3"}" value="${data[i].options[2]}"  class="answer">
                <label for="option${i + 1 +"3"}" >${data[i].options[2]}</label>
            </li>
            <li class="option">
                <input type="radio" name="quizOptionofquestion${i + 1}" id="option${i + 1 +"4"}" value="${data[i].options[3]}"  class="answer">
                <label for="option${i + 1 +"4"}">${data[i].options[3]}</label>
            </li>
        </ul>
    `
        questionField.appendChild(question);
    }
}

function displayResult(){

}

document.getElementById("timer").innerHTML = 10 + ":" + 00;

function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(":");
    var mm = timeArray[0];
    var check = 0;

    var s = checkSecond((timeArray[1] - 1));
    if (s == 59) {
        mm = mm - 1
    }

    if (mm < 0) {
        ResultQuiz();
    }
    document.getElementById('timer').innerHTML = mm + ":" + s;
    setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {
        sec = "0" + sec
    }; // add zero in front of numbers < 10
    if (sec < 0) {
        sec = "59"
    };
    return sec;
}
startTimer();
