import React, { useEffect, useRef, useState } from "react";
const Practice1112 = () => {
  // 上課內容 :
  // const API = fetch("https://data.moa.gov.tw/api/v1/PesticideCompanyType/");
  // useEffect(() => {
  //   fetch("https://data.moa.gov.tw/api/v1/PesticideCompanyType/").then((res) =>
  //     res.json().then((data) => {
  //       setData(data.Data);
  //     })
  //   );

  // 11/14 練習開始 :

  // 1. 生命週期    1.5 UseEffect 內不能執行重複的 state
  const LfieCycle1 = () => {
    const [count1, setCount] = useState(0);
    useEffect(() => {
      // 不能設定 setCount(count1 + 1)，因為一開始 render 時會執行 useEffect 內的 Function
      // 若設定 setCount(count1 + 1) 會偵測到 count1 改變，造成重複  render
      console.log("生命週期開始1"); // 生命週期開始
      console.log(count1); // 印出 count
      console.log("生命週期結束1"); // 生命週期結束
    }, [count1]); // count 改變時生命週期會再執行一次
    return (
      <div>
        <h2>Count : {count1}</h2>
        <button
          onClick={() => {
            setCount(count1 + 1);
          }}
        >
          Click Me
        </button>
      </div>
    );
  };

  const LifeCycle2 = () => {
    const [count2, setCount2] = useState(0);

    useEffect(() => {
      // 設定一個 Function
      const countplus = () => {
        console.log("count2 ,生命週期開始");
      };

      // 掛載
      countplus();

      // 回傳函式、卸載
      return () => {
        console.log("count2 ,生命週期結束");
      };
    }, [count2]);

    return (
      <div>
        <button
          onClick={() => {
            setCount2(count2 + 1);
          }}
        >
          Click
        </button>
      </div>
    );
  };

  const LifeCycle3 = () => {
    const [name, setName] = useState("Freddy");
    useEffect(() => {
      const initialName = () => {
        console.log("生命週期 Freddy 開始");
      };
      initialName();
      return () => {
        console.log("當發生點擊事件時，生命週期 Eric 結束");
      };
    }, [name]);

    return (
      <div>
        <h2>{name}</h2>
        <button
          onClick={() => {
            setName("Eric");
          }}
        >
          Change Name
        </button>
      </div>
    );
  };

  // UseEffect 的 return 設定是非常有必要的 !!! 主要用於清除只執行一次的 side effects，不只能夠確保程式的邏輯正確，更能夠提升整體效能
  // 副作用 (side effects) => 像是 scroll、setTimeout、addEventListener 會依賴、影響 DOM 元素的動作

  // 2.props 練習
  const PropsPractice = (props) => {
    const { name, age, id } = props; //解構 props

    return (
      <div>
        <h2>Name : {name}</h2>
        <h2>age : {age}</h2>
        <h2>id : {id}</h2>
      </div>
    );
  };

  // 2.5 props + map => props 要在 app.jsx 內在用 props 方式帶入
  const MapProps = () => {
    const data = [
      { name: "alex", gender: "male" },
      { name: "alex2", gender: "male" },
      { name: "alex3", gender: "masle" },
      { name: "alex4", gender: "malse" },
      { name: "alex5", gender: "maale" },
      { name: "alex7", gender: "malew" },
    ];
    return (
      <div>
        {/* 不用先 &&，因為並不是非同步資料 */}
        {data.map((d, index) => {
          return (
            <h2 key={index}>
              Name:{d.name} <br />
              Gender:{d.gender}
            </h2>
          );
        })}
      </div>
    );
  };

  // 3.useRef 的特點 : 當畫面 render 時，不會改變內部的值
  const UseRef1 = () => {
    const [number, setNumber] = useState(0);
    const currentRef = useRef(0);
    // 當 number 的值改變時，currentRef 也加 1 (但這樣看不出 ref 的作用)
    useEffect(() => {
      currentRef.current += 1;
    }, [number]);

    return (
      <div>
        <h2>CurrentRef is : {currentRef.current}</h2>
        <h2>number is : {number}</h2>
        <button
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          Plus
        </button>
      </div>
    );
  };

  // 當發生點擊事件時，畫面的值不會改變，但是 useRef 內部的值會改變
  const UseRef2 = () => {
    const refNumber = useRef(0);
    return (
      <div>
        <h2>我是 refNumber : {refNumber.current}</h2>
        <button
          onClick={() => {
            refNumber.current += 1;
            {
              console.log(refNumber.current);
            }
          }}
        >
          Click
        </button>
      </div>
    );
  };

  // ref = {} 的綁定練習
  const UseRef3 = () => {
    const initialRef3 = useRef("I am initialRef3");
    console.log(initialRef3.current);

    return (
      <div>
        <input type="text" ref={initialRef3} />
        <button
          onClick={() => {
            initialRef3.current.value = "Change Input Ref by btn";
          }}
        >
          Change
        </button>
      </div>
    );
    // 但這樣一開始的 input 並沒有顯示 I am initialRef，如何改善 ?
  };

  // 在 input 內先顯示 ref 的值
  const UseRef4 = () => {
    const initialRef4 = useRef(null);

    // Render 時執行
    useEffect(() => {
      // 確定 initialRef4 內沒有值後
      if (initialRef4.current) {
        initialRef4.current.value = "I am initialRef4";
      }
    }, []);

    const changeHandler = () => {
      if (initialRef4.current) {
        initialRef4.current.value = "Change By Hander";
      }
    };
    return (
      <div>
        <input type="text" ref={initialRef4} />
        <button
          // 1.Call Back function
          onClick={() => {
            initialRef4.current.value = "Change input Ref2 by btn";
          }}
        >
          Change By CallBack
        </button>
        {/* 2.指定 ref.current 為參數 */}
        <button onClick={changeHandler}>Change By Hander</button>
      </div>
    );
  };

  return (
    <div>
      <UseRef4 />
    </div>
  );
};
// <LfieCycle1/>
// <LfieCycle2/>
// <LfieCycle3/>
// <MapProps />
// <PropsPractice name="Freddy" age="20" id="TW" /> // 2.
//<UseRef1>
//<UseRef2>
// 4.Global vs Local Variable
{
  /* <div>
  <button
    onClick={() => {
      // 即使 Global Variable + 1，但畫面不 render 的話是沒辦法顯示
      globalConut += 1;
    }}
  >
    globalConut
  </button>
  <GlobalVariable />
</div>; */
}

// 4.Global vs Local Variable
// let globalConut = 0;
// const GlobalVariable = () => {
//   const [componentCount, setcomponentCount] = useState(0);
//   // 區域變數設定
//   const localVariable = 0;

//   // 設定 Component render 時 + 1
//   useEffect(() => {
//     localVariable + 1;
//   }, [componentCount]);

//   return (
//     <div>
//       <h2>我是globalConut : {globalConut} </h2>
//       <h2>我是componentCount : {componentCount} </h2>

//       {/* !!! 但結果並沒有 +1，這是因為區域變數只存在於 Component 內，且每次執行時，都會被重新創建，永遠會保持在當初設定的值*/}
//       <h2>我是localVariable : {localVariable}</h2>

//       <button
//         onClick={() => {
//           setcomponentCount(componentCount + 1);
//         }}
//       >
//         Plus Number
//       </button>
//     </div>
//   );
// };
export default Practice1112;

// 3.useRef number useRef ref = {} => 指定

/* <input type="text" ref={stringRef} /> */
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
