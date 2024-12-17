import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const changeBackgroundColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
  };

  const handleChange = (delta) => {
    const newValue = count + delta;
    if (newValue >= -10 && newValue <= 10) {
      setCount(newValue);
      changeBackgroundColor();
    }
  };

  return (
    <div className="counter-container">
      <button className="counter-button" onClick={() => handleChange(-1)}>
        -
      </button>
      <span className="counter-value">{count}</span>
      <button className="counter-button" onClick={() => handleChange(1)}>
        +
      </button>
    </div>
  );
};

export default Counter;
