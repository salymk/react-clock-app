import React from 'react';
import './MoreInfo.css';

const MoreInfo = () => (
  <div>
    <button className="more-info-btn" type="button">
      <span> More </span>
      <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <circle fill="#303030" cx="20" cy="20" r="20" />
          <path stroke="#FFF" strokeWidth="2" d="M14 23l6-6 6 6" />
        </g>
      </svg>
    </button>
  </div>
);

export default MoreInfo;
