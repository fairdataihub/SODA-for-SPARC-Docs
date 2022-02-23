import React from "react";
import ImpactNumber from "./ImpactNumber";

const ImpactList = [
  {
    id: "files-touched",
    description: "Files touched",
    amount: "19300",
    unit: "",
  },
  {
    id: "data-modified",
    description: "Datasets Modified",
    amount: "90",
    unit: "",
  },
  {
    id: "data-uploaded",
    description: "Data uploaded",
    amount: "4.00",
    unit: "TB",
  },
];

export default function Impact() {
  return (
    <section className=" w-full  flex justify-center items-center ">
      <div className="text-center w-full ">
        <div className="flex flex-col mb-4">
          <h3 className="mb-1 text-4xl">Impact on SPARC datasets</h3>
          <p className="mb-0 text-xl">
            Trusted by researchers all over the world
          </p>
        </div>
        <div className="flex flex-col justify-between px-6 sm:flex-row max-w-screen-lg space-x-4 mx-auto">
          {ImpactList.map((impact) => {
            return (
              <div
                key={impact.description}
                className="flex flex-col items-center justify-center m-2 mb-4 lg:m-4 "
              >
                <p className="my-1 text-5xl font-bold text-center font-lato sm:text-4xl md:text-5xl lg:text-6xl">
                  {/*Mapped ImpactList element amount property passed as a prop to countUp component*/}
                  <ImpactNumber countTo={impact.amount} animationDuration="1" />
                  <span>+</span>
                  {/*If ImpactList element unit property == truthy, display impact unit*/}
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
