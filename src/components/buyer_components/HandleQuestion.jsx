"use client";
import React, { useState } from "react";
import { IdealStartup } from "./get_ready/IdealStartup";
import { InterestTypes } from "./get_ready/InterestTypes";
import { QuestionStep } from "./get_ready/QuestionSteps";
import { TopRecommendation } from "./get_ready/TopRecommendation";
export const HandleQuestion = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState("");

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };
  const renderStep = () => {
    switch (step) {
      case 0:
        return <IdealStartup nextStep={nextStep} />;
      case 1:
        return <InterestTypes nextStep={nextStep} setFormData={setFormData} />;
      case 2:
        return <QuestionStep setFormData={setFormData} formData={formData} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <TopRecommendation formData={formData}/>;
      default:
        return null;
    }
  };
  return <div>{renderStep()}</div>;
};
