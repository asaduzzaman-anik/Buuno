import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-black p-10 lg:px-40 justify-between grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className=" text-white">
          <h3 className="uppercase w-full border-b-2 pb-2 mb-5">how to shop</h3>
          <div className="flex flex-col capitalize gap-2">
            <a href="#">Easy ways to shop</a>
            <a href="#">Store Locator</a>
            <a href="#">Return and Refund Policy</a>
            <a href="#">Payment & Shipping method</a>
            <a href="#">sitemap</a>
            <a href="#">FAQ</a>
          </div>
        </div>
        <div className=" text-white">
          <h3 className="uppercase w-full border-b-2 pb-2 mb-5">
            customer service
          </h3>
          <div className="flex flex-col capitalize gap-2">
            <a href="#">tract your order</a>
            <a href="#">delivery information</a>
            <a href="#">help center</a>
            <a href="#">contact us</a>
            <a href="#">terms & conditions</a>
            <a href="#">privacy policy</a>
          </div>
        </div>
        <div className=" text-white">
          <h3 className="uppercase w-full border-b-2 pb-2 mb-5">
            contact information
          </h3>
          <div className="flex flex-col capitalize gap-2">
            <div>
              <h4> &#9872; Address</h4>
              <p className="text-wrap">
                148/15, Wapda Road, west Rampura, Dhaka
              </p>
            </div>
            <div>
              <h4> &#9742; Phone No</h4>
              <p className="text-wrap">01580307479</p>
            </div>
            <div>
              <h4> &#9993; Email</h4>
              <p className="text-wrap">buuno.co@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-700 text-white p-3 lg:px-40 text-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <p>© 2024 Buuno All rights reserved || Designed & Developed by Anik</p>
        <div className="flex items-center gap-2">
          <p>Pay with</p>
          <img src="/img/visa.png" alt="" className="w-10 h-7" />
          <img src="/img/mastercard.png" alt="" className="w-10 h-7" />
          <img src="/img/paypal.png" alt="" className="w-10 h-7" />
          <img src="/img/apple pay.png" alt="" className="w-10 h-7" />
          <img src="/img/gpay.png" alt="" className="w-10 h-7" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
