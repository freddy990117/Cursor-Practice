import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Hamburger from "hamburger-react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import React from "react";

const Practice1203 = () => {
  return <div>Practice1203</div>;
};

export default Practice1203;

// 老師寫的
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
//   //   const isMobile = useMediaQuery({
//   //     maxWidth: 600,
//   //   });
//   //   const [showbar, setShowBar] = useState();
//   //   return (
//   //     <div>
//   //       ( isMobile ? (
//   //       <div
//   //         className="header"
//   //         style={{
//   //           padding: isMobile ? 60 : 20,
//   //         }}
//   //       >
//   //         <Hamburger
//   //           {...{
//   //             direction: "right",
//   //             toggle: showbar,
//   //             toggled: () => setShowBar((pre) => (pre ? false : true)),
//   //           }}
//   //         />
//   //       </div>
//   //       ) )
//   //     </div>
//   //   );
// };

// query npm install query
// queryClient => 、QueryXXXXXXClient、useQuery=>

// 查詢 => async
// `https://jsonplaceholder.typicode.com/users/${userId}`

// useQuery 第一個參數是 depance ,()=>{} 第二個參數要是 async Fn,查詢裡面的參數 (keepPreviousData:false,retyu)
