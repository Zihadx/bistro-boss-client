const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="flex items-center space-x-4">
      <img
        className="w-32 h-28 rounded-tr-full rounded-br-full rounded-bl-full"
        src={image}
        alt=""
      />
      <div>
        <h3>{name}</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-600">${price}</p>
    </div>
  );
};

export default MenuItem;
