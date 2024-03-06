import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaPlus } from "react-icons/fa6";

export function AccordionComponent() {
  return (
    <Accordion type="single" collapsible className="w-full mt-12 border-t">
      <AccordionItem value="item-1">
        <AccordionTrigger className="no-decoration">
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
      <AccordionItem value="item-2">
        <AccordionTrigger className="no-decoration">
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
      <AccordionItem value="item-3">
        <AccordionTrigger className="no-decoration">
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
      <AccordionItem value="item-4">
        <AccordionTrigger className="no-decoration">
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
