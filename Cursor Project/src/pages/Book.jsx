import React from "react";
import { useLocation } from "react-router-dom";

const Book = () => {
  const location = useLocation();
  const state = location.state;
  return (
    <div>
      <h2>我是 Book</h2>
      <h2>{state.bookName}</h2>
    </div>
  );
};

export default Book;
