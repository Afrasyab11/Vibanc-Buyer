"use client";

import { useEffect, useState } from "react";
import { CountryFilter } from "./accordion_childes/CountryFilter";
import { Industry } from "./accordion_childes/Industries";
import { PriceRange } from "./accordion_childes/PriceRange";
import { RevenueMultiple } from "./accordion_childes/RevenueMultiple";
import { ProfitMultiple } from "./accordion_childes/ProfitMultiple";
import { TtmRevenue } from "./accordion_childes/TtmRevenue";
import { TtmProfit } from "./accordion_childes/TtmProfit";
export const AccordionComp = ({
  setCurrentStep,
  setFormData,
  formData,
  nextStep,
  prevStep,
}) => {
  const [countryList, setCountryList] = useState([]);
  const [interestList, setInterestList] = useState([]);

const [step, setStep]=useState(0)
  const [price, setPrice] = useState({
    minAsk: 0,
    maxAsk: 2000000,
    minTtm: 0,
    maxTtm: 16,
    minTtmProfit: 0,
    maxTtmProfit: 20,
    minTtmGross: 0,
    maxTtmGross: 20,
    minTtmNet: 0,
    maxTtmNet: 20,
  });

  const next = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const back = () => {
    setStep((prevStep) => prevStep - 1);
  };
  const NextBtnHandler = () => {
    setFormData((prevData) => ({
      ...prevData,
      price: price,
      countryList: countryList,
      interestList: interestList,
    }));
    console.log("setFormData", formData);
    nextStep();
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <PriceRange nextStep={next} backStep={prevStep} price={price} setPrice={setPrice} setCurrentStep={setCurrentStep}/>
        );
      case 1:
        return <RevenueMultiple nextStep={next} backStep={back} price={price} setPrice={setPrice} setCurrentStep={setCurrentStep} />;
      case 2:
        return <ProfitMultiple nextStep={next} backStep={back} price={price} setPrice={setPrice} setCurrentStep={setCurrentStep} />;
      case 3:
        return <TtmRevenue nextStep={next} backStep={back} price={price} setPrice={setPrice} setCurrentStep={setCurrentStep} />;
      case 4:
        return <TtmProfit nextStep={next} backStep={back} price={price} setPrice={setPrice} setCurrentStep={setCurrentStep} />;
      case 5:
        return <Industry nextStep={next} backStep={back} setInterestList={setInterestList} interestList={interestList} setCurrentStep={setCurrentStep} />;
      case 6:
        return <CountryFilter nextStep={NextBtnHandler} backStep={back} countryList={countryList} setCountryList={setCountryList}  setCurrentStep={setCurrentStep} />;
      default:
        return null;
    }
  };
  return <div>{renderStep()}</div>;
};
