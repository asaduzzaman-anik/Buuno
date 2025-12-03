import React from "react";
import MobileNav from "./MobileNav";
import LargeScreenNav from "./LargeScreenNav";

const Navbar = () => {
  return (
    <div>
      <MobileNav />
      <LargeScreenNav />
    </div>
  );
};

export default Navbar;
