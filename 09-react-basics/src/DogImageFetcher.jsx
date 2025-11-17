import React, { useState, useEffect } from 'react';

const TMDB_API_KEY = 'API_KEY_HERE';

function DogImageFetcher() {
    const [dogImg, setDogImg] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [breed, setBreed] = useState('husky');

    useEffect(() => {
        if (!TMDB_API_KEY || TMDB_API_KEY === 'API_KEY_HERE') {
            setError(new Error("TMDB API is missing."))
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);
        setDogImg(null);

        const apiURL = `https://dog.ceo/api/breed/${breed}/images/random`;
        
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

    }, [movieId]);

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px'}}>
        <h2> Dog Image Fetcher </h2>

        <p>Current ID: <strong>{movieId}</strong></p>
        <button
        onClick={() => setBreed(prev => prev === 'husky'? 'beagle': 'husky')}
        style={{marginBottom: '15px'}}
        >
            Fetch Next Breed ({movieId === 'husky' ? 'beagle' : 'husky'})
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