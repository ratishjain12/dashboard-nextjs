import { ContentHeader, Progress, TaskSection } from ".";

const Content = () => {
  return (
    <div>
      <div className="header flex flex-col flex-1 ">
        {/* Header */}
        <ContentHeader />
        {/* progress */}
        <Progress />
        {/* task cards and section */}
        <TaskSection />
      </div>
    </div>
  );
};
export default Content;
