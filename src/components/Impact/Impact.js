import React, { useState, useEffect, useRef } from "react";
import useIntersection from "../../utils/useIntersection";
import ImpactNumber from "./ImpactNumber";

export default function Impact() {
  return (
    <section>
      <div className="text--center">
        <h3>Impact on SPARC datasets</h3>
        <p>Trusted by researchers all over the world</p>
        <div className="flex flex-col justify-evenly px-6 sm:flex-row">
          <div className="flex flex-col items-center justify-center m-2 mb-5 lg:m-6">
            <h1>
              <span></span>
              <span>+</span>
            </h1>
            <p>files touched</p>
            <ImpactNumber countTo="30000" durationInSeconds="32" />
            <ImpactNumber countTo="30000" durationInSeconds="33332" />
            <ImpactNumber countTo="302222000" durationInSeconds="322" />
          </div>
        </div>
      </div>
    </section>
  );
}
