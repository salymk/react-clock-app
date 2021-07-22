/* eslint-disable react/prop-types */
import React from 'react';
import useTime from '../hooks/useTime';

const MoreInfo = ({ toggle }) => {
  const { data, isError, isLoading, error } = useTime();

  if (isLoading) {
    return 'Loading...';
  }

  if (isError) {
    return `Error${error.message}`;
  }

  return (
    <>
      <div className={`more-info ${toggle ? '' : 'hide'}`}>
        <div className="more-info-container">
          <div className="more-info-details">
            <p>Current Timezone</p>
            <h4>{data.timezone}</h4>
          </div>
          <div className="more-info-details">
            <p>Day of the week</p>
            <h4>{data.day_of_week}</h4>
          </div>
          <div className="more-info-details">
            <p>Day of the year</p>
            <h4>{data.day_of_year}</h4>
          </div>
          <div className="more-info-details">
            <p>Week number</p>
            <h4>{data.week_number}</h4>
          </div>
          <div className="border" />
        </div>
      </div>
    </>
  );
};

export default MoreInfo;
