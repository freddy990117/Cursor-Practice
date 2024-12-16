// import React, { createContext } from "react";

// const MyContext = createContext(); // 建立 Context

// const ThemeContext = createContext();
// export default ThemeContext;
// 第一次練習
//  只包含了 createContext，沒有 JSX 元素，所以檔名可使用 .js 即可

// import { createContext } from "react";

// const ThemeContext = createContext();
// const theme = {
//   dark: {
//     backgroundColor: "black",
//     fontColor: "white",
//   },
//   light: {
//     backgroundColor: "white",
//     fontColor: "black",
//   },
// };

// export { ThemeContext, theme };
// 第二次練習

// import { createContext } from "react";

// const ThemeContext = createContext();

// const theme = {
//   light: {
//     backgroundColor: "white",
//     fontColor: "black",
//   },
//   dark: {
//     backgroundColor: "black",
//     fontColor: "white",
//   },
// };

// export { ThemeContext, theme };
// 第三次練習 多層次傳遞

// 在 Apppp 中的 ThemeContext.Provider 是共享資料的起點，定義了組件樹內的共享狀態。
// 任何需要使用這些共享資料的組件（如 GrandChild）可以使用 useContext 來直接取得。
// 中間的組件層級（Parent 和 Child）不需要傳遞資料作為 props，除非它們本身也需要使用這些資料。
// 重點：
// React Context 是為了避免「逐層傳遞 props」。
// 你可以直接在「需要的組件」中透過 useContext 存取資料，讓程式碼更簡潔、易讀。
import { createContext } from "react";

const languages = {
  en: { welcome: "Welcome", button: "Switch to Chinese" },
  zh: { welcome: "歡迎", button: "切換成英文" },
};

const languageContext = createContext();
export { languageContext, languages };
