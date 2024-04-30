import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LearnUseState from "./Components/LearnUseState/LearnUseState";
import DataManagement from "./Components/DataManagement/Datamanagement";
import LearnUseContext from "./Components/LearnUseContext/LearnUseContext";
import LearnUseEffect from "./Components/LearnUseEffect/LearnUseEffect";
import UseAPI from "./Components/UseAPI/UseAPI";
import LearnUseRef from "./Components/LearnUseRef/LearnUseState";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "learnUseState",
        element: <LearnUseState></LearnUseState>,
      },
      {
        path: "datamanagement",
        element: <DataManagement></DataManagement>,
      },
      {
        path: "useContext",
        element: <LearnUseContext></LearnUseContext>,
      },
      {
        path: "useEffect",
        element: <LearnUseEffect></LearnUseEffect>,
      },
      {
        path: "useAPI",
        element: <UseAPI></UseAPI>,
      },
      {
        path: "useRef",
        element: <LearnUseRef></LearnUseRef>,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
