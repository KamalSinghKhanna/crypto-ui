"use client"
import React, { useState } from "react";
import Image from "next/image";
import ProgressTracker from "./ProgressTracker";
const Feature = ({detail, quests}) => {
  const [isProgressTrackerVisible, setIsProgressTrackerVisible] = useState(false)
  const handleClick =()=>{
    setIsProgressTrackerVisible(!isProgressTrackerVisible)
  }
  return (
    <div
      className={` sm:w-[520px] bg-white/5 backdrop-blur-lg rounded-3xl ${
        isProgressTrackerVisible && "rounded-b-none"
      }`}
    >
      <div
        onClick={handleClick}
        className={`flex p-6 relative items-center gap-x-6 rounded-3xl border border-white/5 border-b-0 bg-white/5 hover:bg-white hover:bg-opacity-[.12] cursor-pointer ${
          isProgressTrackerVisible && "rounded-b-none"
        }`}
      >
        <div className="hidden sm:block absolute top-2 right-3 p-2 text-[#fff3] text-xl">
          {isProgressTrackerVisible ? (
            <svg
              className="rotate-180 transition-all ease-in-out delay-75"
              enable-background="new 0 0 48 48"
              height="48px"
              id="Layer_3"
              version="1.1"
              viewBox="0 0 48 48"
              width="20px"
            >
              <polygon fill="#241F20" points="48,35.562 0,35.562 24,12.438 " />
            </svg>
          ) : (
            <svg
              className=" transition-transform ease-in-out delay-75"
              enable-background="new 0 0 48 48"
              height="48px"
              id="Layer_3"
              version="1.1"
              viewBox="0 0 48 48"
              width="20px"
            >
              <polygon fill="#241F20" points="48,35.562 0,35.562 24,12.438 " />
            </svg>
          )}
        </div>
        <div className="flex-2 h-44 p-2 rounded-2xl border border-white/20 bg-white/5 relative">
          <Image
            src={detail?.imgUrl}
            alt="questImg"
            width={200}
            height={200}
            className="w-full h-full object-cover rounded-xl block max-w-full"
          />
          <div className="flex max-w-max py-2 px-6 gap-x-2 rounded-full border border-white/20 bg-black/40 shadow backdrop-blur absolute left-1/2 bottom-4 -translate-x-1/2  text-xs cursor-pointer text-white leading-5">
            <span>{quests?.length} </span>
            <span>quests</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-normal leading-7 mb-2 text-white">
            {detail?.title}
          </span>
          <span className="text-white/40 text-sm font-normal leading-5 mb-4 overflow-hidden text-ellipsis line-clamp-2">
            {detail?.description}
          </span>
          <hr className="h-[1px] border-dashed border-white/15 rounded-full relative w-full" />
          <div className="mt-4">
            <div className="h-8 py-2 px-3 flex justify-center items-center rounded-full border border-white/5 bg-white/5 text-white/80 text-sm leading-4 gap-1 max-w-max">
              <Image
                src="https://www.intract.io/assets/xp-icon-aacd204a.svg"
                alt="logo"
                width={200}
                height={200}
                className="h-4 w-5"
              />
              {detail?.experience} XPs
            </div>
          </div>
        </div>
      </div>
      {isProgressTrackerVisible && (
        <div className="flex flex-col p-6 items-center gap-x-2 rounded-3xl border-t border-white/5 border-b-0 bg-[#101010] max-h-[350px] overflow-y-auto top-full left-0 relative sm:absolute rounded-b-3xl w-full cursor-pointer rounded-t-none">
          {quests.map((quest, i) => (
            <ProgressTracker key={i} {...quest} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Feature;
