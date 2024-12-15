// import { React, useContext } from "react";
// import ThemeContext from "./Context";
// const Child = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const themeStyle = {
//     light: {
//       backgroundColor: "white",
//       color: "black",
//       padding: "20px",
//       textAlign: "center",
//     },
//     dark: {
//       backgroundColor: "black",
//       color: "white",
//       padding: "20px",
//       textAlign: "center",
//     },
//   };
//   return (
//     <div style={themeStyle[theme]}>
//       <button
//         onClick={() => {
//           toggleTheme();
//         }}
//       >
//         Change Color
//       </button>
//     </div>
//   );
// };
// export default Child;
// 第一次練習

import React, { useContext } from "react";
import { ThemeContext } from "./Context";

const Child = () => {
  const { currentTheme, toggleBtn } = useContext(ThemeContext);
  console.log(currentTheme);
  return (
    <div
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.fontColor,
        padding: "20px",
      }}
    >
      <button onClick={toggleBtn}>Change Color</button>
    </div>
  );
};

export default Child;
