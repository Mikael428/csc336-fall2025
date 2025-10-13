import {readfile} from 'fs/promises';
import {resolve} from 'path';

const filePath = resolve('world.json');

async function processData() {
    try {
        const fileData = await readfile(filePath, {encoding: 'utf8'});
        const worldData = JSON.parse(fileData);

        if (worldData && Array.isArray(worldData.regions)) {
            console.log("--- World Data --- ");

            const namestoknow = [];

            for (const region of worldData.regions) {
                if (region.namestoknow && Array.isArray(region.namestoknow)) {
                    for (const person of region.namestoknow) {
                        if (person.name) {
                            namestoknow.push(person.name);
                        }
                    }
                }
            }
            if (namestoknow.length > 0) {
                console.log(namestoknow.join('\n'));
            } else {
                console.log("No people found.");
            }
            console.log(".........................");
        } else {
            console.log("Empty.");
        }
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error("Error: File not found on ${filePath}.");
        } else if (error instanceof SyntaxError) {
            console.error("Error: Could not parse JSON.");
        } else {
            console.error("An error occurred:", error.message);
        }
    }

}

processData();