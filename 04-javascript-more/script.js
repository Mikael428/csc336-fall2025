



const Form = document.getElementById('Form')
const List = document.getElementById('List')


guestForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const colored = document.getElementById('colored').value;
    const message = document.getElementById('message').value;


    const Card = document.createElement('div');
    guestCard.classList.add('guest-card');
    guestCard.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Address:</strong> ${colored}</p>
    <p><strong>Message:</strong> ${message}</p>`;

    List.appendChild(Card);
    Form.reset();

});

function randomnum(max) {
    return Math.floor(Math.random() * Math.floor(max));

}

if (eq_answer != answer) {
    validationError.textContent = 'TRY AGAIN.';
    return;
} else {
    validationError.textContent = '';
}

let num1 = randomnum(20);
let num2 = randomnum(20);
let eq_answer = num1 + num2;

const mathQuestion = document.getElementById('math-input')

mathQuestion.textContent = `Answer This: ${num1} + ${num2}?`;

