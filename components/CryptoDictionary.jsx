import Image from "next/image";
import React from "react";

const CryptoDictionary = () => {
  return (
    <>
      <div className="w-full pb-16 relative mt-[500px] sm:mt-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto w-full pb-5">
            <span className="flex justify-center text-white text-2xl leading-8 mb-1 font-medium">
              Crypto Dictionary
            </span>
            <p className=" text-base leading-5 text-center text-white/40 font-medium">
              Your one-stop to catch up on all crypto terms
            </p>
          </div>

          <Image
            className="rounded-2xl w-full h-72 sm:h-auto blur-sm sm:blur-none object-cover mt-6 sm:bg-white/5 cursor-pointer"
            alt="logo"
            src={
              "https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg"
            }
            width={500}
            height={500}
          />
          <div className="w-full h-1/5 absolute max-w-7xl bottom-[1px] left-[1px] rounded-b-2xl flex justify-between items-center py-6 px-16 z-[1]">
            <div className="flex flex-col">
              <span className="text-white/60 drop-shadow text-2xl leading-8 mix-blend-plus-lighter">
                Web3 + Degen Glossary
              </span>
              <span className="text-white/40 drop-shadow text-base leading-5 mix-blend-plus-lighter">
                Your own crypto dictionary
              </span>
            </div>
            <div className="flex w-16 h-16 p-5 justify-center items-center rounded-full border border-white/20 bg-black/40 backdrop-blur-xl text-xl">
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                <path
                  d="M12 6.60324C13.6667 5.33178 17.5 3.74246 21 6.60324V19C17.5 16.1392 13.6667 17.7285 12 19M12 6.60324C10.3333 5.33178 6.5 3.74246 3 6.60324V19C6.5 16.1392 10.3333 17.7285 12 19M12 6.60324V19"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoDictionary;
