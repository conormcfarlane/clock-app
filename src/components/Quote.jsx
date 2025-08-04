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
    <section className="grid grid-cols-10">
      {quote && (
        <>
          <p className="col-span-9">{quote.quote}</p>
          <p className="row-start-2 col-span-9">{quote.author}</p>
          <button
            onClick={fetchQuote}
            className="self-start justify-self-end  "
          >
            <img src={iconRefresh} alt="" />
          </button>
        </>
      )}
    </section>
  );
}
