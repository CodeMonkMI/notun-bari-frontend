import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

import type { Review } from "@/lib/api/pets";
import { usePetReviews, type PaginatedResponse } from "@/lib/api/reviews";

import { useParams } from "react-router";

export function ReviewList() {
  const { id: petId } = useParams<{ id: string }>();
  const { data, isLoading, isError } = usePetReviews(petId!);

  if (isLoading) return <p>Loading reviews...</p>;
  if (isError) return <p className="text-red-500">Failed to load reviews.</p>;

  if (
    !data ||
    (Array.isArray(data) && data.length === 0) ||
    (Object.keys(data).length > 0 &&
      (data as PaginatedResponse<Review>).count <= 0)
  ) {
    return (
      <p className="mb-4 text-gray-700">
        There are no reviews yet. Be the first to review for this pet.
      </p>
    );
  }
  const reviews = Array.isArray(data) ? data : data.results;
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="border-b pb-3 last:border-none">
          <div className="flex items-center gap-x-2.5">
            <div>
              <Avatar>
                <AvatarFallback>
                  {review.reviewer.name?.charAt(0) ?? "?"}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <p className="font-medium">{review.reviewer.name}</p>
                <span className="text-xs text-gray-400">
                  {new Date(review.created_at).toLocaleDateString()}
                </span>
              </div>
              <p className="text-sm text-gray-700 mt-1">{review.comments}</p>
            </div>
          </div>
        </div>
      ))}

      <Separator className="my-4" />
    </div>
  );
}
