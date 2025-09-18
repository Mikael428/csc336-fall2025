const guestForm = document.getElementById('guestForm')
const guestList = document.getElementById('GuestList')

guestForm.addEventListener("submit", function(e) {
    e.preventDefault();

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
});

