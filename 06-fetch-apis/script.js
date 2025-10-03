async function APIEDATA() {
    const container = document.getElementById('suggestion-carrier');
    const statusT = document.getElementById('status-field');
}

container.innerHTML = '<p>New Advice...</p>';
statusT.textContent = '';

try {
    const repsonse = await fetch('https://official-joke-api.appspot.com/jokes/random/<any-number>');
    if (!response.ok) {
        throw new Error()
    }
}

