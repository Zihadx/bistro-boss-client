import { Link } from "react-router-dom";

const NavBar = () => {
    const navItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/services'>Services</Link></li>
    </>
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-50 max-w-screen-xl text-white bg-stone-900 h-28 uppercase">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52 text-sm font-semibold"
            >
             {navItems}
            </ul>
          </div>
          <Link to="/" className="">
            {/* <img src={logo} alt="" /> */}
            <h3 className="text-3xl font-bold uppercase">Bistro Boss</h3>
            <p className="font-bold text-lg font-serif">Restaurant</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-sm font-semibold">
           {navItems}
          </ul>
        </div>
        <div className="navbar-end">
        <button className="text-base font-bold uppercase">Login</button>
        </div>
      </div>
    </>
  );
};

export default NavBar;