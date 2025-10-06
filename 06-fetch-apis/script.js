async function APIEDATA() {
    const container = document.getElementById('suggestion-carrier');
    const statusT = document.getElementById('status-field');


    if (!container) return;
    container.innerHTML = '<p>New Advice...</p>';
    statusT.textContent = '...';

try {
    const repsonse = await fetch('https://official-joke-api.appspot.com/random_joke');
    if (!repsonse.ok) {
        throw new Error(`HTTP error. Status: ${repsonse.status}`);
    }

    const data = await repsonse.json();
    
    const setup = data.setup;
    const punchline = data.punchline;

    container.innerHTML = `
    <p><strong>Post ID:</strong> ${setup}</p>
    <p><strong>User ID:</strong> ${punchline}</p>
    `;

    container.style.borderLeft = '5px solid #ffc107';
    statusT.textContent = `Type: ${data.type}`;

} catch (error) {
    console.error('Error:', error);
    container.innerHTML = `<p style="color: red;">Failed to load data. Error: ${error.message}</p>`;
    statusT.textContent = 'Details: Error';
}

}

async function fetchlePlaceHolder() {
    await new Promise(resolve => setTimeout(resolve, 300));
}

async function fetchAllData() {

    const header = document.querySelector('header');
    const button = document.getElementById('fetch-button');

    if (!button) return;

    const originaltexting = button.textContent;
    button.textContent = 'Loading...';
    button.disabled = true;

    await Promise.all([
        APIEDATA(),
        fetchlePlaceHolder(),
    ]);

    setTimeout(() => {
        header.style.backgroundColor = '#e6e6fa';
    }, 500);


setTimeout(() => {
    button.textContent = originaltexting;
    button.disabled = false;
}, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('fetch-button');
    if (button) {
        button.addEventListener('click', fetchAllData);
    }
    
    fetchAllData();
});