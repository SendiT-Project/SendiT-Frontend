import React from "react";
import { Link } from "react-router-dom";
import Map from "./Map"; 

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around cursor-pointer mx-4">
      <div className="flex flex-col flex-wrap justify-around lg:w-1/2">
        <div className="mb-4 flex flex-col flex-wrap justify-evenly py-8 text-7xl font-semibold">
          <h1 className="ml-4 lg:ml-6 text-4xl md:text-4xl sm:text-2xl lg:text-6xl font-semibold">
            <span className="border-b-2 pb-3">
              {" "}
              Get your <span className="text-color-tertiary">Parcel</span>
            </span>
          </h1>
          <h1 className="ml-4 lg:ml-6 text-4xl md:text-4xl sm:text-2xl lg:text-6xl font-semibold">
            <span className="border-b-2 pb-3">Delivery at your </span>
          </h1>
          <h1 className="ml-4 lg:ml-6 text-4xl md:text-4xl sm:text-2xl lg:text-6xl font-semibold">
            <span className="border-b-2 pb-3"> Doorstep </span>
          </h1>
        </div>
        <div className="buttons flex flex-col lg:flex-row justify-evenly items-center p-5 w-full lg:w-1/2">
          <Link to="/orders">
            <button className="bg-color-tertiary hover:bg-rose-500 text-white px-5 py-2 rounded-3xl text-base mb-4 lg:mb-0">
              Order now
            </button>
          </Link>
          <button className="text-black hover:bg-rose-500 px-5 py-2 rounded-3xl text-base border border-emerald-950">
            How it works
          </button>
        </div>
      </div>
      {/* Include the DeliveryMap component here */}
      <div className="map-container lg:w-1/2">
        <Map />
      </div>
    </div>
  );
};

export default Home;
