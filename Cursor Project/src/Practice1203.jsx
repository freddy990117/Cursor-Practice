import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Hamburger from "hamburger-react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";

const Practice1203 = () => {
  // 初始化 QueryClient
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true, // 當視窗重新聚焦時重新抓取
      },
    },
  });

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <MyComponent6 />
      </QueryClientProvider>
    </div>
  );
};

const MyComponent6 = () => {
  const [userID, setUserID] = useState(1);

  // 抓取 API 資料
  const fetchData = async (userID) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userID}`
    );
    // 這邊取得了 API Data
    return response.data;
  };
  // 顯示使用者資訊
  // 使用 useQuery 顯示資料
  const { data, isLoading, error } = useQuery(
    [userID], // 第一個參數是 key ，會根據 userID 而改變);
    () => fetchData(userID), // 第二個參數是要抓取的資料
    // 第三個參數是 : 要設定的狀態
    {
      keepPreviousData: true, // 保留前一次資料
      retry: 3, // 錯誤時重試3次
      retryDelay: 1000, // 每次重試延遲1秒
      staleTime: 5000, // 資料5秒內視為新鮮
      cacheTime: 10000, // 資料10秒內會被緩存
    }
  );
  if (isLoading) return <p>Loading.....</p>;
  if (error) return <p>Error : {error.maeeage}</p>;

  return (
    <div>
      <h2>{data?.name}</h2>

      {/* UserID 增加 */}
      <button
        onClick={() => {
          setUserID((prev) => Math.min(prev + 1, 10));
        }}
      >
        +++
      </button>

      {/* UserID 減少 */}
      <button
        onClick={() => {
          setUserID((prev) => Math.max(prev - 1, 1));
        }}
      >
        ---
      </button>
    </div>
  );
};
// React Query 的核心流程是：
// 初始化 QueryClient: 在父元件內創建一個 QueryClient 實例。
// 提供 QueryClient: 使用 QueryClientProvider，將它傳遞給應用中的子元件。
// 抓取資料: 在子元件中，使用 useQuery 去呼叫 API 並獲取資料。
//`https://jsonplaceholder.typicode.com/users/${userId}`

