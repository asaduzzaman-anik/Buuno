import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductList = ({ heading, subheading, products }) => {
  return (
    <div className="p-2 md:p-10">
      {/* prodcut section info */}
      <div className="pb-5">
        <h2 className="text-2xl font-bold uppercase">{heading}</h2>
        <p>{subheading}</p>
      </div>
      {/* product section contents */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-5">
        {products.map((product) => (
          <ProductCard key={product.code} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
