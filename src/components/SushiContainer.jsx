import React from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({ sushi, handleEatSushi, eatenSushi, onMoreSushi }) {
  return (
    <div className="belt">
      {sushi.map((sushiItem) => (
        <Sushi
          key={sushiItem.id}
          sushi={sushiItem}
          onEatSushi={handleEatSushi}
          isEaten={eatenSushi.includes(sushiItem.id)}
        />
      ))}
      <MoreButton onMoreSushi={onMoreSushi} />
    </div>
  );
}

export default SushiContainer;
