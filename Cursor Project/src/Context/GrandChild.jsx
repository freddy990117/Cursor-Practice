import React, { useContext } from "react";
import { ThemeContext } from "./Context";
// const GrandChild = ({ color, toggleTheme }) => {
//   console.log(color);

//   return (
//     <div
//       style={{
//         backgroundColor: color.backgroundColor,
//         color: color.fontColor,
//       }}
//     >
//       <h2>目前的背景顏色是 : {color.backgroundColor}</h2>
//       <h2>目前的文字顏色是 : {color.fontColor}</h2>
//       <button onClick={toggleTheme}>改變顏色</button>
//     </div>
//   );
// };

const GrandChild = () => {
  // 接著在需要的地方使用 useContext 即可。
  const { color, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: color.backgroundColor,
        color: color.fontColor,
      }}
    >
      <h2>目前的文字顏色是 : {color.fontColor}</h2>
      <h2>目前的背景顏色是 : {color.backgroundColor}</h2>
      <button onClick={toggleTheme}>改變顏色</button>
    </div>
  );
};
export default GrandChild;
// 第三次練習 多層次傳遞