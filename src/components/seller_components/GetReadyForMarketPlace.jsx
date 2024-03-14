import React from "react";
import Image from "next/image";
import { graphics, icons } from "@/assets/index.js";
import {
  VibancButton,
  GhostVibancButton,
  WithoutBorderVibancButton,
} from "@/components/common/VibancButtons";
import { useRouter } from "next/navigation";
import tellIcon from "../../assets/images/mobIcon.png";
import pricIcon from "../../assets/images/price_icon.png";
import approveIcon from "../../assets/images/approve_icon.png";
//data from figma design:
const CardListData = [
  {
    src: tellIcon,
    alt: "tell_icon",
    heading: "Tell us about your startup",
    paragraph: "Answer a few questions to build your basic listing.",
  },
  {
    src: pricIcon,
    alt: "price_icon",
    heading: "We'll recommend an asking price",
    paragraph:
      "Attract offers with an estimate based on real acquisition data.",
  },
  {
    src: approveIcon,
    alt: "approve_icon",
    heading: "Get pre-approved in 24 hours",
    paragraph: "This should take about 2 minutes to complete.",
  },
];

function GetReadyForMarketPlace({ setGetReadyStep }) {
  const router = useRouter();
  const handledClick = () => {
    setGetReadyStep("describe_startup");
  };
  return (
    <>
      <div className="2xl:grid 2xl:grid-cols-12 xl:grid xl:grid-cols-12 lg:grid lg:grid-cols-12 md:grid md:grid-cols-12 gap-x-11 gap-2  py-16 px-4 lg:px-14">
        <div className="2xl:col-span-6 xl:col-span-7 lg:col-span-7 md:col-span-7 ">
          <section className=" flex flex-col gap-y-8 2xl:gap-y-14 ">
            <div className=" lg:pl-10 xl:pl-[59px] sm:text-center md:text-start lg:text-start">
              <p className="sm:text-[14px] md:text-[17px] lg:text-[19px] xl:text-[24px] 2xl:text-[40px]  font-[700] text-green_dark">
                Let’s get you ready for the marketplace
              </p>
            </div>
            {CardListData?.map((item) => (
              <>
                <div className="lg:grid lg:grid-cols-12 md:grid md:grid-cols-12 flex gap-y-8 gap-x-4">
                  <span className="md:col-span-1 lg:col-span-1 flex justify-center items-center">
                    <Image
                      src={item?.src}
                      className="min:h-[80px]"
                      alt={item?.alt}
                    />
                  </span>
                  <span className="md:col-span-11 lg:col-span-11 flex flex-col gap-y-2">
                    <p className="sm:text-[14px] md:text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[26px]  font-[600] text-green_light">
                      {item?.heading}
                    </p>
                    <p className=" text-green_light sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[22px] ">
                      {item?.paragraph}
                    </p>
                  </span>
                </div>
              </>
            ))}

            <div className="flex justify-row gap-x-3 lg:pl-8 xl:pl-[55px] 2xl:pl-[80px]">
              <WithoutBorderVibancButton
                text={"Not now"}
              />
              <VibancButton
                text={"Awesome, let's go"}
                isIcon={true}
                onClick={handledClick}
              />
            </div>
            <div className="flex justify-row sm:pl-0 text-nowrap  lg:pl-10 xl:pl-14 2xl:pl-[80px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[22px]">
              <p>This should take about 2 minutes to complete.</p>
            </div>
          </section>
        </div>
        <div className="2xl:col-span-6 xl:col-span-5 lg:col-span-5 md:col-span-5 flex xl:justify-end  2xl:justify-center">
          <Image
            className="hidden md:block  object-fit md:h-[300px] h-[360px] lg:h-[390px] xl:h-[415px] 2xl:h-full"
            src={graphics.GetReadyForMarketplace}
            alt="My Dream Bussiness"
          />
        </div>
      </div>
    </>
  );
}

export default GetReadyForMarketPlace;
