"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../../ui/input";
import { Label } from "@/components/ui/label";
import { BackAndNextBtn } from "@/components/common/backAndNextBtn";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const PhoneNumber = ({
  payload,
  setPayload,
  nextStep,
  prevStep,
  setCurrentStep,
}) => {
  const [country, setCountry] = useState("us");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    if (payload.country !== "") {
      setCurrentStep(4);
    } else {
      setCurrentStep(3);
    }
  }, [payload?.country, setCurrentStep]);
 
  const handleCountryChange = (newCountry) => {
    setCountry(newCountry);
  };
  const handlePhoneNumberChange = (e) => {
    switch (country) {
      case "us":
        if (e.target.value.length > 14) return;
        break;
      case "uk":
        if (e.target.value.length > 15) return;
        break;
      default:
        break;
    }
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="flex flex-col gap-y-5 px-3  md:px-0">
      <div
        className={`w-full bg-bg_light flex flex-col gap-y-5 border-2  py-5 xl:py-5 rounded-lg px-5  ${
          payload.country !== "" ? "border-green_dark" : "border-border_light"
        }`}
      >
        <div className="flex">
          <p className="sm:text-[11px] md:text-[13px] lg:text-[13px] xl:text-[17px] 2xl:text-[20] font-semibold mr-4">
            05
          </p>
          <p className="sm:text-[11px] md:text-[13px] lg:text-[13px] xl:text-[17px] 2xl:text-[20] font-semibold">
            What’s your phone number?
          </p>
        </div>

        <div className="flex justify-center ">
          <div className="w-full  lg:w-[70%] text-center">
            <p className="text-green_dark sm:text-[11px] md:text-[12px] xl:text-[14px] 2xl:text-[18px] font-[400]">
              Since acquisitions are time-sensitive, we might need to call you
              to discuss your listing or offer quick advice. Buyers will never
              see this.
            </p>
          </div>
        </div>
        <div className="md:flex md:justify-center sm:gap-y-10 gap-x-3">
          <div className={`w-full  lg:w-[35%]`}>
            <Label className="text-label_color sm:text-[12px] md:text-[12px] xl:text-[14px] 2xl:text-[16px]">
              Country
            </Label>

            <PhoneInput
              country={country}
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber(phone)}
              inputStyle={{  readOnly: true }}
              onCountryChange={handleCountryChange}
            />
          </div>
          <div className={`w-full  lg:w-[35%]`}>
            <Label className="text-label_color sm:text-[12px] md:text-[12px] xl:text-[14px] 2xl:text-[16px]">
              Phone number
            </Label>
            <Input
              type="text"
              className="border-border_black rounded-xl sm:text-[12px] md:text-[12px] xl:text-[14px] 2xl:text-[16px]"
              placeholder="+1 (xxx) xxx-xxxx"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
        </div>
      </div>
      <BackAndNextBtn
        backStep={prevStep}
        nextStep={nextStep}
        // disable={disable}
      />
    </div>
  );
};
