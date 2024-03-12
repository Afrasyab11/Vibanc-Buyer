import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { VibancButton } from "@/components/common/VibancButtons";

export const InterestCards = ({
  handleCardSelection,
  handledClickNext,
  inputCards,
  selectedCards,
  title,
}) => {
  return (
    <>
      <div className="w-full px-2 pt-14 md:w-4/4 lg:w-3/4 xl:w-2/4 gap-y-14 pb-14 mx-auto flex flex-col  justify-center">
        <section className="mx-auto">
          <h1 className="w-fit text-green_dark sm:text-[14px] md:text-[16px] xl:text-[22px] text-[20px] font-bold">{title}</h1>
        </section>
        <section className=" lg:grid lg:grid-cols-12 sm:grid sm:grid-cols-12 md:grid md:grid-cols-12 gap-5 gap-y-4 text-sm lg:p-4 px-14">
          {inputCards.map((card, index) => (
            <div key={index} className="lg:col-span-3 md:col-span-3 sm:col-span-12 ">
              <Card
                key={index}
                onClick={() => handleCardSelection(card.text)}
                className={`rounded-2xl cursor-pointer py-1 ${
                  selectedCards.includes(card.text)
                    ? "border-2 border-green "
                    : "border-border_light border-2"
                }`}
              >
                <CardContent className="md:px-1 mt-5 flex flex-col justify-center items-center gap-y-2">
                  <Image
                    src={card.icon}
                    alt={card.text}
                    width={50}
                    height={50}
                    layout="fixed"
                  />
                  <p className="w-fit font-semibold sm:text-[12px] md:text-[13px] lg:text-[14px] xl:[21px] 2xl:text-[20px]">{card.text}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </section>
        <div className="grid grid-cols-12 px-14 pt-4">
          <div className="col-start-9 col-span-3 2xl:flex 2xl:justify-center">
            <VibancButton
              text="Next"
              isIcon={true}
              disabled={!selectedCards.length}
              onClick={handledClickNext}
            />
          </div>
        </div>
      </div>
    </>
  );
};
