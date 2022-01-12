import React from "react";
import Emoji from "./Emoji";
import { reactions } from "./data";

const EmojiFeedback = ({ activeReaction, setActiveReaction }) => {
  const sendFeedback = (reaction) => {
    console.log(reaction);
    console.log("sent feedback");
  };

  return (
    <div className="">
      <h4 className="text-xl text-black mt-4 mb-0">Was this page helpful?</h4>
      <div className="flex flex-col relative">
        <div className="flex flex-row justify-between ">
          {reactions.map((reaction) => (
            <Emoji
              reaction={reaction}
              key={reaction}
              isSelected={activeReaction === reaction}
              setActiveReaction={setActiveReaction}
            />
          ))}
        </div>
        <div className="flex justify-center w-full mt-2">
          <button
            className={
              "text-xl font-bold rounded-md outline-none border-none px-10 py-2 text-white " +
              (activeReaction !== ""
                ? "cursor-pointer "
                : "cursor-not-allowed ") +
              (activeReaction !== "" ? "bg-black " : "bg-zinc-400")
            }
            onClick={() => sendFeedback(activeReaction)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmojiFeedback;
