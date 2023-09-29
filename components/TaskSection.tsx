import { tasks } from "@/constants";
import Cards from "./Cards";
const TaskSection = () => {
  const todos = tasks.filter((task) => task.type === "Todo");
  const inprogess = tasks.filter((task) => task.type === "In Progress");
  const done = tasks.filter((task) => task.type === "Done");
  return (
    <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 m-6 gap-5">
      <div className="todos  flex flex-1 gap-3 flex-col mx-auto ">
        <div className="topsection flex flex-1 justify-between items-center relative">
          <p className="text-lg font-semibold">To-Do List(24)</p>
          <button className="absolute text-2xl bg-[#6418C3] rounded-lg px-2 flex items-center right-0 ">
            +
          </button>
        </div>
        {todos.map((task) => (
          <Cards
            key={task.title}
            type={task.type}
            status={task.status}
            title={task.title}
            progress={task.progress}
            color={task.color}
          />
        ))}
      </div>
      <div className="inprogress  space-y-3 mx-auto ">
        <div className="topsection flex flex-1 justify-between relative">
          <p className="text-lg font-semibold">In Progress (2)</p>
          <button className="absolute text-2xl bg-[#211A75] text-[#6418C3] rounded-lg px-2 flex items-center right-0 ">
            +
          </button>
        </div>
        {inprogess.map((task) => (
          <Cards
            key={task.title}
            type={task.type}
            status={task.status}
            title={task.title}
            progress={task.progress}
            color={task.color}
          />
        ))}
      </div>
      <div className="done space-y-3 mx-auto ">
        <div className="topsection flex flex-1 justify-between relative">
          <p className="text-lg font-semibold">Done (3)</p>
          <button className="absolute text-2xl bg-[#211A75] text-[#6418C3] rounded-lg px-2 flex items-center right-0 ">
            +
          </button>
        </div>
        {done.map((task) => (
          <Cards
            key={task.title}
            type={task.type}
            status={task.status}
            title={task.title}
            progress={task.progress}
            color={task.color}
          />
        ))}
      </div>
      <div className="revised w-[270px] md:w-full   mx-auto flex flex-col flex-1 space-y-3 ">
        <div className="topsection flex  justify-between relative w-full">
          <p className="text-lg font-semibold">Revised(0)</p>
          <button className="absolute text-2xl bg-[#211A75] text-[#6418C3] rounded-lg px-2 flex items-center right-0">
            +
          </button>
        </div>
        <div className="bg-[#211A75] w-full p-6 rounded-lg ">
          <div className="innercontainer bg-[#15132B] w-full p-2 rounded-lg border-2 border-search border-dotted">
            <p className="text-center">Move card here</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TaskSection;
