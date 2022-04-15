import { quotesDB } from "../utils";

const Quote = () => {
  const getRandomQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotesDB.length);
    return quotesDB[randomNumber];
  };

  const quote = getRandomQuote();

  return (
    <div className="d-flex col xy-center quote mt-2">
      <span className="txt-3xl">{quote.quoteText}</span>
      <span className="txt-2xl"> - {quote.quoteAuthor}</span>
    </div>
  );
};

export { Quote };
