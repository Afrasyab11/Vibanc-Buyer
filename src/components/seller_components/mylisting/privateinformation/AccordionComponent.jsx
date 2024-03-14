"use client"
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaPlus } from "react-icons/fa6";

export function AccordionComponent() {
  const [openItem, setOpenItem] = useState(null); // State to track the currently open item

  const toggleItem = (itemValue) => {
    setOpenItem(openItem === itemValue ? null : itemValue);
  };

  return (
    <Accordion type="multiple" collapsible className="w-full mt-12 border-t">
      <AccordionItem value="item-1" isOpen={openItem === "item-1"}>
        <AccordionTrigger
          className="no-decoration"
          onClick={() => toggleItem("item-1")}
        >
          Seller Details
        </AccordionTrigger>
        <AccordionContent>
          <div className="border-2 border-[#daf2ef] rounded-xl p-4 text-center">
            <h1 className="font-semibold my-2 text-sm">
              Tell us about yourself
            </h1>
            <p className="py-2 text-[#7b8987] text-xs">
              Enter a few personal details to help buyers get to know you
              better.
            </p>
            <button className="bg-[#abd0c6] text-xs px-3 py-2 font-semibold my-3 rounded-full">
              Create Profile
            </button>
          </div>
        </AccordionContent>
      </AccordionItem>
      {/* Repeat for other accordion items */}
      {/* AccordionItem 2 */}
      <AccordionItem value="item-2" isOpen={openItem === "item-2"}>
        <AccordionTrigger
          className="no-decoration"
          onClick={() => toggleItem("item-2")}
        >
          Startup Details
        </AccordionTrigger>
        <AccordionContent>
          <div className="border-2 border-[#daf2ef] rounded-xl p-4 text-center">
            <h1 className="font-semibold my-2 text-sm">
              Tell us about Startup
            </h1>
            <p className="py-2 text-[#7b8987] text-xs">
              Enter a few personal details to help buyers get to know you
              better.
            </p>
            <button className="bg-[#abd0c6] text-xs px-3 py-2 font-semibold my-3 rounded-full">
              Add details
            </button>
          </div>
        </AccordionContent>
      </AccordionItem>
      {/* AccordionItem 3 */}
      <AccordionItem value="item-3" isOpen={openItem === "item-3"}>
        <AccordionTrigger
          className="no-decoration"
          onClick={() => toggleItem("item-3")}
        >
          P&L Statement
        </AccordionTrigger>
        <AccordionContent>
          <div className="p-4 text-center">
            <p className="py-2 text-[#7b8987] text-xs">
              Enter a few personal details to help buyers get to know you
              better.
            </p>
            <button className="flex items-center w-full justify-center gap-x-3 bg-[#abd0c6] text-xs px-3 py-2 font-semibold my-3 rounded-full mx-auto ">
              <FaPlus />
              <span>Upload P&L</span>
            </button>
          </div>
        </AccordionContent>
      </AccordionItem>
      {/* AccordionItem 4 */}
      <AccordionItem value="item-4" isOpen={openItem === "item-4"}>
        <AccordionTrigger
          className="no-decoration"
          onClick={() => toggleItem("item-4")}
        >
          Documents and Files
        </AccordionTrigger>
        <AccordionContent>
          <div className="p-4 text-center">
            <p className="py-2 text-[#7b8987] text-xs">
              Enter a few personal details to help buyers get to know you
              better.
            </p>
            <button className="flex items-center w-full justify-center gap-x-3 bg-[#abd0c6] text-xs px-3 py-2 font-semibold my-3 rounded-full mx-auto ">
              <FaPlus />
              <span>Upload file</span>
            </button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
