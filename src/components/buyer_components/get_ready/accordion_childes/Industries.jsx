"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../../../ui/input";
import { Label } from "@/components/ui/label";
import SwiperSlider from "@/components/common/swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  LightRemoveVibancButton,
  OutlineVibancButton,
  VibancButton,
  WithoutBorderVibancButton,
} from "@/components/common/VibancButtons";
import { IndustriesList } from "./industries_childrens/Industries";
import { BusinessModelList } from "./industries_childrens/BusinessModels";
import { TechStacks } from "./industries_childrens/TechStacks";
export const Industry = ({
  setInterestList,
  interestList,
  nextStep,
  backStep,
  setCurrentStep,
}) => {
  const [Industries, setIndustries] = useState([
    "Artificial Intelligence",
    "Health & Beauty",
    "Payment",
    "Architectural",
    "Cybersecurity",
    "Agriculture",
    "Insurance",
    "Travel",
  ]);
  const [businessModal, setBusinessModal] = useState([
    "Multi-sided platform",
    "Ecommerce",
    "Freemium",
    "Ecosystem",
    "Services",
    "Open-Source",
    "Peer-to-peer",
    "On-Demand",
  ]);
  const [teckStack, setTeckStack] = useState([
    "Amazon Web Services",
    "Createjoy",
    "Perl",
    "TypeScript",
    "Snowflake",
    "Ruby on Rails",
    "Express.js",
    "Rust",
  ]);
  const [interest, setInterest] = useState("");
  const [interestSources, setInterestSources] = useState({});

  useEffect(() => {
    if (interestList.length !== 0) {
      setCurrentStep(5);
    } else {
      setCurrentStep(4);
    }
  }, [interestList, setCurrentStep]);

  const handleButtonClick = (item, Name) => {
    console.log("Name", Name);
    if (!interestList.includes(item)) {
      setInterestList((prev) => [item, ...prev]);
      setInterestSources((prev) => ({ ...prev, [item]: Name }));
      setIndustries((prev) => prev.filter((i) => i !== item));
      setBusinessModal((prev) => prev.filter((i) => i !== item));
      setTeckStack((prev) => prev.filter((i) => i !== item));
    }
  };
  const removeInterest = (item) => {
    setInterestList((prev) => prev.filter((interest) => interest !== item));

    // Find the source of the item
    const source = interestSources[item];
    if (source) {
      if (source === "Industries") {
        setIndustries((prev) => [item, ...prev]);
      } else if (source === "BusinessModal") {
        setBusinessModal((prev) => [item, ...prev]);
      } else if (source === "TechStack") {
        setTeckStack((prev) => [item, ...prev]);
      }

      // Remove the item from interestSources
      setInterestSources((prev) => {
        const newSources = { ...prev };
        delete newSources[item];
        return newSources;
      });
    }
  };
  const handleInterestChange = (event) => {
    setInterest(event.target.value);
  };

  const KeyDown = (event) => {
    if (event.key === "Enter" && interest) {
      setInterestList([...interestList, interest]);
      setInterest("");
    }
  };

  return (
    <div className="flex flex-col gap-y-5 px-3  md:px-0">
      <div
        className={`w-full bg-bg_light flex flex-col gap-y-5 border-2  py-5 xl:py-5 rounded-lg px-5  ${
          interestList.length !== 0
            ? "border-green_dark"
            : "border-border_light"
        }`}
      >
        <div className="flex">
          <p className="sm:text-[11px] md:text-[13px] lg:text-[13px] xl:text-[17px] 2xl:text-[20] font-semibold mr-4">
            06
          </p>
          <p className="sm:text-[11px] md:text-[13px] lg:text-[13px] xl:text-[17px] 2xl:text-[20] font-semibold">
            Which industries, business models, and tech stacks interest you?
          </p>
        </div>
        <div className="flex md:pl-2 flex-col justify-center items-center pt-4">
          <div className="sm:w-full md:w-5/6 flex flex-col gap-y-6 ">
            {interestList.length > 0 && (
              <SwiperSlider>
                {interestList?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex gap-x-2 grow mx-1">
                      <LightRemoveVibancButton
                        className="font-medium flex h-7 grow"
                        key={index}
                        text={item}
                        isIcon={true}
                        onClick={() => removeInterest(item)}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </SwiperSlider>
            )}

            <p className="text-label_color sm:text-[13px] md:text-[14px] xl:text-[16px] 2xl:text-[16px]">
              Choose your interests
            </p>
            {/* Industries */}
            <IndustriesList
              Industries={Industries}
              handleChange={(item) => handleButtonClick(item, "Industries")}
            />

            {/* Bussiness Models */}
            <BusinessModelList
              businessModels={businessModal}
              handleChange={(item) => handleButtonClick(item, "BusinessModal")}
            />

            {/* Tech Stack */}
            <TechStacks
              techStacks={teckStack}
              handleChange={(item) => handleButtonClick(item, "TechStack")}
            />
            <div className="flex flex-col gap-y-1">
              <Label className="text-label_color sm:text-[12px] md:text-[12px] xl:text-[14px] 2xl:text-[18px]">
                Add your own interests
              </Label>
              <Input
                placeholder="Enter keywords and press “Enter”"
                className="rounded-xl border-border_black sm:text-[11px] md:text-[12px] xl:text-[13px] 2xl:text-[17px]"
                value={interest}
                onChange={handleInterestChange}
                onKeyDown={KeyDown}
              />
            </div>
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
          isDisabled={interestList.length === 0}
          onClick={nextStep}
          text={"Next"}
          isIcon={true}        />
      </div>
    </div>
  );
};
