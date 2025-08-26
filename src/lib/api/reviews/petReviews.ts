import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "../../axios";

import type { PaginatedResponse, Review } from "./type";

export const reviewsPath = (petId: string) => `/pets/${petId}/reviews/`;

// --- CRUD (create, update, delete) ---
export const createReview = (petId: string, data: Partial<Review>) =>
  axios.post(reviewsPath(petId), data);
export const updateReview = (
  petId: string,
  id: string,
  data: Partial<Review>
) => axios.patch(`${reviewsPath(petId)}${id}/`, data);
export const removeReview = (petId: string, id: string) =>
  axios.delete(`${reviewsPath(petId)}${id}/`);

// --- React Query Mutations ---
export const usePetReviewCreate = (petId: string) => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data: Partial<Review>) => createReview(petId, data),
    onSuccess: (data) => {
      qc.setQueryData<PaginatedResponse<Review> | Review[]>(
        ["reviews", petId],
        (old) => {
          if (!old) return [data.data];
          if (Array.isArray(old)) {
            return [data.data, ...old];
          }
          return {
            ...old,
            results: [data.data, ...old.results],
            count: old.count + 1,
          };
        }
      );
    },
  });
};

export const usePetReviewUpdate = (petId: string) => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Review> }) =>
      updateReview(petId, id, data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["reviews", petId] }),
  });
};

export const usePetReviewRemove = (petId: string) => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => removeReview(petId, id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["reviews", petId] }),
  });
};
