import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const getLocation = () =>
  axios.get('https://freegeoip.app/json/').then((res) => res.data);

const Location = () => {
  const { data, isLoading, isError, error } = useQuery('location', getLocation);

  if (isLoading) {
    return 'Loading...';
  }

  if (isError) {
    return `Error: ${error.message}`;
  }

  return (
    <>
      <div className="location">
        <h2>
          IN {data.region_name}, {data.country_code}
        </h2>
      </div>
    </>
  );
};

export default Location;
