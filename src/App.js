import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Orders from "./components/Orders";
import Login from "./components/Login";
import Contact from './components/Contact';

function App() {
  return (
    <div className="App bg-color-primary px-8 sm:px-8 md:px-20 lg:px-30 py-12">
      <div className="bg-color-secondary p-8 mx-4">
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home />
          }
        />
        <Route path="/login" element={<Login/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/contact" element={<Contact/>} />
        
      </Routes>
      <Footer/>
    </Router>
    </div>
  </div>
  );
}

export default App;
