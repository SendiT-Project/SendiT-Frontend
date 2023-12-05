import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Orders from "./components/Orders";
import Login from "./components/Login";
import Contact from './components/Contact';
import { useEffect, useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import AdminOrders from './components/AdminOrders';
import Tracker from './components/Tracker';
import { useNavigate } from 'react-router-dom';
import Users from './components/Users';

function App() {
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [orders, setOrders] = useState([])
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const location = useLocation();

  useEffect(() => {
    fetch('/session', { credentials: "include" })
      .then(r => r.json())
      .then(users => {
        setUser(users)
      })
      .catch(error => {
        console.log("Error fetching session:", error)
      })
  }, [users])

  useEffect(() => {
    setLoading(true)
    fetch('/orders', { credentials: "include" })
      .then(r => r.json())
      .then(data => {
        setOrders(data)
        setLoading(false)
      })
      .catch(error => {
        console.log("Error fetching session:", error)
      })
  }, [])

  useEffect(() => {
    setLoading(true)
    fetch('/users', { credentials: "include" })
      .then(r => r.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
      .catch(error => {
        console.log("Error fetching users:", error)
      })
  }, [])

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

  function handleLogout() {
    fetch('/logout', {
      method: "DELETE",
      credentials: "include"
    })
      .then(setUser(null))
      .then(console.log(user))
      .then(setIsLoggedIn(false))
      .then(enqueueSnackbar('Logged out successfully', { variant: "success" }))
      .then(navigate('/'))
      .catch(error => {
        console.error("Logout error:", error);
      });
  }

  const isNavbarFooterVisible = !['/adminOrders', '/users'].some(path => location.pathname.includes(path));

  return (
    <div className="App bg-color-primary px-8 sm:px-8 md:px-20 lg:px-30 py-12">
      <div className="bg-color-secondary p-8 mx-4">
        {isNavbarFooterVisible && <NavBar user={user} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} onLogout={handleLogout} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login user={user} setUser={setUser} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/orders" element={<Orders isLoggedIn={isLoggedIn} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<Users users={users} />} />
          <Route path="/tracker" element={<Tracker user={user} onUpdateOrder={handleUpdateOrder} />} />
          <Route
            path="/adminOrders"
            element={
              (user && user.is_admin) ? (
                <AdminOrders orders={orders} loading={loading} onUpdateOrder={handleUpdateOrder} />
              ) : (
                <div className='flex flex-col items-center text-3xl text-red-600 font-extrabold'>
                  <h3 >Not Authorized</h3>
                  <p >You do not have permission to access this page.</p>
                </div>
              )
            }
          />
        </Routes>
        {isNavbarFooterVisible && <Footer />}
      </div>
    </div>
  );
}

export default App;
