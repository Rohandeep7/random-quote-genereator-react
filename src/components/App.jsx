import { useEffect, useState } from "react";
import { TransitionGroup } from "react-transition-group";
import { Slide, Collapse, Fade } from "@mui/material";
import { QuoteProvider } from "../context/QuoteContext";
import "../index.css";
import Quote from "./randomQuote/Quote";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { Routes, Route } from "react-router-dom";
import AuthorQuotes from "./author/AuthorQuotes";
function App() {
  return (
    <>
      <QuoteProvider>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Quote />} />
            <Route path="/authors/:authorName" element={<AuthorQuotes />} />
          </Routes>
          <Footer />
        </div>
      </QuoteProvider>
    </>
  );
}

export default App;
