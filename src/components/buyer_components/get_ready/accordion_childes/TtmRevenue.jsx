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
import { convertNumberToSuffix } from "@/components/common/functions";
export const TtmRevenue = ({
  price,
  setPrice,
  nextStep,
  backStep,
  setCurrentStep,
}) => {
  useEffect(() => {
    if (price.minTtmGross !== "" && price.maxTtmGross > 0) {
      setCurrentStep(3);
    } else {
      setCurrentStep(2);
    }
  }, [price?.minTtmGross, price?.maxTtmGross, setCurrentStep]);

  return (
    <div className="flex flex-col gap-y-5 px-3  md:px-0">
      <div
        className={`w-full bg-bg_light flex flex-col gap-y-5 border-2  py-5 xl:py-5 rounded-lg px-5 ${
          price.minTtmGross !== 0 || price.maxTtmGross !== 0
            ? "border-green_dark"
            : "border-border_light"
        }`}
      >
        <div className="flex">
          <p className="sm:text-[11px] md:text-[13px] lg:text-[13px] xl:text-[17px] 2xl:text-[20] font-semibold mr-4">
            4
          </p>
          <p className="sm:text-[11px] md:text-[13px] lg:text-[13px] xl:text-[17px] 2xl:text-[20] font-semibold">
            What is your ideal trailing twelve-month (TTM) revenue range?
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
              className="md:w-3/5 "
              min={0}
              max={20}
              value={[Number(price?.minTtmGross), Number(price?.maxTtmGross)]}
              onChange={(e, newValue) => {
                setPrice({
                  ...price,
                  minTtmGross: newValue[0],
                  maxTtmGross: newValue[1],
                });
              }}
              size="small"
              disableSwap
            />
          </div>
        </div>
        <div className="md:flex md:justify-center sm:gap-y-10 gap-x-3">
          <div className={`w-full md:w-2/5 lg:w-[30%]`}>
            <Label className="text-label_color sm:text-[12px] md:text-[13px] xl:text-[14px] 2xl:text-[16px]">
              Min TTM gross revenue
            </Label>
            <Input
              type="text"
              pattern="[0-9]*"
              className="border-border_black rounded-xl"
              placeholder="0"
              value={convertNumberToSuffix(price?.minTtmGross,false)}
              onChange={(e) => {
                setPrice({ ...price, minTtmGross: e.target.value });
              }}
            />
          </div>
          <div className={`w-full md:w-2/5 lg:w-[30%]`}>
            <Label className="text-label_color sm:text-[12px] md:text-[13px] xl:text-[14px] 2xl:text-[16px]">
              Max TTM gross revenue
            </Label>
            <Input
              type="text"
              pattern="[0-9]*"
              className="border-border_black rounded-xl"
              placeholder="20x+"
              value={convertNumberToSuffix(price?.maxTtmGross,true,20)}
              onChange={(e) => {
                const newValue = e.target.value.replace(/[x+]/g, "");
                setPrice({ ...price, maxTtmGross:newValue });
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
          isDisabled={price.maxTtmGross <= 0}
          onClick={nextStep}
          text={"Next"}
            isIcon={true}
        />
      </div>
    </div>
  );
};
