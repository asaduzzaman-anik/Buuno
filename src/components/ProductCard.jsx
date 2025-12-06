import { Link } from "react-router";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { addToCart, openCart } = useContext(CartContext); // sdnskjdsjk

  return (
    <div className="h-auto w-full border border-red-900 shadow shadow-red-200 rounded-lg overflow-hidden flex flex-col justify-between p-2">
      <Link to={`/product/${product.code}`} className="">
        {/* product image */}
        <div className="h-auto w-full rounded-lg overflow-hidden">
          <img src={product.image} alt="" className="h-full w-full " />
        </div>
      </Link>
      {/* product info */}
      <p>{product.name}</p>
      <div className="flex justify-between items-center">
        <p className="text-red-900 font-bold text-2xl">৳{product.price}</p>
        <button
          className="bg-red-900 rounded-lg p-1 text-white cursor-pointer"
          onClick={() => {
            addToCart(product);
            openCart();
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
