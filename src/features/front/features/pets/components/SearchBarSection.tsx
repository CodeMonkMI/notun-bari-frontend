import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function SearchBarSection() {
  return (
    <div className="flex w-full  items-center gap-4 flex-1 max-w-xl">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search pets..."
          className="w-full px-4 py-2 border border-gray-300 text-black rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button className="absolute right-0 top-0 h-full bg-blue-500 hover:bg-blue-600 rounded-l-none">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
