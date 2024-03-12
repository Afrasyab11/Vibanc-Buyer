"use client";
import React, { useEffect, useState } from "react";
import { LightRemoveVibancButton, VibancButton, WithoutBorderVibancButton } from "@/components/common/VibancButtons";
import { Input } from "../../../ui/input";
import { Label } from "@/components/ui/label";
import SwiperSlider from "@/components/common/swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export const CountryFilter = ({
  setCountryList,
  countryList,
  nextStep,
  backStep,
  setCurrentStep,
}) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [country, setCountry] = useState("");
  useEffect(() => {
    if (countryList.length !== 0) {
      setCurrentStep(6);
    } else {
      setCurrentStep(5);
    }
  }, [countryList, setCurrentStep]);

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Pakistan",
    "India",
    "USA",
    "UAE",
    "Korea",
    "Turkey",
    "China",
    "Rusia",
  ];
  const handleChange = (e) => {
    const userInput = e.currentTarget.value;

    if (userInput) {
      const filtered = countries.filter(
        (suggestion) =>
          suggestion.toLowerCase().includes(userInput.toLowerCase()) &&
          !countryList.includes(suggestion)
      );

      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }

    setCountry(userInput);
  };

  const handleClick = (suggestion) => {
    setCountryList((prevList) => {
      if (!prevList.includes(suggestion)) {
        return [...prevList, suggestion];
      }
      return prevList;
    });

    setCountry("");
    setFilteredSuggestions([]);
  };

  const removeCountry = (countryToRemove) => {
    setCountryList(
      countryList.filter((country) => country !== countryToRemove)
    );
  };

  const KeyDown = (event) => {
    if (event.key === "Enter" && country) {
      const isCountries = countries.some(
        (countries) => countries.toLowerCase() === country.toLowerCase()
      );

      if (isCountries) {
        setCountryList((prevList) => {
          if (!prevList.includes(country)) {
            return [...prevList, country];
          }
          return prevList;
        });
        setCountry("");
      }
    }
  };

  return (
    <div className="flex flex-col gap-y-5 px-3  md:px-0">
      <div
        className={`w-full bg-bg_light flex flex-col gap-y-5 border-2  py-5 xl:py-5 rounded-lg px-5  ${
          countryList.length !== 0 ? "border-green_dark" : "border-border_light"
        }`}
      >
        <div className="flex">
          <p className="sm:text-[11px] md:text-[13px] lg:text-[13px] xl:text-[17px] 2xl:text-[20] font-semibold mr-4">
            07
          </p>
          <p className="sm:text-[11px] md:text-[13px] lg:text-[13px] xl:text-[17px] 2xl:text-[20] font-semibold">
            In which countries would you prefer your startup to reside?
          </p>
        </div>
        <div
          className={`flex justify-center items-center flex-col gap-y-1 sm:pt-0 md:pt-4 `}
        >
          <div className="w-full md:w-3/4">
            <Label className="text-label_color sm:text-[11px] md:text-[12px] xl:text-[14px] 2xl:text-[18px]">
              Country
            </Label>
            <Input
              className="border-border_black rounded-xl sm:text-[11px] md:text-[12px] xl:text-[13px] 2xl:text-[17px]"
              id="country-input"
              type="text"
              placeholder="Search for a country"
              onChange={handleChange}
              value={country}
              onKeyDown={KeyDown}
            />
            {filteredSuggestions.length > 0 && (
              <ul className="cursor-pointer flex flex-col gap-y-2 h-40 overflow-y-auto mt-2 sm:text-[11px] md:text-[13px] lg:text-[13px] xl:text-[14px] 2xl:text-[20]">
                {filteredSuggestions.map((suggestion, index) => (
                  <li
                    className="cursor-pointer"
                    key={index}
                    onClick={() => handleClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
            <div className={` pt gap-x-3 sm:pt-4 md:pt-8`}>
               {countryList.length > 0 && (
              <SwiperSlider>
                {countryList?.map((country, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex gap-x-2 grow mx-1">
                      <LightRemoveVibancButton
                        className="font-medium flex h-7 grow"
                        key={index}
                        text={country}
                        isIcon={true}
                        onClick={() => removeCountry(country)}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </SwiperSlider>
            )}
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
          isDisabled={countryList.length === 0}
          onClick={nextStep}
          text={"Next"}
          //   isIcon={nextBtn}
        />
      </div>
    </div>
  );
};
