import React, { useEffect, useState } from "react";
import iconRefresh from "../assets/images/desktop/icon-refresh.svg";
import { useMenu } from "../context/MenuContext";

export default function Quote() {
  const { isMenuOpen } = useMenu();
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch("https://dummyjson.com/quotes/random");
      if (!response.ok) {
        throw new error("HTTP ERROR !", response.error);
      }
      const data = await response.json();
      setQuote(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (loading) {
    return <blockquote> Loading Quote .....</blockquote>;
  }

  return (
    <section
      className={`bg-blue-400 justify-between items-start gap-4 ${
        isMenuOpen ? "hidden" : "flex"
      } `}
    >
      <div>
        <blockquote>"{quote.quote}"</blockquote>
        <p className="mt-4 font-bold">{quote.author}</p>
      </div>
      <button className="min-w-6 cursor-pointer" onClick={fetchQuote}>
        <img
          src={iconRefresh}
          alt="quote refresh button"
          className="object-cover"
        />
      </button>
    </section>
  );
}
