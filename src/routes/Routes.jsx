import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layout/DashboardLayout";
import App from "../App";
import Dashboards from "../pages/Dashboards";
import PageNotFound from "../pages/PageNotFound";
import InstituteProfile from "../pages/InstituteProfile";
import AcademicSetup from "../pages/AcademicSetup";

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
            },
            {
                path: '/institute-profile',
                Component: InstituteProfile
            },
            {
                path: '/settings/academic-setup',
                Component: AcademicSetup
            }
            ,{
        path: "*",
        Component: () => <PageNotFound />
    }
        ]

    }
])