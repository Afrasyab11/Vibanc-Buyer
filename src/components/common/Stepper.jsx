import React from "react";
import { IoMdCheckmark } from "react-icons/io";
const Stepper = ({ currentStep, steps }) => {
  return (
    <div className="flex flex-col items-start pl-4">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="flex items-center">
            <div
              className={`w-8 h-8 flex  items-center justify-center rounded-full ${
                index <= currentStep
                  ? "bg-[#009F88]"
                  : " border-2 border-[#ABD0C6] "
              }`}
            >
              <span className="text-[13px] font-medium text-[#1C2C29]">
                {index <= currentStep ?<IoMdCheckmark className="text-bg_light rounded-full" size={25}/>: index + 1}
              </span>
              {/* <Image src={tick}/> */}
            </div>
            <span className="ml-4 sm:text-[11px] md:text-[13px] lg:text-[13px] xl:text-[17px] 2xl:text-[20]  font-medium text-[#234C46]">
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className=" md:h-8 lg:h-9 xl:h-[58px] 2xl:h-16 border-l-4  border-[#ABD0C6] border-dotted  mx-[12px] my-[10px]"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
