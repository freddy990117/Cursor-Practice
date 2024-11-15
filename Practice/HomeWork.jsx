// API Key : `https://jsonplaceholder.typicode.com/users/${userId}`
// https://jsonplaceholder.typicode.com/users/1
import React, { useEffect, useState } from "react";
import axios from "axios";

const HomeWork = () => {
  // data 存放 API 的資料
  const [data, setData] = useState("");
  const [count, setCount] = useState(1);

  // button 的 onclick 事件，點擊一次，count + 1
  const changeHandler = () => {
    setCount(count + 1);
  };

  // 用於得到 API's Data
  const GetAPi = async () => {
    const APIKey = `https://jsonplaceholder.typicode.com/users/${count}`;
    const APIKey2 = fetch(
      `https://jsonplaceholder.typicode.com/users/${count}`
    );
    // 1.axios 套件的方式取 API 的值
    // const respone = await axios.get(APIKey);
    // setData(respone.data); // data 得到了 API 的值

    // 2.then 的方式取 API 的值
    const result = APIKey2.then((res) => {
      res.json().then((data) => setData(data));
    });
  };

  // 進入頁面 render 時，直接拿到 API 的資料
  useEffect(() => {
    GetAPi();
  }, [count]);

  // 當 data 還沒拿到資料時，顯示 loading，沒設定的話會不顯示資料 !!!
  if (!data) {
    return <h1>Loading...</h1>; // 如果 data 是 null，顯示 Loading
  }

  // data 的資料只有 10 筆，當 10 筆結束後就顯示
  if (count > 10) {
    return <h1> Nothing else :( </h1>;
  }

  return (
    <div>
      <h2>Hi!,My name is : {data.name}</h2>
      <h2>You can call me : {data.username}</h2>
      <h2>Here is my Phone number :{data.phone}</h2>
      <h2>Email :{data.email}</h2>
      <h2>You can know me in this page : {data.website}</h2>
      <h2>
        And I living in the :{data.address.city},<br /> {data.address.street},
        {data.address.suite},<br />
        zipcode is :{data.address.zipcode}
      </h2>
      <h2>
        The coordinates are : <br />
        lat : {data.address.geo.lat} , lng :{data.address.geo.lng}
      </h2>
      <button
        style={{ backgroundColor: "white", fontSize: 25, color: "black" }}
        onClick={changeHandler}
      >
        Next one
      </button>
    </div>
  );
};

export default HomeWork;

// Q1 :
// 我用 setData 內放入我 fetch 的 API 資料，我裝進的 data 內部，但畫面沒有顯示資料，這是為什麼

// const { id, name, username, email, phone, website ,address ,company} = data;
