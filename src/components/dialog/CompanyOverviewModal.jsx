"use client";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "../ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { FaCalendar } from "react-icons/fa";
import { format } from "date-fns";

export function CompanyOverviewModal({ open, setOpen }) {

    const [date, setDate] = useState(new Date());

    const [companyOverviewData, setCompanyOverviewData] = useState({
        companyDesc: "",
        competitors: "",
        date: "",
        teamSize: "",
        businessModel: "",
        techStack: "",
        growth: "",
        assets: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCompanyOverviewData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        const payload = {
            companyDesc: companyOverviewData.companyDesc,
            competitors: companyOverviewData.competitors,
            date: companyOverviewData.date,
            teamSize: companyOverviewData.teamSize,
            businessModel: companyOverviewData.businessModel,
            techStack: companyOverviewData.techStack,
            growth: companyOverviewData.growth,
            assets: companyOverviewData.assets,
            ...companyOverviewData
        };
    };

    return (
        <Dialog open={open} onOpenChange={setOpen} className="mt-12 mb-12">
           
            <DialogContent className="w-full sm:w-[525px] overflow-y-auto max-h-[600px] my-2 mb-4">
                <DialogHeader>
                    <DialogTitle className="text-start">Company Overview</DialogTitle>
                    <DialogDescription>
                        <div className="flex flex-col justify-between items-center my-2">
                            <Label htmlFor="companyDescription" className="w-full sm:w-fit my-5">
                                Enter description about your company
                            </Label>
                            <textarea
                                // id="companyDescription"
                                name="companyDesc"
                                className="w-full   border focus:outline-none"
                                rows={5}
                                value={companyOverviewData.companyDesc}
                                onChange={handleInputChange}
                            />
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <hr className="bg-[#53b3a8] my-3" />
                <div className="py-4">
                    <div className="my-4 mb-8">
                        <Label htmlFor="competitors" className="w-full sm:w-fit my-2 font-semibold">
                            Competitors
                        </Label>
                        <ReactQuill
                            className='border-0 my-2 w-full'
                            name="competitors"
                            value={companyOverviewData.competitors}
                            onChange={value => setCompanyOverviewData(prevState => ({ ...prevState, competitors: value }))}
                            modules={{
                                toolbar: [
                                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                    [{ list: 'ordered' }, { list: 'bullet' }],
                                    ['link', 'image'],
                                    ['clean'],
                                ],
                            }}
                        />
                    </div>
                    <div className="flex flex-col my-2">
                        <Label htmlFor="date" className="w-full font-semibold sm:w-fit my-2">
                            Date
                        </Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-auto   justify-start text-left font-normal",
                                        !date && "text-muted-foreground",
                                        
                                    )}
                                >
                                    <FaCalendar className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="flex flex-col  my-2">
                        <Label htmlFor="teamSize" className=" font-semibold my-2">
                            Team size
                        </Label>
                        <Input
                            type="number"
                            id="teamSize"
                            name="teamSize"
                            className="w-auto  "
                            value={companyOverviewData.teamSize}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex flex-col my-2 mb-8">
                        <Label htmlFor="businessModel" className="my-5 font-semibold">
                            Tell us about your business model
                        </Label>
                        <Input
                            id="businessModel"
                            name="businessModel"
                            className="w-auto  "
                            rows={5}
                            value={companyOverviewData.businessModel}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex flex-col my-2">
                        <Label htmlFor="techStack" className="font-semibold my-2">
                            Tech Stack
                        </Label>
                        <Input
                            id="techStack"
                            name="techStack"
                            className="w-auto  "
                            value={companyOverviewData.techStack}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="my-2 mt-8">
                        <Label htmlFor="growth" className="my-2 font-semibold">
                            Growth Opportunity
                        </Label>
                        <ReactQuill
                            className='border-0 my-2 w-auto '
                            name="growth"
                            value={companyOverviewData.growth}
                            onChange={value => setCompanyOverviewData(prevState => ({ ...prevState, growth: value }))}
                            modules={{
                                toolbar: [
                                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                    [{ list: 'ordered' }, { list: 'bullet' }],
                                    ['link', 'image'],
                                    ['clean'],
                                ],
                            }}
                        />
                    </div>
                    <div className="my-2 mt-8">
                        <Label htmlFor="assets" className=" my-2 font-semibold">
                            Key Assets
                        </Label>
                        <ReactQuill
                            className='border-0 my-2 w-auto '
                            name="assets"
                            value={companyOverviewData.assets}
                            onChange={value => setCompanyOverviewData(prevState => ({ ...prevState, assets: value }))}
                            modules={{
                                toolbar: [
                                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                    [{ list: 'ordered' }, { list: 'bullet' }],
                                    ['link', 'image'],
                                    ['clean'],
                                ],
                            }}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        type="button"
                        className="rounded-full bg-[#234C46] px-6 mx-auto"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

