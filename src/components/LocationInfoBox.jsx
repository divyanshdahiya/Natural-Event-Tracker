import React from "react";
import { Icon } from "@iconify/react";

const LocationInfoBox = ({ info, setLocationInfo }) => {
  return (
    <div className="location-info">
      <div>
        <Icon
          className="cross-icon"
          icon="entypo:squared-cross"
          onClick={() => setLocationInfo(null)}
        />
      </div>
      <div>
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
    </div>
  );
};

export default LocationInfoBox;
