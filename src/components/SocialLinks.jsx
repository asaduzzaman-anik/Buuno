import React from "react";

const SocialLinks = () => {
  return (
    <div className="font-poppins hidden bg-black text-white text-sm sm:flex justify-between items-center h-10 p-4">
      {/* TOP BAR GOES FOR THE LARGE SCREEN */}
      <div className="flex justify-between items-center gap-2">
        {" "}
        {/* <!-- social links goes here --> */}
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
        <a href="#">Youtube</a>
      </div>
      <div className="flex justify-between items-center">
        {" "}
        {/* <!-- contact info goes here  --> */}
        <div>
          <img
            src="src/assets/images/icons/phone.png"
            alt=""
            className="h-4 inline"
          />
          <span>01580307479</span>
        </div>
        <span class="px-4">|</span>
        <a href="#">
          <img
            src="src/assets/images/icons/email.png"
            alt=""
            className="h-6 inline"
          />
          <span>buuno.co@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
