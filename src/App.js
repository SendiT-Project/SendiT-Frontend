import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import ServicesCard from "./components/ServiceCard";

function App() {
  return (
    <div className="App bg-color-primary px-8 sm:px-8 md:px-20 lg:px-30 py-12">
      <div className="bg-color-secondary p-8 mx-4">
        <NavBar />
        <Home />
        <ServicesCard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
