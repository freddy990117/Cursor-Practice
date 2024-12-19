import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import Page404 from "./Page404";
import Book from "./Book";
const Layout = () => {
  // 方法一 => 建立 Router
  const router = createBrowserRouter([
    { path: "/", element: <Homepage /> },
    { path: "/about", element: <About /> },
    { path: "/book", element: <Book /> },
    { path: "*", element: <Page404 /> },
  ]);
  return (
    <div>
      {/* 方法一 => 輸出 Router */}
      <RouterProvider router={router} />
      {/* 方法二 => 建立 Router 並輸出*/}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/book" element={<Book />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
