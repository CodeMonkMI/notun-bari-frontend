import { HomeContainer } from "@/features/home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeContainer />,
  },
]);
