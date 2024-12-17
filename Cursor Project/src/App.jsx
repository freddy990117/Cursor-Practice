import React from "react";
import "./App.css";
import Practice1210 from "../../Practice/Practice1210";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Page404 from "./pages/Page404";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
const App = () => {
  {
    /* 方法2 */
  }
  const router = createBrowserRouter([
    { path: "/", element: <Homepage /> },
    { path: "/about", element: <About /> },
    { path: "*", element: <Page404 /> },
  ]);

  return (
    <div>
      {/* 方法1 */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </BrowserRouter>

      <RouterProvider router={router} />
    </div>
  );
};

export default App;
