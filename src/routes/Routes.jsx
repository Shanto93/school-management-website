import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layout/DashboardLayout";
import App from "../App";
import Dashboards from "../pages/Dashboards";
import InstituteProfile from "../pages/InstituteProfile";
import Events from "../pages/AcademicEvents/Events";
import EventList from "../pages/AcademicEvents/EventList";
import AcademicEvents from "../pages/AcademicEvents";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      {
        path: "/",
        Component: App,
      },
      {
        path: "/dashboards",
        Component: Dashboards,
      },
      {
        path: "/institute-profile",
        Component: InstituteProfile,
      },
      {
        path: "/academic-events",
        Component: AcademicEvents,
        children: [
          {
            path: "events",
            Component: Events,
          },
          {
            path: "event-list",
            Component: EventList,
          },
        ],
      },
    ],
  },
]);
