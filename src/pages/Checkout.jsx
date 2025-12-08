import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

export default function Checkout() {
  const { cart } = useContext(CartContext);
  const subTotal = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const deliveryCharge = 60;
  const total = subTotal + deliveryCharge;
  return (
    <div className="h-full bg-gray-100 m-2 px-2 pt-10 md:flex md:flex-row md:gap-10 justify-between">
      {/* Left/top Side */}
      <div className="w-full md:w-[50%] border-b border-b-gray-300 shadow mb-8">
        <h2 className="text-2xl font-medium pb-2">Product Summary</h2>
        <div className="flex flex-col gap-3">
          {cart.length === 0 && <p>No items yet...</p>}

          {cart.map((item) => (
            <CartItem key={item.code} item={item} />
          ))}
        </div>
        <div className="flex justify-between items-center text-2xl font-medium h-15 border-b border-b-gray-300">
          <h2>Subtotal:</h2>
          <span>{subTotal}</span>
        </div>
        <div className="flex justify-between items-center text-2xl font-medium h-15 border-b border-b-gray-300">
          <h2>Delivery Charge:</h2>
          <span>{deliveryCharge}</span>
        </div>
        <div className="flex justify-between items-center text-2xl font-medium h-15 border-b border-b-gray-300">
          <h2>Grand Total:</h2>
          <span>{total}</span>
        </div>
      </div>
      {/* Right/Bottom Side */}
      <div className="w-full md:w-[50%]">
        <form action="submit">
          <div>
            <h2 className="text-2xl font-medium pb-2">Contact Information</h2>

            <label htmlFor="name">
              Full Name<span className="text-primary text-2xl">*</span>
            </label>
            <br />
            <input
              type="text"
              id="name"
              required
              className="bg-white ring-1 rounded w-full h-10 px-2 my-2"
            />

            <label htmlFor="name">Email Address </label>
            <br />
            <input
              type="email"
              id="email"
              className="bg-white ring-1 rounded w-full h-10 px-2 my-2"
            />

            <label htmlFor="phone">
              Phone Number <span className="text-primary text-2xl">*</span>
            </label>
            <br />
            <input
              type="number"
              id="phone"
              required
              className="bg-white ring-1 rounded w-full h-10 px-2 my-2"
            />
            <label htmlFor="city">
              City <span className="text-primary text-2xl">*</span>
            </label>
            <br />
            <input
              type="text"
              id="city"
              required
              className="bg-white ring-1 rounded w-full h-10 px-2 my-2"
            />
            <label htmlFor="address">
              Address <span className="text-primary text-2xl">*</span>
            </label>
            <br />
            <input
              type="text"
              id="address"
              required
              className="bg-white ring-1 rounded w-full h-10 px-2 my-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
