import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useMe } from "@/lib/api/auth";
import { cn } from "@/lib/utils";
import {
  IconChartBar,
  IconDashboard,
  IconFolder,
  IconListDetails,
  IconUsers,
  type Icon,
} from "@tabler/icons-react";
import { Link, useLocation } from "react-router";

export function NavMain() {
  const { pathname } = useLocation();
  const { data: me, isPending } = useMe();
  if (isPending) {
    return <h2>Loading...</h2>;
  }
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items
            .filter((i) => {
              if (me?.is_staff) return true;
              if (i.access?.includes("admin")) return false;
              return true;
            })
            .map((item) => {
              const isActive =
                item.url === "/dashboard"
                  ? pathname === "/dashboard" || pathname === "/dashboard/"
                  : pathname === item.url ||
                    pathname.startsWith(item.url + "/");

              return (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton tooltip={item.title} asChild>
                    <Link
                      to={item.url}
                      className={cn("", {
                        "bg-secondary": isActive,
                      })}
                    >
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

type NavItem = {
  title: string;
  url: string;
  icon?: Icon;
  access: string[];
};

const items: NavItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: IconDashboard,
    access: [],
  },
  {
    title: "Users",
    url: "/dashboard/users",
    icon: IconListDetails,
    access: ["admin"],
  },
  {
    title: "Categories",
    url: "/dashboard/categories",
    icon: IconChartBar,
    access: ["admin"],
  },
  {
    title: "Pets",
    url: "/dashboard/pets",
    icon: IconFolder,
    access: [],
  },
  {
    title: "Adoptions",
    url: "/dashboard/adoptions",
    icon: IconUsers,
    access: [],
  },
  {
    title: "Payments",
    url: "/dashboard/payments",
    icon: IconUsers,
    access: [],
  },
];
