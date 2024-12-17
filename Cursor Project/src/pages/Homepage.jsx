import React from "react";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>This is HomePage : )</h2>
      <button
        onClick={() => {
          navigate("/book", { state: { bookName: "大人學選擇" } });
        }}
      >
        大人學選擇
      </button>
      <button
        onClick={() => {
          navigate("/book", { state: { bookName: "大人學做事做人" } });
        }}
      >
        大人學做事做人
      </button>
      <button
        onClick={() => {
          navigate("/book", { state: { bookName: "12周做完一年工作" } });
        }}
      >
        12周做完一年工作
      </button>
    </div>
  );
};

export default Homepage;
