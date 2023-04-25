let btn = document.querySelector("#submit-btn")
let quizform = document.querySelector(".question-form")
let output = document.querySelector("#output")
let correctAnswers = ["acute", "equilateral", "Midsegment", "Circumcenter", "Angle Bisector", "Concurrent", "Centroid", "Altitude", "Pythagoras", "3"]
btn.addEventListener('click', calculateScore)

function calculateScore() {
    let index = 0;
    let score = 0;
    let check = 0;
    const formResults = new FormData(quizform);

    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
        check = check + 1;
    }
    if (check === 10) {
        output.innerText = "Your score in Quiz is => " + score
    } else {
        alert('Please enter all Values');
    }
}