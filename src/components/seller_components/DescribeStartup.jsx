"use client";
import React, { useState } from "react";
import { InterestCards } from "../common/InterestCards";
function DescribeStartup({ setGetReadyStep }) {


  const [selectedCards, setSelectedCards] = useState([]);
  const handleCardSelection = (cardText) => {
    const isSelected = selectedCards.includes(cardText);
    if (isSelected) {
      setSelectedCards(selectedCards.filter((text) => text !== cardText));
    } else {
      setSelectedCards([cardText]);
    }
  };

  const handleClick = () => {
    setGetReadyStep("startup_url");
  };
  return (
    <>
      <InterestCards
        handleCardSelection={handleCardSelection}
        handledClickNext={handleClick}
        selectedCards={selectedCards}
        title={"How would you describe your startup?"}
      />
    </>
  );
}

export default DescribeStartup;
