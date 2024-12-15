import { React, useState } from "react";
import MyContext from "./Context";
import Child from "./Child";
const Parent = () => {
  const [shareValue, setShareValue] = useState("Hello from Context!");
  return (
    <MyContext.Provider value={{ shareValue, setShareValue }}>
      {/* 這邊放需要 MyContext 資料的 Components */}
      <Child />
    </MyContext.Provider>
  );
};

export default Parent;
