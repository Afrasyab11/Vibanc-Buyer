"use client"
import Link from 'next/link';
// import * as z from "zod";
import { ResetPasswordSchema } from "@/schemas"
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

export default function ResetPasswordForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [step, setStep] = useState(1); 
    const form = useForm({
        resolver: zodResolver(ResetPasswordSchema),
        defaultValues: {
            email: "",
            otp: "",
            password: "",
        },
    });

    const onSubmit = (e) => {
        e.preventDefault();
    
        if (step === 1) {
            setStep(2);
        } else if (step === 2) {
          
            setStep(3);
        } else if (step === 3) {
     
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className=' sm:w-[80%] md:w-[60%] px-5 lg:w-[40%] xl:w-[35%] 2xl:w-[30%] mx-auto'>
                <div className='text-center mx-auto '>
                    <h1 className='text-[#234c46] font-bold text-[28px] mb-12'>Reset Password</h1>
                </div>
                <Form {...form} >
                    <div>
                        <form className="space-y-6 " onSubmit={(e)=>{onSubmit(e)}}>
                            {step === 1 && (
                                <div className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-mutedFields">
                                                    Enter Your Email
                                                </FormLabel>
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
                                </div>
                            )}
                            {step === 2 && (
                                <div className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="otp"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-mutedFields">
                                                    Enter OTP
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="Enter OTP"
                                                        type="text"
                                                        required
                                                        className="border-2 rounded-[10px] border-gray-400"
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            )}
                            {step === 3 && (
                                <div className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-mutedFields">
                                                    Enter New Password
                                                </FormLabel>
                                                <FormControl>
                                                    <div className="relative">
                                                        <Input
                                                            {...field}
                                                            placeholder="Create your new password"
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
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            )}
                            <Button
                                type="submit"
                                className="mx-auto rounded-3xl w-[160px] bg-[#234c46] flex justify-center font-bold"
                            >
                                 <Link href="/auth/login">
                                
                           
                                {step === 3 ? "Reset Password" : "Next"}
                                </Link>
                            </Button>
                        </form>
                    </div>
                </Form>
            </div>
        </div>
    );
}
    