import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useCategories2 } from "@/lib/api/categories";
import { useMemo } from "react";

type Props = {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

const Categories: React.FC<Props> = ({ category, setCategory }) => {
  const { data: response, isSuccess, isPending, isError } = useCategories2();

  const categories = useMemo(() => {
    if (!isSuccess || isPending) return [];
    if (Array.isArray(response)) return response;
    return response?.results;
  }, [response, isSuccess, isPending]);

  if (isPending) {
    return <Skeleton className="w-32 h-10" />;
  }
  if (isError) return <>Error</>;

  return (
    <div>
      <Select
        onValueChange={(e) => setCategory(e === "all" ? "" : e)}
        value={category}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a pet" />
        </SelectTrigger>
        <SelectContent className="w-full">
          <SelectItem className="w-full" key={Math.random()} value={"all"}>
            All
          </SelectItem>
          {categories?.map((cat) => (
            <SelectItem className="w-full" key={Math.random()} value={cat.name}>
              {cat.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Categories;
