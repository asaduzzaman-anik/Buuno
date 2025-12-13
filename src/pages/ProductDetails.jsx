import React, { useContext } from "react";
import { useParams } from "react-router";
import { products } from "../data/products";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { code } = useParams();
  const product = products.find((p) => p.code === Number(code));

  if (!product) {
    return (
      <div className="mx-auto container py-20 text-center text-7xl">
        No products found...
      </div>
    );
  }

  const { name, image, category, price } = product;

  return (
    <div className="p-10">
      <div className="flex justify-center">
        <div className="flex flex-col justify-start gap-10 items-start md:flex-row ">
          <div className="h-100 w-fit border border-slate-500 rounded-lg shadow overflow-hidden">
            <img src={image ?? "default.jpg"} alt="" className="h-full" />
          </div>
          <div className="flex flex-col gap-3">
            <h3>Name: {name ?? "N/A"}</h3>
            <p>Category: {category ?? "-"}</p>
            <p>Price: {price ?? 0}/-</p>
            <button
              className="bg-red-900 rounded-lg p-1 text-white cursor-pointer"
              onClick={() => {
                addToCart(product);
                showToastNotification();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
