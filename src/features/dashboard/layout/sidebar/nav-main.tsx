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

export function NavMain() {
  const items: {
    title: string;
    url: string;
    icon?: Icon;
  }[] = [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Categories",
      url: "#",
      icon: IconListDetails,
    },
    {
      title: "Categories",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Pets",
      url: "#",
      icon: IconFolder,
    },
    {
      title: "Adoptions",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Payments",
      url: "#",
      icon: IconUsers,
    },
  ];
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
