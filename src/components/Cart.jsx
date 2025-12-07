import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";

export default function Cart() {
  const { cart, closeCart, cartOpened } = useContext(CartContext);

  if (!cartOpened) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed top-0 right-0 w-full sm:w-100 h-full bg-white p-3 flex flex-col justify-between items-center">
      {/* header and items  */}
      <div className="w-full">
        {/* header */}
        <div className="flex justify-between mb-4 h-5">
          <h2 className="text-xl font-bold ">Your Cart</h2>
          <button className="cursor-pointer" onClick={closeCart}>
            <MdClose size={25} color="black" />
          </button>
        </div>
        {/* items */}
        <div className="flex flex-col h-[80vh] overflow-y-scroll">
          {cart.length === 0 && <p>No items yet...</p>}

          {cart.map((item) => (
            <CartItem key={item.code} item={item} />
          ))}
        </div>
      </div>
      {/* total amount + checkout button */}
      <div className="w-full bottom-0 mb-3">
        {cart.length > 0 && (
          <div className="mt-6">
            <div className="text-lg font-bold mb-2 flex justify-between items-center">
              <p>Total:</p>
              <p>
                BDT <span className="text-primary">{total}</span>
              </p>
            </div>
            <Link
              to="/checkout"
              className="block w-full text-center bg-primary text-white py-2 rounded hover:bg-primary/70 transition"
              onClick={closeCart}
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
