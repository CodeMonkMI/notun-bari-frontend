import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { usePets } from "@/lib/api/pets";
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
} from "@tabler/icons-react";
import { useState } from "react";
import { PetCard } from "../../../../components/PetCard";

const Pets = () => {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const pageSize = 12;
  const { data: pets, isPending, isError } = usePets(page, pageSize);
  const totalPages = Math.ceil((pets?.count ?? 1) / pageSize);

  if (isPending) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Array.from({ length: 4 }).map(() => (
          <Skeleton className=" h-72 " />
        ))}
      </div>
    );
  }
  if (isError) {
    return <>Error fetching data</>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pets?.results.map((product, i) => (
          <div key={i} onClick={() => {}}>
            <PetCard
              name={product.name}
              price={product.fees || 0}
              image="https://images.pexels.com/photos/544502/pexels-photo-544502.jpeg"
              category={product.category_name}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center px-4 mt-10">
        <div className="flex items-center gap-2">
          <Button size="icon" onClick={() => setPage(1)} disabled={page === 1}>
            <IconChevronsLeft />
          </Button>
          <Button
            size="icon"
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            <IconChevronLeft />
          </Button>
          <span className="text-sm text-gray-600">
            Page {page} of {totalPages}
          </span>
          <Button
            size="icon"
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
          >
            <IconChevronRight />
          </Button>
          <Button
            size="icon"
            onClick={() => setPage(totalPages)}
            disabled={page === totalPages}
          >
            <IconChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pets;
