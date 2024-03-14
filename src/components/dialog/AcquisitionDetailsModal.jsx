"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";

export function AcquisitionDetailsModal({open,setOpen}) {

    const [acquisitionDetails, setAcquisitionDetails] = useState({
        sellingReason: "",
        financing: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAcquisitionDetails(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = () =>{
        const payload = {
            sellingReason: acquisitionDetails.sellingReason,
            financing: acquisitionDetails.financing,
        }

        console.log("You entered tha data: ", payload);
    }
    return (
        <Dialog open={open} onOpenChange={setOpen} >
           
            <DialogContent className="w-full sm:w-[525px]">
                <DialogHeader >
                   
                        <DialogTitle className="my-5">Acquisition Details</DialogTitle>
                    

                    <DialogDescription>
                        Enter your information about your startup in breifly
                    </DialogDescription>

                </DialogHeader>
                <hr className="bg-[#53b3a8] my-3" />

                <div className="py-4">
                    <div className=" items-center my-2">
                        <Label htmlFor="selling-reason" className="w-full">
                            Selling Reason
                        </Label>
                        <Input 
                        id="selling-reason" 
                        className="w-full my-2" 
                        name="sellingReason"
                        value={acquisitionDetails.sellingReason}
                        onChange = {handleInputChange}
                        />
                    </div>


                    <div className=" items-center my-2">
                        <Label htmlFor="financing" className="w-full">
                            Financing
                        </Label>
                        <Input 
                        id="financing" 
                        className="w-full my-2"
                        name="financing"
                        value = {acquisitionDetails.financing}
                        onChange = {handleInputChange}
                        />
                    </div>

                </div>
                <DialogFooter>
                <Button
                        type="submit"
                        className="rounded-full bg-[#234C46] px-6 mx-auto"
                        onClick = {handleSubmit}
                    >
                        Submit

                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
