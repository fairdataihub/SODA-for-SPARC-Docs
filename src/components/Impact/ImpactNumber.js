import React, { useState, useEffect, useRef } from "react";
import { useCountUp } from "react-countup";
import useIntersection from "../../utils/useIntersection";

const ImpactNumber = (props) => {
  const countUpRef = React.useRef(null);
  const { update } = useCountUp({
    ref: countUpRef,
    start: 0,
    duration: props.durationInSeconds,
  });
  const startRefInViewport = useIntersection(countUpRef, "0px");

  if (startRefInViewport) {
    {
      update(props.countTo);
    }
  }
  return <h3 ref={countUpRef}></h3>;
};

export default ImpactNumber;
