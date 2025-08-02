import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layout/DashboardLayout";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: DashboardLayout,
        children: [
            {
                path: "/",
                Component: App
            }
        ]

    }
])