import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    AlertDialog,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaAngleDown } from "react-icons/fa";
import { useState } from 'react'; // Import useState hook

export function FilterModal({open, setOpen}) {
    const [isAccordionOpen, setAccordionOpen] = useState(false);
    // const [open, setOpen] = useState();

    return (
        <Dialog className="filter-dialog rounded-xl p-0" open={open} onOpenChange={setOpen}>
            <DialogContent className=" w-[300px] sm:w-[425px] text-[#ff7236]">
                <DialogHeader>
                    <DialogTitle className="text-center text-[15px] my-3 text-black">More Filters</DialogTitle>
                    <hr className="bg-[#53b3a8]" />
                    
                </DialogHeader>
                <div className="grid gap-y-4 py-4  text-black">
                    <div className="flex justify-between items-center gap-4 mb-3">
                        <Label htmlFor="name" className="text-right">
                            Favourites
                        </Label>
                        <Input id="name" type="Checkbox" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <hr className="bg-[#53b3a8]" />
                    <div className="flex justify-between items-center gap-4 mb-3">
                        <Label htmlFor="name" className="text-right">
                            Verified Funds
                        </Label>
                        <Input id="name" type="Checkbox" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <hr className="bg-[#53b3a8]" />

                    {/* Accordion Section */}
                    <div>

                        <button className="flex items-center justify-between w-full py-2 rounded-md focus:outline-none focus:border-blue-500 transition-all duration-700 ease-in-out" onClick={() => setAccordionOpen(!isAccordionOpen)}>
                            <span>Message status</span>
                            <span className={`w-5 h-5 transition-transform transform ${isAccordionOpen ? 'rotate-180' : ''}`}>
                                <FaAngleDown />
                            </span>
                        </button>
                        {/* Accordion Content */}
                        {isAccordionOpen && (
                            <div className="rounded-b-md">
                                <div className="flex  items-center gap-4 mb-3">

                                    <Input id="name" type="Checkbox" value="Pedro Duarte" className="col-span-3" />
                                    <Label htmlFor="name" className="text-right">
                                        Verified Funds
                                    </Label>
                                </div>
                                
                                <div className="flex  items-center gap-4 mb-3">

                                    <Input id="name" type="Checkbox" value="Pedro Duarte" className="col-span-3" />
                                    <Label htmlFor="name" className="text-right">
                                        Verified Funds
                                    </Label>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* End of Accordion Section */}
                    <hr className="bg-[#53b3a8]" />

                    <div className="flex justify-between items-center gap-4 mb-3">
                        <Label htmlFor="name" className="text-right">
                            Show archived buyers
                        </Label>
                        <Input id="name" type="Checkbox" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <hr className="bg-[#53b3a8]" />
                    <div className="flex justify-between items-center gap-4 mb-3">
                        <Label htmlFor="name" className="text-right">
                            Hide unverified buyers
                        </Label>
                        <Input id="name" type="Checkbox" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <hr className="bg-[#53b3a8]" />
                </div>
                {/* <DialogFooter className="flex justify-center"> */}
                <div className="flex justify-center gap-x-4">
                    <Button
                        type="submit"
                        className="rounded-full bg-transparent text-black border hover:text-white border-black"
                    >Clear All
                    </Button>

                    <Button
                        type="submit"
                        className="rounded-full bg-[#234C46] px-6"
                    >
                        Apply

                    </Button>
                </div>

                {/* </DialogFooter> */}
            </DialogContent>
        </Dialog>
    )
}