// 用 Query 成功抓取資料
const MyComponent5 = () => {
  const [userId, setUserId] = useState(3);

  // 抓取資料
  const fetchData = async (userId) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    console.log(response.data);
    return response.data;
  };

  // 使用 useQuery 去呼叫 API 並獲取資料
  const { data, isLoading, error } = useQuery(["user", userId], () =>
    fetchData(userId)
  );

  if (isLoading) return <p>Loading.....</p>;
  if (error) return <p>Error : {error.maeeage}</p>;
  return (
    <div>
      <h2>我是Component5</h2>
      <h2>{data?.name}</h2>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

// 練習抓取資料
const MyComponent4 = () => {
  const [userID, setUserID] = useState(1);
  const [data, setData] = useState(null);
  const getAPI = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userID}`
    );
    setData(response.data);
  };

  useEffect(() => {
    getAPI();
  }, [userID]);
  return (
    <div>
      <h2>我是Component4</h2>

      {data ? (
        <div>
          <h2>{data.name}</h2>
          <h2>{data.email}</h2>
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

// 用 useMediaQuery 創建一個組件，當螢幕寬度小於 250px 時顯示一個簡單的行動裝置菜單。
const MyComponent1 = () => {
  // 設定網頁的 RWD
  const isMobile = useMediaQuery({ query: "(max-width: 470px)" });
  // 設定 Hamburger 套件的狀態
  const [isOpen, setOpen] = useState(true);
  // 設定 Hamburger 套件的位置
  const headerStyle = {
    position: "fixed",
    top: 15,
    left: 15,
  };
  // 偵測到網站的 RWD 變化時改變 Hamburger 套件的狀態
  useEffect(() => {
    isMobile ? setOpen(false) : setOpen(true);
  }, [isMobile]);

  return (
    <div>
      <div className="header" style={headerStyle}>
        <Hamburger toggled={isOpen} />
      </div>
      {isMobile ? <h2>手機畫面</h2> : <h2>電腦畫面</h2>}
    </div>
  );
};

// 根據螢幕寬度變化，動態改變背景色
const MyComponent2 = () => {
  // 小於 350 px 時出現的
  const isSmallest = useMediaQuery({ query: "(max-width:350px)" });
  const isBiggest = useMediaQuery({ query: "(max-width:500px)" });
  const { backStyle, content } = isSmallest
    ? {
        backStyle: "lightblue",
        content: "小於350px顯示",
      }
    : isBiggest
    ? {
        backStyle: "lightgreen",
        content: "350px-500px之間",
      }
    : {
        backStyle: "green",
        content: "大於500px顯示",
      };

  useEffect(() => {
    document.body.style.backgroundColor = backStyle;
  }, [isSmallest, isBiggest]);

  return (
    <div>
      {/* 方法 1  => 只能顯示文字，無法隨著條件而改變顏色 */}
      {/* <div className="back" style={{}}></div>
      {isSmallest ? (
        <h2>小於350px顯示</h2>
      ) : isBiggest ? (
        <h2>350px-500px之間</h2>
      ) : (
        <h2>大於500px顯示</h2>
      )} */}
      {/* 方法 2 => 只會改變 h2 的背景顏色，沒有抓到整個 body  */}
      <div className="back" style={{ backgroundColor: backStyle }}>
        <h2>{content}</h2>
      </div>
      {/* 方法 3 => useEffect 偵測到 RWD 改變時更改顏色
        改變整個 body 顏色 */}
    </div>
  );
};

const MyComponent3 = () => {
  const isSmallest = useMediaQuery({ query: "(max-width:500px)" });
  const isBiggest = useMediaQuery({ query: "(min-width:800px)" });

  const { backStyle, fontStyle, info } = isSmallest
    ? {
        backStyle: "lightblue",
        fontStyle: "darkblue",
        info: "手機畫面",
      }
    : isBiggest
    ? {
        backStyle: "lightcoral",
        fontStyle: "darkred",
        info: "桌面畫面",
      }
    : {
        backStyle: "lightgreen",
        fontStyle: "darkgreen",
        info: "平板畫面",
      };

  useEffect(() => {
    document.body.style.backgroundColor = backStyle;
  }, [isSmallest, isBiggest]);

  return (
    <div className="Com3">
      <h2 style={{ color: fontStyle }}>{info}</h2>
    </div>
  );
};

export default Practice1203;
{
  /* <div className="header" style={mobileStyle}><div/> */
}

// 老師寫的 ~~~~~
// 初始化 QueryClient
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: true, // 當視窗重新聚焦時，自動重新抓取資料
//     },
//   },
// });

// // 抓取 API 資料的函數
// const fetchUser = async (userId) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );
//   if (!response.ok) throw new Error("Network response was not ok");
//   const data = await response.json();
//   return data;
// };

// // 顯示使用者資訊的元件
// const GetUser = () => {
//   const [userId, setUserId] = useState(1);

//   // 使用 useQuery 抓取資料
//   const { isLoading, error, data } = useQuery(
//     [userId], // 查詢的鍵值 (Key)，會根據 userId 的變化而重新觸發
//     () => fetchUser(userId), // 資料抓取函數
//     {
//       keepPreviousData: true, // 保留先前的資料直到新資料加載完成
//       retry: 3, // 若抓取失敗，重試 3 次
//       retryDelay: 1000, // 每次重試間隔 1 秒
//       staleTime: 5000, // 資料視為新鮮的時間 (5 秒)
//       cacheTime: 5000, // 資料的緩存時間 (5 秒)
//     }
//   );

//   if (isLoading) return <h2>Loading...</h2>; // 加載中
//   if (error) return <h2>Error: {error.message}</h2>; // 發生錯誤

//   return (
//     <div>
//       <h2>{data?.name}</h2>
//       <h3>{JSON.stringify(data)}</h3>
//       <button
//         onClick={() => {
//           setUserId((prev) => Math.min(prev + 1, 10)); // 限制 userId 最大為 10
//         }}
//       >
//         Add
//       </button>
//       <button
//         onClick={() => {
//           setUserId((prev) => Math.max(prev - 1, 1)); // 限制 userId 最小為 1
//         }}
//       >
//         ---
//       </button>
//     </div>
//   );
// };

// const Practice1203 = () => {
//   return (
//     <div>
//       <QueryClientProvider client={queryClient} contextSharing={true} />
//     </div>
//   );
//   const isMobile = useMediaQuery({
//     maxWidth: 600,
//   });
//   const [showbar, setShowBar] = useState();
//   return (
//     <div>
//       ( isMobile ? (
//       <div
//         className="header"
//         style={{
//           padding: isMobile ? 60 : 20,
//         }}
//       >
//         <Hamburger
//           {...{
//             direction: "right",
//             toggle: showbar,
//             toggled: () => setShowBar((pre) => (pre ? false : true)),
//           }}
//         />
//       </div>
//       ) )
//     </div>
//   );
// };

// query npm install query
// queryClient => 、QueryXXXXXXClient、useQuery=>

// 查詢 => async
// `https://jsonplaceholder.typicode.com/users/${userId}`

// useQuery 第一個參數是 depance ,()=>{} 第二個參數要是 async Fn,查詢裡面的參數 (keepPreviousData:false,retyu)
