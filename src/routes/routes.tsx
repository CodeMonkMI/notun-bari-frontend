import FrontLayout from "@/components/layouts/FrontLayout";
import {
  AdoptionCreateContainer,
  AdoptionListContainer,
} from "@/features/adoptions";
import {
  ActivateAccountContainer,
  AuthLayout,
  LoginContainer,
  PasswordResetConfirmContainer,
  PasswordResetContainer,
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
import {
  AboutContainer,
  ContactContainer,
  FaqsContainer,
  HelpCenterContainer,
  HomeContainer,
  PetsContainer,
  PrivacyPolicyContainer,
  SinglePetContainer,
  TeamContainer,
} from "@/features/front";
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
import { ReviewListContainer } from "@/features/reviews";
import { PasswordChangeContainer } from "@/features/settings";
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
      {
        path: "about",
        element: <AboutContainer />,
      },
      {
        path: "contact",
        element: <ContactContainer />,
      },
      {
        path: "faqs",
        element: <FaqsContainer />,
      },
      {
        path: "team",
        element: <TeamContainer />,
      },
      {
        path: "help",
        element: <HelpCenterContainer />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicyContainer />,
      },
      {
        path: "pets",

        children: [
          {
            path: "",
            element: <PetsContainer />,
          },
          {
            path: ":id",
            element: <SinglePetContainer />,
          },
        ],
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
          {
            path: "password-reset",
            children: [
              {
                path: "",
                element: <PasswordResetContainer />,
              },
              {
                path: "confirm/:uid/:token",
                element: <PasswordResetConfirmContainer />,
              },
            ],
          },
          {
            path: "activate/:uid/:token",
            element: <ActivateAccountContainer />,
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
        path: "reviews",
        children: [
          {
            path: "",
            element: <ReviewListContainer />,
          },
        ],
      },
      {
        path: "settings",
        children: [
          {
            path: "password-change",
            element: <PasswordChangeContainer />,
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
