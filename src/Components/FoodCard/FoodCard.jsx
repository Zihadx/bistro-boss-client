import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart()
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {menuItemId: _id , name, image, price,  email: user.email}
      fetch("http://localhost:5000/carts",{
        method: 'POST',
        headers:{
          "content-type": "application/json"
        },
        body: JSON.stringify(cartItem)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order food?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="food" className="w-full" />
      </figure>
      <p className=" absolute bg-slate-950 right-0 mr-4 mt-4 px-4 py-1 text-white">
        {price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 border-b-2 text-yellow-600 bg-slate-100"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
