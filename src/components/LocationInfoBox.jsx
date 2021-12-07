import React from "react";

const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info">
      <h2>Event Information :-</h2>
      <ul>
        <li>
          Event : <strong>{info.id}</strong>
        </li>
        <li>
          Description : <strong>{info.title}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
