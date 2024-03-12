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
import { IoLocationOutline } from "react-icons/io5";

export function StartupContentModal({ open, setOpen }) {
    const [startupInfoData, setStartupInfoData] = useState({
        askingPrice: "",
        multiplies: "",
        ttmRevenue: "",
        ttmProfit: "",
        monthly: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStartupInfoData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };
    


    const handleSubmit = () => {
        const payload = {
            askingPrice: startupInfoData.askingPrice,
            multiplies: startupInfoData.multiplies,
            ttmRevenue: startupInfoData.ttmRevenue,
            ttmProfit: startupInfoData.ttmProfit,
            monthly: startupInfoData.monthly,

        }

        console.log("Your input data is: ", payload);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
          
            <DialogContent className="w-full sm:w-[525px]">
                <DialogHeader >
                    <div className="sm:flex justify-between my-5">
                        <DialogTitle>Startup Information</DialogTitle>
                        <div className="flex gap-x-4 items-center justify-center sm:justify-between text-gray-400">
                            <IoLocationOutline />
                            <p>United State</p>
                        </div>
                    </div>

                    <DialogDescription className=" text-center">
                        Enter your information about your startup in breifly
                    </DialogDescription>

                </DialogHeader>
                <hr className="bg-[#53b3a8] my-3" />

                <div className="py-4">
                    <div className="flex justify-between items-center my-2">
                        <Label htmlFor="price" className="w-full sm:w-fit">
                            Asking Price
                        </Label>
                        <Input
                            id="price"
                            className="w-full sm:w-[350px]"
                            name="askingPrice"
                            value={startupInfoData.askingPrice}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex justify-between items-center my-2">
                        <Label htmlFor="multiplies" className="w-full sm:w-fit">
                            Multiplies
                        </Label>
                        <Input
                            id="multplies"
                            className="w-full sm:w-[350px]"
                            name="multiplies"
                            value={startupInfoData.multiplies}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="flex justify-between items-center my-2">
                        <Label htmlFor="Revenue" className="w-full sm:w-fit">
                            TTM Revenue
                        </Label>
                        <Input
                            id="Revenue"
                            className="w-full sm:w-[350px]"
                            name="ttmRevenue"
                            value={startupInfoData.ttmRevenue}
                            onChange={handleInputChange}

                        />
                    </div>

                    <div className="flex justify-between items-center my-2">
                        <Label htmlFor="profit" className="w-full sm:w-fit">
                            TTM Profit
                        </Label>
                        <Input
                            id="profit"
                            className="w-full sm:w-[350px]"
                            name="ttmProfit"
                            value={startupInfoData.ttmProfit}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="flex justify-between items-center my-2">
                        <Label htmlFor="monthlyRevenue" className="w-full sm:w-fit">
                            Monthly
                        </Label>
                        <Input
                            id="monthlyRevenue"
                            className="w-full sm:w-[350px]"
                            name="monthly"
                            value={startupInfoData.monthly}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        type="submit"
                        className="rounded-full bg-[#234C46] px-6 mx-auto"
                        onClick={handleSubmit}
                    >
                        Submit

                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
