import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

// 父元件
const Practice1119 = () => {
  const funRef = useRef();
  const inputRef = useRef();
  return (
    <div>
      {/* <Number
        {...{
          ref: funRef,
        }}
      />
      <button
        onClick={() => {
          console.log(funRef);
        }}
      >
        Show
      </button> */}
      {/* Input Box */}
      <Input
        ref={inputRef}
        placeholder="Type Somthing (inputRef)"
        className="input-ref"
      />
      <br />
      <button onClick={() => inputRef.current.clear()}>Clear</button>
    </div>
  );
};

// 子元件 forwardRef
// forwardRef 的第二個參數 ref 讓父元素可以直接操控子元素內的 ref.current
const Number = forwardRef((props, ref) => {
  const [value, setValue] = useState(0);
  const [validate, setValidate] = useState("");

  // 第一個參數 ref 是 forward 的 ref，而父元素可以通過 ref = {XXX} 操作
  // 第二個參數設定的 Object
  useImperativeHandle(
    ref,
    () => {
      return {
        validate,
        value,
        setValue,
        v: value == 0 ? 1 : 2,
      };
    },
    [value]
  );

  return (
    <div>
      {validate ? (
        <h3
          style={{
            fontSize: 30,
          }}
        >
          {validate}
        </h3>
      ) : null}

      {/* 我在 input 內會發生的事情  */}
      <input
        {...{
          ref: (ele) => (ref.current = ele),
          type: "text",
          value,
          placeholder: "請輸入驗證碼",
          // 改變時觸發
          onChange: (e) => {
            setValue(e.target.value);
          },
          // 離開時觸發
          onBlur: (e) => {
            // 4碼驗證碼
            let reg = /[0-9]{4}/;
            let v = e.target.value;
            if (reg.test(v) == false) {
              setValidate("格式錯誤");
              setValue(""); // 讓 value 空白
            } else {
              setValidate(""); //檢查成功的話讓錯誤字眼消失
            }
          },
        }}
      />
    </div>
  );
});

const Input = forwardRef((props, ref) => {
  const { placeholder, className } = props;
  const inputRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      clear: () => {
        inputRef.current.value = "";
      },
    };
  });
  return (
    <input
      style={style}
      ref={inputRef}
      type="text"
      placeholder={placeholder}
      className={className}
    />
  );
});

const style = {
  borderRadius: 5,
  backgroundColor: "white",
  fontSize: 18,
  border: "none",
  padding: 10,
  color: "black",
};
export default Practice1119;
