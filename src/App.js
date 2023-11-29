import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import ServicesCard from "./components/ServiceCard";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
    <div className="App bg-color-primary px-8 sm:px-12 md:px-20 lg:px-36 py-10">
     
        <div className="bg-color-secondary p-8 mx-4">
          <Routes>
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <NavBar />
          < Home />
          <ServicesCard />
          <Footer />
        </div>
      
    </div>
    </Router>
  );
}

export default App;
