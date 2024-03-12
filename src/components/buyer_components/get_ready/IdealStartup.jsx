"use client";
import React from "react";
import Image from "next/image";
import BussinessDream from "@/assets/images/bussinessDream.png";
import tellIcon from "@/assets/images/tell_icon.png";
import craft from "@/assets/images/craft.png";
import { VibancButton } from "@/components/common/VibancButtons";
import { WithoutBorderVibancButton } from "@/components/common/VibancButtons";
export const IdealStartup = ({ nextStep }) => {
  const handledClick = () => {
    console.log("trigger");
    nextStep();
  };
  return (
    <>
      <div className="2xl:grid 2xl:grid-cols-12 xl:grid xl:grid-cols-12 lg:grid lg:grid-cols-12 md:grid md:grid-cols-12 gap-x-11 gap-2 py-16 px-3 lg:px-14">
        <div className="2xl:col-span-8 xl:col-span-8 lg:col-span-8 md:col-span-12 ">
          <section className=" flex flex-col gap-y-8 ">
            <div className="md:pl-14 lg:pl-10 xl:pl-16 sm:text-center md:text-center lg:text-start">
              <p className="sm:text-[14px] md:text-[17px] text-[20px]  font-bold text-green_dark">
                Need help finding your ideal startup?
              </p>
            </div>
            <div className="lg:grid lg:grid-cols-12 md:grid md:grid-cols-12 flex  gap-x-4">
              <span className="md:col-span-1 lg:col-span-1 flex justify-center items-center">
                <Image
                  src={tellIcon}
                  className="min:h-[80px]"
                  alt="book search icon"
                />
              </span>
              <span className="md:col-span-11 lg:col-span-11 flex flex-col gap-y-2">
                <p className="sm:text-[14px] md:text-[16px] text-[20px] font-bold text-green_light">
                  Tell us your acquisition goals
                </p>
                <p className=" text-green_light sm:text-[13px] md:text-[16px] text-[20px]">
                  Answer a few questions about the types of startups that
                  interest you.
                </p>
              </span>
            </div>
            <div className="lg:grid lg:grid-cols-12 md:grid md:grid-cols-12 flex  gap-x-4">
              <span className="md:col-span-1 lg:col-span-1 flex justify-center items-center">
                <Image
                  className="min:h-[80px]"
                  src={craft}
                  alt="book search icon"
                />
              </span>
              <span className="md:col-span-11 lg:col-span-11 flex flex-col gap-y-2">
                <p className="sm:text-[14px] md:text-[16px] text-[20px] font-bold text-green_light">
                  We&apos;ll deliver startups matching your criteria
                </p>
                <p className=" text-green_light sm:text-[13px] md:text-[16px] text-[20px]">
                  Answer a few questions about the types of startups that
                  interest you.
                </p>
              </span>
            </div>
            <div className=" lg:pl-10 xl:pl-16">
              <p className="py-8 bg-bg_light_green border-l-4 border-green px-4 sm:text-[13px] md:text-[16px]">
                The more specific you are, the better your recommendations.
                Sellers can also see from your profile that your goals align.
              </p>
            </div>
            <div className="flex justify-row gap-x-3 lg:pl-8 xl:pl-14">
              <WithoutBorderVibancButton className="sm:text-[13px] md:text-[16px]" text={"Not now"} />
              <VibancButton
              className="sm:text-[13px] md:text-[16px]"
                text={"Awesome, let's go"}
                isIcon={true}
                onClick={handledClick}
              />
            </div>
            <div className="flex justify-row sm:pl-0 text-nowrap  lg:pl-10 xl:pl-14 sm:text-[13px] md:text-[16px]">
              <p>This should take about 2 minutes to complete.</p>
            </div>
          </section>
        </div>
        <div className="2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-12 flex justify-end">
          <Image
            className="hidden lg:block  object-fit h-[360px] lg:h-[430px] xl:h-[365px] 2xl:h-[360px]"
            src={BussinessDream}
            alt="My Dream Bussiness"
          />
        </div>
      </div>
    </>
  );
};
