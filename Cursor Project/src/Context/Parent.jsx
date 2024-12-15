import { React, useState } from "react";
import ThemeContext from "./Context";
import Child from "./Child";
const Parent = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* 這邊放需要 Context.js 資料的 Components */}
      <Child />
    </ThemeContext.Provider>
  );
};

export default Parent;
