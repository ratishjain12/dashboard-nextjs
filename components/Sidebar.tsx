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
      className={`bg-secondary shadow-xl border-r-1 border-r-gray-600   p-2 ${
        open
          ? "w-[45em] sm:w-[20em] ease-in duration-300"
          : "w-[4.5m] ease-out duration-300"
      }`}
    >
      <div className="topsection flex flex-1 justify-between gap-1  items-center ">
        <span className={open ? "block text-[0.6em] sm:text-lg" : "hidden"}>
          weframetech
        </span>
        <button onClick={handleClick} className="relative">
          <Image
            src="/hamburgermenu.svg"
            width={60}
            height={50}
            alt="burger-menu "
            className={`w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] sm:ml-0  sm:mt-0 ${
              !open ? "mx-auto" : "ml-0 mt-0"
            }`}
          />
        </button>
      </div>
      <div className="mainmenu flex flex-col flex-1 gap-6 mt-4">
        <p className={open ? "block text-[0.4em] sm:text-lg ml-2" : "hidden"}>
          MAIN MENU
        </p>
        {sideBarItems.map((item) => (
          <div
            className="flex flex-1 justify-between items-center "
            key={item.title}
          >
            <div
              className={`left flex items-center justify-center gap-1${
                !open && "mx-auto"
              }`}
            >
              <Image
                src={item.img}
                alt="icons"
                width={13}
                height={13}
                className={`${
                  !open ? "w-[20px] h-[20px]  " : "w-[10px] sm:w-[26px]"
                }`}
              />
              <p
                className={
                  open
                    ? "block text-[0.7em] sm:text-lg ml-2 text-[#7879F1]"
                    : "hidden"
                }
              >
                {item.title}
              </p>
            </div>
            {item.arrow && (
              <div className="right ml-1">
                <Image
                  src="ic_chevron.svg"
                  alt="rightarrow"
                  width={20}
                  height={20}
                  className={open ? "block " : "hidden"}
                />
              </div>
            )}
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
