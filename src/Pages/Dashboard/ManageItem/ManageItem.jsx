import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageItem = () => {
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (item) => {
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
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          console.log("deleted res", res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your Item has been deleted.", "success");
          }
        });
      }
    });
  };
  return (
    <div className="w-full">
      <SectionTitle
        heading="Manage all items"
        subHeading="Hurry up!"
      ></SectionTitle>

      <div className="overflow-x-auto md:ps-12">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <td>#</td>
              <th>Item</th>
              <th>Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{item.name}</div>
                    <p>{item.category}</p>
                  </div>
                </td>
                <td>{item.price}</td>
                <td>
                  <button className="btn btn-ghost btn-md text-lg text-[#D1A054] ">
                    <FaEdit></FaEdit>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost btn-md text-lg text-[#d11216] "
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItem;
