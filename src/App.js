

import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import ServicesCard from "./components/ServiceCard";

function App() {
  return (
    <div className="App bg-color-primary px-36 py-20" >
      <div className=" bg-color-secondary w-full h-full p-10">
        <NavBar />
        <Home />
        <ServicesCard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
