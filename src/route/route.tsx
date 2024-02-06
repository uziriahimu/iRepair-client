import Home from "@/pages/home/index.tsx";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import About from "@/pages/About";
import AdminLayout from "@/components/Layout/AdminLayout";
import DashBoard from "@/pages/Admin/DashBoard";
import ServiceList from "@/pages/Admin/ServiceList";
import AddService from "@/pages/Admin/AddService";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        index: true,
        element: <DashBoard />,
      },
      {
        path: "addservice",
        element: <AddService />,
      },
      {
        path: "service",
        element: <ServiceList />,
      },
    ],
  },
]);
