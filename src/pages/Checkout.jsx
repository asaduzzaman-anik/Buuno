import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { MdDeleteForever } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";

export default function Checkout() {
  const { removeFromCart } = useContext(CartContext);
  const { cart } = useContext(CartContext);
  const subTotal = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const deliveryCharge = 60;
  const total = subTotal + deliveryCharge;
  return (
    // main container
    <div className="bg-white w-full flex flex-col justify-center lg:flex-row lg:gap-5 my-5 ">
      {/* product summary */}
      <div className="bg-gray-200 m-2 p-2 rounded-lg">
        <h2 className="my-3 text-lg font-medium">Product Summary</h2>
        {/* product cards + summaries*/}
        <div className="flex flex-col gap-10">
          {/* products cards */}
          <div className="flex flex-col gap-2">
            {cart.map((item) => (
              <div
                key={item.code}
                className="bg-white rounded-lg p-2 flex gap-2 justify-between items-center"
              >
                {/* image */}
                <div className="w-15 h-15 shrink-0 rounded overflow-hidden shadow">
                  <img src={item.image} alt={item.name} />
                </div>
                {/* item info + dlt button*/}
                <div className="flex grow justify-between items-center gap-4">
                  {/* item info */}
                  <div className="flex flex-col justify-between">
                    <h2 className="text-sm">{item.name}</h2>
                    <p className="text-sm">Qty: {item.quantity}</p>
                  </div>
                  {/* delete button */}
                  <button
                    onClick={() => removeFromCart(item.code)}
                    className="bg-gray-300 hover:bg-primary p-1 rounded-2xl shrink-0 cursor-pointer"
                  >
                    <MdDeleteForever size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Summaries */}
          <div className="flex flex-col gap-2">
            <div className="bg-white rounded-lg text-lg font-medium p-2 flex justify-between">
              <p>Subtotal: </p>
              {subTotal}
            </div>
            <div className="bg-white rounded-lg text-lg font-medium p-2 flex justify-between">
              <p>Delivery Charge: </p>
              {deliveryCharge}
            </div>
            <div className="bg-white rounded-lg text-lg font-medium p-2 flex justify-between">
              <p>Grand Total: </p>
              {total}
            </div>
          </div>
        </div>
      </div>
      {/* Shipping */}
      <div className="w-full lg:w-100 flex flex-col">
        {/* Shipping Info */}
        <div className="bg-gray-200 m-2 p-2 rounded-lg">
          <h2 className="my-3 text-lg font-medium">Shippping Details</h2>
          <form action="submit" className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your Name *"
              required
              className="w-full h-8 px-2 ring-1 rounded bg-white"
            />
            <input
              type="number"
              placeholder="Phone *"
              required
              className="w-full h-8 px-2 ring-1 rounded bg-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full h-8 px-2 ring-1 rounded bg-white"
            />
            <input
              type="text"
              placeholder="Your City *"
              required
              className="w-full h-8 px-2 ring-1 rounded bg-white"
            />
            <input
              type="text"
              placeholder="Your Address *"
              required
              className="w-full h-8 px-2 ring-1 rounded bg-white"
            />
          </form>
        </div>
        {/* Payment Info */}
        <div className="bg-gray-200 m-2 p-2 rounded-lg">
          <h2 className="my-3 text-lg font-medium">Payment Details</h2>
          <div className="bg-white rounded-lg text-lg font-medium p-2 flex justify-start items-center gap-5">
            <GiTakeMyMoney size={30} />
            <div>
              <h2>Cash On Delivery</h2>
            </div>
          </div>
        </div>
        {/* Order Summary */}
        <div className="bg-gray-200 m-2 p-2 rounded-lg flex flex-col gap-2">
          <h2 className="my-3 text-lg font-medium">Order Summary</h2>
          <div className="bg-white rounded-lg text-lg font-medium p-2 flex justify-between">
            <p>Grand Total: </p>
            <p>{subTotal}</p>
          </div>
          <button className="bg-primary/70 hover:bg-primary rounded-lg text-lg font-medium p-2">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
