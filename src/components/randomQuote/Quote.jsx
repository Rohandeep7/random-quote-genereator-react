import React, { useContext, useEffect } from "react";
import QuoteContext from "../../context/QuoteContext";
import Spinner from "../shared/Spinner";
import { Slide } from "@mui/material";
import QuoteText from "./QuoteText";
import Author from "../author/Author";
import { Link } from "react-router-dom";
const Quote = () => {
  const { quote, loading, dispatch } = useContext(QuoteContext);
  useEffect(() => {
    const fetchQuote = async () => {
      dispatch({ type: "SET_LOADING" });
      const response = await fetch(
        "https://quote-garden.herokuapp.com/api/v3/quotes/random"
      );
      const data = await response.json();

      dispatch({ type: "SET_QUOTE", payload: data.data[0] });
    };
    fetchQuote();
  }, []);
  return loading ? (
    <Spinner />
  ) : (
    <>
      <main className="mt-16 md:mt-48 w-11/12 md:w-6/12 mx-auto">
        <QuoteText quote={quote} />
        <Link to={`/authors/${quote.quoteAuthor}`}>
          <Author quote={quote} />
        </Link>
      </main>
    </>
  );
};

export default Quote;
