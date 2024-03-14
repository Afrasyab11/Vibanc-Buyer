"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../../ui/input";
import { Label } from "@/components/ui/label";
import { BackAndNextBtn } from "@/components/common/backAndNextBtn";

export const MonthlyProfit = ({
  payload,
  setPayload,
  nextStep,
  prevStep,
  setCurrentStep,
}) => {
  useEffect(() => {
    if (payload.ttmProfit !== "") {
      setCurrentStep(2);
    } else {
      setCurrentStep(1);
    }
  }, [payload?.ttmProfit, setCurrentStep]);

  return (
    <div className="flex flex-col gap-y-5 px-3  md:px-0">
      <div
        className={`w-full bg-bg_light flex flex-col gap-y-5 border-2  py-5 xl:py-5 rounded-lg px-5  ${
          payload.ttmProfit !== "" ? "border-green_dark" : "border-border_light"
        }`}
      >
        <div className="flex">
          <p className="sm:text-[11px] md:text-[13px] lg:text-[13px] xl:text-[17px] 2xl:text-[20] font-semibold mr-4">
            03
          </p>
          <p className="sm:text-[11px] md:text-[13px] lg:text-[13px] xl:text-[17px] 2xl:text-[20] font-semibold">
            How much profit have you made in the last 12 months?
          </p>
        </div>
        <div
          className={`flex justify-center items-center flex-col gap-y-1 sm:pt-0 md:pt-4 `}
        >
          <div className="w-full md:w-4/5 lg:w-3/4">
            <Label className="text-label_color sm:text-[11px] md:text-[12px] xl:text-[14px] 2xl:text-[18px]">
              TTM net profit
            </Label>
            <Input
              className="border-border_black rounded-xl sm:text-[11px] md:text-[12px] xl:text-[13px] 2xl:text-[17px]"
              type="text"
              placeholder="Enter your TTM net profit"
              value={payload?.ttmProfit}
              onChange={(e) =>
                setPayload({ ...payload, ttmProfit: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <BackAndNextBtn
          backStep={prevStep}
        nextStep={nextStep}
        disable={payload?.ttmProfit === ""}
      />
    </div>
  );
};
