import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const imageHostingToken = import.meta.env.VITE_imageUploadToken;
const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit , reset} = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageRes) => {
        if (imageRes.success) {
          const imgUrl = imageRes.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            recipe,
            category,
            image: imgUrl,
          };
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data.insertedId) {
              reset()
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="w-full md:ps-4">
      <Helmet>
        <title>Bistro Boss | Add Item</title>
      </Helmet>
      <SectionTitle
        subHeading={"What' s new"}
        heading={"Add new Item"}
      ></SectionTitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-100 rounded-md p-8"
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Recipe name</span>
          </label>
          <input
            type="text"
            placeholder="Recipe name"
            {...register("name", { required: true, maxLength: 80 })}
            className="input input-bordered w-full"
          />
        </div>
        <div className=" flex gap-6 my-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Category*</span>
            </label>
            <select
              defaultValue="Pick One"
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick One</option>
              <option>Pizza</option>
              <option>Dessert</option>
              <option>Soup</option>
              <option>Drinks</option>
              <option>Salad</option>
            </select>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">Recipe Details*</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            {...register("recipe", { required: true })}
            placeholder="Recipe"
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-semibold">Item Image*</span>
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input file-input-bordered  w-full max-w-xs"
          />
        </div>
        <input
          className="px-3 py-2 uppercase text-white font-semibold rounded-sm cursor-pointer mt-4 bg-[#D1A054] hover:bg-orange-300 hover:text-slate-500"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddItem;
