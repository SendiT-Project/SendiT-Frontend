
import { Link, Outlet } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className="navbar flex flex-col lg:flex-row justify-between items-center px-8 cursor-pointer mx-4">
      <div className="mb-4 lg:mb-0">
        <h1 className="text-2xl font-semibold">SendiT</h1>
      </div>
      <div className="flex w-full lg:w-1/3 justify-evenly items-center">
        {/* <ul className="flex justify-evenly w-full lg:w-5/6 mt-2 lg:mt-0">
          <li className="nav-link hover:text-rose-500">Home</li>
          <li className="nav-link hover:text-rose-500">About Us</li>
          <li className="nav-link hover:text-rose-500">Tracker</li>
          <li className="nav-link hover:text-rose-500">Contact Us</li>
        </ul> */}
        <Link className=" inline-block px-5 py-2 rounded-3xl text-base cursor hover:text-rose-500" to={"/"}>Home</Link>
        <Link className=" inline-block px-5 py-2 rounded-3xl text-base cursor hover:text-rose-500" to={"/about"}>About Us</Link>
        <Link className=" inline-block px-5 py-2 rounded-3xl text-base cursor hover:text-rose-500" to={"/tracker"}>Tracker</Link>
        <Link className=" inline-block px-5 py-2 rounded-3xl text-base cursor hover:text-rose-500" to={"/contact"}>Contact Us</Link>
        <Link to="/login">
          <button className="bg-color-tertiary hover:bg-rose-500 text-white px-5 py-2 rounded-3xl text-base cursor">Login</button>
        </Link>
      </div>
      <Outlet />
    </div>
  );

};
// comments

export default NavBar;
