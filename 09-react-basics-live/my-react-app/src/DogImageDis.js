import React from 'react';

function DogImageDisplay({ dogImg, loading, error, currentBreed, onFetchNext }) {
    const nextBreed = currentBreed === 'husky' ? 'beagle' : 'husky';
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px'}}>
            <h2> Dog Image Fetcher </h2>

            <p>Current Breed: <strong>{currentBreed}</strong></p>

            <button
                onClick={onFetchNext} 
                style={{marginBottom: '15px'}}
                disabled={loading} // Good practice: disable button while loading
            >
                Fetch Next Breed ({nextBreed})
            </button>

            {loading && <p>Loading Image...</p>}
            {error && <p style={{ color: 'red'}}> Error: {error.message}</p>}
            
            {dogImg && (
                <div style={{marginTop: '10px'}}>
                    <img src={dogImg} alt={`A ${currentBreed}`} style={{ maxWidth: '100%', height: 'auto'}}/>
                </div>
            )}
        </div>
    );
}

export default DogImageDisplay;