import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { useLogout, useMe } from "@/lib/api/auth";
import { useAuthContext } from "@/store/authStore";
import {
  IconDotsVertical,
  IconLogout,
  IconUserCircle,
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

export function NavUser() {
  const { isMobile } = useSidebar();

  const { clear } = useAuthContext();
  const logout = useLogout();
  const navigate = useNavigate();

  const { data: me, isPending, isError } = useMe();

  const logoutHandler = () => {
    logout();
    clear();
    navigate("/auth/login");
  };

  if (isPending) {
    return (
      <div className="flex items-center">
        <Skeleton className="h-16 w-full rounded-md" />
      </div>
    );
  }

  if (isError) return null;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg grayscale">
                {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
                <AvatarFallback className="rounded-lg">
                  {me?.first_name.slice(0, 1)}
                  {me?.last_name.slice(0, 1)}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {me?.first_name} {me?.last_name}
                </span>
                <span className="text-muted-foreground truncate text-xs">
                  {me?.email}
                </span>
              </div>
              <IconDotsVertical className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarFallback className="rounded-lg">
                    {me?.first_name.slice(0, 1)}
                    {me?.last_name.slice(0, 1)}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {me?.first_name} {me?.last_name}
                  </span>
                  <span className="text-muted-foreground truncate text-xs">
                    {me?.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                className="hover:cursor-pointer"
                onClick={() => {
                  navigate("/dashboard/profile");
                }}
              >
                <IconUserCircle />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:cursor-pointer"
                onClick={() => {
                  navigate("/dashboard/settings");
                }}
              >
                <IconUserCircle />
                Settings
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logoutHandler}>
              <IconLogout />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
