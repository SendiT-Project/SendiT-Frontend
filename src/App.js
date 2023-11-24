

import Home from "./components/Home";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App bg-color-primary px-36 py-20" >
      <div className=" bg-color-secondary w-full h-full p-10">
        <NavBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
