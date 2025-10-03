async function APIEDATA() {
    const container = document.getElementById('suggestion-carrier');
    const statusT = document.getElementById('status-field');
}

container.innerHTML = '<p>New Advice...</p>';
statusT.textContent = '';

try {
    const repsonse = await fetch('https://official-joke-api.appspot.com/jokes/random/<any-number>');
    if (!response.ok) {
        throw new Error('HTTP error. Status: ${response.status}');
    }
    const data = await response.json();
    
    const postTitle = data.title;
    const userId = data.userID;

    container.innerHTML = 
}

catch (error) {
    console.error('Error:', error);
    container.innerHTML = '<p style="color: red;">Failed to load post data. Error: ${error.message}</p>';
}