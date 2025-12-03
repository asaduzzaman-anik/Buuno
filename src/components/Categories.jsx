import React from "react";
import { categories } from "../data/categories";
import { Link } from "react-router-dom";

const Categories = () => {
  const newCategory = categories.filter(
    (category) =>
      category.name !== "New Arrivals" && category.name !== "Hot Offers"
  );
  return (
    <section id="category" className="px-5 md:px-15 py-5 bg-white">
      {/* Section Heading */}
      <div>
        <h2 className="text-2xl uppercase font-bold">Shop the Collections</h2>
        <p>Shop the latest products from the most popular collections</p>
      </div>

      {/* Section Content - Category with image and links */}
      <div className="flex flex-nowrap gap-8 md:gap-10 items-center justify-evenly px-5 py-10 overflow-x-scroll">
        {newCategory.map((cat) => (
          <Link key={cat.id} to={`/${cat.route_parameter}`}>
            <div className="flex flex-col gap-2 items-center">
              <div className="h-40 w-40 sm:h-50 sm:w-50 rounded-full bg-gray-300 overflow-hidden">
                <img src={cat.image} alt="" className="w-full h-full p-10" />
              </div>
              <p>{cat.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
