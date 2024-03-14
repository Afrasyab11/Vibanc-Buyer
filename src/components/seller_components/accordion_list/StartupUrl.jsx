"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../../ui/input";
import { Label } from "@/components/ui/label";
import { BackAndNextBtn } from "@/components/common/backAndNextBtn";
export const StartUpUrl = ({
  payload,
  setPayload,
  nextStep,
  setGetReadyStep,
  setCurrentStep,
}) => {
  useEffect(() => {
    if (payload?.startUpUrl !== "") {
      setCurrentStep(0);
    } else {
      setCurrentStep(-1);
    }
  }, [payload?.startUpUrl, setCurrentStep]);

  return (
    <div className="flex flex-col gap-y-5 px-3  md:px-0">
      <div
        className={`w-full bg-bg_light flex flex-col gap-y-5 border-2  py-5 xl:py-5 rounded-lg px-5  ${
          payload?.startUpUrl !== ""
            ? "border-green_dark"
            : "border-border_light"
        }`}
      >
        <div className="flex">
          <p className="sm:text-[11px] md:text-[13px] lg:text-[13px] xl:text-[17px] 2xl:text-[20] font-semibold mr-4">
            01
          </p>
          <p className="sm:text-[11px] md:text-[13px] lg:text-[13px] xl:text-[17px] 2xl:text-[20] font-semibold">
            What’s your startup’s URL?
          </p>
        </div>
        <div className="text-center md:px-6">
          <p className="text-green_dark sm:text-[11px] md:text-[12px] xl:text-[14px] 2xl:text-[18px] font-[400]">
            Don’t worry - buyers won’t see this unless you grant them access.
          </p>
        </div>

        <div
          className={`flex justify-center items-center flex-col gap-y-1`}
        >
          <div className="w-full md:w-4/5 lg:w-3/4">
            <Label className="text-label_color sm:text-[11px] md:text-[12px] xl:text-[14px] 2xl:text-[18px]">
              Website
            </Label>
            <Input
              className="border-border_black rounded-xl sm:text-[11px] md:text-[12px] xl:text-[13px] 2xl:text-[17px]"
              type="text"
              placeholder="ex. piedpiper.ai"
              value={payload?.startUpUrl}
              onChange={(e) => setPayload({ ...payload, startUpUrl: e.target.value })}
            />
          </div>
        </div>
      </div>
      <BackAndNextBtn
        backStep={()=>{setGetReadyStep("describe_startup")}}
        nextStep={nextStep}
        disable={payload?.startUpUrl === ""}
      />
    </div>
  );
};
