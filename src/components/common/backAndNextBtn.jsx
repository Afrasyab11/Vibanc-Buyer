import {
  VibancButton,
  WithoutBorderVibancButton,
} from "@/components/common/VibancButtons";

export const BackAndNextBtn = ({ backStep, nextStep, disable, nextText }) => {
  return (
    <div className="flex justify-end gap-x-3 md:pl-4 py-10 lg:pl-12">
      <WithoutBorderVibancButton
        className="cursor-pointer sm:text-[13px] md:text-[14px] xl:text-[16px] 2xl:text-[20px]"
        onClick={backStep}
        text={"Back"}
      />
      <VibancButton
        className="sm:text-[13px] md:text-[14px] xl:text-[16px] 2xl:text-[20px]"
        isDisabled={disable}
        onClick={nextStep}
        isIcon={true}
        text={nextText ? nextText : "Next"}
      />
    </div>
  );
};
