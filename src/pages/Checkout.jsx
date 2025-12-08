import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { GiTakeMyMoney } from "react-icons/gi";

export default function Checkout() {
  const { cart } = useContext(CartContext);
  const subTotal = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const deliveryCharge = 60;
  const total = subTotal + deliveryCharge;
  return (
    <div className="bg-primary/10 h-full w-screen md:w-[80%]  md:mx-auto p-2 md:p-5 md:pt-10 flex flex-col md:flex md:flex-row gap-5 md:gap-10 justify-between">
      {/* Product Summary */}
      <div className="w-full rounded-lg p-2 bg-white md:w-[50%] shadow-xl/10">
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
        <div className="flex justify-between items-center text-2xl font-medium h-15">
          <h2>Grand Total:</h2>
          <span>{total}</span>
        </div>
      </div>
      {/* Shipping Info */}
      <div className="w-full flex flex-col gap-3 rounded-lg p-2 bg-white md:w-[50%] shadow-xl/10">
        <div>
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
        <div className="w-full rounded-lg p-2 bg-white shadow-xl/10">
          <h2 className="text-2xl font-medium pb-2 text-center">
            Payment Details
          </h2>
          <div className="flex justify-start items-center gap-3">
            <GiTakeMyMoney size={50} className="text-gray-600" />
            <div className="flex flex-col">
              <p className="text-lg font-medium">Cash on Delivery</p>
              <p className="text-sm font-light">
                পণ্য হাতে পেয়ে টাকা পরিশোধ করুন
              </p>
            </div>
          </div>
        </div>
        <div className="w-full rounded-lg p-2 bg-white flex flex-col gap-3 text-center shadow-xl/10">
          <h2 className="text-2xl font-medium pb-2">Order Summary</h2>
          <div className="flex justify-between items-center text-lg font-medium">
            <h2>Total:</h2>
            <span> {total} </span>
          </div>
          <button className="bg-primary p-2 rounded-2xl text-white font-bold uppercase cursor-pointer">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
