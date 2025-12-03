import React from "react";
import { useParams } from "react-router";
import { products } from "../data/products";

const ProductDetails = () => {
  const { code } = useParams();
  const targetProduct = products.find((product) => product.code == code);
  return (
    <div className="p-10">
      <h2 className="text-2xl capitalize font-medium bg-slate-500 text-center h-fit mb-5">
        Details of {targetProduct.name}
      </h2>
      <div className="flex flex-col justify-start gap-10 items-start md:flex-row ">
        <div className="h-100 w-fit border border-slate-500 rounded-lg shadow">
          <img src={targetProduct.image} alt="" className="h-full" />
        </div>
        <div className="flex flex-col gap-3">
          <h3>Name: {targetProduct.name}</h3>
          <p>Category: {targetProduct.category}</p>
          <p>Price: {targetProduct.price}/-</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
