"use client";
import Image from "next/image";
import { useState } from "react";
import { sideBarItems } from "@/constants";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      className={`bg-secondary   md:max-w-[40em] shadow-xl border-r-1 border-r-gray-600 duration-200  ${
        open ? "w-[500px] sm:w-[20em] ease-in" : "w-[4.5em] ease-out"
      }`}
    >
      <div className="topsection flex flex-1 justify-between p-1 sm:p-6 items-center ">
        <span className={open ? "block text-[12px] sm:text-lg" : "hidden"}>
          weframetech
        </span>
        <button onClick={handleClick} className="relative">
          <Image
            src="/hamburgermenu.svg"
            width={60}
            height={50}
            alt="burger-menu "
            className={`w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] sm:ml-0  sm:mt-0 ${
              !open ? "mt-3 ml-3" : "ml-0 mt-0"
            }`}
          />
        </button>
      </div>
      <div className="mainmenu flex flex-col flex-1 gap-6 mt-4">
        <p className={open ? "block text-[12px] sm:text-lg ml-4" : "hidden"}>
          MAIN MENU
        </p>
        {sideBarItems.map((item) => (
          <div
            className="flex flex-1 justify-between items-start "
            key={item.title}
          >
            <div className="left flex">
              <Image
                src={item.img}
                alt="icons"
                width={20}
                height={20}
                className={`ml-4 ${!open && "w-full"}`}
              />
              <p
                className={
                  open ? "block text-[10px] sm:text-lg ml-4" : "hidden"
                }
              >
                {item.title}
              </p>
            </div>
            {item.arrow && <div className="right"></div>}
          </div>
        ))}
        <Image
          src="banner.svg"
          alt="banner"
          width={170}
          height={200}
          className={`mx-auto ${open ? "block" : "hidden"}`}
        />
      </div>
    </div>
  );
};
export default Sidebar;
