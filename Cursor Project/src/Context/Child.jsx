import React from "react";
import GrandChild from "./GrandChild";
const Child = () => {
  return (
    <div>
      <GrandChild />
    </div>
  );
};

export default Child;

// Child 再傳遞給 GrandChild
