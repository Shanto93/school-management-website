import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layout/DashboardLayout";
import App from "../App";
import Dashboards from "../pages/Dashboards";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: DashboardLayout,
        children: [
            {
                path: "/",
                Component: App
            },
            {
                path: "/dashboards",
                Component: Dashboards
            }
        ]

    }
])