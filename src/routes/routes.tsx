import FrontLayout from "@/components/layouts/FrontLayout";
import {
  AdoptionCreateContainer,
  AdoptionListContainer,
} from "@/features/adoptions";
import {
  AuthLayout,
  LoginContainer,
  RegistrationContainer,
} from "@/features/auth";
import {
  CategoryCreateContainer,
  CategoryLayout,
  CategoryListContainer,
  CategoryUpdateContainer,
} from "@/features/categories";
import {
  DashboardContainer,
  DashboardNotAuthorized,
  DashboardNotFound,
} from "@/features/dashboard";
import { DashboardLayout } from "@/features/dashboard/layout/DashboardLayout";
import { HomeContainer } from "@/features/home";
import {
  PaymentCreateContainer,
  PaymentListContainer,
} from "@/features/payments";
import {
  PetCreateContainer,
  PetListContainer,
  PetSingleContainer,
  PetUpdateContainer,
} from "@/features/pets";
import {
  ProfileUpdateContainer,
  ProfileViewContainer,
} from "@/features/profile";
import {
  UserCreateContainer,
  UserLayout,
  UserListContainer,
  UserUpdateContainer,
} from "@/features/users";
import { createBrowserRouter, Navigate } from "react-router";

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
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        children: [
          {
            path: "",
            element: <DashboardContainer />,
          },
        ],
      },
      {
        path: "users",
        element: <UserLayout />,
        children: [
          {
            path: "",
            element: <UserListContainer />,
          },
          {
            path: "create",
            element: <UserCreateContainer />,
          },
          {
            path: ":id",
            children: [
              {
                path: "",
                element: <PetUpdateContainer />,
              },
              {
                path: "update",
                element: <UserUpdateContainer />,
              },
            ],
          },
        ],
      },
      {
        path: "categories",
        element: <CategoryLayout />,
        children: [
          {
            path: "",
            element: <CategoryListContainer />,
          },
          {
            path: "create",
            element: <CategoryCreateContainer />,
          },
          {
            path: ":id",
            children: [
              {
                path: "update",
                element: <CategoryUpdateContainer />,
              },
            ],
          },
        ],
      },
      {
        path: "pets",
        children: [
          {
            path: "",
            element: <PetListContainer />,
          },
          {
            path: "create",
            element: <PetCreateContainer />,
          },
          {
            path: ":id",
            children: [
              {
                path: "",
                element: <PetSingleContainer />,
              },
              {
                path: "update",
                element: <PetUpdateContainer />,
              },
            ],
          },
        ],
      },
      {
        path: "adoptions",
        children: [
          {
            path: "",
            element: <AdoptionListContainer />,
          },
          {
            path: "create",
            element: <AdoptionCreateContainer />,
          },
        ],
      },
      {
        path: "payments",
        children: [
          {
            path: "",
            element: <PaymentListContainer />,
          },
          {
            path: "create",
            element: <PaymentCreateContainer />,
          },
        ],
      },
      {
        path: "profile",
        children: [
          {
            path: "",
            element: <ProfileViewContainer />,
          },
          {
            path: "update",
            element: <ProfileUpdateContainer />,
          },
        ],
      },
      {
        path: "not-authorized",
        element: <DashboardNotAuthorized />,
      },
      {
        path: "not-found",
        element: <DashboardNotFound />,
      },
      {
        path: "*",
        element: <Navigate to={"/dashboard/not-found"} />,
      },
    ],
  },
]);
