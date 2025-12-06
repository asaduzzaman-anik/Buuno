import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

export default function Cart() {
  const { cart, close, cartOpened } = useContext(CartContext);

  if (!cartOpened) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed top-0 right-0 bg-white shadow-lg w-96 h-full p-6 overflow-y-scroll">
      <h2 className="text-xl font-bold mb-4 flex justify-between">
        Your Cart
        <button className="text-red-500" onClick={close}>
          X
        </button>
      </h2>

      {cart.length === 0 && <p>No items yet...</p>}

      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      {cart.length > 0 && (
        <div className="mt-6">
          <p className="text-lg font-bold mb-2">Total: ${total}</p>
          <a
            href="/checkout"
            className="block w-full text-center bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Checkout
          </a>
        </div>
      )}
    </div>
  );
}
