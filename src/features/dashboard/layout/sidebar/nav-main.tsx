import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  IconChartBar,
  IconDashboard,
  IconFolder,
  IconListDetails,
  IconUsers,
  type Icon,
} from "@tabler/icons-react";
import { Link } from "react-router";

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title} asChild>
                <Link to={item.url}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

type NavItem = {
  title: string;
  url: string;
  icon?: Icon;
};

const items: NavItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: IconDashboard,
  },
  {
    title: "Users",
    url: "/dashboard/users",
    icon: IconListDetails,
  },
  {
    title: "Categories",
    url: "/dashboard/categories",
    icon: IconChartBar,
  },
  {
    title: "Pets",
    url: "/dashboard/pets",
    icon: IconFolder,
  },
  {
    title: "Adoptions",
    url: "/dashboard/adoptions",
    icon: IconUsers,
  },
  {
    title: "Payments",
    url: "/dashboard/payments",
    icon: IconUsers,
  },
];
