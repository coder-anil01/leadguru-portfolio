import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 25.706860, // Set your desired latitude
  lng: 85.607604, // Set your desired longitude
};

const Map = () => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAZJz3ApgjxKkiSi503u10hRy-Nruzrsmo"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;