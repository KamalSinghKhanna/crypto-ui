import React from 'react'
import Image from "next/image"
const Header = () => {
  return (
    <>
      <header className="hidden sm:flex items-center w-full px-14 py-2.5 border-b border-b-white/15">
        <div>
          <Image
            src="https://www.intract.io/logo/intract_text.svg"
            alt="logo"
            width={200}
            height={200}
            className="h-10 w-24"
          />
        </div>
        <div className="flex items-center gap-x-6 ml-10  font-normal track transition-opacity delay-1000 ease-in">
          <div className="text-white/70 hover:text-white cursor-pointer">
            Compass
          </div>
          <div className="text-white/70 hover:text-white cursor-pointer">
            Explore
          </div>
          <div className="flex items-start relative">
            <span className="text-white">Academy</span>
            <div className="flex items-center justify-center bg-[#6435e9] text-white ml-2 rounded-xl text-xs px-1.5 py-0.5">
              New
            </div>
            <div className=" border-b-2 border-b-white absolute h-1 w-full -bottom-5 rounded-xl bg-white"></div>
          </div>
          <div className="text-white/70 hover:text-white cursor-pointer">
            NFTs
          </div>
          <div className="text-white/70 hover:text-white cursor-pointer">
            For Projects
          </div>
        </div>
        <div className="flex-1  flex items-center justify-between ml-8 gap-x-6">
          <div className=" w-[70%] flex rounded-full border border-white/5 bg-white bg-opacity-[0.07] h-11 px-4 gap-x-3 relative items-center">
            <svg
              height="18px"
              version="1.1"
              viewBox="0 0 18 18"
              width="16px"
              className="text-sm"
            >
              <title />
              <desc />
              <defs />
              <g
                fill="none"
                fill-rule="evenodd"
                id="Page-1"
                stroke="none"
                stroke-width="1"
              >
                <g
                  fill="#fff6"
                  id="Core"
                  transform="translate(-339.000000, -381.000000)"
                >
                  <g id="search" transform="translate(339.000000, 381.000000)">
                    <path
                      d="M12.5,11 L11.7,11 L11.4,10.7 C12.4,9.6 13,8.1 13,6.5 C13,2.9 10.1,0 6.5,0 C2.9,0 0,2.9 0,6.5 C0,10.1 2.9,13 6.5,13 C8.1,13 9.6,12.4 10.7,11.4 L11,11.7 L11,12.5 L16,17.5 L17.5,16 L12.5,11 L12.5,11 Z M6.5,11 C4,11 2,9 2,6.5 C2,4 4,2 6.5,2 C9,2 11,4 11,6.5 C11,9 9,11 6.5,11 L6.5,11 Z"
                      id="Shape"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <input
              type="text"
              placeholder="Search for ecosystems, trending quests etc,."
              className="flex-1 bg-transparent text-sm leading-5 font-medium border-none placeholder:text-[13px] placeholder:text-white/40 outline-none"
            />
          </div>

          <div className="flex items-center gap-x-4">
            <div className="flex items-center justify-center w-10 h-10 backdrop-blur-md bg-[#3c208c] border border-[#fa8922] rounded-full cursor-pointer bg-opacity-20">
              <Image
                src="https://www.intract.io/assets/broadcast_or-04af786c.svg"
                alt="boradcastIcon"
                width={200}
                height={200}
                className="h-4 w-4"
              />
            </div>
            <button className="bg-white hover:bg-white/40 transition-colors  text-black rounded-md text-sm font-medium py-1 px-6">
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* mobile version */}
      <header className="sm:hidden flex items-center justify-between w-full px-4 py-2.5 border-b border-b-white/15">
        <div>
          <Image
            src="https://www.intract.io/logo/intract_text.svg"
            alt="logo"
            width={200}
            height={200}
            className="h-10 w-24"
          />
        </div>

        <div className=" flex items-center gap-x-3">
          <div className="flex justify-center rounded-full border border-white/5 bg-white bg-opacity-[0.07] p-2 items-center">
            <svg
              height="14px"
              widths="14px"
              version="1.1"
              viewBox="0 0 14 14"
              className="text-sm"
            >
              <title />
              <desc />
              <defs />
              <g
                fill="none"
                fill-rule="evenodd"
                id="Page-1"
                stroke="none"
                stroke-width="1"
              >
                <g
                  fill="#fff6"
                  id="Core"
                  transform="translate(-339.000000, -381.000000)"
                >
                  <g id="search" transform="translate(339.000000, 381.000000)">
                    <path
                      d="M12.5,11 L11.7,11 L11.4,10.7 C12.4,9.6 13,8.1 13,6.5 C13,2.9 10.1,0 6.5,0 C2.9,0 0,2.9 0,6.5 C0,10.1 2.9,13 6.5,13 C8.1,13 9.6,12.4 10.7,11.4 L11,11.7 L11,12.5 L16,17.5 L17.5,16 L12.5,11 L12.5,11 Z M6.5,11 C4,11 2,9 2,6.5 C2,4 4,2 6.5,2 C9,2 11,4 11,6.5 C11,9 9,11 6.5,11 L6.5,11 Z"
                      id="Shape"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>

          <div className="flex items-center gap-x-4">
            <div className="flex items-center justify-center w-10 h-10 backdrop-blur-md bg-[#3c208c] border border-[#fa8922] rounded-full cursor-pointer bg-opacity-20">
              <Image
                src="https://www.intract.io/assets/broadcast_or-04af786c.svg"
                alt="boradcastIcon"
                width={200}
                height={200}
                className="h-4 w-4"
              />
            </div>
            <button className="bg-white hover:bg-white/40 transition-colors  text-black rounded-md text-sm font-medium py-1 px-6">
              Sign In
            </button>
          </div>
        </div>
      </header>
    
    </>
  );
}

export default Header