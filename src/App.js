import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import './App.css';
import axios from 'axios';
import Quote from './components/Quote';
import Location from './components/Location';
import Time from './components/Time';

function App() {
  return (
    <>
      <main className="app-container">
        <Quote toggle={false} />
        <div className="time-container">
          <Time />
          <div>
            <button
              onClick={() => console.log('Heloo')}
              className="more-info-btn"
              type="button"
            >
              <span> More </span>
              <svg
                id="arrow-svg"
                width="40"
                height="40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <circle fill="#303030" cx="20" cy="20" r="20" />
                  <path stroke="#FFF" strokeWidth="2" d="M14 23l6-6 6 6" />
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="more-info">
          <div className="more-info-container">
            <div className="more-info-details">
              <p>Current Timezone</p>
              <h4>Europe/London</h4>
            </div>
            <div className="more-info-details">
              <p>Day of the week</p>
              <h4>5</h4>
            </div>
            <div className="more-info-details">
              <p>Day of the year</p>
              <h4>295</h4>
            </div>
            <div className="more-info-details">
              <p>Week number</p>
              <h4>42</h4>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
