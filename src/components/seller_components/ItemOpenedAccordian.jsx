"use client";

import { useState } from "react";
import { StartUpUrl } from "./accordion_list/StartupUrl";
import { MonthlyRevenue } from "./accordion_list/MonthlyRevenue";
import { MonthlyProfit } from "./accordion_list/MonthlyProfit";
import { WhatsYourName } from "./accordion_list/YourName";
import { PhoneNumber } from "./accordion_list/PhoneNumber";
import { AskingPrice } from "./accordion_list/AskingPrice";
export function ItemOpenedAccordian({ setGetReadyStep,setCurrent }) {
  const [step, setStep] = useState(0);
  const [payload, setPayload] = useState({
    startUpUrl: "",
    ttmRevenue: "",
    ttmProfit: "",
    firstName: "",
    lastName: "",
    country: "",
    askPrice: 15,
  });
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };
  const renderStep = () => {
    switch (step) {
      case 0:
        return <StartUpUrl nextStep={nextStep} setGetReadyStep={setGetReadyStep}  payload={payload} setPayload={setPayload} setCurrentStep={setCurrent} />;
      case 1:
        return <MonthlyRevenue nextStep={nextStep} prevStep={prevStep}  payload={payload} setPayload={setPayload} setCurrentStep={setCurrent} />;
      case 2:
        return <MonthlyProfit nextStep={nextStep} prevStep={prevStep}  payload={payload} setPayload={setPayload} setCurrentStep={setCurrent} />;
      case 3:
        return <WhatsYourName nextStep={nextStep} prevStep={prevStep}  payload={payload} setPayload={setPayload} setCurrentStep={setCurrent} />;
      case 4:
        return <PhoneNumber nextStep={nextStep} prevStep={prevStep}  payload={payload} setPayload={setPayload} setCurrentStep={setCurrent} />;
      case 5:
        return <AskingPrice setGetReadyStep={setGetReadyStep} prevStep={prevStep}  payload={payload} setPayload={setPayload} setCurrentStep={setCurrent} />;
      default:
        return null;
    }
  };
  return <div>{renderStep()}</div>;
  {
    /* <div className="flex justify-end mr-5 mt-10">
        <VibancButton
          text="Next"
          isIcon={true}
          className=""
          onClick={() => {
            setGetReadyStep("thanks for submitting");
          }}
        />
      </div> */
  }
}
