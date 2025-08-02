import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layout/DashboardLayout";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: "/dashboard",
        Component: DashboardLayout,
        children: [
            {
                path: "/dashboard",
                Component: App
            }
        ]

    }
])