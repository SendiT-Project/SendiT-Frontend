
import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ user }) => {
    const getCityCoordinates = (cityName) => {
        switch (cityName.toLowerCase()) {
          case "nairobi":
            return { lat: -1.3026148, lng: 36.828842 };
          case "garrisa":
            return { lat: -0.5236333, lng: 40.3564053 };
          case "meru":
            return { lat: 0.2254509, lng: 37.7772624 };
          case "wajir":
            return { lat: 1.9394402, lng: 40.024736 };
          case "moyale":
            return { lat: 2.868853, lng: 38.8320324 };
          case "mombasa":
            return { lat: -4.05052, lng: 39.667169 };
          case "nakuru":
            return { lat: -0.2802724, lng: 36.0712048 };
          case "kisumu":
            return { lat: -0.1029109, lng: 34.7541761 };
          case "busia":
            return { lat: 0.3712048, lng: 34.2647952 };
          default:
            return { lat: 0, lng: 0 };
        }
      };

  return (
    <MapContainer
      center={[1.2921, 36.8219]} 
      zoom={7} 
      style={{ height: "400px", width: "100%" }}
      className="rounded-md shadow-md my-8"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {user.orders.map((order) => (
        <React.Fragment key={order.order_number}>
          {order.destination && order.current_location && (
            <>
              {Object.keys(getCityCoordinates(order.destination)).map(
                (city) => {
                  const coordinates = getCityCoordinates(city);
                  if (coordinates) {
                    const { lat, lng } = coordinates;
                    return (
                      <Marker key={city} position={[lat, lng]}>
                        <Popup>{`City: ${city}`}</Popup>
                      </Marker>
                    );
                  }
                  return null;
                }
              )}
              <Polyline
                positions={[
                  getCityCoordinates(order.current_location),
                  getCityCoordinates(order.destination),
                ]}
                color="red"
                weight={4} 
                arrowheads="true"
              />
            </>
          )}
        </React.Fragment>
      ))}
    </MapContainer>
  );
};

export default Map;
