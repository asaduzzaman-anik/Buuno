import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartItem({ item }) {
  const { increment, decrement, removeFromCart } = useContext(CartContext);

  return (
    <div className="flex justify-between border-b pb-3 mb-3">
      <div>
        <h3 className="font-semibold">{item.name}</h3>
        <p>Price: ${item.price}</p>
        <p>Qty: {item.quantity}</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="px-3 bg-gray-300 rounded"
          onClick={() => decrement(item.code)}
        >
          -
        </button>
        <button
          className="px-3 bg-gray-300 rounded"
          onClick={() => increment(item.code)}
        >
          +
        </button>

        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => removeFromCart(item.code)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
