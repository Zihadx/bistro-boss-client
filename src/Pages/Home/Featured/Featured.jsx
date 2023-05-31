import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="background bg-fixed text-white">
      <div className=" py-20 px-8 md:px-28 my-12 text-white bg-black bg-opacity-50">
        <SectionTitle
          subHeading={"Check it Out"}
          heading={"From Our Menu"}
        ></SectionTitle>
        <div className="md:flex justify-center items-center gap-10 ">
          <div>
            <img className="w-648 h-400" src={featuredImg} alt="" />
          </div>
          <div>
            <p className="font-bold">March 20, 2023</p>
            <p className="font-bold uppercase">WHERE CAN I GET SOME?</p>
            <p>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </small>
            </p>
            <button className="btn btn-outline border-0 border-b-2 mt-4 text-white">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
