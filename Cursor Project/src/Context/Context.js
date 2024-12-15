import React, { createContext } from "react";

const MyContext = createContext(); // 建立 Context

const ThemeContext = createContext();
export default ThemeContext;

//  只包含了 createContext，沒有 JSX 元素，所以檔名可使用 .js 即可
