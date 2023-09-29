import SearchIcon from "@mui/icons-material/Search";
import { icons } from "@/constants";
import Image from "next/image";
const ContentHeader = () => {
  return (
    <div className="w-full bg-secondary p-3 flex gap-2 justify-evenly flex-wrap">
      <div className="search-section flex items-center gap-6 justify-between flex-wrap">
        <form className="relative">
          <SearchIcon className="absolute top-[10px] left-4 text-search" />
          <input
            type="text"
            className="bg-main text-gray-100 px-12 py-2 rounded-full outline-none"
            placeholder="Search"
          />
        </form>
        <a href="" className="underline text-search text-xs">
          OTHER MENUS
        </a>
      </div>
      <div className="right-section flex flex-1 gap-2 justify-around items-center">
        <div className="flex gap-4">
          {icons.map((icon) => (
            <div className="relative h-6 w-6" key={icon.title}>
              <span
                className={`absolute top-[-10px] right-0 text-xs ${
                  icon.title !== "folder" ? "bg-[#5ECFFF]" : "bg-[#E328AF]"
                } text-black px-1 rounded-full`}
              >
                1
              </span>
              <Image
                src={icon.value}
                alt={icon.title}
                height={20}
                width={20}
                className="object-contain "
              />
            </div>
          ))}
        </div>
        <button className="language-btn bg-main flex px-6 py-2 items-center space-x-2 rounded-full text-sm">
          <Image src="/us.svg" alt="language" height={20} width={20} />
          <span>ENGLISH</span>
          <Image src="/arrow-down.svg" alt="arrowdwn" height={10} width={10} />
        </button>
      </div>
      <div className="profile flex items-center gap-3">
        <Image src="/profile.svg" alt="profile" height={30} width={30} />
        <div className="text-section">
          <p>Instructor Day</p>
          <p className="text-search"> Super Admin</p>
        </div>
        <Image src="/arrow-down.svg" alt="arrowdwn" height={10} width={10} />
      </div>
    </div>
  );
};
export default ContentHeader;
