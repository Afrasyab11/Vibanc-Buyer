"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../../ui/input";
import { Label } from "@/components/ui/label";
import { BackAndNextBtn } from "@/components/common/backAndNextBtn";

export const WhatsYourName = ({
  payload,
  setPayload,
  nextStep,
  prevStep,
  setCurrentStep,
}) => {
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (payload.firstName !== "" && payload?.lastName !== "") {
      setCurrentStep(3);
      setDisable(false)
    } else {
      setCurrentStep(2);
      setDisable(true)
    }
  }, [payload?.firstName, payload?.lastName, setCurrentStep,disable]);

  return (
    <div className="flex flex-col gap-y-5 px-3  md:px-0">
      <div
        className={`w-full bg-bg_light flex flex-col gap-y-5 border-2  py-5 xl:py-5 rounded-lg px-5  ${
          payload.firstName !== "" && payload?.lastName !== ""
            ? "border-green_dark"
            : "border-border_light"
        }`}
      >
        <div className="flex">
          <p className="sm:text-[11px] md:text-[13px] lg:text-[13px] xl:text-[17px] 2xl:text-[20] font-semibold mr-4">
            04
          </p>
          <p className="sm:text-[11px] md:text-[13px] lg:text-[13px] xl:text-[17px] 2xl:text-[20] font-semibold">
            Whats Your Name?
          </p>
        </div>
        <div className="text-center">
          <p className="text-green_dark sm:text-[11px] md:text-[12px] xl:text-[14px] 2xl:text-[18px] font-[400]">
            Don’t worry - buyers won’t see this unless you grant them access.
          </p>
        </div>
        <div className="md:flex md:justify-center sm:gap-y-10 gap-x-3">
          <div className={`w-full  lg:w-[35%]`}>
            <Label className="text-label_color sm:text-[12px] md:text-[12px] xl:text-[14px] 2xl:text-[16px]">
              First Name
            </Label>
            <Input
              type="text"
              className="border-border_black rounded-xl sm:text-[12px] md:text-[12px] xl:text-[14px] 2xl:text-[16px]"
              placeholder="Enter your first name"
              value={payload?.firstName}
              onChange={(e) => {
                setPayload({
                  ...payload,
                  firstName: e.target.value,
                });
              }}
            />
          </div>
          <div className={`w-full  lg:w-[35%]`}>
            <Label className="text-label_color sm:text-[12px] md:text-[12px] xl:text-[14px] 2xl:text-[16px]">
              Last Name
            </Label>
            <Input
              type="text"
              className="border-border_black rounded-xl sm:text-[12px] md:text-[12px] xl:text-[14px] 2xl:text-[16px]"
              placeholder="Enter your last name"
              value={payload?.lastName}
              onChange={(e) => {
                setPayload({ ...payload, lastName: e.target.value });
              }}
            />
          </div>
        </div>
      </div>
      <BackAndNextBtn
        backStep={prevStep}
        nextStep={nextStep}
        disable={disable}
      />
    </div>
  );
};
