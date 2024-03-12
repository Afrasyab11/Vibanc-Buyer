"use client";
import { icons } from "@/assets";
import Image from "next/image";
import { Input } from "../../../ui/input";
import { Label } from "@/components/ui/label";
import {
  VibancButton,
  WithoutBorderVibancButton,
} from "@/components/common/VibancButtons";
import { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";

export const PriceRange = ({
  price,
  setPrice,
  nextStep,
  backStep,
  setCurrentStep,
}) => {

  useEffect(() => {
    if (price.minAsk !== "" && price.maxAsk > 0) {
      setCurrentStep(0);
    } else {
      setCurrentStep(-1);
    }
  }, [price?.minAsk, price?.maxAsk, setCurrentStep]);

  return (
    <div className="flex flex-col gap-y-5 px-3  md:px-0">
      <div
        className={`w-full bg-bg_light flex flex-col gap-y-5 border-2  py-5 xl:py-5 rounded-lg px-5 ${
          price.minAsk !== 0 || price.maxAsk !== 0
            ? "border-green_dark"
            : "border-border_light"
        }`}
      >
        <div className="flex">
          <p className="sm:text-[11px] md:text-[13px] lg:text-[13px] xl:text-[17px] 2xl:text-[20] font-semibold mr-4">
            1
          </p>
          <p className="sm:text-[11px] md:text-[13px] lg:text-[13px] xl:text-[17px] 2xl:text-[20] font-semibold">
            What is your ideal asking price range?
          </p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <Image
            className="w-full md:w-5/6 lg:w-3/5 h-auto"
            src={icons.range}
            alt="range"
          />
          <div className="flex justify-center w-full md:w-5/6 lg:w-3/5">
            <Slider
              className="md:w-3/5"
              min={0}
              max={2000000}
              value={[Number(price?.minAsk), Number(price?.maxAsk)]}
              onChange={(e, newValue) => {
                setPrice({
                  ...price,
                  minAsk: newValue[0],
                  maxAsk: newValue[1],
                });
              }}
            />
          </div>
        </div>
        <div className="md:flex md:justify-center sm:gap-y-10 gap-x-3">
          <div className={`w-full md:w-2/5 lg:w-[30%]`}>
            <Label className="text-label_color sm:text-[12px] md:text-[13px] xl:text-[14px] 2xl:text-[16px]">
              Min asking price
            </Label>
            <Input
              type="number"
              min={price?.minAsk}
              className="border-border_black rounded-xl"
              placeholder="0"
              value={price?.minAsk}
              onChange={(e) => {
                setPrice({ ...price, minAsk: e.target.value });
              }}
            />
          </div>
          <div className={`w-full md:w-2/5 lg:w-[30%]`}>
            <Label className="text-label_color sm:text-[12px] md:text-[13px] xl:text-[14px] 2xl:text-[16px]">
              Max asking price
            </Label>
            <Input
              type="number"
              min={"0"}
              max={price?.maxAsk}
              className="border-border_black rounded-xl"
              placeholder="$2,000,000+"
              value={price.maxAsk}
              onChange={(e) => {
                setPrice({ ...price, maxAsk: e.target.value });
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-x-3 md:pl-4 py-10 lg:pl-12">
        <WithoutBorderVibancButton
          className="cursor-pointer sm:text-[13px] md:text-[14px] xl:text-[16px] 2xl:text-[20px]"
          onClick={backStep}
          text={"Back"}
        />
        <VibancButton
          className="sm:text-[13px] md:text-[14px] xl:text-[16px] 2xl:text-[20px]"
          isDisabled={price.maxAsk <= 0}
          onClick={nextStep}
          text={"Next"}
          //   isIcon={nextBtn}
        />
      </div>
    </div>
  );
};
