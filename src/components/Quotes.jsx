import { useEffect, useState } from "react";
import { quotesDB } from "../utils";

const Quote = () => {
  const [quote, setQuote] = useState("");

  const getRandomQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotesDB.length);
    return quotesDB[randomNumber];
  };

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  return (
    <div className="d-flex col xy-center quote mt-2">
      <span className="txt-3xl">{quote.quoteText}</span>
      <span className="txt-2xl"> - {quote.quoteAuthor}</span>
    </div>
  );
};

export { Quote };
