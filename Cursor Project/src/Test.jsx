import React from "react";

const com1 = () => {
  return <h1> I am Com1</h1>;
};
const com2 = () => {
  return <h1> I am Com2</h1>;
};
const com3 = () => {
  const com4 = () => {
    return <h1>I am Com4</h1>;
  };
  return <h1> I am Com3</h1>;
};

export { com1, com2, com3 };
