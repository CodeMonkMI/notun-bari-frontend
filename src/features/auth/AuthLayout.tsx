import { useAuthContext } from "@/store/authStore";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export function AuthLayout() {
  const navigate = useNavigate();
  const { isAuthenticated, isHydrated } = useAuthContext();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  if (!isHydrated) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="font-sans text-gray-800">
      <Outlet />
    </div>
  );
}
