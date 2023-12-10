import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import SignUp from "./components/SignUp";
import OrdersForm from "./components/OrdersForm";
import Login from "./components/Login";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";
import AdminOrders from "./components/AdminOrders";
import Tracker from "./components/Tracker";
import { useNavigate } from "react-router-dom";
import Users from "./components/Users";

function App() {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch("/session", { credentials: "include" })
      .then((r) => r.json())
      .then((user) => {
        setUser(user);
        console.log(user)
      })
      .catch((error) => {
        console.log("Error fetching session:", error);
      });
      
  }, [refresh]);

  useEffect(() => {
    setLoading(true);
    fetch("/orders", { credentials: "include" })
      .then((r) => r.json())
      .then((data) => {
        setOrders(data);
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

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
      credentials: "include",
    })
      .then(setUser(null))
      .then(console.log(user))
      .then(enqueueSnackbar("Logged out successfully", { variant: "success" }))
      .then(navigate("/"))
      .catch((error) => {
        console.error("Logout error:", error);
      });
  }

  const isNavbarFooterVisible = !["/adminOrders", "/users"].some((path) =>
    location.pathname.includes(path)
  );

  return (
    // <div className="App bg-color-primary px-8 sm:px-8 md:px-20 lg:px-30 py-12">
      <div className="bg-color-secondary p-8 mx-4">
        {isNavbarFooterVisible && (
          <NavBar
            user={user}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            onLogout={handleLogout}
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
          <Route path="/users" element={<Users setLoading={setLoading} />} />
          <Route
            path="/tracker"
            element={
              <Tracker
                user={user}
                refresh={refresh}
                setRefresh={setRefresh}
                onUpdateOrder={handleUpdateOrder}
              />
            }
          />
          <Route
            path="/adminOrders"
            element={
              user && user.is_admin ? (
                <AdminOrders
                  orders={orders}
                  loading={loading}
                  onUpdateOrder={handleUpdateOrder}
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
