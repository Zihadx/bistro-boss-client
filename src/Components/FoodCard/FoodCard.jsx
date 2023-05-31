const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="food"
          className="w-full"
        />
      </figure>
      <p className=" absolute bg-slate-950 right-0 mr-4 mt-4 px-4 py-1 text-white">{price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-outline border-0 border-b-2 text-yellow-600">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
