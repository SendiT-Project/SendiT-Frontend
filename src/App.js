import { BrowserRouter as Router, Routes, Route } from "react-router-dom";import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import ServicesCard from "./components/ServiceCard";
import Login from "./components/Login";

function App() {
  return (
    <Router>
    <Routes>
      <Route
          path="/"
          element={
            <div className="App bg-color-primary px-8 sm:px-8 md:px-20 lg:px-30 py-12">
              <div className="bg-color-secondary p-8 mx-4">
                <NavBar />
                <Home />
                <ServicesCard />
                <Footer />
              </div>
            </div>
          }
        />
          <Route path="/login" Component ={Login} />
    </Routes>
    </Router>
  );
}

export default App;
