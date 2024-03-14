"use client";
import React, { useState } from "react";
import { InterestCards } from "@/components/common/InterestCards";


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
        title={"Which startup types interest you?"}
      />
    </>
  );
};
