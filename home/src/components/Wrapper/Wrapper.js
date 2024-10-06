import { useState } from "react";
import AboutUs from "../AboutUs/AboutUs";
import Work from "../Work/Work";
const Wrapper = () => {
  const [workInView, setWorkInView] = useState(false);

  const handleInView = (isVisible) => {
    setWorkInView(isVisible);
    console.log("Work component is in view:", isVisible);
  };
  return (
    <div className={workInView?"w-full bg-[#19192E] transition-all duration-300":"w-full transition-all duration-300"}>
      <AboutUs changeColor={workInView} />
      <Work sendDataToParent={handleInView} />
    </div>
  );
};

export default Wrapper;
