import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [carts] = useCart();

  // TODO: load data from server to dynamic isAdmin based on Data
  // const isAdmin = true;
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer drawer-mobile h-full">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary bt-sm drawer-button lg:hidden flex justify-center items-center"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side h-full">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#D1A054] uppercase font-semibold">
          {/* Sidebar content here */}

          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminhome">
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  <FaUtensils></FaUtensils> Add Items
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manageItem">
                  <FaWallet></FaWallet>Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaBook></FaBook> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <FaHome></FaHome>User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservations">
                  <FaCalendarAlt></FaCalendarAlt>Reservations
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet></FaWallet>Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart></FaShoppingCart>My Cart
                  <span className=" badge indicator-item badge-primary">
                    +{carts?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu"> Our Menu</NavLink>
          </li>
          <li>
            <NavLink to="/order/salads">Order Food</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
