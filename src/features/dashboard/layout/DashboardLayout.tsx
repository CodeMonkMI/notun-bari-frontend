import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useAuthContext } from "@/store/authStore";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { AppSidebar } from "./sidebar";
import { SiteHeader } from "./site-header";

export function DashboardLayout() {
  const navigate = useNavigate();
  const { isAuthenticated, isHydrated } = useAuthContext();

  useEffect(() => {
    if (!isAuthenticated && isHydrated) {
      navigate("/auth/login");
    }
  }, [isAuthenticated, navigate, isHydrated]);

  if (!isHydrated) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="font-sans text-gray-800">
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <Outlet />
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
