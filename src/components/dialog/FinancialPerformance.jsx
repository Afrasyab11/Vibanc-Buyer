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
import { useState } from "react"


export function FinancialPerformance({ open, setOpen }) {   

    return (

        <Dialog open={open} onOpenChange={setOpen}>
            
            <DialogContent className="w-full sm:w-[525px] overflow-y-auto max-h-[600px]" >
                <DialogHeader >

                    <DialogTitle className="my-4">Financial Performance</DialogTitle>

                    <DialogDescription>
                        Enter  Financial Performace of your Company
                    </DialogDescription>

                </DialogHeader>
                <hr className="bg-[#53b3a8] my-3" />

                <div className="py-4">
                    <div className="my-2">
                        <Label htmlFor="gross" className="w-full sm:w-fit">
                            TTM Gross Revenue
                        </Label>
                        <Input id="gross" className="w-full  my-3" required />
                    </div>

                    <div className="my-2">
                        <Label htmlFor="gross" className="w-full sm:w-fit">
                            TTM Gross Revenue
                        </Label>
                        <Input id="gross" className="w-full  my-3" />
                    </div>

                    <div className="my-2">
                        <Label htmlFor="profit" className="w-full sm:w-fit">
                            TTM Net Profit
                        </Label>
                        <Input id="profit" className="w-full  my-3" />
                    </div>

                    <div className="my-2">
                        <Label htmlFor="gross" className="w-full sm:w-fit">
                            Last months gross revenue
                        </Label>
                        <Input id="gross" className="w-full  my-3" />
                    </div>

                    <div className="my-2">
                        <Label htmlFor="gross" className="w-full sm:w-fit">
                            Last months net profit
                        </Label>
                        <Input id="gross" className="w-full  my-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        type="submit"
                        className="rounded-full bg-[#234C46] text-white px-6 mx-auto"
                    >
                        Submit

                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
