import React from "react";
import MobileNav from "./MobileNav";
import LargeScreenNav from "./LargeScreenNav";

const Navbar = () => {
  return (
    <div className="sticky top-0 shadow-md">
      <MobileNav />
      <LargeScreenNav />
    </div>
  );
};

export default Navbar;
