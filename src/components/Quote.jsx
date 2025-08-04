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
        throw new Error(`HTTP is bad !! : ${response.status}`);
      }
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      setError(error.message);
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
    return <p>ERROR ::: {error}</p>;
  }

  return (
    <section className="bg-green-800 flex items-start">
      {quote && (
        <>
          <div className="flex-1">
            <blockquote>"{quote.quote}"</blockquote>
            <cite className="font-semibold">{quote.author}</cite>
          </div>

          <button onClick={fetchQuote}>
            <img src={iconRefresh} alt="" />
          </button>
        </>
      )}
    </section>
  );
}
