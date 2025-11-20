import { useState, useEffect } from "react";

function Quotes() {
  // 3. Create a Component with useEffect and API Integration
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch data from an external API (Quotable API)
      const response = await fetch("https://api.quotable.io/random");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setQuote(data);
    } catch (e) {
      console.error("Fetching error:", e);
      setError("Failed to fetch quote. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Uses useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchRandomQuote();
  }, []); // Empty dependency array means it runs only once on mount

  return (
    <div className="quotes-container">
      <h2>✨ Random Quote Generator</h2>
      <button onClick={fetchRandomQuote} disabled={loading}>
        {loading ? 'Fetching...' : 'Get New Quote'}
      </button>

      {/* Conditional rendering for loading, error, and data */}
      {loading && <p className="status-message">Loading a wise quote...</p>}
      
      {error && <p className="error-message">Error: {error}</p>}
      
      {quote && (
        <div className="quote-card">
          <p className="quote-content">"{quote.content}"</p>
          <p className="quote-author">— **{quote.author}**</p>
          <p className="quote-tags">Tags: *{quote.tags.join(', ') || 'N/A'}*</p>
        </div>
      )}
    </div>
  );
}

export default Quotes;