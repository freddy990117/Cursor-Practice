import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import _ from "lodash";
const Practice1126 = () => {
  return (
    <div>
      <UseMemo />
    </div>
  );
};

// useLayoutEffect

const UseEff = () => {
  const ref = useRef();
  //   useEffect(() => {
  //     ref.current.scrollTop = 300;
  //   }, []);

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
const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const total = _.sum(arr);
  console.log("Render", total);
  const memo = useMemo(() => {
    console.log("Memo", _.sum(arr));
  });
  return (
    <div>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        CLick
      </button>
      {console.log(memo)}
    </div>
  );
};

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
