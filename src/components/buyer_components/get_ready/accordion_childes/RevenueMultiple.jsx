"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import {
  convertNumberToSuffix,
} from "@/components/common/functions";
export const RevenueMultiple = ({
  price,
  setPrice,
  nextStep,
  backStep,
  setCurrentStep,
}) => {
  useEffect(() => {
    if (price.minTtm !== "" && price.maxTtm > 0) {
      setCurrentStep(1);
    } else {
      setCurrentStep(0);
    }
  }, [price?.minTtm, price?.maxTtm, setCurrentStep]);

  return (
    <div className="flex flex-col gap-y-5 px-3  md:px-0">
      <div
        className={`w-full bg-bg_light flex flex-col gap-y-5 border-2  py-5 xl:py-5 rounded-lg px-5 ${
          price.minTtm !== 0 || price.maxTtm !== 0
            ? "border-green_dark"
            : "border-border_light"
        }`}
      >
        <div className="flex">
          <p className="sm:text-[11px] md:text-[13px] lg:text-[13px] xl:text-[17px] 2xl:text-[20] font-semibold mr-4">
            2
          </p>
          <p className="sm:text-[11px] md:text-[13px] lg:text-[13px] xl:text-[17px] 2xl:text-[20] font-semibold">
            What is your ideal revenue multiple range?
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
              max={16}
              value={[Number(price?.minTtm), Number(price?.maxTtm)]}
              onChange={(e, newValue) => {
                setPrice({
                  ...price,
                  minTtm: newValue[0],
                  maxTtm: newValue[1],
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
              Min TTM net revenue multiple
            </Label>
            <Input
              type="text"
              pattern="[0-9]*"
              className="border-border_black rounded-xl"
              placeholder="0"
              value={convertNumberToSuffix(price?.minTtm, false)}
              onChange={(e) => {
                setPrice({ ...price, minTtm: e.target.value });
              }}
            />
          </div>
          <div className={`w-full md:w-2/5 lg:w-[30%]`}>
            <Label className="text-label_color sm:text-[12px] md:text-[13px] xl:text-[14px] 2xl:text-[16px]">
              Max TTM net revenue multiple
            </Label>
            <Input
              type="text"
              pattern="[0-9]*"
              className="border-border_black rounded-xl"
              placeholder="16x+"
              value={convertNumberToSuffix(price?.maxTtm, true, 16)}
              onChange={(e) => {
                const newValue = e.target.value.replace(/[x+]/g, "");
                setPrice({ ...price, maxTtm: newValue });
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
          isDisabled={price.maxTtm <= 0}
          onClick={nextStep}
          text={"Next"}
          isIcon={true}
        />
      </div>
    </div>
  );
};
