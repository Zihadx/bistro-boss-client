import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title={"Our Menu"}
        subTitle={"Would You like to try a dish"}
      ></Cover>
      {/*----------------- main cover---------------- */}
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"Today's Offered"}
      ></SectionTitle>
      {/*----------- offered menu items ------------- */}
      <MenuCategory items={offered}></MenuCategory>
      {/*----------- desserts menu items ------------- */}
      <MenuCategory
        items={dessert}
        title={"desserts"}
        img={dessertImg}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
      {/*----------- pizzas menu items ------------- */}
      <MenuCategory
        items={pizza}
        title={"pizzas"}
        img={pizzaImg}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
      {/*----------- salad menu items ------------- */}
      <MenuCategory
        items={salad}
        title={"salads"}
        img={saladImg}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
      {/*----------- soup menu items ------------- */}
      <MenuCategory
        items={soup}
        title={"soups"}
        img={soupImg}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
    </div>
  );
};

export default Menu;
