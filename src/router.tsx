import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { AboutAppPage } from "./pages/AboutAppPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <AboutAppPage /> },
      { path: "*", element: <NotFoundPage /> }
    ]
  }
]);
