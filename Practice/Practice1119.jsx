import { set, values } from "lodash";
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
  const chechRef = useRef();
  const animalRef = useRef();
  return (
    <div>
      <div className="teacher">
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
      </div>
      {/* Input Box */}
      <div className="InputBox">
        <Input
          ref={inputRef}
          placeholder="Type Somthing (inputRef)"
          className="input-ref"
        />
        <button onClick={() => inputRef.current.clear()}>Clear</button>
      </div>
      <br />
      {/* Chech Box */}
      <div className="Checkbox">
        <ChechBox ref={chechRef} />
        {/* 勾選 */}
        <button
          style={checkStyle}
          onClick={() => {
            chechRef.current.checked();
          }}
        >
          勾選
        </button>
        {/* 取消勾選 */}
        <button
          style={checkStyle}
          onClick={() => {
            chechRef.current.unchecked();
          }}
        >
          取消勾選
        </button>
        {/* 更換狀態 */}
        <button
          style={checkStyle}
          onClick={() => {
            chechRef.current.toggle();
          }}
        >
          更換狀態
        </button>
      </div>
      {/* Select Form */}
      <div className="select">
        <SelectForm ref={animalRef} />
      </div>
    </div>
  );
};

const SelectForm = forwardRef((props, ref) => {
  const animalRef = useRef();
  const [animal, setAnimal] = useState();
  useImperativeHandle(ref, () => {
    return {
      changeSelect: () => {
        setAnimal(animalRef.current.value);
        console.log(animal);
      },

      //   clearSelection: () => {
      //     animal.current.value = "";
      //   },
      // };
    };
  });
  return (
    <div>
      <select
        value={animal}
        style={selectStyle}
        ref={animalRef}
        onChange={(e) => {
          setAnimal(e.target.value);
        }}
      >
        <option value="">Choose</option>
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
        <option value="Zebra">Zebra</option>
        <option value="Tiger">Tiger</option>
        <option value="Lion">Lion</option>
      </select>
      <h2>{animal ? `你挑選的動物是 : ${animal}` : "尚未挑選動物"}</h2>
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
      style={inputStyle}
      ref={inputRef}
      type="text"
      placeholder={placeholder}
      className={className}
    />
  );
});

const inputStyle = {
  borderRadius: 5,
  backgroundColor: "white",
  fontSize: 18,
  border: "none",
  padding: 10,
  color: "black",
  marginRight: 10,
};

const ChechBox = forwardRef((props, ref) => {
  const [state, setState] = useState(false);
  useImperativeHandle(
    ref,
    () => {
      return {
        checked: () => {
          setState(true);
        },
        unchecked: () => {
          setState(false);
        },
        toggle: () => {
          setState((prev) => !prev);
        },
      };
    },
    [state]
  );
  return (
    <div>
      <input
        type="checkbox"
        checked={state}
        onChange={(e) => setState(e.target.checked)}
      />
      <h2>
        {state
          ? "CheckBox 狀態為: True (已勾選)"
          : "CheckBox 狀態為: False (未勾選)"}
      </h2>
    </div>
  );
});

const checkStyle = {
  margin: "0 5px ",
  border: "none",
  borderRadius: "5px",
};

const selectStyle = {
  fontSize: 20,
  padding: 10,
  marginTop: 30,
};

// 老師寫的
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
export default Practice1119;
