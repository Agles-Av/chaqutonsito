import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";

const hospitalIcon = new L.Icon({
  iconUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Hospital_font_awesome.svg/512px-Hospital_font_awesome.svg.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const clinicIcon = new L.Icon({
  iconUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Ambulance_font_awesome.svg/512px-Ambulance_font_awesome.svg.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapComponent = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const lat = 23.634501;
    const lon = -102.552784;

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=hospital,clinic&bounded=1&viewbox=${
      lon - 0.1
    },${lat - 0.1},${lon + 0.1},${lat + 0.1}`;

    axios
      .get(url)
      .then((response) => {
        const data = response.data.map((place) => ({
          id: place.place_id,
          name: place.display_name,
          type: place.type,
          position: [place.lat, place.lon],
        }));
        setLocations(data);
      })
      .catch((error) => {
        console.error("Error fetching data from Nominatim API:", error);
      });
  }, []);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={location.position}
          icon={location.type === "hospital" ? hospitalIcon : clinicIcon}
        >
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
