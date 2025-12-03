import React from "react";
import { categories } from "../data/categories";
import { Link } from "react-router-dom";
const LargeScreenNav = () => {
  return (
    <div className="hidden sm:flex justify-between items-center h-20 bg-red-700 w-full">
      <ul className="w-[80%] mx-auto flex justify-between items-center gap-2 text-white">
        {categories.map((cat) => (
          <Link
            to={cat.route_parameter}
            key={cat.id}
            className="flex justify-start items-center"
          >
            <img src={cat.icon} alt="" className="w-6 h-6 mr-2" />
            <p className="text-lg">{cat.name}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default LargeScreenNav;
