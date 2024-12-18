import { createContext } from "react";

const ThemeContext = createContext();

const theme = {
  light: {
    fontColor: "black",
    backgroundColor: "white",
  },
  dark: {
    fontColor: "white",
    backgroundColor: "black",
  },
};
export { ThemeContext, theme };

// Context.jsx 建立 Context 的值
