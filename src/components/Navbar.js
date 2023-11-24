const NavBar = () => {
    return ( 
        <div className="navbar flex justify-between">
        <div>
          <h1 className="text-2xl font-semibold px-8">SendiT</h1>
        </div>
          <div className="flex w-1/4 justify-evenly">
          <ul className="flex justify-evenly w-5/6 mt-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Tracker</li>
            <li>Contact Us</li>
          </ul>
          <button className="bg-color-tertiary text-white px-5 py-2 rounded-3xl text-base">login</button>
        </div>
      </div>
     );
}
 
export default NavBar;