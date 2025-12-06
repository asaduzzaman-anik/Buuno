import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, closeCart, cartOpened } = useContext(CartContext);

  if (!cartOpened) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed top-0 right-0 bg-white shadow-lg min-w-96 w-auto h-full p-6 overflow-y-scroll">
      <h2 className="text-xl font-bold mb-4 flex justify-between">
        Your Cart
        <button className="text-red-500" onClick={closeCart}>
          X
        </button>
      </h2>

      {cart.length === 0 && <p>No items yet...</p>}

      {cart.map((item) => (
        <CartItem key={item.code} item={item} />
      ))}

      {cart.length > 0 && (
        <div className="mt-6">
          <p className="text-lg font-bold mb-2">Total: ${total}</p>
          <Link
            to="/checkout"
            className="block w-full text-center bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Checkout
          </Link>
        </div>
      )}
    </div>
  );
}
