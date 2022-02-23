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
    <section className=" flex  w-full items-center justify-center ">
      <div className="w-full text-center ">
        <div className="mb-4 flex flex-col">
          <h3 className="mb-1 text-4xl">Impact on SPARC datasets</h3>
          <p className="mb-0 text-xl">
            Trusted by researchers all over the world
          </p>
        </div>
        <div className="mx-auto flex max-w-screen-lg flex-col justify-between space-x-4 px-6 sm:flex-row">
          {ImpactList.map((impact) => {
            return (
              <div
                key={impact.description}
                className="m-2 mb-4 flex flex-col items-center justify-center lg:m-4 "
              >
                <p className="font-lato my-1 text-center text-5xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
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
