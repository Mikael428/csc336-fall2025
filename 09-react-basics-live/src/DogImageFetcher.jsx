import React, { useState, useEffect } from 'react';

function DogImageFetcher() {
    const [dogImg, setDogImg] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [breed, setBreed] = useState("husky");

    useEffect(() => {
        setLoading(true);
        setError(null);
        setDogImg(null);
        
        const apiURL = `https://dog.ceo/api/breeds/image/random`;
        
        fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(err.status_message || `HTTP error!: ${response.status}`);
                });
            }
            return response.json();
        })
        .then(data => {
            setDogImg(data.message);
            setLoading(false);
        })
        .catch(fetchError => {
            console.error('Fetching Dog data failed', fetchError);
            setError(fetchError);
            setLoading(false);
        });

    }, [breed]);

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px'}}>
        <h2> Dog Image Fetcher </h2>

        <p>Current ID: <strong>{breed}</strong></p>
        <button
        onClick={() => setBreed(prev => prev === 'husky'? 'beagle': 'husky')}
        style={{marginBottom: '15px'}}
        >
            Fetch Next Breed ({breed === 'husky' ? 'beagle' : 'husky'})
        </button>

        {loading && <p>Loading Image...</p>}
        {error && <p style={{ color: 'red'}}> Error: {error.message}</p>}
        
        {dogImg && (
            <div style={{marginTop: '10px'}}>
                <img src={dogImg} alt={`A ${breed}`} style={{ maxWidth: '100%', height: 'auto'}}/>
            </div>
        )}
        </div>
    );
}

export default DogImageFetcher;