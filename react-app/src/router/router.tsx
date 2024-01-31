import React, { createRef } from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Login from "page/login/Login";
import MyPage from "page/mypage/MyPage";

export const routes = [
  {
    path: "/",
    name: "Login",
    element: <Login />,
    nodeRef: createRef(),
  },
  {
    path: "/mypage",
    name: "Mypage",
    element: <MyPage />,
    nodeRef: createRef(),
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
]);