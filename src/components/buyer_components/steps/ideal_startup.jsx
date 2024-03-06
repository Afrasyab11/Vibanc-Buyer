"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { RiLoader4Line } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import BussinessDream from "@/assets/images/bussinessDream.png";
import tellIcon from "@/assets/images/tell_icon.png";
import craft from "@/assets/images/craft.png";
import { useRouter } from "next/navigation";
import { VibancButton } from "@/components/common/VibancButtons";
import { WithoutVibancButton } from "@/components/common/VibancButtons";
export const IdealStartup = () => {
  const router = useRouter();
  const loader = false;
  const disabled = false;

  const handledClick = () => {
    router.push("/seller");
  };
  return (
    <>
      {/* <section className='container mx-auto flex flex-col md:flex-row justify-center content-center gap-2 py-12'>

                <section className='px-4 flex flex-col justify-center content-center gap-y-12'>
                    <div>
                        <h1 className='text-[#234C46] text-2xl font-bold'>Need help finding your ideal startup?</h1>
                    </div>
                    <div>
                        <div className={`
                        sellStartup outline outline-1 outline-[#cccccc] rounded-md  py-2 px-4 my-2
                        
                        `}>

                            <input type="radio" name="doWithStartup" id="sellStartup" className=' checked:accent-[#009F88]' />
                            <label htmlFor="sellStartup" className='mx-2'>I want to sell my startup</label>
                        </div>
                        <div className="buyStartup outline outline-1 outline-[#cccccc] rounded-md  py-2 px-4 my-2">

                            <input type="radio" name="doWithStartup" id="buyStartup" className=' checked:accent-[#009F88]' />
                            <label htmlFor="buyStartup" className='mx-2'>I want to buy a startup</label>
                        </div>
                    </div>
                    <div id="nextButton">
                        <VibancButton text={"Next"} isIcon={true} onClick={handledClick} />
                    </div>
                </section>
                <section>
                    <Image src={whatYouWantToDo} alt="what do you want" />


                </section>
            </section> */}
      <div className="2xl:grid 2xl:grid-cols-12 xl:grid xl:grid-cols-12 lg:grid lg:grid-cols-12 md:grid md:grid-cols-12 gap-2 py-16 px-3">
        <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-12 "></div>
        <div className="2xl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-12 ">
          <section className=" flex flex-col gap-y-8 ">
            <div className="md:pl-14 lg:pl-14">
              <p className="xl:text-[20px] lg:text-[18px] md:text-[14px] font-bold text-green_dark">
                Need help finding your ideal startup?
              </p>
            </div>
            <div className="lg:grid lg:grid-cols-12 md:grid md:grid-cols-12 flex  gap-x-4">
              <span className="md:col-span-1 lg:col-span-1 flex justify-center items-center">
                <Image
                  src={tellIcon}
                //   width={500}
                //   height={439}
                  className="min:h-[80px]"
                  alt="book search icon"
                />
              </span>
              <span className="md:col-span-11 lg:col-span-11 flex flex-col gap-y-2">
                <p className="xl:text-[15px] lg:text-[15px] md:text-[14px] font-bold text-green_light">
                  Tell us your acquisition goals
                </p>
                <p className=" text-green_light">
                  Answer a few questions about the types of startups that
                  interest you.
                </p>
              </span>
            </div>
            <div className="lg:grid lg:grid-cols-12 md:grid md:grid-col-12 flex gap-x-4">
              <span className="col-span-1 flex justify-center items-center">
                <Image className="min:h-[80px]" src={craft} alt="book search icon" />
              </span>
              <span className="col-span-11 flex flex-col gap-y-2">
                <p className="xl:text-[15px] lg:text-[15px] md:text-[14px] font-bold text-green_light">
                  Tell us your acquisition goals
                </p>
                <p className=" text-green_light">
                  Answer a few questions about the types of startups that
                  interest you.
                </p>
              </span>
            </div>
            <div className="md:pl-3 lg:pl-14">
              <p className="py-8 bg-bg_light_green border-l-4 border-green px-4 text-[15px]">
                The more specific you are, the better your recommendations.
                Sellers can also see from your profile that your goals align.
              </p>
            </div>
            <div className="flex justify-row gap-x-3 md:pl-4 lg:pl-12">
              <WithoutVibancButton text={"Not now"} onClick={handledClick} />
              <VibancButton
                text={"Awesome, let's go"}
                isIcon={true}
                onClick={handledClick}
              />
            </div>
            <div className="flex justify-row  pl-12">
              <p>This should take about 2 minutes to complete.</p>
            </div>
          </section>
        </div>
        <div className="2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-12 px-4">
          <Image className="hidden lg-block" src={BussinessDream} alt="My Dream Bussiness" />
        </div>
        <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-12 "></div>
      </div>
    </>
  );
};
