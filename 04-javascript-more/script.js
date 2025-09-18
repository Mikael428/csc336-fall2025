const guestForm = document.getElementById('guestForm');
const guestList = document.getElementById('GuestList');
const mathProblem = document.getElementById('math-problem');
const mathInput = document.getElementById('math-answer');

let num1, num2, correctAnswer;

function GenerateMath(){
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 + num2;
    mathProblem.textContent = `${num1} + ${num2}`; 
}

GenerateMath();

guestForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const user_answer = parseInt(mathInput.value);

    if (user_answer === correctAnswer) {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const color = document.getElementById('color').value;


    const guestCard = document.createElement('div');
    guestCard.classList.add('guest-card');
    guestCard.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Color:</strong> ${color}</p>
        <p><strong>Message:</strong> ${message}</p>`;

    guestList.appendChild(guestCard);
    guestForm.reset();

    GenerateMath();
    } else {
        alert("INCORRECT.")
        mathInput.value = "";
    }
});

