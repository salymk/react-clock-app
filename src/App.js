import React, { useState } from 'react';
import './App.css';
import { DateTime } from 'luxon';
import Quote from './components/Quote';
import Time from './components/Time';
import MoreInfo from './components/MoreInfo';
import useTime from './hooks/useTime';

function App() {
  const [toggle, setToggle] = useState(false);

  const { data, isLoading, isError, error } = useTime();

  if (isLoading) {
    return 'Loading...';
  }

  if (isError) {
    return `Error: ${error.message}`;
  }

  const time = DateTime.fromSeconds(data.unixtime);
  const currentHour = time.hour;
  const dayTime = currentHour > 5 && currentHour < 18;

  return (
    <>
      <main
        className={`app-container ${toggle ? 'app-container-toggle' : ''} ${
          dayTime ? 'bg-day' : 'bg-night'
        }`}
      >
        <Quote toggle={toggle} />
        <div className="time-container">
          <Time />
          <div>
            <button
              onClick={() => setToggle(!toggle)}
              className="more-info-btn"
              type="button"
            >
              <span> {toggle ? 'Less' : 'More'} </span>
              <svg
                className={`arrow-svg ${toggle ? 'arrow-svg-up' : ''}`}
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
        <MoreInfo toggle={toggle} bgDayOrNight={dayTime} />
      </main>
    </>
  );
}

export default App;
