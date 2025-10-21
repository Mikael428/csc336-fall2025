document.addEventListener('DOMContentLoaded', loadplace);

async function loadplace() {
    try {
        const res = await fetch('/world');
        const world = await res.json();
        displayplace(place);
    }
    catch (err) {
        console.error('Error...', err);
        document.getElementById('worlds').textContent = 'Failed to load';
    }
}

function displayplace(place) {
    const contained = document.getElementById('worlds');
    contained.innerHTML = '';

    if (!world.towns) {
        contained.textContent = 'Nothing Found.';
        return;
    }
    
}