import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Book = () => {
  const location = useLocation();
  const state = location.state;
  console.log(location);
  return (
    <div>
      <h2>我是 {state.state}</h2>
    </div>
  );
};

export default Book;
