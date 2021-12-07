import React from "react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

const IconsInfo = () => {
  return (
    <div className="icon-info">
      <h4>Icons Description</h4>
      <ul>
        <li>
          <Icon icon={locationIcon} className="location-icon" />{" "}
          <h5>Wild Fire</h5>
        </li>
        <li>
          <Icon icon="noto:volcano" className="location-icon" />
          <h5>Volcano</h5>
        </li>
        <li>
          <Icon icon="openmoji:iceberg" className="location-icon" />
          <h5>Iceberg</h5>
        </li>
      </ul>
    </div>
  );
};

export default IconsInfo;
