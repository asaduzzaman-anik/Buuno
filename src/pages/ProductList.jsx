import React from "react";
import ProductCard from "../components/ProductCard";

const ProductList = ({ heading, subheading, products }) => {
  return (
    <div className="p-10">
      {/* prodcut section info */}
      <div className="pb-5">
        <h2 className="text-2 font-bold uppercase">{heading}</h2>
        <p>{subheading}</p>
      </div>
      {/* product section contents */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {products.map((product) => (
          <ProductCard key={product.code} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
