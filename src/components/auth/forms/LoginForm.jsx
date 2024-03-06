"use client";
// import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel, 
    FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { ImSpinner8 } from "react-icons/im";
import { useState } from "react";
import Link from "next/link";
import SocialButtons from "../SocialButtons";
import { useRouter } from "next/navigation";


export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const router=useRouter()
    const form = useForm({
        resolver: zodResolver(LoginSchema),
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
          
          console.log("Data in Payload: ",payload)
          router.replace("/want-to-be-a");
    };


    return (
        <div className="w-[70%] md:w-[80%] lg:w-[45%] xl:w-[35%] 2xl:w-[30%] overflow-y-clip">
            <div className='text-center mx-auto pt-5'>
                <h1 className='text-[#234C46] font-bold text-[26px]  mb-4 xl:mb-10'>Welcome back</h1>
                <SocialButtons />
                <div className='mx-auto my-6 flex items-center justify-evenly w-full  before:mr-4 before:block before:h-[2px] before:flex-grow before:bg-[#abd0c6] after:ml-4 after:block after:h-[2px] after:flex-grow after:bg-[#abd0c6]'>
                    Or
                </div>
            </div>
            <Form {...form}>
                <div>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="">
                        <div className="space-y-2">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-mutedFields text-[15px]">
                                            Email address
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Enter your email"
                                                type="email"
                                                className="border-2 rounded-[10px] border-gray-400"
                                                //   disabled={loader}
                                                required
                  
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

                                        <FormLabel className="text-mutedFields text-[15px]">
                                            Password
                                        </FormLabel>
                                        <FormControl>

                                            <div className="relative">
                                                <Input
                                                    {...field}
                                                    placeholder="Enter your password"
                                                    type={showPassword ? "text" : "password"}
                                                    required
                                                    className="border-2 rounded-[10px] border-gray-400"
                                                />

                                                <div
                                                    className="absolute inset-y-0 right-0 flex items-center mr-2 cursor-pointer text-gray-400"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                >
                                                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                                                </div>
                                            </div>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex items-center gap-x-4 mt-3" >
                            <input type="checkbox" className="cursor-pointer text-white" />
                            <p className="text-[15px]">Remember Me</p>
                        </div>
                        <Link href="/auth/resetpassword">
                            <p className="text-[15px] font-medium mt-5 mb-5">Forgot your password? <span className="text-[#20ab97]">Reset</span></p>
                        </Link>

                        <Button
                            className="mx-auto rounded-3xl font-bold w-[160px] bg-[#234C46] flex justify-center"
                        >
                            Login
                        </Button>
                    </form>
                </div>
                <Link href="/auth/signup">
                    <p className="text-center text-[15px] mt-5 font-medium">{"Don't have an account? "}<span className="text-[#20ab97]">Sign up</span></p>
                </Link>
            </Form>
        </div>

    );
};
