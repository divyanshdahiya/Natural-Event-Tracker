import React from "react";
import GoogleMapReact from "google-map-react";
import LocationMark from "./LocationMark";

const Map = ({ eventData, center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDttDUSRiAxzgFbWm7ZtLVHefeGctsIxiw" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationMark lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
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
