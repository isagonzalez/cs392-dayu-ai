// MapView.jsx
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 40.748817,
  lng: -73.985428,
};

function MapView({ apiKey, hazards }) {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {hazards.map((hazard) => (
          <Marker
            key={hazard.id}
            position={{
              lat: hazard.location.lat,
              lng: hazard.location.lng,
            }}
            label={hazard.title}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapView;
