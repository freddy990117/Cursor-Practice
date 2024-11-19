import React, {
  forwardRef,
  useImperativeHandle,
  useReducer,
  useRef,
  useState,
} from "react";

const Practice1119 = () => {
  const funRef = useRef();
  return (
    <div>
      <Number
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
      </button>
    </div>
  );
};

// forwardRef
const Number = forwardRef((props, ref) => {
  const [value, setValue] = useState(0);
  const [validate, setValidate] = useState("");

  // 將 ref 裝成 Object 丟進
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
            fontSize: 20,
            color: "blue",
          }}
        >
          {validate}
        </h3>
      ) : null}

      {/* input 元件 */}
      <input
        {...{
          ref: (ele) => (ref.current = ele),
          type: "text",
          value,
          placeholder: "請輸入驗證碼",
          onChange: (e) => {
            setValue(e.target.value);
          },
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

export default Practice1119;
