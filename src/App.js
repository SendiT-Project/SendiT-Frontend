import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import SignUp from "./components/SignUp";
import OrdersForm from "./components/OrdersForm";
import Login from "./components/Login";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import AdminOrders from "./components/AdminOrders";
import Tracker from "./components/Tracker";
import Users from "./components/Users";
import AboutUs from "./components/About";

function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const location = useLocation();

  //Adding these changes to deployment
  useEffect(() => {
    fetch("/session", { credentials: "include" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching session: ${response.statusText}`);
        }
        return response.json();
      })
      .then((user) => {
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message); 
      });
  }, [refresh]);
  


  const isNavbarFooterVisible = !["/adminOrders", "/users"].some((path) =>
    location.pathname.includes(path)
  );

  return (
    // <div className="App bg-color-primary px-8 sm:px-8 md:px-20 lg:px-30 py-12">
      <div className="bg-color-secondary">
        {isNavbarFooterVisible && (
          <NavBar
            user={user}
            setUser={setUser}
          />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Login
                setUser={setUser}
                refresh={refresh}
              />
            }
          />
          <Route
            path="/ordersform"
            element={
              <OrdersForm
                refresh={refresh}
                setRefresh={setRefresh}
              />
            }
          />
          <Route path="/signup" element={<SignUp setUser={setUser} refresh={refresh} setRefresh={setRefresh}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/users" element={<Users setLoading={setLoading} refresh={refresh} setRefresh={setRefresh} />} />
          <Route
            path="/tracker"
            element={
              <Tracker
                user={user}
                refresh={refresh}
                setRefresh={setRefresh}
                
              />
            }
          />
          <Route
            path="/adminOrders"
            element={
              user && user.admin ? (
                <AdminOrders
                  setUser={setUser}
                  loading={loading}
                  setLoading={setLoading}
                  refresh={refresh}
                  setRefresh={setRefresh}
                />
              ) : (
                <div className="flex flex-col items-center text-3xl text-red-600 font-extrabold">
                  <h3>Not Authorized</h3>
                  <p>You do not have permission to access this page.</p>
                </div>
              )
            }
          />
        </Routes>
        {isNavbarFooterVisible && <Footer />}
      </div>
    // </div>
  );
}

export default App;
