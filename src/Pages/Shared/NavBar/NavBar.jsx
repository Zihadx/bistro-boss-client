import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import useCart from "../../../Hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [carts] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salads">Order Food</Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
      <li>
        <Link to="/dashboard/mycart" className="indicator bg-slate-700">
          <span className=" badge indicator-item badge-primary">
            +{carts?.length || 0}
          </span>
          <div className="place-items-center text-xl">
            <FaShoppingCart />
          </div>
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-50 max-w-screen-xl text-white bg-stone-900 h-28 uppercase md:px-8">
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
            <h3 className="text-2xl font-bold uppercase">Bistro Boss</h3>
            <p className="font-bold font-serif">Restaurant</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-sm font-semibold">
            {navItems}
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <>
              <span className="font-bold">{user?.displayName}</span>
              <button
                onClick={handleLogOut}
                className="btn btn-ghost font-bold uppercase"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-ghost font-bold uppercase">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
