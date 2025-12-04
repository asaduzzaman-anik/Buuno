const Hero = () => {
  return (
    <div class="flex flex-col sm:flex-row-reverse justify-center sm:justify-between items-center gap-10 w-full bg-yellow-300 p-10 sm:px-[15%]">
      {/* <!-- image --> */}
      <div class="h-60 w-60 sm:h-100 sm:w-100">
        <img
          src="/img/Family_Photos-removebg-preview.png"
          alt=""
          class="h-full w-auto"
        />
      </div>
      {/* <!-- text content --> */}
      <div class="flex flex-col justify-center items-center sm:items-start">
        <h2 class="py-2 font-bold text-xl sm:text-5xl">
          Exclusive Men's Accessories
        </h2>
        <p class="sm:text-xl">Complete Your Look with Our Mens' Accessories!</p>
        <a
          href="#"
          class="bg-red-700 w-fit mt-4 px-4 py-2 rounded-lg text-white sm:text-2xl sm:p-4"
        >
          SHOW SHOP
        </a>
      </div>
    </div>
  );
};
export default Hero;
