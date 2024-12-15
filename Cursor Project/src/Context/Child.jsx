import { React, useContext } from "react";
import ThemeContext from "./Context";
const Child = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const themeStyle = {
    light: {
      backgroundColor: "white",
      color: "black",
      padding: "20px",
      textAlign: "center",
    },
    dark: {
      backgroundColor: "black",
      color: "white",
      padding: "20px",
      textAlign: "center",
    },
  };
  return (
    <div style={themeStyle[theme]}>
      <button
        onClick={() => {
          toggleTheme();
        }}
      >
        Change Color
      </button>
    </div>
  );
};

export default Child;
