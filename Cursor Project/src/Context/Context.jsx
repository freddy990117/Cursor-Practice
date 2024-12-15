// import React, { createContext } from "react";

// const MyContext = createContext(); // 建立 Context

// const ThemeContext = createContext();
// export default ThemeContext;
// 第一次練習
//  只包含了 createContext，沒有 JSX 元素，所以檔名可使用 .js 即可

import { createContext } from "react";

const ThemeContext = createContext();
const theme = {
  dark: {
    backgroundColor: "black",
    fontColor: "white",
  },
  light: {
    backgroundColor: "white",
    fontColor: "black",
  },
};

export { ThemeContext, theme };
