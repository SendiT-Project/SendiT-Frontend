import React, { useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaUndoAlt } from "react-icons/fa";
import { useSnackbar } from "notistack";

const Tracker = ({ user, refresh, setRefresh }) => {
  const [editingOrderId, setEditingOrderId] = useState(null);
  const [editedDestination, setEditedDestination] = useState("");
  const {enqueueSnackbar} = useSnackbar()
  const [orders, setOrders] = useState([])


  function handleUpdateOrder(updatedOrder) {
    const updatedOrders = orders.map((order) => {
      if (order.order_number === updatedOrder.order_number) {
        return updatedOrder;
      } else {
        return order;
      }
    });
    setOrders(updatedOrders);
  }

  const handleEditDestination = (orderId, currentDestination) => {
    setEditingOrderId(orderId);
    setEditedDestination(currentDestination);
  };

  const updateOrders = (order) => {
    fetch(`https://sendit-backend-lje2.onrender.com/orders/${order.order_number}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        destination: editedDestination,
      }),
    })
      .then((response) => response.json())
      .then((updatedOrder) => {
        handleUpdateOrder(updatedOrder);
        setRefresh(!refresh);
        setEditingOrderId(null);
        enqueueSnackbar("Order edited successfully", { variant: "info" });
      })
      .catch((error) => {
        console.error("Error updating destination:", error);
      });
  };

  const handleDestinationChange = (e) => {
    setEditedDestination(e.target.value);
  };
  const handleDeleteOrder = (orderId) => {
    fetch(`https://sendit-backend-lje2.onrender.com/orders/${orderId}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          const updatedOrders = user.orders.filter(
            (order) => order.order_number !== orderId
          );
          setRefresh(!refresh);
          setOrders(updatedOrders);
        } else {
          console.error("Error deleting order:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error deleting order:", error);
      });
  };

  return (
    <div className="flex justify-center items-center flex-col my-2 min-h-screen">
      <h1 className="font-primary font-extrabold via-inherit text-orange-400">Track your orders here</h1>
      {user && user.orders ? (
        <>
          <table className="min-w-full bg-color-secondary border border-gray-300 mx-4 my-4">
            <thead className="text-start">
              <tr>
                <th className="py-2 px-4 text-left border-b">Name of Parcel</th>
                <th className="py-2 px-4 text-left border-b">Destination</th>
                <th className="py-2 px-4 text-left border-b">Status</th>
                <th className="py-2 px-4 text-left border-b">Weight</th>
                <th className="py-2 px-4 text-left border-b">
                  Current Location
                </th>
                <th className="py-2 px-4 text-left border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {user.orders.map((order) => (
                <tr key={order.order_number}>
                  <td className="py-2 px-4 border-b">{order.name_of_parcel}</td>
                  <td className="py-2 px-4 border-b">
                    {order.status === "pending" &&
                    editingOrderId === order.order_number ? (
                      <input
                        type="text"
                        value={editedDestination}
                        onChange={(e) => handleDestinationChange(e, order)}
                      />
                    ) : (
                      order.destination
                    )}
                  </td>
                  <td className="py-2 px-4 border-b">{order.status}</td>
                  <td className="py-2 px-4 border-b">{order.weight}</td>
                  <td className="py-2 px-4 border-b">
                    {order.current_location}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {order.status === "pending" && (
                      <div className="flex">
                        {editingOrderId === order.order_number ? (
                          
                          <>
                            <button
                              onClick={() => updateOrders(order)}
                              className="px-2 py-1 mr-2 bg-green-500 text-white rounded"
                            >
                              Save
                            </button>
                            <FaUndoAlt  className=" text-3xl"
                                        onClick={() => setEditingOrderId(null)}
                            />
                          </>
                        ) : (
                          <MdEdit className="cursor-pointer text-2xl text-purple-800 "
                                    onClick={() => handleEditDestination(order.order_number, order.destination)}  
                                    title="Edit Order"  
                          />
                        )}
                        < MdOutlineDeleteForever className=" text-3xl text-black hover:text-green cursor-pointer hover:text-red-800"
                                                  onClick={() => handleDeleteOrder(order.order_number)}
                                                  title="Cancel Order"
                        />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p>Session not created</p>
      )}
    </div>
  );
};

export default Tracker;


