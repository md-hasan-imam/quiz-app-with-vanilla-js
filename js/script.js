function loadAllQuestions(){
    fetch('../data.json')
    .then(res =>res.json())
    .then(data => console.log(data))
}

loadAllQuestions();

function displayQuestion(){
    

}