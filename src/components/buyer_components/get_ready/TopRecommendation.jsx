"use client";
import React from "react";
import Image from "next/image";
import { icons } from "@/assets";
import { VibancButton } from "@/components/common/VibancButtons";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { LuStar } from "react-icons/lu";
import { Label } from "@/components/ui/label";
export const TopRecommendation = ({ formData }) => {
  console.log("topRecommend", formData);
  const cardList = [
    {
      title: "Mobile",
      cardText:
        "Award-winning health assistant who makes advanced health data analytics simple and fun.",
      ttmRevenu: "6",
      ttmProfit: "5",
      askPrice: "10",
    },
    {
      title: "Mobile",
      cardText:
        "Award-winning health assistant who makes advanced health data analytics simple and fun.",
      ttmRevenu: "6",
      ttmProfit: "5",
      askPrice: "10",
    },
    {
      title: "Mobile",
      cardText:
        "Award-winning health assistant who makes advanced health data analytics simple and fun.",
      ttmRevenu: "6",
      ttmProfit: "5",
      askPrice: "10",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-12 py-16">
        <div className="col-span-12 text-center">
          <p className="text-green sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] 2xl:text-[25px] font-bold">
            Our top recommendations
          </p>
        </div>
      </div>
      <div className="xl:grid xl:grid-cols-12 lg:grid lg:grid-cols-12 md:grid md:grid-cols-12 sm:grid sm:grid-cols-12 gap-x-5 gap-y-3 p-2">
        {cardList?.map((item, index) => (
          <div
            key={index}
            className="xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 border-2 border-border_light p-6 rounded-2xl"
          >
            <div className="flex flex-col gap-y-8">
              <div className="flex justify-between">
                <div className="flex gap-x-3 items-center">
                  <span className="p-2 rounded-full bg-gray">
                    <Image src={icons.mob_icon} height={20} width={20} alt="mobile icon" />
                  </span>
                  <span className="font-semibold">{item?.title}</span>
                </div>
                <div className="flex gap-x-3 items-center">
                  <span className="p-3">
                    <AiOutlineEyeInvisible
                      className="text-gray_color"
                      size={23}
                    />
                  </span>
                  <span className="font-semibold">
                    <LuStar
                      size={23}
                      className={`${
                        index === 2 ? "text-orange_color" : "text-gray_color"
                      }`}
                    />
                  </span>
                </div>
              </div>
              <div className="flex">
                <p className="sm:text-[11px] md:text-[12px] lg:text-[12px] xl:text-[12px] 2xl:text-[21px] text-semi_dark font-medium">
                  {item?.cardText}
                </p>
              </div>
              <div className="flex justify-between gap-x-2">
                <div className="flex flex-col gap-y-2">
                  <Label className="sm:text-[10px] md:text-[11px] lg:text-[11px] xl:text-[11px] 2xl:text-[18px] text-gray_color">
                    TTM REVENUE
                  </Label>
                  <p className="sm:text-[11px] md:text-[11px] lg:text-[12px] xl:text-[12px] 2xl:text-[18px] font-semibold">
                    ${item?.ttmRevenu}k
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <Label className="sm:text-[10px] md:text-[11px] lg:text-[11px] xl:text-[11px] 2xl:text-[18px] text-gray_color">
                    TTM PROFIT
                  </Label>
                  <p className="sm:text-[11px] md:text-[11px] lg:text-[12px] xl:text-[12px] 2xl:text-[18px] font-semibold">
                    ${item?.ttmProfit}k
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <Label className="sm:text-[10px] md:text-[11px] lg:text-[11px] xl:text-[11px] 2xl:text-[18px] text-gray_color">
                    ASKING PRICE
                  </Label>
                  <p className="sm:text-[11px] md:text-[11px] lg:text-[12px] xl:text-[12px] 2xl:text-[18px] font-semibold">
                    ${item?.askPrice}k
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-12 py-16">
        <div className="col-span-12 text-center">
          <p className=" sm:text-[11px] md:text-[11px] lg:text-[12px] xl:text-[12px] 2xl:text-[21px] text-semi_dark font-medium">
            We&apos;ll notify you when we add new startups matching your criteria.
          </p>
        </div>
        <div className="col-span-12 text-center">
          <p className=" sm:text-[11px] md:text-[11px] lg:text-[12px] xl:text-[12px] 2xl:text-[21px] text-semi_dark font-medium">
            To receive these notifications in a roundup, please adjust your
            settings.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 pb-16">
        <div className="col-span-12 text-center">
          <VibancButton
            text="Go to listing"
            isIcon={true}
            // onClick={handledClickNext}
          />
        </div>
      </div>
    </>
  );
};
