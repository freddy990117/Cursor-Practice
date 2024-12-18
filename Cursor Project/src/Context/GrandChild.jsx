import React, { useContext } from "react";
import { ThemeContext } from "./Context";
const GrandChild = () => {
  // 透過 useContext 使用 ThemeContext 的值，ThemeContext 的值在 Parent Provider 的 value 內 !!!
  const { changeBtn, color } = useContext(ThemeContext);
  return (
    <div
      style={{ backgroundColor: color.backgroundColor, color: color.fontColor }}
    >
      <h2>目前的背景顏色是：{color.backgroundColor}</h2>
      <h2>目前的文字顏色是：{color.fontColor}</h2>
      <button onClick={changeBtn}>切換主題</button>
    </div>
  );
};

export default GrandChild;
