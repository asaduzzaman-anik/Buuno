import React from "react";
import { categories } from "../data/categories";
import { Link } from "react-router-dom";
const LargeScreenNav = () => {
  return (
    <div className="hidden sm:flex justify-between items-center h-20 bg-red-700 w-full">
      <ul className="w-[80%] mx-auto flex justify-between items-center gap-5 text-white text-lg">
        {categories.map((cat) => (
          <Link
            to={"/"}
            key={cat.id}
            className="flex justify-start items-center"
          >
            <img src={cat.icon} alt="" className="w-6 h-6 mr-2" />
            {cat.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default LargeScreenNav;
