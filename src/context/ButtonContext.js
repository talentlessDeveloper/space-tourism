import React, { createContext, useState } from "react";

const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
  const [idx, setIdx] = useState(0);
  const [animation, setAnimation] = useState(true);
  const handleActive = (e) => {
    switch (e.target.dataset.name) {
      case "btn-0":
        setIdx(0);
        break;
      case "btn-1":
        setIdx(1);
        break;
      case "btn-2":
        setIdx(2);
        break;
      case "btn-3":
        setIdx(3);
        break;
      default:
        setIdx(0);
    }
    setAnimation(false);

    setTimeout(() => setAnimation(true), 300);
  };

  return (
    <ButtonContext.Provider value={{ idx, animation, handleActive }}>
      {children}
    </ButtonContext.Provider>
  );
};

export default ButtonContext;
