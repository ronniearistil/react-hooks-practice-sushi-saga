import React from "react";

function Table({ moneyRemaining, eatenSushi }) {
  const renderPlates = (array) => {
    return array.map((_, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }} />;
    });
  };

  return (
    <>
      <h1 className="remaining">You have: ${moneyRemaining} remaining!</h1>
      <div className="table">
        <div className="stack">{renderPlates(eatenSushi)}</div>
      </div>
    </>
  );
}

export default Table;

