import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartItem({ item }) {
  const { increment, decrement, removeFromCart } = useContext(CartContext);

  return (
    <div className="w-auto flex justify-between items-center border-b pb-3 mb-3 gap-5">
      <div>
        <img src={item.image} alt="" className="h-20 w-20"/>
      </div>
      <div>
        <h3 className="font-semibold">{item.name}</h3>
        <p>Price: ${item.price}</p>
        
      </div>

      <div className="flex items-center gap-2">
        <button
          className="px-3 bg-gray-300 rounded cursor-pointer hover:bg-gray-400"
          onClick={() => decrement(item.code)}
        >
          -
        </button>
        <p>{item.quantity}</p>
        <button
          className="px-3 bg-gray-300 rounded cursor-pointer hover:bg-gray-400"
          onClick={() => increment(item.code)}
        >
          +
        </button>

        <button
          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => removeFromCart(item.code)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
