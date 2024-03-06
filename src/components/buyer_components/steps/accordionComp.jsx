import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { icons } from "@/assets";
import Image from "next/image";
import { Input } from "../../ui/input";

export const AccordionComp = () => {
  const data = [
    {
      id: "01",
      title: "What is your ideal asking price range?",
      icon: icons.range,
    },
    {
      id: "02",
      title: "What is your ideal revenue multiple range?",
      icon: icons.range,
    },
    {
      id: "03",
      title: "What is your ideal profit multiple range?",
      icon: icons.range,
    },
    {
      id: "04",
      title: "What is your ideal trailing twelve-month (TTM) revenue range?",
      icon: icons.range,
    },
    {
      id: "05",
      title: "What is your ideal trailing twelve-month (TTM) profit range?",
      icon: icons.range,
    },
    {
      id: "06",
      title: "Which industries, business models, and tech stacks interest you?",
      icon: icons.range,
    },
    {
      id: "07",
      title: "In which countries would you prefer your startup to reside?",
      icon: icons.range,
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full ">
      {/* <Form> */}
      <form className="">
        {data?.map((obj) => (
          <>
            <AccordionItem
              value={obj.id}
              className="border-2 border-[#ABD0C6] my-2 rounded-lg px-5 py-2"
            >
              <AccordionTrigger className="no-decoration">
                <div className="text-lg font-semibold">
                  <span className="mr-4">{obj?.id}</span>
                  <span>{obj?.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-12  items-center gap-4 ">
                  <div className={`col-span-2`}></div>
                  <div className={`col-span-8`}>
                    <Image
                      className="w-full h-auto"
                      src={obj.icon}
                      alt="range"
                      // width={50}
                      // height={50}
                      // layout="fixed"
                    />
                  </div>
                  <div className={`col-span-2`}></div>
                </div>
                <div className="grid grid-cols-12  items-center gap-4 ">
                  <div className={`col-span-2`}></div>
                  <div className={`col-span-4`}>
                  <Input placeholder="abc" />
                  </div>
                  <div className={`col-span-4`}>
                    <Input placeholder="abc" />
                  </div>
                  <div className={`col-span-2`}></div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </>
        ))}
      </form>
      {/* </Form> */}
    </Accordion>
  );
};
