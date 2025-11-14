import React, { useState, useEffect } from 'react';

const TMDB_API_KEY = 'API_KEY_HERE';

function MovieFetcher() {
    const [movieData, setMovieData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [movieId, setMovieId] = useState(550);

    useEffect(() => {
        if (!TMDB_API_KEY || TMDB_API_KEY === 'API_KEY_HERE') {
            setError(new Error("TMDB API is missing."))
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);
        setMovieData(null);

        const apiURL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}`;
        
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
            setMovieData(data);
            setLoading(false);
        })
        .catch(fetchError => {
            console.error('Fetching TMDB data failed', fetchError);
            setError(fetchError);
            setLoading(false);
        });

    }, [movieId]);

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px'}}>
        <h2> Movie Database Fetcher </h2>

        <p>Current ID: <strong>{movieId}</strong></p>
        <button
        onClick={() => setMovieId(prevID => prevID === 550? 603: 550)}
        style={{marginBottom: '15px'}}
        >
            Fetch Next Movie ({movieId === 550 ? 'The Matrix (ID 603)' : 'Fight Club (ID 550)'})
        </button>

        {loading && <p>Loading Data...</p>}
        {error && <p style={{ color: 'red'}}> Error: {error.message}</p>}
        
        {movieData && (
            <div style={{marginTop: '10px'}}>
                <h3>{movieData.title} ({new Date(movieData.release_date).getFullYear()})</h3>
                <p><strong>Tagline:</strong> <em>{movieData.tagline}</em></p>
                <p><strong>Overview:</strong> <em>{movieData.overview}</em></p>
                <p><strong>Rating:</strong> <em>{movieData.vote_average.toFixed(1)}</em></p>
                <p><strong>Genres:</strong> <em>{movieData.genres.map(g => g.name).join(', ')}</p>
            </div>
        )}
        </div>
    );
}

export default MovieFetcher;