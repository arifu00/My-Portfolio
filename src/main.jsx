import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";

const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="text-[#fff]">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
