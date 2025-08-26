import { Skeleton } from "@/components/ui/skeleton";
import { usePetReviews } from "@/lib/api/pets";

export function PetReviews({ petId }: { petId: string }) {
  const { data, isPending } = usePetReviews(petId);
  const reviews = Array.isArray(data) ? data : data?.results ?? [];

  if (isPending) {
    return (
      <div>
        {Array.from({ length: 6 }).map(() => (
          <Skeleton className="w-full mb-2 h-20" />
        ))}
      </div>
    );
  }

  if (!data || reviews.length === 0) return <p>No reviews yet.</p>;
  return (
    <ul className="space-y-2">
      {reviews.map((review) => (
        <li key={review.id} className="border rounded p-2">
          <p>{review.comments}</p>
          <p className="text-sm text-gray-500">
            By {review.reviewer.name} •{" "}
            {new Date(review.created_at).toLocaleDateString()}
          </p>
        </li>
      ))}
    </ul>
  );
}
