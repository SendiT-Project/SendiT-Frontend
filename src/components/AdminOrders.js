import { useState } from "react";
import Menu from "./Menu";

const AdminOrders = ({ orders, loading, onUpdateOrder}) => {

  const [page, setPage] =useState(1)
  const [ordersPerPage] = useState(10)

  const selectPageHandler =(selectedPage)=>{
    if (selectedPage >=1 && selectedPage<= orders.length/ordersPerPage && selectedPage !== page)
    setPage(selectedPage)
  }

  orders.map((order)=>order)


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
      .then((updatedOrder) =>
       onUpdateOrder(updatedOrder));

  }
  

  const handleStatusChange = (e, order) => {
    const updatedOrder = { ...order, status: e.target.value };
    onUpdateOrder(updatedOrder);
  };
  
  const handleLocationChange = (e, order) => {
    const updatedOrder = { ...order, current_location: e.target.value };
    onUpdateOrder(updatedOrder);
  };

  if(loading){
    return <h2>Loading...</h2>
  

  }
    return (
      <div className="mt-5 ml-40">
        <h1 className="text-2xl font-bold mb-4 text-center">Orders</h1>
        <table className="min-w-full bg-color-secondary border border-gray-300 mx-4 my-4">
          <thead className="text-start">
            <tr>
              <th className="py-2 px-4 text-left border-b">Parcel Name</th>
              <th className="py-2 px-4 text-left border-b">Destination</th>
              <th className="py-2 px-4 text-left border-b">Current Location</th>
              <th className="py-2 px-4 text-left border-b">Status</th>
              <th className="py-2 px-4 text-left border-b">Weight</th>
            </tr>
          </thead>
          <tbody>
            {orders.slice(page*ordersPerPage-ordersPerPage,page*ordersPerPage).map((order) => (
              <tr key={order.order_number}>
                <td className="py-2 px-4 border-b">{order.name_of_parcel}</td>
                <td className="py-2 px-4 border-b">{order.destination}</td>
                <td className="py-2 px-4 border-b">
                  <input
                    type="text"
                    value={order.current_location}
                    onChange={(e) => handleLocationChange(e, order)}

                  />
                </td>
                <td className="py-2 px-4 border-b">
                  <div className="relative">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(e, order)}
                  
                      className="appearance-none border border-gray-300 text-gray-700 py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"

                      disabled={loading}
                    >
                      <option value="pending">Pending</option>
                      <option value="dispatched">Dispatched</option>
                      <option value="delivered">Delivered</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M5 10l5 5 5-5z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-4 border-b">{order.weight}</td>
                <button
                    onClick={() => updateOrders(order)}
                    className="px-2 py-1 mr-2 bg-green-500 text-white rounded"
                  >
                    Save
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      <div>
        <Menu />
      </div>
      {
        orders.length>0 && 
        <div className=" mb-4 mt-4 flex justify-center">
          <span className={page> 1 ? "cursor-pointer" : "opacity-0"} onClick={()=>selectPageHandler(page-1)}>◀ </span>
          {
          [...Array(Math.ceil(orders.length/ordersPerPage))].map((_, i)=>{
            return<span className={page=== i+1 ? "p-4 py-2 mx-1 border cursor-pointer":""}
                         key={`page-${i + 1}`}
                         onClick={()=>selectPageHandler(i + 1)}
                         >
                          {i + 1}
                  </span>
          })
        
          }
  
          <span className={page<orders.length/ordersPerPage ? "cursor-pointer" : "opacity-0"} onClick={()=>selectPageHandler(page+1)}>▶  </span>
        </div>
      }
      </div>
    );
  };
  
  export default AdminOrders;
  
