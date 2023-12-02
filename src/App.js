import {Routes, Route } from 'react-router-dom';
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


function App() {
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()


  useEffect(() =>{
    setLoading(true)
    fetch('/orders', {credentials: "include"})
    .then(r =>r.json())
    .then(data =>{
      setOrders(data)
      setLoading(false)
    })
    .catch(error => {
      console.log("Error fetching session:", error)
    })
  }, [])


  // const indexOfLastOrder = currentPage * ordersPerPage
  // const indexOfFirstOrder = indexOfLastOrder - ordersPerPage
  // const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder)


  useEffect(() =>{
    fetch('/session',{credentials: "include"})
    .then(r =>r.json())
    .then(data =>{
      setUser(data)
      // console.log(user)
    })
    .catch(error => {
      console.log("Error fetching session:", error)
    })
  }, [isLoggedIn])

  // function handleLogin(user){
  //   setUser(user)
  // }

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
      // .then(() => {
      //   console.log(user)
      //   setUser(null);
      //   console.log(user)
      //   setIsLoggedIn(false);
      //   enqueueSnackbar('Logged out successfully', { variant: "success" });
      // })
      .catch(error => {
        console.error("Logout error:", error);
      });
  }

  

  return (
    <div className="App bg-color-primary px-8 sm:px-8 md:px-20 lg:px-30 py-12">
      <div className="bg-color-secondary p-8 mx-4">
      <NavBar user={user} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} onLogout={handleLogout}/>
      <Routes>
        <Route
          path="/"
          element={<Home />
          }
        />
        <Route path="/login" element={<Login setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/tracker" element={<Tracker user={user} />} />
       <Route path="/adminOrders" element={<AdminOrders orders={orders} loading={loading}/>} />
      </Routes>
      <Footer/>
    </div>
  </div>
  );
}

export default App;
