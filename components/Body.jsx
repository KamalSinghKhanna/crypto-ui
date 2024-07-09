import Image from "next/image";
import React from "react";

const Body = () => {
  return (
    <div className="w-full h-[50vh] sm:h-screen relative flex items-center justify-center bg-cover  bg-[url(https://www.intract.io/assets/intract-academy-background-5547a705.png)] ">
      <div className="absolute top-10 sm:top-[27%] flex flex-col items-center justify-center ">
        <div className="flex mix-blend-screen">
          <Image
            src="https://www.intract.io/assets/academy-animated-logo-57b2ae61.gif"
            alt="logo"
            width={200}
            height={200}
            className="w-44 sm:w-60 h-20 sm:h-24"
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="mix-blend-plus-lighter text-white/40 text-center text-base sm:text-xl font-medium mt-5">
            <span className="text-white/80">Intract users</span> have together
            made more than
            <span className="text-white/80"> $100 million</span> in web3.
            <br />
            Join them and
            <span className="text-white/80">learn how to earn crypto!</span>
          </p>
          <button className="mt-12 group inline-flex relative rounded-md text-white text-xs sm:text-sm items-center gap-x-2.5 max-w-fit min-w-fit border border-white/10 cursor-pointer overflow-hidden py-2 px-14 bg-[#6435e9]">
            <span className="text-white/80 group-hover:translate-x-1">
              {" "}
              Get Started
            </span>
            <Image
              src="https://www.intract.io/assets/arrow-right-1c96f4ae.svg"
              alt="logo"
              width={200}
              height={200}
              className="w-4 h-3 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
