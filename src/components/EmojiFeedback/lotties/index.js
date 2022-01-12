// Lottie animations data
import awfulAnimationData from "./awful.json";
import badAnimationData from "./bad.json";
import neutralAnimationData from "./neutral.json";
import goodAnimationData from "./good.json";
import amazingAnimationData from "./amazing.json";

// Emotions array
import { reactions } from "../data";

const selectAnimationData = (reaction) => {
  switch (reaction) {
    case reactions[0]:
      return awfulAnimationData;
    case reactions[1]:
      return badAnimationData;
    case reactions[2]:
      return neutralAnimationData;
    case reactions[3]:
      return goodAnimationData;
    case reactions[4]:
      return amazingAnimationData;
    default:
      return null;
  }
};

export default selectAnimationData;
