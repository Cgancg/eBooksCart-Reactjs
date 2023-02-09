import React, { useState, useEffect } from "react";
import axios from "axios";

export const SiteName = () => {
  const [quotes, Setquotes] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`https://api.quotable.io/random`);
      // console.log(data.content);
      Setquotes(data.content);
    };
    fetchData();
  }, []);
  return (
    <div className="SiteName">
      <header className="App-header">
        e-books-cart
        {/* <p>Helping Little minds read</p> */}
        {quotes && <p>{quotes}</p>}
      </header>
    </div>
  );
};
