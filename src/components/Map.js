import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getCityCoordinates } from "./helpers";
// import { GrLocation } from "react-icons/gr";


const markerIcon = new L.Icon({
  iconUrl: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png', 
  iconSize: [32, 32], 
  iconAnchor: [16, 32], 
  popupAnchor: [0, -32],
});

const Map = ({ user }) => {
  const [destinationCoordinates, setDestinationCoordinates] = useState([]);

  useEffect(() => {
    const coordinates = user.orders.map((order) => {
      if (order.destination) {
        return {
          orderNumber: order.order_number,
          coordinates: getCityCoordinates(order.destination),
        };
      }
      return null;
    });

    setDestinationCoordinates(coordinates.filter(Boolean));
  }, [user.orders]);

  return (
    <MapContainer
      center={[1.2921, 36.8219]}
      zoom={5}
      style={{ height: "400px", width: "100%" }}
      className="rounded-md shadow-md my-8"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {destinationCoordinates.map((destination) => (
        <Marker
          key={destination.orderNumber}
          position={destination.coordinates}
          icon={markerIcon}
        >
          <Popup>{`Order ${destination.orderNumber} destination`}</Popup>
        </Marker>
      ))}

      {user.orders.map((order) => (
        <React.Fragment key={order.order_number}>
          {order.destination && order.current_location && (
            <Polyline
              positions={[
                getCityCoordinates(order.current_location),
                ...destinationCoordinates
                  .filter((d) => d.orderNumber === order.order_number)
                  .map((d) => d.coordinates),
              ]}
              color="blue"
              weight={4}
              arrowheads="true"
            />
          )}
        </React.Fragment>
      ))}
    </MapContainer>
  );
};

export default Map;
