import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import HomeScreen from "../pages/HomeScreen";

export const Mainrouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
]);
