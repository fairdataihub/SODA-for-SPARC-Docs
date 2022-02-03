import React from "react";
import ImpactNumber from "./ImpactNumber";

const ImpactList = [
  {
    description: "Files touched",
    amount: "19300",
    unit: "",
  },
  {
    description: "Datasets Modified",
    amount: "90",
    unit: "",
  },
  {
    description: "Data uploaded",
    amount: "4",
    unit: "TB",
  },
];

export default function Impact() {
  return (
    <section>
      <div className="text--center">
        <h3>Impact on SPARC datasets</h3>
        <p>Trusted by researchers all over the world</p>
        <div className="flex flex-col justify-evenly px-6 sm:flex-row">
          {ImpactList.map((impact) => {
            return (
              <div
                key={impact.description}
                className="flex flex-col items-center justify-center m-2 mb-5 lg:m-6"
              >
                <p className="my-1 text-5xl font-bold text-center font-lato sm:text-4xl md:text-5xl lg:text-6xl">
                  <ImpactNumber countTo={impact.amount} animationDuration="2" />
                  <span>+</span>
                  {impact.unit && <span> {impact.unit}</span>}
                </p>
                <p>{impact.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
