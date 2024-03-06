import Stepper from "@/components/common/Stepper";
import { AccordionComp } from "./accordionComp";
// Assuming the icons import works as expected

export const QuestionStep = () => {
  const steps = [
    "Price Range",
    "Revenue multiple range",
    "Profit multiple range",
    "TTM revenue range",
    "TTM profit range",
    "Industries",
    "Countries",
  ];
  return (
    <>
      <div className="bg-light_secondary lg:grid lg:grid-cols-12 md:grid md:cols-12 h-screen py-14">
        <div className="lg:col-span-4 flex flex-col items-center">
          <Stepper currentStep={1} steps={steps} />
        </div>
        <div className="lg:col-span-8 px-14">
          <AccordionComp />
        </div>
      </div>
    </>
  );
};
