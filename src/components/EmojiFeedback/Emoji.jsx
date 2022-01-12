import React from "react";
// External
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import styled from "styled-components";

// Helper for handling lottie animation data
import selectAnimationData from "./lotties";

const EmojiWrapper = styled(motion.div)`
  cursor: pointer;
  position: relative;
`;

const EmojiLabel = styled.p`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
`;

// Constants for emoji's scale during different states
const NORMAL_SCALE = 0.7;
const HOVERED_SCALE = 0.8;
const SELECTED_SCALE = 0.9;

const Emoji = ({ reaction, isSelected, setActiveReaction }) => {
  // Initialize the animation options as per the reaction
  const animationOptions = {
    loop: true,
    autoplay: false,
    animationData: selectAnimationData(reaction),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Update state on the click of reaction
  const handleClick = () => {
    if (isSelected) {
      setActiveReaction("");
    } else {
      setActiveReaction(reaction);
    }
  };

  return (
    <EmojiWrapper
      whileHover={{
        scale: isSelected ? SELECTED_SCALE : HOVERED_SCALE,
      }}
      animate={{
        scale: isSelected ? SELECTED_SCALE : NORMAL_SCALE,
      }}
      onClick={handleClick}
    >
      <Lottie
        options={animationOptions}
        height={100}
        width="80%"
        isStopped={!isSelected}
        isClickToPauseDisabled
      />
      {isSelected && (
        <EmojiLabel className="text-center text-sm text-gray-600">
          {reaction}
        </EmojiLabel>
      )}
    </EmojiWrapper>
  );
};

export default Emoji;
