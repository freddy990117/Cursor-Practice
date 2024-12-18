import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const state = useNavigate();

  return (
    <div>
      <header>
        <button
          onClick={() => {
            // 第一個參數 path : 要去的地方，第二個參數 option state: object：傳遞導航時的額外數據（類似於 location state）(我不太了解)
            state("/book", { state: { state: "大人學選擇" } });
          }}
        >
          大人學選擇
        </button>
        <button
          onClick={() => {
            state("/book", { state: { state: "被討厭的勇氣" } });
          }}
        >
          被討厭的勇氣
        </button>
        <button
          onClick={() => {
            state("/book", { state: { state: "12周做完一年份工作" } });
          }}
        >
          12周做完一年份工作
        </button>
      </header>
    </div>
  );
};

export default Homepage;
