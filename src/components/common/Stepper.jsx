import React from "react";
import { IoMdCheckmark } from "react-icons/io";
const Stepper = ({ currentStep, steps,heights }) => {
  return (
    <div className="flex flex-col items-start pl-4">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="flex items-center">
            <div
              className={`md:w-[15px] lg:w-[20px] xl:w-[22px] md:h-[15px] lg:h-[20px] xl:h-[22px] flex  items-center justify-center rounded-full ${
                index <= currentStep
                  ? "bg-[#009F88]"
                  : " border-2 border-[#ABD0C6] "
              }`}
            >
              <span className="sm:text-[11px] md:text-[11px] lg:text-[13px] xl:text-[14px] 2xl:text-[20]  font-medium text-[#1C2C29]">
                {index <= currentStep ?<IoMdCheckmark className="text-bg_light rounded-full md:w-[15px] lg:w-[15px] xl:w-[15px] md:h-[15px] lg:h-[15px] xl:h-[15px]" />: index + 1}
              </span>
              {/* <Image src={tick}/> */}
            </div>
            <span className="md:ml-4 sm:text-[11px] md:text-[11px] lg:text-[12px] xl:text-[14px] 2xl:text-[20px]  font-medium text-[#234C46]">
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className={` border-l-4  border-[#ABD0C6] border-dotted  md:mx-[6px] lg:mx-[8px] xl:mx-[10px] my-[10px]  ${heights.md} ${heights.lg} ${heights.xl} ${heights['2xl']}`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
