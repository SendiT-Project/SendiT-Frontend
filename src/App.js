import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Orders from "./components/Orders";
import Login from "./components/Login";
import Contact from './components/Contact';
import { useEffect, useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import Tracker from './components/Tracker';

function App() {
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState({})

  useEffect(() =>{
    fetch('/session',{credentials: "include"})
    .then(r =>r.json())
    .then(data =>{
      setUser(data)
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
      .then(() => {
        setUser({});
        setIsLoggedIn(false);
        enqueueSnackbar('Logged out successfully', { variant: "success" });
      })
      .catch(error => {
        console.error("Logout error:", error);
      });
  }
  

  return (
    <div className="App bg-color-primary px-8 sm:px-8 md:px-20 lg:px-30 py-12">
      <div className="bg-color-secondary p-8 mx-4">
    <Router>
      <NavBar user={user} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} onLogout={handleLogout}/>
      <Routes>
        <Route
          path="/"
          element={<Home />
          }
        />
        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/tracking" element={<Tracker/>} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  </div>
  );
}

export default App;
