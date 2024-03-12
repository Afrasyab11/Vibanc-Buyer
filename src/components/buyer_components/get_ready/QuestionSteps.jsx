"use client";
import React, { useState } from "react";
import Stepper from "@/components/common/Stepper";
import { AccordionComp } from "./AccordionComp";
// Assuming the icons import works as expected
export const QuestionStep = ({ setFormData, formData, nextStep, prevStep }) => {
  const [currentStep, setCurrentStep] = useState(-1);
  
  const steps = [
    "Price Range",
    "Revenue multiple range",
    "Profit multiple range",
    "TTM revenue range",
    "TTM profit range",
    "Industries",
    "Countries",
  ];
  return (
    <>
      <div className=" lg:grid lg:grid-cols-12 md:grid md:grid-cols-12 gap-x-3  py-14">
        <div className="lg:col-span-4 md:col-span-4 mb-2 hidden md:block">
          <Stepper currentStep={currentStep} steps={steps} />
        </div>
        <div className="lg:col-span-8 md:col-span-8">
          <AccordionComp
            setCurrentStep={setCurrentStep}
            setFormData={setFormData}
            formData={formData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        </div>
      </div>
    </>
  );
};
