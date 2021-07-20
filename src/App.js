import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import './App.css';
import axios from 'axios';
import Quote from './components/Quote';
import Location from './components/Location';
import Time from './components/Time';
import MoreInfo from './components/MoreInfo';

function App() {
  const [toggle, setToggle] = useState(false);
  console.log(toggle ? 'truth' : 'false');
  return (
    <>
      <main className={`app-container ${toggle ? '' : 'app-container-toggle'}`}>
        <Quote toggle={toggle} />
        <div className="time-container">
          <Time />
          <div>
            <button
              onClick={() => setToggle(!toggle)}
              className="more-info-btn"
              type="button"
            >
              <span> {toggle ? 'More' : 'Less'} </span>
              <svg
                className={`arrow-svg ${toggle ? '' : 'arrow-svg-up'}`}
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
        <MoreInfo toggle={toggle} />
      </main>
    </>
  );
}

export default App;
