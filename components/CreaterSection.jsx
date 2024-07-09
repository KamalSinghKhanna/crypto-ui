"use client"

import Image from "next/image";
import React from "react";

const images = [
  {
    id: 1,

    imageUrl:
      "https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png",
  },
  {
    id: 2,

    imageUrl:
      "https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png",
  },
  {
    id: 3,

    imageUrl:
      "https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png",
  },
  {
    id: 4,

    imageUrl:
      "https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png",
  },
];

const CreatorSection = () => {
   
  return (
    <>
      <div className="w-full  pb-14 border-b border-white/20 relative top-[400px] sm:-top-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto w-full pb-5">
            <span className="flex justify-center text-white text-2xl leading-8 mb-1 font-medium">
              Top Crypto Creators and Projects to Follow
            </span>
            <p className="flex justify-center text-base leading-5 text-center text-white/40 font-medium">
              Answers to your crypto doubts, straight from the experts
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {images.map((item, index) => (
              <div key={index}>
                {true ? (
                  <div key={index} className="relative">
                    <div className="flex w-10 h-10 p-2 justify-center items-center rounded-full border border-white/20 bg-black/40 backdrop-blur-xl absolute top-4 right-4 cursor-pointer">
                      <Image
                        alt="reelIcon"
                        src="https://www.intract.io/assets/reel-video-ee824737.svg"
                        width={200}
                        height={200}
                        className="rounded-2xl object-cover"
                      />
                    </div>
                    <div className="absolute w-full h-full flex items-center justify-center">
                      <div className="flex justify-center items-center rounded-full border border-white/20 bg-black/40 backdrop-blur-xl absolute  cursor-pointer h-14 w-14">
                        <svg
                          className="fill-white h-6 w-6"
                          height="512px"
                          id="Layer_1"
                          version="1.1"
                          viewBox="0 0 512 512"
                          width="512px"
                        >
                          <path d="M405.2,232.9L126.8,67.2c-3.4-2-6.9-3.2-10.9-3.2c-10.9,0-19.8,9-19.8,20H96v344h0.1c0,11,8.9,20,19.8,20  c4.1,0,7.5-1.4,11.2-3.4l278.1-165.5c6.6-5.5,10.8-13.8,10.8-23.1C416,246.7,411.8,238.5,405.2,232.9z" />
                        </svg>
                      </div>
                    </div>

                    <Image
                      alt="createrImage"
                      src={item.imageUrl}
                      width={2000}
                      height={2000}
                      className="rounded-2xl object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-[283px] h-[420px] rounded-2xl border border-white/20 bg-white/5">
                    <div className="relative w-full h-full">
                      <div className="flex w-10 h-10 p-2 justify-center items-center rounded-full border border-white/20 bg-black/40 backdrop-blur-xl absolute top-4 right-4 cursor-pointer">
                        <Image
                          alt="reelIcon"
                          src="https://www.intract.io/assets/reel-video-ee824737.svg"
                          width={200}
                          height={200}
                          className="rounded-2xl object-cover"
                        />
                      </div>
                      <iframe
                        className="rounded-2xl"
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/kYeFSwvt1sQ?si=wSQnw0sYAcpkSzz6?autoplay=1&amp;modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;controls=1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatorSection;
