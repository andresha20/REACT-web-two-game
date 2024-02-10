import DisplayerIndex from "../Displayer/DisplayerIndex";
import TriggerIndex from "../Trigger/TriggerIndex";

const MainIndex = () => {
    
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
          <DisplayerIndex />
          <TriggerIndex />
        </div>
      </>
    )
  }
  
  export default MainIndex;