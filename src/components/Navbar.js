const NavBar = () => {
    return ( 
        <div className="navbar flex justify-between items-center px-8 cursor-pointer">
        <div>
          <h1 className="text-2xl font-semibold">SendiT</h1>
        </div>
          <div className="hidden lg:flex w-1/4 justify-evenly items-center">
          <ul className="flex justify-evenly w-5/6 mt-2">
            <li className="nav-link hover:text-rose-500">Home</li>
            <li className="nav-link hover:text-rose-500">About Us</li>
            <li className="nav-link hover:text-rose-500">Tracker</li>
            <li className="nav-link hover:text-rose-500">Contact Us</li>
          </ul>
          <button className="bg-color-tertiary hover:bg-rose-500 text-white px-5 py-2 rounded-3xl text-base cursor">login</button>
        </div>
      </div>
     );
}
 
export default NavBar;