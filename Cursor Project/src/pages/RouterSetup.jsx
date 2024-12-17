import React from "react";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import Page404 from "./Page404";
import Homepage from "./Homepage";
import About from "./About";
import Book from "./Book";

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/book">Book</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

const RouterSetup = () => {
  // {
  //   /* 方法2 */
  // }
  // const router = createBrowserRouter([
  //   { path: "/", element: <Homepage /> },
  //   { path: "/about", element: <About /> },
  //   { path: "*", element: <Page404 /> },
  // ]);

  return (
    <div>
      {/* <RouterProvider router={router} /> */}
      {/* 方法1 */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<Page404 />}></Route>
          <Route path="/book" element={<Book />}></Route>
        </Routes>
      </BrowserRouter>
      ;
    </div>
  );
};

export default RouterSetup;
