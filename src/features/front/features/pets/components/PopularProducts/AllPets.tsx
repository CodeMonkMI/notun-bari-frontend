import { Skeleton } from "@/components/ui/skeleton";
import { usePets2 } from "@/lib/api/pets";
import { useState } from "react";
import { PetCard } from "../../../../components/PetCard";
import { Pagination } from "./Pagination";

type Props = {
  search?: string;
  category?: string;
  pageSize?: number;
};

const Pets: React.FC<Props> = (props) => {
  const { search = "", category = "", pageSize = 12 } = props;

  const [page, setPage] = useState<number>(1);

  const {
    data: pets,
    isPending,
    isError,
  } = usePets2({
    limit: pageSize,
    page,
    query: {
      search,
      category__name__contains: category,
    },
  });

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
      {pets.count > 0 && totalPages > 1 && (
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      )}
    </div>
  );
};

export default Pets;
