import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import AxiosCliente from "config/http-gateway/axios-config";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import HealingIcon from "@mui/icons-material/Healing";
import { renderToString } from "react-dom/server";

const createDivIcon = (icon) => {
  return divIcon({
    html: renderToString(icon),
    iconSize: [25, 25],
    className: "custom-icon",
  });
};

const hospitalIcon = createDivIcon(<LocalHospitalIcon style={{ color: "red" }} />);
const clinicIcon = createDivIcon(<MedicalServicesIcon style={{ color: "blue" }} />);
const healthCenterIcon = createDivIcon(<HealingIcon style={{ color: "green" }} />);

const MapComponent = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await AxiosCliente({
          url: "/api-alma/institute/getAll",
          method: "GET",
        });

        const fetchedLocations = response.data;
        console.log(fetchedLocations);

        const locationData = fetchedLocations.map((location) => {
          const { latitude, longitude } = location.location;
          return {
            id: location.id,
            name: location.name,
            type: location.type,
            position: [parseFloat(latitude), parseFloat(longitude)],
            level: location.level,
          };
        });

        setLocations(locationData);
      } catch (error) {
        console.error("Error fetching locations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <MapContainer
      center={[19.432608, -99.133209]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={location.position}
          icon={
            location.level === "hospital"
              ? hospitalIcon
              : location.level === "clinic"
              ? clinicIcon
              : healthCenterIcon
          }
        >
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
