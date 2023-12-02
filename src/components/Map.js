import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 1.2921, 
  lng: 36.8219, 
};

const Map = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    
    axios.get('http://127.0.0.1:5000/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  return (
    <LoadScript googleMapsApiKey="our api key">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
      >
        {orders.map(order => (
          <Marker
            key={order.order_number}
            position={{ lat: parseFloat(order.destination_lat), lng: parseFloat(order.destination_lng) }}
            label={order.order_number.toString()}
            title={order.name_of_parcel}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;