import { React, useState } from "react";
import { ThemeContext, theme } from "./Context";
import Child from "./Child";
const Parent = () => {
  // Color 預設是白色
  const [color, setColor] = useState(theme.light);

  // 如果是白色，就換黑色，反之
  const changeBtn = () => {
    setColor((prev) => (prev === theme.dark ? theme.light : theme.dark));
  };

  return (
    <div>
      {/* 提供 changeBtn, color 這兩個值給 Child，同時也提供這兩個值給了 ThemeContext!!! */}
      <ThemeContext.Provider value={{ changeBtn, color }}>
        <Child />
      </ThemeContext.Provider>
    </div>
  );
};

export default Parent;
// Parent 內設定功能，並透過 Provider 傳遞給 Child
