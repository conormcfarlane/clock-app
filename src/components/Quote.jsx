import React, { useEffect, useState } from "react";
import iconRefresh from "../assets/images/desktop/icon-refresh.svg";

export default function Quote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("https://dummyjson.com/quotes/random");
      if (!response.ok) {
        throw new Error(`HTTP Error : ${response.error}`);
      }
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    <p>{error}</p>;
  }
  return (
    <section className="bg-green-500 flex items-start justify-between">
      <div className="w-9/10">
        <p className="mb-3">"{quote.quote}"</p>
        <p className="font-bold">{quote.author}</p>
      </div>
      <button onClick={fetchQuote}>
        <img
          src={iconRefresh}
          alt="Refresh Button"
          className="w-6 h-6 cursor-pointer"
        />
      </button>
    </section>
  );
}
