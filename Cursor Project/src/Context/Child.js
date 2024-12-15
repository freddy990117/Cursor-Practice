import { React, useContext } from "react";
import MyContext from "./Context";
const Child = () => {
  const { shareValue, setShareValue } = useContext(MyContext);
  return (
    <div>
      <p>{shareValue}</p>
      <button
        onClick={() => {
          setShareValue("Change by button");
        }}
      >
        Change Context
      </button>
    </div>
  );
};

export default Child;
