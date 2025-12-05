const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row-reverse justify-center sm:justify-between items-center gap-10 w-full bg-yellow-300 p-10 sm:px-[15%]">
      {/* <!-- image --> */}
      <div className="h-60 w-60 sm:h-100 sm:w-100">
        <img
          src="/img/Family_Photos-removebg-preview.png"
          alt=""
          className="h-full w-auto"
        />
      </div>
      {/* <!-- text content --> */}
      <div className="flex flex-col justify-center items-center sm:items-start">
        <h2 className="py-2 font-bold text-xl sm:text-5xl">
          Exclusive Men's Accessories
        </h2>
        <p className="sm:text-xl">
          Complete Your Look with Our Mens' Accessories!
        </p>
        <a
          href="#"
          className="bg-red-700 w-fit mt-4 px-4 py-2 rounded-lg text-white sm:text-2xl sm:p-4"
        >
          SHOW SHOP
        </a>
      </div>
    </div>
  );
};
export default Hero;
