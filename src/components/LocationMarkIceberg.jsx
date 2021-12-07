import { Icon } from "@iconify/react";

const LocationMarkIceberg = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon="openmoji:iceberg" className="location-icon" />
    </div>
  );
};

export default LocationMarkIceberg;
