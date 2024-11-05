import React from "react";
import { com1, com2, com3 } from "../Cursor Project/src/test";

const Practice1105 = () => {
  return (
    <div>
      <ComponentProp />
    </div>
  );
};

export default Practice1105;

// 11/05 課程內容 =>
// npm install [packageName] , Component's Style , Component(prop) ,  State的繼承關係 ,
// 複數的 Component export 方式 , onClick 點擊事件處理 , useState , useEffect

// 1.npm install [package] 可至 npm 官網看需要安裝哪個 package , License 是 MIT 用途最廣，商業、私人皆可。
// npm 用來安裝 packages， npx 用來臨時執行 packages (主要用於只需要安裝一次的 package )

// 2.Component's Style
const ComponentStyle = { color: "blue" };
// 在 return 時，style = {} 內不用再套用一個 {}，因為這個 Component 已經是一個 Object 了。
// 若重複設定到相同的 className 的話，後面 import 的 css 會自動取代前面的 css

// 3.Component(prop)
const PropStyle = {
  width: "100vh",
  backgroundColor: "blue",
};
const ComponentProp = (prop) => {
  // ObJect 內的 { Name, Age, Where } 傳入 prop 當作參數，再 return 該 Component 時呼叫
  const { Name, Age, Where } = prop;
  // or const ComponentProp = ({ Name, Age, Where })

  // Array of Object
  const info = [
    {
      Name: "Eric",
      Age: 25,
      Where: "Taipei",
    },
  ];

  return (
    <div style={PropStyle}>
      {/* 1. Object return 的方式 */}
      <h1>My name is {Name}</h1>
      <h1>I am {Age} Old</h1>
      <h1>I am from {Where}</h1>

      {/* 2. Array of Object 的方式 return props*/}

      {info.map((d) => {
        return (
          <div>
            <h2>My name is {d.Name}</h2>
            <h2>I am {d.Age} old</h2>
            <h2>I am from {d.Where}</h2>
          </div>
        );
      })}

      <h3> 我是 {com1}</h3>
    </div>
  );
};

// 11/05 useState Props  export複數的Components
// const com1 = () => {
//   return <p>com1</p>;
// };

// const com2 = () => {
//   return <p>com2</p>;
// };

// const com3 = () => {
//   return <p>com1</p>;
// };

// export { com1, com2 };

// const times = (count) => {
//   return count * 2;
// };
// const CountFun = () => {
//   const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(0);
//   return (
//     <div>
//       <h2>Count : {count}</h2>
//       <h2>Count2 : {count2}</h2>
//       <button
//         onClick={() => {
//           setCount((pre) => pre + 1);
//           setCount((pre) => pre + 1);
//           setCount2(times(count * 2));
//         }}
//       >
//         Click me
//       </button>
//     </div>
//   );
// };
