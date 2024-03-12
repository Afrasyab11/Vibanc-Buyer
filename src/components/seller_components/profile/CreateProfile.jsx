"use client";
// import * as z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Select,
} from "@/components/ui/form"

import {
    select,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { ImSpinner8 } from "react-icons/im";

import Link from "next/link";
import Image from "next/image";
import img from "@/assets/images/Image_Placeholder.png"
import icon from "@/assets/images/upload_icon.png";
import { useRouter } from "next/navigation";

import { IoIosArrowRoundBack } from "react-icons/io";
import { useState } from "react";
import YourProfile from "./YourProfile";


export default function CreateProfile() {

    const [profile, setProfile] = useState(true);

    const addProfile = () => {
        setProfile(false)
    }

    const router = useRouter()
    const form = useForm({
  
    });

    const onSubmit = (values) => {

        let payload = {
            Email: values.email,
            Password: values.password,
            isAdmin: false
        }

    };


    return (
        <>
        {profile ?  <>
        <button onClick={addProfile}>
        <IoIosArrowRoundBack size={30}/>
        </button>
       
        <div className='shadow rounded-xl w-[90%] md:w-[60%] px-4 md:px-8 py-6 my-8'>

            <div className='md:flex justify-start items-center gap-x-48 '>
                <Image src={img} />
                <div>
                    <Image src={icon} className="mt-12 md:mt-0"/>
                    <p className='pt-2 text-gray-400'> <span>Click to upload</span> or drag and drop files</p>
                </div>
            </div>
            <Form {...form}>
                <div>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="">
                        <div className="space-y-4">

                            <div className='lg:flex justify-between gap-x-1 mx-auto mt-12'>
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-mutedFields text-[15px]">
                                                First Name
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="Enter"
                                                    type="text"
                                                    className="border-2 rounded-[10px] border-gray-400 w-full lg:w-[250px] "
                                                    required
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-mutedFields text-[15px]">
                                                Last Name
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="Enter"
                                                    type="text"
                                                    className="border-2 rounded-[10px] border-gray-400 w-full lg:w-[250px]"
                                                    required
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                            </div>

                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-mutedFields text-[15px]">
                                            Role
                                        </FormLabel>
                                        <FormControl>
                                            <select
                                                {...field}
                                                placeholder="Select your role"
                                                className="border-2 rounded-[7px] py-2 border-gray-400 w-full"
                                                required
                                            >
                                                <option value="seller">Seller</option>
                                                <option value="buyer">Buyer</option>
                                            </select>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="linkedin"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-mutedFields text-[15px]">
                                            LinkedIn
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Enter"
                                                type="text"
                                                className="border-2 rounded-[10px] border-gray-400"
                                                required
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-mutedFields text-[15px]">
                                            Location
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Enter"
                                                type="text"
                                                className="border-2 rounded-[10px] border-gray-400"
                                                required
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="about"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-mutedFields text-[15px]">
                                            About
                                        </FormLabel>
                                        <FormControl>
                                            <textarea
                                                {...field}
                                                placeholder="Enter"
                                                className="border-2 p-3 rounded-[10px] border-gray-400 w-full"
                                                required
                                                rows={3}
                                            />
                                            
                                            
                                        </FormControl>
                                    </FormItem>
                                 
                                )}
                            />


                        </div>
                     

                        <div className='flex gap-x-2 md:gap-x-12 justify-start w-fit mt-5'>
                        <Button
                            className="mx-auto rounded-3xl font-bold w-[120px] border bg-white text-black border-[#234C46] flex justify-center"
                        >
                            Cancel
                        </Button>

                        <Button
                            className="mx-auto rounded-3xl font-bold w-[120px] bg-[#234C46] flex justify-center"
                        >
                            Save
                        </Button>
                        </div>
                    </form>
                </div>
            </Form>
        </div>
        </>
        : <YourProfile/> 
                                }
        </>
    );
};

