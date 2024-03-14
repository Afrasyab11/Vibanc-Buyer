"use client";
import React, { useEffect, useState } from "react";
import { BackAndNextBtn } from "@/components/common/backAndNextBtn";
import Slider from "@mui/material/Slider";
import { icons } from "@/assets";
import Image from "next/image";
export const AskingPrice = ({
  payload,
  setPayload,
  nextStep,
  prevStep,
  setCurrentStep,
  setGetReadyStep,
}) => {
  useEffect(() => {
    if (payload?.askPrice > 0) {
      setCurrentStep(5);
    } else {
      setCurrentStep(4);
    }
  }, [payload?.askPrice, setCurrentStep]);

  return (
    <div className="flex flex-col gap-y-5 px-3  md:px-0">
      <div
        className={`w-full bg-bg_light flex flex-col md:gap-y-3 lg:gap-y-5 border-2  py-5 xl:py-5 rounded-lg px-5  ${
          payload.askPrice > 0 ? "border-green_dark" : "border-border_light"
        }`}
      >
        <div className="flex gap-x-4 sm:text-[11px] md:text-[13px] lg:text-[13px] xl:text-[17px] 2xl:text-[25px] font-semibold">
          <p >
            05
          </p>
          <p>
            What asking price will you set?
          </p>
        </div>
        <div className="flex justify-center ">
          <div className="w-full  lg:w-[80%] xl:w-[70%] text-center">
            <p className="text-green_dark font-medium sm:text-[11px] md:text-[12px] xl:text-[14px] 2xl:text-[18px]">
              Based on our quarterly acquisition reports, we suggest starting
              with this range.
            </p>
          </div>
        </div>
        <div className="text-center sm:text-[12px] md:text-[18px] lg:text-[20px] xl:text-[25px] 2xl:text-[30px] ">
          <p >${payload?.askPrice}k</p>
        </div>
        <div className="md:flex md:justify-center sm:gap-y-10 gap-x-3">
          <div className={`w-full  lg:w-[80%] xl:w-[70%]`}>
            <Slider
              min={0}
              max={30}
              size="small"
              value={payload?.askPrice}
              onChange={(e) => {
                setPayload({ ...payload, askPrice: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="md:flex md:justify-center sm:gap-y-10 md:gap-x-3">
          <div className={`w-full  lg:w-[80%] xl:w-[70%]`}>
            <div className="flex justify-between text-label_color sm:text-[11px] md:text-[12px] xl:text-[13px] 2xl:text-[20px]">
              <p className="sm:text-center">More attractive to buyers</p>
              <p className="sm:text-center">Less attractive to buyers</p>
            </div>
          </div>
        </div>
        <div className="md:flex md:justify-center sm:gap-y-10 gap-x-3">
          <div className={`w-full lg:w-[70%] xl:w-[60%]`}>
            <div className="flex justify-between font-semibold  text-center text-green_dark sm:text-[11px] md:text-[12px] xl:text-[14px] 2xl:text-[17px]">
              <div className="flex flex-col gap-y-2">
                <Image
                  src={icons?.mobileapp}
                  alt="mobile"
                  className="object-contain md:h-9 lg:h-10 2xl:h-20"
                />
                <p className="font-semibold">Mobile</p>
                
              </div>
              <div className="bord border-r border-gray border-solid border-[1px]"></div>

              <div className="flex flex-col gap-y-2">
                <Image
                  src={icons?.revenue}
                  alt="revenue"
                  className="object-contain md:h-9 lg:h-10 2xl:h-20"
                />
                <p>3x revenue</p>
              </div>
              <div className="bord border-r border-gray border-solid border-[1px]"></div>
              <div className="flex flex-col gap-y-2">
                <Image
                  src={icons?.profit}
                  alt="profit"
                  className="object-contain md:h-9 lg:h-10 2xl:h-20"
                />
                <p>5x profit</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="w-full  lg:w-[82%] xl:w-[70%] text-center">
            <p className="text-green_dark sm:text-[11px] md:text-[11px] xl:text-[12px] 2xl:text-[20px] font-[400]">
              You might justify an asking price outside of this range if your
              startup meets{" "}
              <a className="text-green underline ">certain criteria.</a>
            </p>
          </div>
        </div>
      </div> 
      <BackAndNextBtn
        backStep={prevStep}
        nextStep={() => {
          setGetReadyStep("thanks for submitting");
        }}
        disable={payload?.askPrice <= 0}
      />
    </div>
  );
};
