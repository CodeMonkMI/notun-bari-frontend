import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export function SearchBarSection({ search, setSearch }: Props) {
  const [localSearch, setLocalSearch] = useState<string>(search);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(localSearch);
  };
  return (
    <div className="flex w-full  items-center gap-4 flex-1 max-w-xl">
      <form className="relative flex-1" onSubmit={submitHandler}>
        <Input
          type="text"
          placeholder="Search pets..."
          className="w-full px-4 py-2 border border-gray-300 text-black rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
        />
        <Button
          type="submit"
          className="absolute right-0 top-0 h-full bg-blue-500 hover:bg-blue-600 rounded-l-none"
        >
          <Search className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
