const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-2"
      />
      <h2 className="font-bold text-lg">{product.name}</h2>
      <p className="text-gray-700">R$ {product.price.toFixed(2)}</p>
      <p className="text-yellow-500">⭐ {product.rating}</p>
    </div>
  );
};

export default ProductCard;
