import React from "react";
import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarkFire from "./LocationMarkFire";
import LocationInfoBox from "./LocationInfoBox";
import LocationMarkVolcano from "./LocationMarkVolcano";
import LocationMarkIceberg from "./LocationMarkIceberg";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev, index) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarkFire
          key={index}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() =>
            setLocationInfo({ id: ev.categories[0].title, title: ev.title })
          }
        />
      );
    } else if (ev.categories[0].id === 12) {
      return (
        <LocationMarkVolcano
          key={index}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() =>
            setLocationInfo({ id: ev.categories[0].title, title: ev.title })
          }
        />
      );
    } else if (ev.categories[0].id === 15) {
      return (
        <LocationMarkIceberg
          key={index}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() =>
            setLocationInfo({ id: ev.categories[0].title, title: ev.title })
          }
        />
      );
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDttDUSRiAxzgFbWm7ZtLVHefeGctsIxiw" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
        <LocationMarkFire lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
