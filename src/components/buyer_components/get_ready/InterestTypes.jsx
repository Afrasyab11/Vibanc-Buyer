"use client";
import React, { useState } from "react";
import { icons } from "@/assets";
import { InterestCards } from "@/components/common/InterestCards";
const inputCards = [
  {
    id: "marketplace",
    text: "Marketplace",
    icon: icons.marketplace,
  },
  {
    id: "saaS",
    text: "SaaS",
    icon: icons.saaS,
  },
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
    id: "shopify",
    text: "Shopify app",
    icon: icons.shopify,
  },
  {
    id: "mobileapp",
    text: "Mobile App",
    icon: icons.mobileapp,
  },
  {
    id: "other",
    text: "Other",
    icon: icons.other,
  },
];

export const InterestTypes = ({ nextStep, setFormData }) => {
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
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedCards: selectedCards,
    }));

    nextStep();
    // Navigation or next step logic here
  };

  return (
    <>
      <InterestCards
        handleCardSelection={handleCardSelection}
        handledClickNext={handledClickNext}
        selectedCards={selectedCards}
        inputCards={inputCards}
        title={"Which startup types interest you?"}
      />
    </>
  );
};
