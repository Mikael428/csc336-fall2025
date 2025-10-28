document.addEventListener('DOMContentLoaded', inital);

const form = document.getElementById('update-form');
const worldContainer = document.getElementById('world-display') || document.getElementById('worlds');

function inital() {
    loadPlace();

    if (form) {
        form.addEventListener('submit', handleUp);
    }
}

async function loadPlace() {
    try {
        const res = await fetch('/world');
        if (!res.ok) throw new Error (`HTTP Error! Status: ${res.status}`);
        const world = await res.json();
        displayplace(world);
    } catch (err) {
        console.error('Error...', err);
        if (worldContainer) {
            worldContainer.textContent = 'Failed to load';
        }       
    }
}

function displayplace(place) {
    if (!worldContainer) return;

    worldContainer.innerHTML = '';

    const townName = place.town;
    const inhabitants = place.inhabitants;

    const townD = document.createElement('div');
    townD.classList.add('town-details');
    townD.innerHTML = `<h3>${place.town}</h3>`;


    if (inhabitants && inhabitants.length > 0) {
        const ul = document.createElement('ul');
        inhabitants.forEach(p => {
            const li = document.createElement('li');
            li.textContent = `${p.name} (${p.role || 'Citizen'}) - Item: ${p.item || 'None'}`;
            ul.appendChild(li);
        });
        townD.appendChild(ul);
    } else {
        townD.innerHTML += '<p>No one as of now.<p>';
    }

    worldContainer.appendChild(townD);

}

async function handleUp(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const payload = {};

    formData.forEach((value, key) => {
        payload[key] = value;
    });

    payload.action = 'add_inhabitant';

    try {
        const res = await fetch('/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!res.ok) {
            const errorBod = await res.json().catch(() => ({ message: 'Failed to communicate with server.'}));
        }
            const updatedWorld = await res.json();

            displayplace(updatedWorld);
            form.reset();
            console.log(`Success, added ${payload.name}`);
    }

        catch (err) {
            console.error('Update Error:', err);
            alert(`Failed to update world: ${err.message}`);
        }
}

