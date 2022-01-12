import React from "react";
import { useState } from "react";
import EmojiFeedback from "./EmojiFeedback";

const PageFeedback = () => {
  const [activeReaction, setActiveReaction] = useState("");
  return (
    <div className="flex justify-start items-center">
      <EmojiFeedback
        activeReaction={activeReaction}
        setActiveReaction={setActiveReaction}
      />
    </div>
  );
};

export default PageFeedback;
