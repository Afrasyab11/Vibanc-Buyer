import React from "react";
import Image from "next/image";
import { graphics, icons } from "@/assets";
import { useRouter } from "next/navigation";
import { BackAndNextBtn } from "../common/backAndNextBtn";
import { VibancButton } from "../common/VibancButtons";
const CardListData = [
  {
    src: icons.tell_icon,
    alt: "craft_icon",
    heading: "Craft the perfect listing",
    paragraph:
      "Attract more interest with help from our customer success team.",
  },
  {
    src: icons.price_icon,
    alt: "connect_icon",
    heading: "Connect with qualified buyers",
    paragraph: "Find the right buyer with advice from our acquisition experts.",
  },
  {
    src: icons.approve_icon,
    alt: "prepare_icon",
    heading: "Prepare for an easy exit",
    paragraph: "Get help with data rooms, legal documents, and much more.",
  },
];

function ThanksForSubmitting() {
  const router = useRouter();
  return (
    <>
      <div className="2xl:grid 2xl:grid-cols-12 xl:grid xl:grid-cols-12 lg:grid lg:grid-cols-12 md:grid md:grid-cols-12 gap-x-11 gap-2  py-16 px-4 lg:px-14">
        <div className="2xl:col-span-6 xl:col-span-7 lg:col-span-7 md:col-span-7 ">
          <section className=" flex flex-col gap-y-8 2xl:gap-y-14 ">
            <div className=" lg:pl-10 xl:pl-[58px] sm:text-center md:text-start lg:text-start">
              <p className="sm:text-[14px] md:text-[17px] lg:text-[19px] xl:text-[24px] 2xl:text-[40px]  font-[700] text-green_dark">
                Thank you for submitting!
              </p>
            </div>
            <div className=" lg:pl-10 xl:pl-[58px] xl:w-4/5 sm:text-center md:text-start lg:text-start">
              <p className="sm:text-[11px] md:text-[11px] lg:text-[12px] xl:text-[14px] 2xl:text-[20px]  text-label_color">
                Our curation team will let you know within 24 business hours if
                you&apos;re a good fit. Feel free to finish your listing in the
                meantime.
              </p>
            </div>
            <div className=" lg:pl-10 xl:pl-[58px] sm:text-center md:text-start lg:text-start">
              <p className="sm:text-[12px] md:text-[12px] lg:text-[13px] xl:text-[17px] 2xl:text-[22px] font-semibold  text-green_dark">
                How we help you to sell your business
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
                    <p className="sm:text-[13px] md:text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[26px]  font-[600] text-green_light">
                      {item?.heading}
                    </p>
                    <p className=" text-green_light sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[13px] 2xl:text-[22px] ">
                      {item?.paragraph}
                    </p>
                  </span>
                </div>
              </>
            ))}

            <div className="flex justify-row sm:pl-12 gap-x-3 lg:pl-8 xl:pl-14 2xl:pl-[80px]">
              <VibancButton
                text={"Awesome, let's finish my listing"}
                isIcon={true}
                onClick={() => {
                  router.push("/seller/my-listing");
                }}
              />
            </div>
          </section>
        </div>
        <div className="2xl:col-span-6 xl:col-span-5 lg:col-span-5 md:col-span-5 flex xl:justify-end  2xl:justify-center">
          <Image
            className="hidden md:block  object-contain md:h-full  lg:h-full xl:h-[415px] 2xl:h-full"
            src={graphics.submittingGraphics}
            alt="Thanks for Submitting"
          />
        </div>
      </div>
    </>
  );
}

export default ThanksForSubmitting;
