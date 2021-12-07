import { Icon } from "@iconify/react";

const LocationMarkVolcano = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon="noto:volcano" className="location-icon" />
    </div>
  );
};

export default LocationMarkVolcano;
