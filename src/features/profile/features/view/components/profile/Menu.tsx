import { Button } from "@/components/ui/button";
import { LogOut, Settings, ShieldCheck, UserCog } from "lucide-react";

export const Menu = () => {
  return (
    <div>
      <div className="space-y-2">
        <Button variant="outline" className="w-full justify-start">
          <UserCog className="mr-2 h-4 w-4" /> Edit Profile
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" /> Account Settings
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <ShieldCheck className="mr-2 h-4 w-4" /> Security
        </Button>
        <Button variant="destructive" className="w-full justify-start">
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      </div>
    </div>
  );
};
