import React, { useEffect, useState } from "react";
import PageHeading from "../Elements/PageHeading";

function DashboardPage({ user }) {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const getQuotes = async () => {
      const res = await fetch("https://type.fit/api/quotes");
      if (res.ok) {
        const quotes = await res.json();
        const randQuote = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randQuote]);
      }
    };
    getQuotes();
  }, [setQuote]);

  return (
    <div className="flex flex-col md:justify-between w-full md:my-6 md:ml-5">
      <div className="flex flex-row justify-between">
        <PageHeading title="Dashboard" />
      </div>
      <div className="flex flex-col md:flex-row w-full items-center md:items-start">
        <img
          className="p-6 mt-36 h-96"
          src="https://moodia.s3.amazonaws.com/821fdbf172fa41bfa49dca23174b8f2b.png"
          alt="cow"
        />
        <div className="pt-6 w-2/5">
          <div className="relative h-full w-full">
            <img
              className=" h-96 w-full"
              src="https://moodia.s3.amazonaws.com/9eff639950184b3289c7120f35c6929b.png"
              alt="speech-bubble"
            />
            <div className="text-lg md:text-2xl w-full absolute top-10 px-16">
              &ldquo;{quote?.text}&rdquo;{" "}
              <footer className="text-base md:text-xl text-right">
                &mdash; {quote?.author ? quote?.author : "Unknown"}
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
