import { useState } from "react";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
  const categories = ["salads", "pizzas", "desserts", "soups", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category.toLowerCase());
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  // console.log(menu)
  // const {category} = useParams()
  // console.log(category);
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover
        img={orderCoverImg}
        title={"Order Food"}
        subTitle={"Would you like to a dish"}
      ></Cover>
      <div className="my-16 text-center">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salads</Tab>
            <Tab>Pizzas</Tab>
            <Tab>Desserts</Tab>
            <Tab>Soups</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <h1>hdjdfjksdfkdf</h1>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>

          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>

          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>

          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>

          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
