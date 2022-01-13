import React from "react";
// import { useState } from "react";

const PageFeedback = () => {
  // const [activeReaction, setActiveReaction] = useState("");
  return (
    <div className="w-full mt-4 ">
      <hr className="" />

      <div className="flex flex-row items-center justify-start w-full mt-4">
        <h3 className="pr-5 mb-0 w-max"> Was this page helpful? </h3>

        <div className="flex items-center justify-center mt-2 space-x-4">
          <button
            className="feedbackButtonYes "
            onClick={() => sendFeedback(activeReaction)}
          >
            Yes
          </button>
          <button
            className="feedbackButtonNo"
            onClick={() => sendFeedback(activeReaction)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageFeedback;
