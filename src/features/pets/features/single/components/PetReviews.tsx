import { usePetReviews } from "@/lib/api/pets";

export function PetReviews({ petId }: { petId: string }) {
  const { data, isPending } = usePetReviews(petId);

  if (isPending) return <p>Loading reviews...</p>;
  if (!data || data.count === 0) return <p>No reviews yet.</p>;

  return (
    <ul className="space-y-2">
      {data.results.map((review) => (
        <li key={review.id} className="border rounded p-2">
          <p>{review.comment}</p>
          <p className="text-sm text-gray-500">
            By {review.reviewer.first_name} {review.reviewer.last_name} •{" "}
            {new Date(review.created_at).toLocaleDateString()}
          </p>
        </li>
      ))}
    </ul>
  );
}
