import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Hamburger from "hamburger-react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const Practice1203 = () => {
  return (
    <div>
      <MyComponent2 />
    </div>
  );
};

// 用 useMediaQuery 創建一個組件，當螢幕寬度小於 250px 時顯示一個簡單的行動裝置菜單。
const MyComponent1 = () => {
  // 存放 RWD 變數
  const isMobile = useMediaQuery({ query: "(max-width:250px)" });
  // 存放 Hamburger 套件
  const [isOpen, setOpen] = useState(true);

  // 當 isMobile 改變時執行
  useEffect(() => {
    isMobile ? setOpen(false) : setOpen(true);
  }, [isMobile]);

  const headerStyle = isMobile
    ? { position: "absolute", top: 10, left: 10, padding: 10 }
    : { position: "fixed", top: 10, left: 10, padding: 10 };

  return (
    <div>
      <div className="header" style={headerStyle}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      {isMobile ? (
        <div>
          <h2>手機畫面</h2>
        </div>
      ) : (
        <div>
          <h2>電腦畫面</h2>
        </div>
      )}
    </div>
  );
};

// 根據螢幕寬度變化，動態改變背景色
const MyComponent2 = () => {
  const isSmall = useMediaQuery({ query: "(max-width:401px)" });
  const isMedia = useMediaQuery({
    query: "(min-width:401px) and (max-width:800px)",
  });
  const isLarge = useMediaQuery({ query: "(min-width:800px)" });
  // 用 props 的方式包裝

  // const { backgroundStyle, content } = (() => {
  //   if (isSmall) return { backgroundStyle: "lightblue", content: "小於 400px" };
  //   if (isMobile)
  //     return { backgroundStyle: "lightgreen", content: "400px - 800px之間" };
  //   return { backgroundStyle: "lightcoral", content: "大於 800px" };
  // })();

  const { backgroundStyle, content } = isSmall
    ? { backgroundStyle: "lightblue", content: "小於400px" }
    : isMobile
    ? { backgroundStyle: "lightgreen", content: "介於400px-800px之間" }
    : { backgroundStyle: "lightcoral", content: "大於800px" };
    // 
  useEffect(() => {
    document.body.style.backgroundColor = backgroundStyle;
    return () => {
      document.body.style.backgroundColor = ""; // 清理副作用
    };
  }, [backgroundStyle]);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <h2>{content}</h2>
    </div>
  );
};

export default Practice1203;
{
  /* <div className="header" style={mobileStyle}><div/> */
}

// 老師寫的
// QueryClient
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: true,
//     },
//   },
// });
// const fetchUser = async (userId) => {
//   const data = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );
//   const json = data.json();
//   return json;
// };
// useQuery
// const GetUser = () => {
//   const [userId, setUserId] = useState(1);
//   const { isLoding, errpr, data } = useQuery([userId], () => {
//     fetchUser(userId),
//       {
//         keepPreviousData: true,
//         retry: 3,
//         retryDelay: 1000,
//         staleTime: 5000,
//         cacheTime: 5000,
//       };
//     if (isLoding) return <h2>Loding</h2>;
//     if (errpr) return <h2>Error</h2>;
//     if (data)
//       return (
//         <div>
//           <h2>{data?.name}</h2>
//           <h3>{JSON.stringify(data)}</h3>
//           <button
//             onClick={() => {
//               setUserId((prev) => prev + 1);
//             }}
//           >
//             Add
//           </button>
//           <button
//             onClick={() => {
//               setUserId((prev) => prev - 1);
//             }}
//           >
//             ---
//           </button>
//         </div>
//       );
//   });
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
