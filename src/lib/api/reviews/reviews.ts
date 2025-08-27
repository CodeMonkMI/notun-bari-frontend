import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axios } from "../../axios";

import type { PaginatedResponse, Review } from "./type";

// --- API Path ---
export const reviewsPath = `/reviews/`;

type QueryParams = {
  limit?: number;
  page?: number;
  query?: Record<string, string>;
};

// --- CRUD ---
export const fetchReviews = async (params?: QueryParams) => {
  const { limit = 0, query = {}, page = 0 } = params || {};
  const offset = (page - 1) * limit;

  const res = await axios.get<PaginatedResponse<Review> | Review[]>(
    reviewsPath,
    {
      params: { limit, offset, ...query },
    }
  );
  return res.data;
};

export const removeReview = (id: string) =>
  axios.delete(`${reviewsPath}${id}/`);

// Get paginated reviews
export const useReviews = (params?: QueryParams) =>
  useQuery({
    queryKey: ["reviews", params],
    queryFn: () => fetchReviews(params),
    placeholderData: (p) => p,
  });

// Delete review
export const useReviewRemove = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => removeReview(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["reviews"] }),
  });
};
