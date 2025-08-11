import React, { useEffect, useState } from "react";
import iconRefresh from "../assets/images/desktop/icon-refresh.svg";

export default function Quote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      if (!response.ok) {
        throw new Error(`HTTP error ! status: ${response.status}`);
      }
      const data = await response.json();
      setQuote(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
      setError(null);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (loading) {
    return <p>Loading Quote ....</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <section className="bg-green-400 flex items-start">
      <div>
        <p className="mb-3">"{quote.quote}"</p>
        <p className="font-semibold">{quote.author}</p>
      </div>
      <button onClick={fetchQuote}>
        <img src={iconRefresh} alt="Quote refresh button" className="h-5 w-5" />
      </button>
    </section>
  );
}
