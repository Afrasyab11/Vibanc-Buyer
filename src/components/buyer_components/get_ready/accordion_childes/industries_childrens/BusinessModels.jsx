import React from "react";
import SwiperSlider from "@/components/common/swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { OutlineVibancButton } from "@/components/common/VibancButtons";
export const BusinessModelList = ({ businessModels, handleChange }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="text-dark_color font-semibold sm:text-[13px] md:text-[14px] xl:text-[16px] 2xl:text-[20px]">
        Business models
      </p>
      {businessModels?.length > 0 ? (
        <SwiperSlider>
          {businessModels?.map((item, index) => (
            <SwiperSlide key={index} className="swiper-auto-height" style={{ width: "auto" }}>
              <div className="flex gap-x-3 mx-1 grow">
                <OutlineVibancButton
                  className="font-medium  h-7 flex grow"
                  key={index}
                  text={item}
                  onClick={() => handleChange(item)}
                />
              </div>
            </SwiperSlide>
          ))}
        </SwiperSlider>
      ) : (
        <p className="p-4">All popular business industries added</p>
      )}
    </div>
  );
};
