import Image from "next/image";
import { LinearProgress } from "@mui/material";
const Progress = () => {
  return (
    <div className="m-6 bg-secondary p-2 rounded-m ">
      {/* top section */}
      <div className="flex justify-between">
        <div className="left flex justify-between">
          <div className="left-header flex gap-2">
            <button>
              <Image src="/back.svg" alt="back" width={30} height={30} />
            </button>
            <div className="text">
              <p className="md:text-xl font-semibold">School November Tasks</p>
              <p className="text-sm text-gray-500">
                Created by Instructor Day on November 31, 2022
              </p>
            </div>
          </div>
        </div>
        <div className="right flex gap-3 flex-wrap justify-end">
          <div className="text text-end order-2 sm:order-none">
            <p className="text-xs md:text-lg font-semibold">
              Centered Martial Arts
            </p>
            <p className="text-sm text-gray-500">Sunnyvale, Ca</p>
          </div>
          <Image
            src="/martialarts.svg"
            alt="ma"
            width={50}
            height={50}
            className=" order-1 sm:order-none  "
          />
        </div>
      </div>
      {/* bottom section */}
      <div className="bottom-section mt-4 flex items-center justify-between flex-wrap">
        <div className="flex flex-wrap items-center justify-start gap-1">
          <Image src="/people.svg" alt="people" width={120} height={120} />
          <button className="flex items-centerg gap-3 bg-[#6418C3] px-4 py-2 rounded-lg">
            <Image src="/addfriend.svg" alt="invite" width={20} height={20} />
            <span>Invite People</span>
          </button>
          <button className="flex items-centerg gap-3 bg-primary border-2 px-4 border-search py-2 rounded-lg ">
            <span>Private</span>
          </button>
          <button className="flex items-centerg gap-3 bg-[#6418C3] px-6 py-2 rounded-lg ">
            <span>Edit</span>
          </button>
          <button className="flex items-centerg gap-3 bg-primary border-2 px-4 border-search py-2 rounded-lg ">
            <Image src="/chat.svg" alt="chat" width={20} height={20} />
            <span>45 Comments</span>
          </button>
        </div>
        <div className="progress-bar mt-2 flex items-center gap-2">
          <span className="text-sm text-gray-500">Total Progress 60%</span>
          <LinearProgress
            value={60}
            variant="determinate"
            className="w-[200px] rounded-lg bg-main h-2 "
            color="secondary"
          />
        </div>
      </div>
    </div>
  );
};
export default Progress;
