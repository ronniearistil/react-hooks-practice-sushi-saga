import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

function App() {
  const [sushi, setSushi] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [moneyRemaining, setMoneyRemaining] = useState(100); // Set your initial budget here
  const [eatenSushi, setEatenSushi] = useState([]);

  useEffect(() => {
    // Fetch sushi data from server
    fetch("http://localhost:3001/sushis")
      .then((response) => response.json())
      .then((data) => setSushi(data));
  }, []);

  // Helper function to handle eating sushi
  const handleEatSushi = (sushiItem) => {
    if (moneyRemaining >= sushiItem.price && !eatenSushi.includes(sushiItem.id)) {
      setMoneyRemaining((prev) => prev - sushiItem.price);
      setEatenSushi([...eatenSushi, sushiItem.id]);
    }
  };

  // Function to handle "More Sushi!" button click
  const handleMoreSushi = () => {
    setCurrentIndex((prev) => prev + 4);
  };

  return (
    <div className="app">
      <SushiContainer
        sushi={sushi.slice(currentIndex, currentIndex + 4)} // Only show 4 sushi at a time
        handleEatSushi={handleEatSushi}
        eatenSushi={eatenSushi}
        onMoreSushi={handleMoreSushi}
      />
      <Table moneyRemaining={moneyRemaining} eatenSushi={eatenSushi} />
    </div>
  );
}

export default App;
