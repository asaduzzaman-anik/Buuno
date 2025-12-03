import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.code}`} className="h-auto w-full border border-sky-300 shadow shadow-sky-200 rounded-lg overflow-hidden flex flex-col justify-between p-2">
      {/* product image */}
      <div className="h-auto w-full rounded-lg overflow-hidden">
        <img src={product.image} alt="" className="h-full w-full " />
      </div>
      {/* product info */}
      <div>
        <p>{product.name}</p>
        <p className="text-sky-700 font-bold text-2xl">৳{product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
