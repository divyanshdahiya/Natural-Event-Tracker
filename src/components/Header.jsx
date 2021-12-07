import React from "react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Icon icon="mdi:alert-octagram" /> Natural Event Tracker By - Divyansh
        Dahiya
      </h1>
    </header>
  );
};

export default Header;
