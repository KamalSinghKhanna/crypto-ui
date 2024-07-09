import React from 'react'
import Image from 'next/image';
const ProgressTracker = ({ title, tasks, imgUrl}) => {
  return (
    <div className="rounded-xl w-full border border-white/5 bg-white/5 p-2 flex items-center gap-4 cursor-pointer transition delay-200 ease-linear mb-2">
      <div className="flex-3 h-20">
        <Image
          src={imgUrl}
          alt="progressImg"
          width={200}
          height={200}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="w-full">
        <div className="text-white/80 drop-shadow text-xl font-normal leading-6 mb-6 line-clamp-1 overflow-hidden">
         {title}
        </div>
        <hr className="border-dashed h-[1px] opacity-100 relative w-full rounded-full border-white/15" />
        <div className="flex items-center mt-3 gap-2.5">
          <div className="text-white/60 drop-shadow text-sm font-light leading-5">
            {tasks} Tasks
          </div>
          <div className="flex-grow">
            <div className="relative rounded-full bg-white bg-opacity-[.01] shadow-2xl h-4 p-1 flex items-center max-w-[268px] w-full border border-black/70">
              <div className="bg-white bg-opacity-[.07] shadow shadow-white/5"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-6 h-6  justify-center items-center shrink-0 rounded-full border border-white/10 bg-white/5 backdrop-blur-md self-end text-white/20 text-xl">
        <svg
          className=" fill-white/20"
          data-name="Capa 1"
          id="Capa_1"
          viewBox="0 0 20 19.84"
        >
          <path d="M15.39,5.66a.37.37,0,0,0-.52,0L8,13.39,5.09,11.06a.38.38,0,1,0-.47.59L7.85,14.2a.38.38,0,0,0,.52,0l7.06-8A.38.38,0,0,0,15.39,5.66Z" />
        </svg>
      </div>
    </div>
  );
};

export default ProgressTracker