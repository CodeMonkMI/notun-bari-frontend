import { ReviewForm } from "./Form";
import { ReviewList } from "./ReviewList";

export function PetReviews() {
  return (
    <div className="mb-16">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Reviews</h1>
      <div className="mt-4">
        <ReviewList />
        <ReviewForm />
      </div>
    </div>
  );
}
