import React from "react";
import { useCountUp } from "react-countup";
import useIntersection from "../../utils/useIntersection";

const ImpactNumber = (props) => {
  const countUpRef = React.useRef(null);
  const countUpRefInViewport = useIntersection(countUpRef, "0px");

  const { update } = useCountUp({
    ref: countUpRef,
    start: 0,
    duration: props.animationDuration,
  });

  if (countUpRefInViewport) {
    {
      update(props.countTo);
    }
  }

  return <span ref={countUpRef}></span>;
};

export default ImpactNumber;
