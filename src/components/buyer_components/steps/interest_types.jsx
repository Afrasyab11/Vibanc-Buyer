"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "../../ui/card";
import { VibancButton } from "@/components/common/VibancButtons";
import { icons } from "@/assets";
// Assuming the icons import works as expected
const inputCards = [
  {
    id: "content",
    text: "Content",
    icon: icons.content,
  },
  {
    id: "agency",
    text: "Agency",
    icon: icons.agency,
  },
  {
    id: "ecommerce",
    text: "E-commerce",
    icon: icons.ecommerce,
  },
  {
    id: "other",
    text: "Other",
    icon: icons.other,
  },
  {
    id: "saaS",
    text: "SaaS",
    icon: icons.saaS,
  },
  {
    id: "shopify",
    text: "Shopify",
    icon: icons.shopify,
  },
  {
    id: "mobileapp",
    text: "Mobile App",
    icon: icons.mobileapp,
  },
  {
    id: "marketplace",
    text: "Marketplace",
    icon: icons.marketplace,
  },
];

export const InterestTypes = () => {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardSelection = (cardText) => {
    const isSelected = selectedCards.includes(cardText);
    if (isSelected) {
      setSelectedCards(selectedCards.filter((text) => text !== cardText));
    } else {
      setSelectedCards([...selectedCards, cardText]);
    }
  };

  const handledClickNext = () => {
    console.log("Selected Cards:", selectedCards);
    // Navigation or next step logic here
  };

  return (
    <>
      <div className="w-full px-2 py-6 md:w-3/4 mx-auto flex flex-col gap-y-14 justify-center">
        <section className="mx-auto">
          <h1 className="w-fit md:mt-9 text-[#234C46] text-2xl font-bold">
            Which startup types interest you?
          </h1>
        </section>
        <section>
          <section className="  lg:grid lg:grid-cols-12 sm:grid sm:grid-cols-12 md:grid md:grid-cols-12 gap-5 gap-y-4 text-sm lg:p-4 px-14">
            {inputCards.map((card, index) => (
              <div key={index} className="lg:col-span-3 md:col-span-4 sm:col-span-6 mb-2">
                <div
                  key={card.id}
                  className="cursor-pointer"
                  onClick={() => handleCardSelection(card.text)}
                >
                  <Card
                    className={`rounded-2xl ${
                      selectedCards.includes(card.text)
                        ? "border-2 border-green "
                        : "border-gray-300"
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
                      <p className="w-fit">{card.text}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </section>
        </section>
        <div className="text-end md:pr-2 lg:pr-[220px]">
          <VibancButton
            text="Next"
            isIcon={true}
            disabled={!selectedCards.length}
            onClick={handledClickNext}
          />
        </div>
      </div>
    </>
  );
};
