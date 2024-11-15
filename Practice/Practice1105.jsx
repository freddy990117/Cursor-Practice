import React, { useState, useEffect } from "react";
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
    </div>
  );
};

// 4. Export 複數的 Components
const Com1 = () => {
  return (
    <h1>
      <Com1 />
    </h1>
  );
};
const Com2 = () => {
  return (
    <h1>
      <Com2 />
    </h1>
  );
};
const Com3 = () => {
  return (
    <h1>
      <Com3 />
    </h1>
  );
};
export { Com1, Com2, Com3 };
// or export Com1... export Com2... export Com3...

//5. UseState 的繼承關係
const StatePractice = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div>
      <h1>This is count : {count1}</h1>
      <h1>This is count : {count2}</h1>
      <button
        onClick={() => {
          // plus 1
          setCount1(count1 + 1); // 1.
          // setCount1((count1) => count1 + 1); // 2.
          // setCount2(count1 + 1);
          // 這樣並不會比 count1 多 1，因為 State 的更新是非同步的，結果會在整個 Function 執行完畢後才會刷新
        }}
      >
        Click me
      </button>
    </div>
  );
};

// 6.Effect 應用
const EffectPractice = () => {
  const [name, setName] = useState("Freddy is handsome");
  const changeButton = () => {
    setName("No ,Freddy not");
  };

  useEffect(() => {
    console.log("useEffect is working");
  }, [name]);
  // 一開始 render 時會自動執行一次 useEffect，而當 name 被刷新時，useEffect 會在執行一次。
  // 若沒有 name 只會在一開始 render 時執行。

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeButton}>Click me</button>
    </div>
  );
};

const Practice1105 = () => {
  return (
    <div>
      <h1>
        <EffectPractice />
      </h1>
    </div>
  );
};

export default Practice1105;
