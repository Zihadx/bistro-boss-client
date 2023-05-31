import { Link } from "react-router-dom";
import Cover from "../Shared/Cover/Cover";
import MenuItem from "../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, subTitle, img }) => {
  return (
    <div>
      {title && <Cover img={img} title={title} subTitle={subTitle}></Cover>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mb-16">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-2 text-yellow-600">
            order now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
