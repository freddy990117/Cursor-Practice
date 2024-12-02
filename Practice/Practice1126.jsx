import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import _, { random, set } from "lodash";
const Practice1126 = () => {
  return (
    <div>
      <MemoParent />
    </div>
  );
};

// 11/28 練習開始
// useLayoutEffect
const LayoutPractice = () => {
  console.log("Brower Render ");

  useLayoutEffect(() => {
    console.log("Render 更新後執行 useLayoutEffect 並在 DOM 更新前執行完畢");
  });
  useEffect(() => {
    console.log("useEffect 在 DOM 更新後執行");
  });
};

const LayoutPractice2 = () => {
  const [message, setMessage] = useState("初始的Message");

  useLayoutEffect(() => {
    console.log("我是 useLayoutEffect 內的 message");
    return setMessage("我是 useLayoutEffect 內的 message");
  }, []);

  useEffect(() => {
    console.log("我是 UseEffect 的 message");
    return setMessage("我是 useEffect's message");
  }, [message]);
  return <p>{message}</p>;
};

// UseMemo
const MemoPractice = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState([1, 2, 3, 4, 5]);

  const memoNum = useMemo(() => {
    const total = _.sum(number);
    return total;
  }, [number]);

  return (
    <div>
      <h2>Memo總數是 : {memoNum}</h2>
      <button
        onClick={() => {
          console.log(
            `當發生點擊事件時，即使 count 變成了 ${count} ，Memo 的值也不會改變 ${memoNum}`
          );
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <button
        onClick={() => {
          console.log(
            `當 Memo 的值改變了 ${
              memoNum + number.length + 1
            }，count 保持不變 ${count - 1}`
          );
          setNumber([...number, number.length + 1]);
        }}
      >
        Memo Plus
      </button>
    </div>
  );
};

// useCallback
const CallbackParent = () => {
  const [count, setCount] = useState(10);
  // useCallback
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  // useCallback
  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);
  // 一般的函式
  const normalPlus = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h2>現在的數字是 : {count}</h2>
      <ReactMemoPractice
        increment={increment}
        decrement={decrement}
        normalPlus={normalPlus}
      />
    </div>
  );
};

// 這邊發生了一個問題，即使已經設定了 useCallback，但「因為父元件直接綁定了子元件，所以當父元件 Render 時，React 還是會重新建立整個子元件」
const CallbackChild = ({ increment, decrement, normalPlus }) => {
  console.log("子元件被重新渲染了");
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br />
      <button onClick={normalPlus}>normalPlus</button>
    </div>
  );
};

// 但因為題目的關係無法清楚的看到 React.memo 的效果，所以要寫一個新的
const ReactMemoPractice = React.memo(({ increment, decrement, normalPlus }) => {
  console.log("子元件被重新渲染了");
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br />
      <button onClick={normalPlus}>normalPlus</button>
    </div>
  );
});

// React.memo
const Parent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Plus
      </button>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Child count={count} />
    </div>
  );
};

const Child = React.memo(({ count }) => {
  console.log("Child Re-Render");
  return <h2>{count}</h2>;
});

const MemoParent = () => {
  const [item, setItem] = useState([]);
  const [count, setCount] = useState(0);
  const plusNumber = useCallback(() => {
    setItem([...item, item.length + 1]);
  }, [item]);
  return (
    <div>
      {/* 當使用 useCallback 時，函式內部的狀態沒有改變，React.memo 便不會被觸發，達到不必要渲染的功能 */}
      <button onClick={plusNumber}>Item Plus</button>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          console.log("Count增加了，但Item沒變");
        }}
      >
        Count Plus
      </button>
      <MemoChild item={item} />
      <h2>我是Count: {count}</h2>
    </div>
  );
};

const MemoChild = React.memo(({ item }) => {
  console.log("按下 Item Plus 後，Item 會新增但 Count 不會");
  console.log("子元件重新渲染了!");
  return <h2>我是item: {item.join(",")}</h2>;
});

// 老師寫的
// useLayoutEffect

const UseEff = () => {
  const ref = useRef();
  useEffect(() => {
    ref.current.scrollTop = 300;
  }, []);

  useLayoutEffect(() => {
    ref.current.scrollTop = 0;
  });
  return (
    <div
      style={{ height: 300, overflow: "scroll", width: 400 }}
      ref={ref}
    ></div>
  );
};

// useMemo
// const UseMemo = () => {
//   const [number, setNumber] = useState(0);
//   const [arr, setArr] = useState([1, 2, 3, 4, 5]);
//   const total = _.sum(arr);
//   console.log("Render", total);
//   const memo = useMemo(() => {
//     console.log("Memo", _.sum(arr));
//   });
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setNumber(number + 1);
//         }}
//       >
//         CLick
//       </button>
//       {console.log(memo)}
//     </div>
//   );
// };

// React.momo

const MemoComp = React.memo(
  ({ version }) => {
    console.log("Memo Render");
    return <h2> I a, Memo {version}</h2>;
  },
  (preProps, nextProps) => {
    console.log(preProps);
    console.log(nextProps);
    console.log(`${nextProps.version % 2 == 0} `);
    return nextProps.version % 2 == 0;
  }
);

const RenderComp = ({ version }) => {
  console.log("No Memo Render");
  return <h2>I am No Memo Render {version}</h2>;
};
// 沒有設定  React.memo 的，只要重新render，就會重新render 一次
const MemoContainer = () => {
  const [version, setVersion] = useState(1);
  const [other, setOther] = useState(1);
  return (
    <div>
      <button
        onClick={() => {
          setVersion((pre) => pre + 1);
        }}
      >
        add Version
      </button>
      <button
        onClick={() => {
          setOther((pre) => pre + 1);
        }}
      >
        add Other
      </button>
      <MemoComp version={version} />
      {/* <RenderComp version={version} /> */}
    </div>
  );
};
export default Practice1126;
