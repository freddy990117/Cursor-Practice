// import React, { useContext, useState } from "react";
// import { ThemeContext, theme } from "./Context";
// import Parent from "./Parent";
// const Appppp = () => {
//   const [color, setColor] = useState(theme.dark);
//   const toggleTheme = () => {
//     setColor((prev) => (prev === theme.dark ? theme.light : theme.dark));
//   };
//   return (
//     <div>
//       {/* 傳遞 color toggleTheme 給 Parent */}
//       <ThemeContext.Provider value={{ color, toggleTheme }}>
//         <Parent />
//       </ThemeContext.Provider>
//     </div>
//   );
// };

// export default Appppp;
// 第三次練習 多層次傳遞
import React, { useState } from "react";
import { languageContext, languages } from "./Context";
import Parent from "./Parent";

const Appppp = () => {
  const [show, setShow] = useState(languages.en);

  const toggleLanguage = () => {
    setShow((prev) => (prev === languages.en ? languages.zh : languages.en));
  };

  return (
    <div>
      <languageContext.Provider value={{ show, toggleLanguage }}>
        <Parent />
      </languageContext.Provider>
    </div>
  );
};

export default Appppp;
// 第四次練習
