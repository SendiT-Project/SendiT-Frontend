// import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

function Orders({refresh, setRefresh}) {
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar()

  const [orderData, setOrderData] = useState({
    name_of_parcel: "",
    destination: "",
    current_location: "",
    pickup: "",
    weight: "",
    price: 0,
  });

  const handleChange = (e) => {
    const newWeight = e.target.value;
    const calculatedPrice = parseInt(newWeight, 10) * 150;

    setOrderData({
      ...orderData,
      [e.target.name]: newWeight,
      price: calculatedPrice,
    });
  };

  const handleSubmit = () => {
    fetch("https://sendit-backend-lje2.onrender.com/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => {
        if (response.status === 201) {
          return response.json();
          
        } else if (response.status === 401) {
          enqueueSnackbar('You must be logged in to create an order', { variant: 'error' });
          navigate('/login')
          return Promise.reject('Not logged in');
        }
      })
      .then((data) => {
        setOrderData(data)
        setRefresh(!refresh)
        enqueueSnackbar('Order created successfully', {variant:'success'})
        navigate("/tracker");
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  return (
    <div className="container mx-auto p-8 flex items-center justify-center h-screen">
      <div className="w-full max-w-md bg-color-secondary rounded overflow-hidden shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Place an Order</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Name of Parcel:
            </label>
            <input
              type="text"
              required
              name="name_of_parcel"
              value={orderData.name_of_parcel}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Destination:
            </label>
            <input
              type="text"
              required
              name="destination"
              value={orderData.destination}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Current Location:
            </label>
            <input
            required
              type="text"
              name="current_location"
              value={orderData.current_location}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Pickup:
            </label>
            <input
            required
              type="text"
              name="pickup"
              value={orderData.pickup}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Weight:
            </label>
            <input
            required
              type="text"
              name="weight"
              value={orderData.weight}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {orderData.weight && (
            <p className="text-sm text-gray-600 mb-4">
              Estimated Price: Ksh {orderData.price}
            </p>
          )}

          <button
            type="submit"
            className="bg-color-tertiary hover:bg-rose-500 text-white px-3 py-1 rounded-full text-base cursor"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default Orders;
