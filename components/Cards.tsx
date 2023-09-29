import Image from "next/image";
import { LinearProgress } from "@mui/material";
interface cards {
  type: string;
  status: string;
  title: string;
  progress: number;
  color: string;
}

const Cards = ({ type, status, title, progress, color }: cards) => {
  const textColor = `text-[${color}]`;
  return (
    <div className=" bg-[#211A75] p-2 rounded-lg max-w-[280px] ">
      <div className="topsection relative flex flex-1 justify-between items-center">
        <span className={textColor}>{status}</span>
        <span className="absolute right-0 top-[-5px]">...</span>
      </div>
      <div className="mt-3">
        <p className="font-semibold text-lg   ">{title}</p>
      </div>
      <div className=" mt-3">
        <LinearProgress
          value={progress}
          variant="determinate"
          className="rounded-lg h-[7px]"
          sx={{
            backgroundColor: "#1E1C3A",
            "& .MuiLinearProgress-bar": {
              backgroundColor: color,
            },
          }}
        />
      </div>
      <div className="bottomsection flex flex-1 justify-between mt-4">
        <Image src="/user.svg" alt="user" height={100} width={100} />
        <span className="text-gray-100">Due in 4 Days</span>
      </div>
    </div>
  );
};
export default Cards;
