document.addEventListener('DOMContentLoaded', loadplace);

async function loadplace() {
    try {
        const res = await fetch('/world');
        const world = await res.json();
        displayplace(world);
    } catch (err) {
        console.error('Error...', err);
        document.getElementById('worlds').textContent = 'Failed to load';
    }
}

function displayplace(place) {
    const contained = document.getElementById('worlds');
    contained.innerHTML = '';

    if (!place.towns) {
        contained.textContent = 'Nothing Found.';
        return;
    }


place.towns.forEach(town => {
    const townD = document.createElement('div');
    townD.classList.add('town');
    townD.innerHTML = `<h3>${town.name}</h3>`;


    if (town.people && town.people.length > 0) {
        const ul = document.createElement('ul');
        town.people.forEach(p => {
            const li = document.createElement('li');
            li.textContent = `${p.name} ${p.item}`
            ul.appendChild(li);
        });
        townD.appendChild(ul);
    } else {
        townD.innerHTML += '<p>No one as of now.<p>';
    }

    contained.appendChild(townD);
});
}

