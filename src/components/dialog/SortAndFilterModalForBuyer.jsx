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
import { FaCheck } from "react-icons/fa6";

export function SortAndFilterModalForBuyer({ open, setOpen }) {

  const listData = [
    { listItem: "Last interacted with" },
    { listItem: "Asking price: Low to high" },
    { listItem: "Asking price: High to low" },
    { listItem: "Annual revenue: Low to high" },
    { listItem: "Annual revenue: High to low" },
    { listItem: "Annual profit: Low to high" },
    { listItem: "Annual Profit: High to low" },
  ];


  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


  return (
    <Dialog className="filter-dialog rounded-xl p-0" open={open} onOpenChange={setOpen}>
      <DialogContent className=" w-[300px] sm:w-[425px] text-[#ff7236]">
        <DialogHeader>
          <DialogTitle className="text-center text-[15px] my-3 text-black">Sort and filter</DialogTitle>
          <hr className="bg-[#53b3a8]" />

        </DialogHeader>
        <div className="grid gap-y-4 py-4  text-black">

          {/* Accordion Section */}
          <div>

            <button className="flex items-center justify-between w-full py-2 rounded-md focus:outline-none focus:border-blue-500 transition-all duration-700 ease-in-out" onClick={() => setAccordionOpen(!isAccordionOpen)}>
              <span>Sort by</span>
              <span className={`w-5 h-5 transition-transform transform ${isAccordionOpen ? 'rotate-180' : ''}`}>
                <FaAngleDown />
              </span>
            </button>
            {/* Accordion Content */}
            {isAccordionOpen && (
              <div className="rounded-b-md">
                <ul>
                  {listData.map((item, index) => (
                    <li
                      key={index}
                      className={`${selectedItem === item.listItem ? "bg-[#dbf2ee]" : ""} px-2 py-1 flex justify-between items-center mt-1`}
                      onClick={() => setSelectedItem(item.listItem)}
                    >
                      {item.listItem}
                      <FaCheck 
                      size={10}
                      className={`${selectedItem === item.listItem ? "block text-[#009f88]" : "hidden"}`}
                      />
                    </li>
                  ))}
                </ul>

              </div>
            )}
          </div>
          {/* End of Accordion Section */}
          <hr className="bg-[#53b3a8]" />


          <div className="flex justify-between items-center gap-4 mb-3">
            <Label htmlFor="name" className="text-right">
              Show archived
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
