import FrontLayout from "@/components/layouts/FrontLayout";
import {
  AuthLayout,
  LoginContainer,
  RegistrationContainer,
} from "@/features/auth";
import { HomeContainer } from "@/features/home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontLayout />,
    children: [
      {
        path: "",
        element: <HomeContainer />,
      },
    ],
  },
  {
    path: "auth",
    element: <FrontLayout />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <LoginContainer />,
          },
          {
            path: "register",
            element: <RegistrationContainer />,
          },
        ],
      },
    ],
  },
]);
