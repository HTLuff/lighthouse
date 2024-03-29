import { lazy } from "react";

// const Calendar = lazy(() => import("../pages/Calendar"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
// const Chart = lazy(() => import("../pages/Metrics/Views"));
const Views = lazy(() => import("../pages/Metrics/Views"));
const Clicks = lazy(() => import("../pages/Metrics/Clicks"));
const Geo = lazy(() => import("../pages/Metrics/Geo"));
const Settings = lazy(() => import("../pages/Settings"));
// const Alerts = lazy(() => import("../pages/UiElements/Alerts"));
// const Buttons = lazy(() => import("../pages/UiElements/Buttons"));

const coreRoutes = [
  {
    path: "/dashboard/",
    title: "Dashboard",
    component: Dashboard,
    isPrivate: true,
  },
  {
    path: "/metrics/views/",
    title: "Views",
    component: Views,
    isPrivate: true,
  },
  {
    path: "/metrics/clicks/",
    title: "Clicks",
    component: Clicks,
    isPrivate: true,
  },
  {
    path: "/metrics/geo/",
    title: "Geo",
    component: Geo,
    isPrivate: true,
  },
  {
    path: "/settings/",
    title: "Settings",
    component: Settings,
    isPrivate: true,
  },
  // {
  //   path: "/chart",
  //   title: "Chart",
  //   component: Chart,
  // },
  // {
  //   path: "/ui/alerts",
  //   title: "Alerts",
  //   component: Alerts,
  // },
  // {
  //   path: "/ui/buttons",
  //   title: "Buttons",
  //   component: Buttons,
  // },
];

const routes = [...coreRoutes];
export default routes;
