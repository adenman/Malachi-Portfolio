import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/index.css";

import App from "./App";
import Error from "./pages/Error";
import Home from "./pages/Home";
import FindMe from "./pages/FindMe";
import MyWork from "./pages/MyWork";


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/FindMe",
        element: <FindMe />,
      },
      {
        path: "/MyWork",
        element: <MyWork />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={router} />
  
);

