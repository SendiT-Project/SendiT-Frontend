import hero from "../assets/hero.svg"

const Home = () => {
    return (
      <div className="flex flex-col lg:flex-row justify-around cursor-pointer mx-4">
        <div className="flex flex-col justify-around lg:w-1/2">
          <ul className="flex flex-wrap justify-evenly py-8 text-7xl font-semibold">
            <li>Get</li>
            <li>your</li>
            <li className="text-color-tertiary">Parcel</li>
            <li>Delivery</li>
            <li>at</li>
            <li>your</li>
            <li>Doorstep</li>
          </ul>
          <div className="buttons flex flex-col lg:flex-row justify-evenly items-center p-5 w-full lg:w-1/2">
            <button className="bg-color-tertiary hover:bg-rose-500 text-white px-5 py-2 rounded-3xl text-base mb-4 lg:mb-0">Order now</button>
            <button className="text-black hover:bg-rose-500 px-5 py-2 rounded-3xl text-base border border-emerald-950">How it works</button>
          </div>
        </div>
        <div className="hero flex justify-end py-8 lg:w-1/2">
          <img src={hero} alt="hero" className="m-auto" />
        </div>
      </div>
    );
  }
  
  export default Home;
  