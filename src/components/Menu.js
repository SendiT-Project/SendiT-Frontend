import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom'
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import Button from './Button';


const Menu = ({ orders, loading, onUpdateOrder, setUser}) => {
    const {enqueueSnackbar} = useSnackbar();
    const navigate=useNavigate()

    function handleLogOut(){
      fetch("/logout",{
        method: 'DELETE'
      })
      .then(setUser(null))
      .then(enqueueSnackbar('Logged out successfully', {variant:'success'}))
      .then(navigate('/'))
    }

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
      <Button content='Logout' onClick={handleLogOut} className='text-sm hover:bg-color-secondary border text-color-white py-2 px-4' />
    </div>
  );
};

export default Menu;