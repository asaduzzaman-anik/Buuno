import React from "react";

const Policy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly items-center bg-red-800 p-5 gap-8 mx-auto">
      <div className="flex flex-col justify-center items-center gap-5">
        <img src="/img/policy/return.png" alt="" className="h-20 w-20" />
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold">7 Days Return</h2>
          <p>Buy with confidence</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <img src="/img/policy/payment.png" alt="" className="h-20 w-20" />
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold">Secure Payment</h2>
          <p>100% Secure Payment</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <img
          src="/img/policy/customer-support.png"
          alt=""
          className="h-20 w-20"
        />
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold">24/7 Support</h2>
          <p>Dedicated Support</p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
