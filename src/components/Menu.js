import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom'
// import { useSnackbar } from 'notistack';

const Menu = ({ orders, loading, onUpdateOrder}) => {
    // const {enqueueSnackbar} = useSnackbar();
    // const navigate=useNavigate()

  return (
    <div className="menu-container bg-lime-950">
      <div id="menu-logo">
        <h1 className='font-semibold text-black'>SendiT </h1> 
      </div>
      <div className="menu-links">
        <Link className='text-black font-semibold' to="/users">Users</Link>
        <Link className='text-black font-semibold' to="/adminOrders">Orders</Link>
      </div>
      {/* <div className="logout" onclick={ ()=> adminLogOut}>Logout</div> */}
      <adminOrders orders={orders} loading={loading} onUpdateOrder={onUpdateOrder} />
    </div>
  );
};

export default Menu;