import React, { useEffect, useRef, useState } from "react";
const Practice1112 = () => {
  // 上課內容 :
  // 生命週期
  // const API = fetch("https://data.moa.gov.tw/api/v1/PesticideCompanyType/");
  // useEffect(() => {
  //   fetch("https://data.moa.gov.tw/api/v1/PesticideCompanyType/").then((res) =>
  //     res.json().then((data) => {
  //       setData(data.Data);
  //     })
  //   );
  //   console.log(data);
  // }, []);
  // 我覺得這邊寫錯了
  // const com2 = ({ Company_Name }) => {
  //   return <h2>{Company_Name}</h2>;
  // };
  // const alertFn = () => {
  //   alert("Count += 1");
  // };
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   setCount(count + 1);
  //   document.body.addEventListener("click");
  // }, []);
  // const changeCount = () => {
  //   setCount(count + 1);
  //   console.log(count);
  // };
  // const gloablCount = 0;
  // const [count, setCount] = useState(0);
  // const [show, setShow] = useState(false);
  // const countRef = useRef(0);
  // const stringRef = useRef();
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShow(true);
  //   }, 3000);
  // }, []);
  // 11/14 練習開始 :

  // 2.props 練習
  // const PropsPractice = (props) => {
  //   const { name, age, id } = props; //解構 props

  //   return (
  //     <div>
  //       <h2>Name : {name}</h2>
  //       <h2>age : {age}</h2>
  //       <h2>id : {id}</h2>
  //     </div>
  //   );
  // };

  // 2.5 props + map => props 要在 app.jsx 內在用 props 方式帶入
  // const MapProps = () => {
  //   const data = [
  //     { name: "alex", gender: "male" },
  //     { name: "alex2", gender: "male" },
  //     { name: "alex3", gender: "masle" },
  //     { name: "alex4", gender: "malse" },
  //     { name: "alex5", gender: "maale" },
  //     { name: "alex7", gender: "malew" },
  //   ];
  //   return (
  //     <div>
  //       {data &&
  //         data.map((d, index) => {
  //           return (
  //             <h2 key={index}>
  //               Name:{d.name} <br />
  //               Gender:{d.gender}
  //             </h2>
  //           );
  //         })}
  //     </div>
  //   );
  // };
  return;
  // <PropsPractice name="Freddy" age="20" id="TW" /> // 2.
  // <MapProps /> //2.5
};

export default Practice1112;

// 1.生命週期     1.5 在 UseEffect 內不能執行重複的 state
// 2.props 應用  2.5 快速呈現大量的資料 map + component + prop
// 3.useRef number useRef ref = {} => 指定
// 4.區域、全域變數

{
  /* <input type="text" ref={stringRef} /> */
}
//     {/* 設定 element 變數讓 ref 綁定 element， */}
//     {/* <input
//       type="text"
//       ref={(element) => {
//         stringRef.current = element;
//       }} //     {/* 讓input先不成線後再寫出 hi222 */}
//     {/* <input
//       type="text"
//       ref={(element) => {
//         stringRef.current = element;
//       }} */}
// onClick={() => {
//   stringRef.current.value = "hi222";
// stringRef.current.value = "hi";
// console.log(gloablCount + 1);
// setCount((count) => count + 1);
// console.log("count", count);
// countRef.current = countRef.current + 1;
// console.log("countRef", countRef);
// }}
//     >
//       Count++
//     </button> */}
//   </div>
