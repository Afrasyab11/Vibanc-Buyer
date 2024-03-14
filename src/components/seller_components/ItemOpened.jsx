import React, { useState } from "react";
import Stepper from "../common/Stepper";
import { ItemOpenedAccordian } from "./ItemOpenedAccordian";

const ItemOpened = ({ setGetReadyStep }) => {
  const [current, setCurrent] = useState(-1);
  const steps = [
    "Startup’s URL",
    "12 months revenue",
    "12 months profit",
    "What’s your name?",
    "What’s your phone number?",
    "What asking price will you set?",
  ];
  const heights = {
    md: "md:h-6",
    lg: "lg:h-[10px]",
    xl: "xl:h-[40px]",
    "2xl": "2xl:h-[60px]",
  };
  return (
    <section className=" gap-4 p-4 m-auto py-16">
      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-12 md:col-span-4 h-[100vh] hidden md:block">
          <Stepper currentStep={current} steps={steps} heights={heights} />
        </div>
        <div className="col-span-12 md:col-span-8 h-[100vh] ">
          <ItemOpenedAccordian
            setGetReadyStep={setGetReadyStep}
            setCurrent={setCurrent}
          />
        </div>
      </div>
    </section>
  );
};

export default ItemOpened;
