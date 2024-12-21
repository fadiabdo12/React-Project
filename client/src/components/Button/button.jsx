import { useState } from "react";

export const Button = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const GenerateRandomNumber = (e) => {
    e.preventDefault();
    const newRandomNumber = Math.floor(Math.random() * 1000);
    setRandomNumber(newRandomNumber);
  };

  return (
    <button onClick={GenerateRandomNumber}>
      {randomNumber !== null ? randomNumber : "Press"}
    </button>
  );
};
