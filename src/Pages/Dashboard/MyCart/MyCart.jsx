import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [carts, refetch] = useCart();
  console.log(carts);
  const total = carts.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    console.log(item)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        //   headers: {
        //     'content-type': 'application/jon'
        //   },
        //   body: JSON.stringify()
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Helmet>
        <title>Bistro Boss | my Cart</title>
      </Helmet>
      <div className="uppercase  h-[80px] font-semibold flex justify-evenly items-center gap-8">
        <h3 className="text-3xl">Total Items: {carts.length}</h3>
        <h3 className="text-3xl">Total Prices: ${total}</h3>
        <button className="btn btn-warning btn-sm">Pay Now</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Food Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost text-red-600 btn-lg"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
