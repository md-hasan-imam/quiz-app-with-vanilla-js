function loadAllQuestions() {
    fetch('../data.json')
        .then(res => res.json())
        .then(data => displayQuestion(data))
}

loadAllQuestions();

function displayQuestion(data) {
    let questionField = document.getElementById("question");
    let optionsField = document.getElementById("option");
    // let fullQuestionField = document.getElementById("single_question");

    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);

    let fullQuestionField = document.getElementById("single_question");

    let question = document.createElement("h3");
    question.innerText("hasan")


    fullQuestionField.innerHTML(`<h2 id="question"><span id="question${[i]}">${[i]} </span>  ${data[i].titile}</h2>`)





        // console.log(questionField);
        // const question = document.createElement("h2");
        // question.id("question");
        // question.innerText(`<span id="question${[i]}">${[i]} </span>  ${data[i].titile}`);


        // const questionTitle = document.createElement("h2");
        // console.log(questionTitle);

        // fullQuestionField.append(questionTitle).innerText(`
        // <h2 id="question"><span id="question${[i]}">${[i]} </span>  ${data[i].titile}</h2>
        // `)
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
