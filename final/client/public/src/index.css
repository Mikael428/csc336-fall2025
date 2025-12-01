import { useState, useEffect } from "react";

function DogImageFetcher() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchDog() {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();

      if (data.status !== "success") {
        throw new Error("API error");
      }

      setImageUrl(data.message);
    } catch (err) {
      setError("Could not load dog image. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div className="dog-page">
      <h1>Random Dog Generator</h1>
      <button onClick={fetchDog} disabled={loading}>
        {loading ? "Loading..." : "Get Another Dog"}
      </button>

      {error && <p className="error">{error}</p>}

      {imageUrl && !error && (
        <div className="image-wrapper">
          <img src={imageUrl} alt="Random dog" />
        </div>
      )}
    </div>
  );
}

export default DogImageFetcher;