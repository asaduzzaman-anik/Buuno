import React from "react";
import { useParams } from "react-router";
import { products } from "../data/products";

const ProductDetails = () => {
  const { code } = useParams();
  const product = products.find((p) => p.code === Number(code));

  if (!product) {
    return (
      <div className="mx-auto container py-20 text-center">
        No products found...
      </div>
    )
  }

  const { name, image, category, price } = product;

  return (
    <div className="p-10">
      <h2 className="text-2xl capitalize font-medium bg-slate-500 text-center h-fit mb-5">
        Details of {name ?? "N/A"}
      </h2>
      <div className="flex justify-center">
        <div className="flex flex-col justify-start gap-10 items-start md:flex-row ">
          <div className="h-100 w-fit border border-slate-500 rounded-lg shadow">
            <img src={image ?? 'default.jpg'} alt="" className="h-full" />
          </div>
          <div className="flex flex-col gap-3">
            <h3>Name: {name ?? "N/A"}</h3>
            <p>Category: {category ?? "-"}</p>
            <p>Price: {price ?? 0}/-</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
