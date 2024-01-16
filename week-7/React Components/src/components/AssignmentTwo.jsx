import React from "react";
import { useState } from "react";

const AssignmentTwo = () => {
  const [currentColor, setCurrentColor] = useState("");
  4;
  function handleClick(color) {
    setCurrentColor(color);
  }
  return (
    <div
      style={{
        backgroundColor: currentColor,
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <button onClick={() => handleClick("red")}>red</button>
      <button onClick={() => handleClick("black")}>black</button>
      <button onClick={() => handleClick("blue")}>blue</button>
      <button onClick={() => handleClick("green")}>green</button>
      <button onClick={() => handleClick("pink")}>pink</button>
      <button onClick={() => handleClick("white")}>default</button>
    </div>
  );
};

export default AssignmentTwo;
