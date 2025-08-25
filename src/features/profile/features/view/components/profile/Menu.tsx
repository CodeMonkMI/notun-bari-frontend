import { Button } from "@/components/ui/button";
import { useLogout } from "@/lib/api/auth";
import { useAuthContext } from "@/store/authStore";
import { LogOut, Settings, ShieldCheck, UserCog } from "lucide-react";
import { useNavigate } from "react-router";

export const Menu = () => {
  const { clear } = useAuthContext();
  const logout = useLogout();
  const navigate = useNavigate();
  const logoutHandler = () => {
    logout();
    clear();
    navigate("/auth/login");
  };
  return (
    <div>
      <div className="space-y-2">
        <Button
          variant="outline"
          className="w-full justify-start hover:cursor-pointer"
          onClick={() => {
            navigate("/dashboard/profile/update");
          }}
        >
          <UserCog className="mr-2 h-4 w-4" /> Edit Profile
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" /> Account Settings
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <ShieldCheck className="mr-2 h-4 w-4" /> Security
        </Button>
        <Button
          variant="destructive"
          className="w-full justify-start cursor-pointer"
          onClick={logoutHandler}
        >
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      </div>
    </div>
  );
};
