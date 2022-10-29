document.getElementById('result-page').style.display = 'none';
document.getElementById('mcq_page').style.display = 'none';
document.getElementById('timeout-page').style.display = 'none';
const totalQuestionField = document.getElementById('total-questions')

function loadAllQuestions() {
    fetch('../data.json')
        .then(res => res.json())
        .then(data => {
            displayQuestion(data)
            console.log(data);
            setTimeout(() => {
                totalQuestionField.innerHTML = data.length;
            }, 500);
        })
}
loadAllQuestions();

let questionNameWithAnswer = []
console.log(questionNameWithAnswer);

// creation of question in the ui dynamically for every single loaded question

function openMcq() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('mcq_page').style.display = 'flex';
    startTimer();
}

function displayQuestion(data) {
    let questionField = document.getElementById("exam-questions");
    let score = 0;
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i]);

        const question = document.createElement('div');
        question.setAttribute('id', 'single_question');
        question.innerHTML = `
        <h2 id="question${[i + 1]}" class="question"><span>${[i + 1]}. </span>  ${data[i].title}</h2>
        <ul class="option_field" style="margin-left:30px">
            <li class="option">
                <input onClick="getValueOfResponse(this)" type="radio" name="quizQuestionNo${i + 1}" id="option${i + 1 + "1"}" value="${data[i].options[0]}" class="answer">
                <label for="option${i + 1 + "1"}" >${data[i].options[0]}</label>
            </li>
            <li class="option">
                <input onClick="getValueOfResponse(this)" type="radio" name="quizQuestionNo${i + 1}" id="option${i + 1 + "2"}" value="${data[i].options[1]}" class="answer">
                <label for="option${i + 1 + "2"}" ">${data[i].options[1]}</label>
            </li>
            <li class="option">
                <input onClick="getValueOfResponse(this)" type="radio" name="quizQuestionNo${i + 1}" id="option${i + 1 + "3"}" value="${data[i].options[2]}"  class="answer">
                <label for="option${i + 1 + "3"}" >${data[i].options[2]}</label>
            </li>
            <li class="option">
                <input  onClick="getValueOfResponse(this)" type="radio" name="quizQuestionNo${i + 1}" id="option${i + 1 + "4"}" value="${data[i].options[3]}"  class="answer">
                <label for="option${i + 1 + "4"}">${data[i].options[3]}</label>
            </li>
        </ul>
    `
        questionField.appendChild(question);

        // making an array of object to store the question with its own answer
        const questionName = `quizQuestionNo${i + 1}`;
        const answerString = data[i].answer;

        let questionWithanswer = {
            questionName,
            answerString,
        }
        questionNameWithAnswer.push(questionWithanswer);
    }
}

// getting response of users and storing into an array 
let answersFromUser = [];

function getValueOfResponse(t) {
    const answeredQuestionName = t.name;
    const checkedAnswer = t.value;
    let responseFromUser = {
        answeredQuestionName,
        checkedAnswer,
    }
    answersFromUser.push(responseFromUser);

    // trying to disable other option 
    let uncheckedRadioButtons =
        document.getElementsByName(`${t.name}`);
    for (let radioBtn of uncheckedRadioButtons) {
        radioBtn.setAttribute("disabled", "")
    }
}

function displayResult() {
    let score = 0;

    setTimeout(() => {
        for (let i = 0; i < answersFromUser.length; i++) {
            const exactAnswer = questionNameWithAnswer.find(a => a.questionName === answersFromUser[i].answeredQuestionName);
            const exactAnswerString = exactAnswer.answerString;
            console.log(exactAnswerString)
            if (answersFromUser[i].checkedAnswer == exactAnswerString) {
                score++;
            }
            console.log(exactAnswer);
        }
        console.log(score);

        const totalScoreField = document.getElementById('total-score');
        totalScoreField.innerHTML = score;
        document.getElementById('mcq_page').style.display = 'none';
        document.getElementById('result-page').style.display = 'flex';

    }, 1500);
}


const timer = document.getElementById("timer");
let timerInterval;

startTimer = () => {
    //  the existing timer, in case of a restart
    clearInterval(timerInterval);
    // Then we set the variables
    let second = 0,
        minute = 10;

    // Next we set a interval every 1000 ms
    timerInterval = setInterval(function () {
        timer.classList.toggle("odd");

        // We set the timer text to include a two digit representation
        timer.innerHTML =
            (minute < 10 ? "0" + minute : minute) +
            ":" +
            (second < 10 ? "0" + second : second);

        // We check if the second equals 0
        if (second == 0) {
            // If so, we remove a minute and reset our seconds to 60
            if (minute === 0) {
                // Full done
                clearInterval(timerInterval);
                document.getElementById('mcq_page').style.display = 'none';
                document.getElementById('timeout-page').style.display = 'flex';
            }
            minute--;
            second = 60;
        }
        second--;
    }, 1000);
};

