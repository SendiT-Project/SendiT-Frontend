import { useState, useEffect } from "react";
import Menu from "./Menu";
import { MdEdit } from "react-icons/md";
import { useSnackbar } from "notistack";
import Admin from'../assets/Admin1.jpg';

const AdminOrders = ({loading, setLoading, setUser, refresh, setRefresh}) => {
  const [page, setPage] = useState(1);
  const [ordersPerPage] = useState(10);
  const [editing, setEditing] = useState({}); 
  const {enqueueSnackbar} = useSnackbar()
  const [searchTerm, setSearchTerm] = useState('');
  const [orders, setOrders] = useState([])

  useEffect(() => {
    setLoading(true);
    fetch("/orders", { credentials: "include" })
      .then((r) => r.json())
      .then((data) => {
        setOrders(data);
        setRefresh(!refresh)
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching session:", error);
      });
  }, []);


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


  const toggleEditing = (orderId) => {
  setEditing((prevEditing) => {
      const newEditingState = { ...prevEditing, [orderId]: !prevEditing[orderId] };
      return newEditingState;
    });
  };

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= orders.length / ordersPerPage && selectedPage !== page)
      setPage(selectedPage);
  };

  function updateOrders(order) {
    fetch(`/orders/${order.order_number}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        current_location: order.current_location,
        status: order.status,
      }),
    })
      .then((r) => r.json())
    .then((updatedOrder) => {
      handleUpdateOrder(updatedOrder)
      enqueueSnackbar("Order edited successfully", { variant: "info" });
      setEditing((prevEditing) => ({ ...prevEditing, [order.order_number]: false }))
    })
  }

  const handleStatusChange = (e, order) => {
    const updatedOrder = { ...order, status: e.target.value };
    handleUpdateOrder(updatedOrder);
  };

  const handleLocationChange = (e, order) => {
    const updatedOrder = { ...order, current_location: e.target.value };
    handleUpdateOrder(updatedOrder);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
  };

  const filteredOrders = orders.filter((order) => {
    const status = order.status.toLowerCase();
    return status.includes(searchTerm);
  });
  

  return (
    <div className=" ml-auto">
      <div className="header border mb-10 flex justify-between">
          <div className="search-bar mt-2 items-center ml-64">
            <input
              type="text"
              placeholder="Search Orders..."
              value={searchTerm}
              onChange={handleSearch}
              className="p-2 border border-gray-300 rounded-3xl"
            />
          </div>
          <div className="order-info flex items-center mr-10 mt-2">
            <img className='w-10 h-10 rounded-full mr-2' src={Admin} alt="User Avatar" />
            <span className="font-bold text-gray-800">ADMIN</span>
          </div>
        </div>
      <h1 className="text-4xl font-bold mb-4 text-center">Orders</h1>
      <table className="max-w-full bg-color-secondary border border-gray-300 ml-64 mr-10 my-4 shadow-md">
        <thead className="text-start ">
          <tr>
            <th className="py-2 px-4 text-left border-b w-1/6">Parcel Name</th>
            <th className="py-2 px-4 text-left border-b w-1/6">Destination</th>
            <th className="py-2 px-4 text-left border-b w-1/6">Current Location</th>
            <th className="py-2 px-4 text-left border-b w-1/6">Status</th>
            <th className="py-2 px-4 text-left border-b w-1/6">Weight</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.slice(page * ordersPerPage - ordersPerPage, page * ordersPerPage).map((order) => (
            <tr key={order.order_number} className="">
              <td className="py-2 px-4 border-b">{order.name_of_parcel}</td>
              <td className="py-2 px-4 border-b">{order.destination}</td>
              <td className="py-2 px-4 border-b">
                <input
                  type="text"
                  value={order.current_location}
                  onChange={(e) => handleLocationChange(e, order)}
                  disabled={!editing[order.order_number]}
                />
              </td>
              <td className="py-2 px-4 border-b">
                <div className="relative">
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(e, order)}
                    disabled={!editing[order.order_number]}
                    className="appearance-none border border-gray-300 text-gray-700 py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
                  >
                    <option value="pending">Pending</option>
                    <option value="dispatched">Dispatched</option>
                    <option value="delivered">Delivered</option>
                  </select>
                </div>
              </td>
              <td className="py-2 px-4 border-b">{order.weight}</td>
              <div className=" flex">
                {editing[order.order_number] && (
                  <button
                    onClick={() => updateOrders(order)}
                    className="px-2 py-1 mr-2 bg-green-500 text-white text-sm rounded"
                  >
                    Save
                  </button>
                )}
                <MdEdit
                  className="cursor-pointer text-2xl text-purple-800 "
                  onClick={() => toggleEditing(order.order_number)}
                />
              </div>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Menu setUser={setUser} />
      </div>
      {orders.length > 0 && (
        <div className="mb-4 mt-4 flex justify-center">
          <span
            className={page > 1 ? "cursor-pointer" : "opacity-0"}
            onClick={() => selectPageHandler(page - 1)}
          >
            ◀{" "}
          </span>
          {[...Array(Math.ceil(orders.length / ordersPerPage))].map((_, i) => (
            <span
              className={page === i + 1 ? "p-4 py-2 mx-1 border cursor-pointer" : ""}
              key={`page-${i + 1}`}
              onClick={() => selectPageHandler(i + 1)}
            >
              {i + 1}
            </span>
          ))}
          <span
            className={page < orders.length / ordersPerPage ? "cursor-pointer" : "opacity-0"}
            onClick={() => selectPageHandler(page + 1)}
          >
            ▶{" "}
          </span>
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
