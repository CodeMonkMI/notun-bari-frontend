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
import { Skeleton } from "@/components/ui/skeleton";
import { useLogout, useMe } from "@/lib/api/auth";
import { cn } from "@/lib/utils";
import { useAuthContext } from "@/store/authStore";
import {
  IconChartBar,
  IconDashboard,
  IconFolder,
  IconListDetails,
  IconLogout,
  IconUserCircle,
  IconUsers,
  type Icon,
} from "@tabler/icons-react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";

type NavItem = {
  label: string;
  path: string;
};

const NavLinkItem = ({ label, path }: NavItem) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={path}
      className={cn(
        "text-gray-800 hover:text-blue-500 font-medium transition-colors",
        {
          "text-blue-500": pathname === path,
        }
      )}
    >
      {label}
    </Link>
  );
};

const Navbar = () => {
  const { isAuthenticated, isHydrated } = useAuthContext();

  // Define common links
  const navItems: NavItem[] = [
    { label: "Home", path: "/" },
    { label: "Pets", path: "/pets" },
    { label: "Teams", path: "/team" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white border-b ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link className="text-2xl font-bold text-black " to={"/"}>
            Notun<span className="text-blue-400">Bari</span>
          </Link>

          <nav className="flex items-center gap-12">
            {navItems.map((item) => (
              <NavLinkItem
                key={item.path}
                path={item.path}
                label={item.label}
              />
            ))}

            {isHydrated && isAuthenticated ? (
              <NavUser />
            ) : (
              <NavLinkItem label="Login" path="/auth/login" />
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const items: {
  title: string;
  url: string;
  icon: Icon;
  access: string[];
}[] = [
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
    title: "Reviews",
    url: "/dashboard/reviews",
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

export function NavUser() {
  const { mutate: logout, isSuccess } = useLogout();
  const navigate = useNavigate();

  const { data: me, isPending, isError } = useMe();

  const logoutHandler = () => {
    logout();
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/auth/login");
    }
  }, [isSuccess, navigate]);

  if (isPending) {
    return (
      <div className="flex items-center">
        <Skeleton className="h-16 w-full rounded-md" />
      </div>
    );
  }

  if (isError) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="hover:cursor-pointer">
        <Avatar className="h-8 w-8 rounded-lg grayscale">
          <AvatarFallback className="rounded-lg">
            {me?.first_name.slice(0, 1)}
            {me?.last_name.slice(0, 1)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        side={"bottom"}
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
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {items
            .filter((i) => {
              if (me?.is_staff) return true;
              if (i.access?.includes("admin")) return false;
              return true;
            })
            .map(({ icon: ItemIcon, title, url }) => {
              return (
                <DropdownMenuItem
                  className="hover:cursor-pointer"
                  onClick={() => {
                    navigate(url);
                  }}
                >
                  <ItemIcon />
                  {title}
                </DropdownMenuItem>
              );
            })}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logoutHandler}>
          <IconLogout />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
