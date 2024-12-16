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

// import React, { useContext } from "react";
// import { ThemeContext } from "./Context";

// const Child = () => {
//   const { currentTheme, toggleBtn } = useContext(ThemeContext);
//   console.log(currentTheme);
//   return (
//     <div
//       style={{
//         backgroundColor: currentTheme.backgroundColor,
//         color: currentTheme.fontColor,
//         padding: "20px",
//       }}
//     >
//       <button onClick={toggleBtn}>Change Color</button>
//     </div>
//   );
// };

// export default Child;
// 第二次練習

// import React from "react";
// import GrandChild from "./GrandChild";
// const Child = ({ color, toggleTheme }) => {
//   // return <GrandChild color={color} toggleTheme={toggleTheme} />;

//   // 此時 Child 已經有 Parent ThemeContext.Provider 傳遞的 value (color, toggleTheme)，可以不用使用 Props 傳遞，直接寫入 Components 即可。
//   return <GrandChild />;
// };
// export default Child;
// 第三次練習 多層次傳遞
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
