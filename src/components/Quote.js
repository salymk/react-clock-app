/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { QueryClient, useQuery } from 'react-query';

// const fetchQuotes = async () => {
//   const { data } = await axios.get('https://api.quotable.io/random');
//   return data;
// };

const useQuotes = () =>
  useQuery(
    'quote',
    async () => {
      const { data } = await axios.get('https://api.quotable.io/random');
      return data;
    },
    { enabled: true, refetchOnWindowFocus: false }
  );

const Quote = () => {
  const { data, isLoading, isError, error, refetch } = useQuotes();

  if (isLoading) {
    return 'Loading...';
  }
  if (isError) {
    return `Error: ${error.message}`;
  }

  const fetchNewQuote = () => console.log(refetch());

  return (
    <>
      <div className="quote-container">
        <div className="quote">
          <>
            <p className="description">“{data.content}”</p>
            <h2 className="author">{data.author}</h2>
          </>
        </div>
        <svg
          id="refresh-svg"
          onClick={() => refetch()}
          width="18"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.188 10.667a.208.208 0 01.147.355l-2.344 2.206a5.826 5.826 0 009.578-2.488l2.387.746A8.322 8.322 0 013.17 14.94l-2.149 2.022a.208.208 0 01-.355-.148v-6.148h6.52zm7.617-7.63L16.978.958a.208.208 0 01.355.146v6.23h-6.498a.208.208 0 01-.147-.356L13 4.765A5.825 5.825 0 003.43 7.26l-2.386-.746a8.32 8.32 0 0113.76-3.477z"
            fill="#fff"
            fillRule="nonzero"
            opacity=".5"
          />
        </svg>
      </div>
    </>
  );
};

export default Quote;
