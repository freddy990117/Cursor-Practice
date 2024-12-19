import React from "react";
import { useLocation } from "react-router-dom";

const Book = () => {
  const location = useLocation();
  const bookName = location.state;
  return (
    <div>
      <h2>我是 {bookName.state}</h2>
    </div>
  );
};

export default Book;
