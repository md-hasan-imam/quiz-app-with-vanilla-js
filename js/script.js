function loadAllQuestions() {
    fetch('../data.json')
        .then(res => res.json())
        .then(data => displayQuestion(data))
}

loadAllQuestions();

function displayQuestion(data) {
    let questionField = document.getElementById("exam-questions");

    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);

        const question = document.createElement('div');
        question.setAttribute('id', 'single_question');

        const optionsArray = data[i].options.map(o => o);
        console.log(optionsArray);

        question.innerHTML = `
        <h2 id="question"><span id="question${[i + 1]}">${[i + 1]}. </span>  ${data[i].title}</h2>
        <ul class="option_field">
            <li class="option">
                <input type="radio" name="answerofquestion${i + 1}" id="option${i + 100}" value="${optionsArray[0]}" class="answer">
                <label for="option${i + 1}" >${optionsArray[0]}</label>
            </li>
            <li class="option">
                <input type="radio" name="answerofquestion${i + 1}" id="${i + 1}" value="${optionsArray[1]}" class="answer">
                <label for="option${i + 1}" ">${optionsArray[1]}</label>
            </li>
            <li class="option">
                <input type="radio" name="answerofquestion${i + 1}" id="${i + 1}" value="${optionsArray[2]}"  class="answer">
                <label for="option${i + 1}" >${optionsArray[2]}</label>
            </li>
            <li class="option">
                <input type="radio" name="answerofquestion${i + 1}" id="${i + 1}" value="${optionsArray[3]}"  class="answer">
                <label for="option${i + 1}">${optionsArray[3]}</label>
            </li>
        </ul>
    `
        questionField.appendChild(question);



    }

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
