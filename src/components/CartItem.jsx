import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function CartItem({ item }) {
  const { increment, decrement, removeFromCart } = useContext(CartContext);

  return (
    <div className="w-auto flex justify-between items-center mb-5 gap-3">
      {/* image  */}
      <div className="rounded border-gray-400 shadow shadow-gray-400 overflow-hidden">
        <img src={item.image} alt="" className="h-20 w-20" />
      </div>
      {/* text */}
      <div className="flex flex-col flex-1  gap-2">
        {/* name and price */}
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-semibold w-[80%] text-clip">
            {item.name}
          </h3>
          <p className="font-bold">৳ {item.price}</p>
        </div>
        {/* buttons */}
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-2">
            <button
              className="p-1 bg-gray-300 rounded cursor-pointer hover:bg-gray-400"
              onClick={() => decrement(item.code)}
            >
              <FaMinus />
            </button>
            <p>{item.quantity}</p>
            <button
              className="p-1 bg-gray-300 rounded cursor-pointer hover:bg-gray-400"
              onClick={() => increment(item.code)}
            >
              <FaPlus />
            </button>
          </div>

          <button
            className="p-1 bg-gray-300 rounded cursor-pointer hover:bg-gray-400"
            onClick={() => removeFromCart(item.code)}
          >
            <RiDeleteBin5Fill />
          </button>
        </div>
      </div>
    </div>
  );
}
