import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

export default function CartItem({ item }) {
  const { increment, decrement, removeFromCart } = useContext(CartContext);

  return (
    <div className="w-full h-20 flex justify-between items-center mb-1 gap-3 shadow-sm">
      {/* image */}
      <div className="h-15 w-15 rounded overflow-hidden">
        <img src={item.image} alt="product image" />
      </div>
      {/* info */}
      <div className="w-60 flex flex-col justify-between text-sm">
        <div>
          <h2>{item.name}</h2>
        </div>
        <div className="flex justify-between">
          {/* increase/decrease button with quantity */}
          <div className="flex justify-between gap-2">
            <button
              className="cursor-pointer hover:text-primary"
              onClick={() => decrement(item.code)}
            >
              <FiMinusCircle size={20} />
            </button>
            <p>{item.quantity}</p>
            <button
              className="cursor-pointer hover:text-primary"
              onClick={() => increment(item.code)}
            >
              <FiPlusCircle size={20} />
            </button>
          </div>
          {/* subtotal */}
          <div className="flex justify-between text-primary font-bold">
            {item.price} x {item.quantity} = {item.price * item.quantity}
          </div>
        </div>
        <div></div>
      </div>
      {/* delete button */}
      <button
        onClick={() => removeFromCart(item.code)}
        className="bg-gray-300 hover:bg-primary p-1 rounded-2xl"
      >
        <RiDeleteBin5Fill size={20} />
      </button>
    </div>
  );
}
