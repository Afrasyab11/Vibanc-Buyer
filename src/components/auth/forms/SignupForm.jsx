"use client";
import Image from "next/image";
import Link from 'next/link';
import Image2 from "../../../assets/images/sample.png"
// import * as z from "zod";
import { SignupSchema } from "@/schemas";
// import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { ImSpinner8 } from "react-icons/im";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";
import SocialButtons from "../SocialButtons";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);

  const listItems = [
    "Sign an LOI in as little as 30 days",
    "Trusted by 200k+ entrepreneurs",
    "Transact safely with Escrow.com",
    "Guided acquisition process",
    "Build acquisition documents",
    "Syncs with startup metrics",
    "Verified profiles and vetted listings",
    "Expert support when you need it",
  ];

  const form = useForm({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {

    let payload = {
      Email: values.email,
      Password: values.password,
      isAdmin: false
    }
    console.log("Data in Payload: ", payload)
  };
  return (
    <div className=" h-fit lg:flex  justify-center gap-x-12 md:mx-auto ">
      {/* Right div */}
      <div className="w-[70%] md:w-[100%] mx-auto  flex items-center justify-center" >
        <div className="">
          <h1 className="text-[#234c46] font-bold text-[26px] mb-12 text-center">Sign up now to join Vibanc</h1>
          <SocialButtons />
          <div className="mx-auto my-4 flex items-center justify-evenly w-full before:mr-4 before:block before:h-[2px] before:flex-grow before:bg-[#abd0c6] after:ml-4 after:block after:h-[2px] after:flex-grow after:bg-[#abd0c6]">
            Or
          </div>

          <Form {...form}>
            <div>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-mutedFields">Enter Your Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your email"
                          type="email"
                          required
                          className="border-2 rounded-[10px] border-gray-400"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-mutedFields">Enter Your Password</FormLabel>
                      <FormControl>
                        <div>
                          <div className="relative">
                            <Input
                              {...field}
                              placeholder="Create your password"
                              type={showPassword ? "text" : "password"}
                              required
                              className="border-2 rounded-[10px] border-gray-400"
                            />
                            <div
                              className="absolute inset-y-0 right-0 flex items-center mr-2 cursor-pointer text-gray-400"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>

                          </div>
                          <small className="text-xs">Use 8 or more characters with a mix of letters, numbers & symbols</small>
                        </div>


                      </FormControl>
                    </FormItem>

                  )}
                />
                <div>
                <div className="flex gap-x-6 mb-2">
                  <input type="checkbox" className="cursor-pointer" />
                  <p className="text-sm">Agree to our Terms of use and Privacy Policy</p>
                </div>
                <div className="flex gap-x-6 mb-7">
                  <input type="checkbox" className="cursor-pointer" />
                  <p className="text-sm">Subscribe to our newsletter</p>
                </div>
                </div>
               
                <Button className="mx-auto rounded-3xl w-[160px] bg-[#234c46] flex font-bold justify-center">Sign up</Button>
              </form>

            </div>
            <Link href="/auth/login">
              <p className="text-center text-[16px] mt-4">Already have an account? <span className=" text-[#20ab97]">Log in</span></p>
            </Link>
          </Form>
        </div>
      </div>
      {/* Left div */}
      <div className="w-[90%] lg:w-1/4 flex  justify-center mx-auto pt-12  lg:pt-0 lg:mx-12 h-full">
        <div className="mx-auto bg-[#e3f3ef] rounded-xl pt-2">
          <h1 className="text-[#ff7236] text-lg font-semibold p-4">Why Vibanc.com?</h1>
          <ul className="pl-10 pr-4 pb-4">
            {listItems.map((item, index) => (
              <li className="list-disc text-[#009f88] text-sm my-3 font-medium " key={index}><span className="text-black">{item}</span></li>
            ))}
          </ul>
          <div className="bg-[#cde5df] py-4 px-6 rounded-b-xl text-xs font-medium">
            <p className="w-auto md:w-[325px] py-2">{"I had 15+ folks reach out to me on Acquire.com. I was completely blown away by how easy it's been to reach these prospective buyers. We weren't necessarily looking to sell but Vibanc.com has been A+. From start to finish, we were acquired within 30 days at full asking price."}</p>
            <div className="flex items-center gap-x-2 mt-5 ">
              <Image alt="" src={Image2} height={40} width={40} className="rounded-full" />
              <h4>Jordan K.</h4>
              <p>Founder of Median</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

