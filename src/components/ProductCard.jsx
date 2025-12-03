import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="h-70 w-50 border border-sky-300 shadow shadow-sky-200 rounded-lg overflow-hidden flex flex-col justify-between p-2">
      {/* product image */}
      <div className="h-50 w-46 rounded-lg overflow-hidden">
        <img src={product.image} alt="" className="h-full w-full " />
      </div>
      {/* product info */}
      <div>
        <p>{product.name}</p>
        <p className="text-sky-700 font-bold text-2xl">৳{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
