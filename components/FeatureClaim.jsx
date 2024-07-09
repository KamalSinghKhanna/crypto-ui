import Image from "next/image";
import React from "react";

const FeatureClaim = ({ imgUrl, title, description, descriptionTwo }) => {
  return (
    <div className="mr-0 sm:-mr-12 ">
      <div className="flex w-12 h-12 p-1 justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur text-white/20 text-3xl ml-0 sm:ml-14">
        <svg
          className=" fill-white/20"
          data-name="Capa 1"
          id="Capa_1"
          viewBox="0 0 20 19.84"
        >
          <path d="M15.39,5.66a.37.37,0,0,0-.52,0L8,13.39,5.09,11.06a.38.38,0,1,0-.47.59L7.85,14.2a.38.38,0,0,0,.52,0l7.06-8A.38.38,0,0,0,15.39,5.66Z" />
        </svg>
      </div>
      <div className="w-40 relative z-10">
        <div className="w-40 h-44 rounded-3xl border-2 border-white/20 bg-white/15 backdrop-blur-m mt-4 flex items-center justify-center overflow-hidden">
          <Image
            src={imgUrl}
            alt="catImg"
            width={500}
            height={500}
            className="h-[165px] w-[147px] rounded-2xl object-cover z-[1]"
          />
        </div>
        <div className="flex w-12 z-10 h-12 p-3 justify-center items-center rounded-full border border-white/20 bg-[#131313] backdrop-blur-md absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3">
          <Image
            src="https://www.intract.io/assets/lock-icon-2019798d.svg"
            alt="logo"
            width={200}
            height={200}
            //   className="h-[165px] w-[147px] rounded-2xl object-cover z-[1]"
          />
        </div>
      </div>
      <div className="text-white/60 drop-shadow text-xl leading-6 mb-2 mt-4 ">
        {title}
      </div> 
      <div className="text-white/20 drop-shadow text-base font-normal leading-5 mb-4">
        {description}
        <br />
        {descriptionTwo}
      </div>
      <button className="rounded-lg border border-white/5 bg-white/5 flex w-40 py-2.5  text-white/40 font-normal leading-5 cursor-not-allowed items-center justify-center">
        <span>Claim</span>
      </button>
    </div>
  );
};

export default FeatureClaim;
