const guestForm = document.getElementById('guestForm');
const guestList = document.getElementById('GuestList');
const mathProblem = document.getElementById('math-problem');
const mathInput = document.getElementById('math-answer');
const backgroundImage = [
    {url: "https://tse2.mm.bing.net/th/id/OIP.WWZKtsD33933I9-XbYtEAwHaFP?rs=1&pid=ImgDetMain&o=7&rm=3", name: "Steins"},
    {url: "https://wallpaperbat.com/img/8942991-watch-american-dad-18-prime.jpg", name: "American"},
    {url: "https://th.bing.com/th/id/R.5848ab85fea83afa6c19995ccdd65f9b?rik=9Oa2KnOBqab0%2fA&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f32800000%2ffamily-guy-family-guy-32854245-1600-1200.jpg&ehk=IwCxKAKREYV4%2fxRYboZmD74OCAmk8kzhQAoh%2fTOyT2A%3d&risl=&pid=ImgRaw&r=0", name: "Family"}
]
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
    const randomImage = backgroundImage[Math.floor(Math.random() * backgroundImage.length)];
    document.body.style.backgroundImage = `url('${randomImage.url}')`;

    guestForm.reset();

    GenerateMath();
    } else {
        alert("INCORRECT.")
        mathInput.value = "";
    }
});

