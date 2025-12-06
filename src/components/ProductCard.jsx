import { Link } from "react-router";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const { addToCart, openCart } = useContext(CartContext); // sdnskjdsjk
  const showToastNotification = () => {
    toast.custom((t) => (
      <div
        className={`bg-white shadow-md rounded p-4 flex items-center gap-3 
      ${t.visible ? "animate-enter" : "animate-leave"}`}
      >
        <span>This is a custom toast!</span>

        <button
          onClick={() => {
            openCart();
            toast.dismiss(t.id);
          }}
          className="px-3 py-1 text-white bg-primary rounded cursor-pointer"
        >
          View Carts
        </button>
      </div>
    ));
  };
  return (
    <div className="h-auto w-full border border-gray-100 shadow rounded-lg overflow-hidden flex flex-col justify-between p-2">
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
          onClick={() => console.log("Add to cart is clicked")}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
