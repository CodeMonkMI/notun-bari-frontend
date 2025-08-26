import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { axios } from "../../axios";

import type { Adoption, PaginatedResponse, Pet, Review } from "./type";

export const petsPath = "/pets";

// --- Single pet ---
const pet = async (id: string): Promise<Pet> => {
  const res: AxiosResponse = await axios.get(`${petsPath}/${id}`);
  return res.data;
};
export const usePet = (id: string) =>
  useQuery({ queryKey: [petsPath, id], queryFn: () => pet(id) });

// --- Reviews ---
type QueryParams = {
  filter?: "my" | "adopted" | "all";
  page?: number;
  limit?: number;
  query?: { [key: string]: string };
};
const reviews = async (
  petId: string,
  params?: QueryParams
): Promise<PaginatedResponse<Review> | Review[]> => {
  const { limit = 0, query = {}, page = 1 } = params || {};
  const offset = (page - 1) * limit;

  const res: AxiosResponse = await axios.get(`${petsPath}/${petId}/reviews/`, {
    params: { limit, offset, ...query },
  });
  return res.data;
};
export const usePetReviews = (petId: string, params?: QueryParams) =>
  useQuery({
    queryKey: [petsPath, petId, "reviews"],
    queryFn: () => reviews(petId, params),
  });

// --- Adoptions ---

const adoptions = async (
  petId: string,
  params?: QueryParams
): Promise<PaginatedResponse<Adoption> | Adoption[]> => {
  const { limit = 0, query = {}, page = 1 } = params || {};
  const offset = (page - 1) * limit;
  const res: AxiosResponse = await axios.get(
    `${petsPath}/${petId}/adoptions/`,
    {
      params: { limit, offset, ...query },
    }
  );
  return res.data;
};
export const usePetAdoptions = (petId: string, params?: QueryParams) =>
  useQuery({
    queryKey: [petsPath, petId, "adoptions"],
    queryFn: () => adoptions(petId, params),
  });

// --- CRUD (create, update, delete) ---
export const createPet = (data: Partial<Pet>) =>
  axios.post(`${petsPath}/`, data);
export const updatePet = (id: string, data: Partial<Pet>) =>
  axios.patch(`${petsPath}/${id}/`, data);
export const removePet = (id: string) => axios.delete(`${petsPath}/${id}/`);

export const usePetCreate = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createPet,
    onSuccess: () => qc.invalidateQueries({ queryKey: [petsPath] }),
  });
};
export const usePetUpdate = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Pet> }) =>
      updatePet(id, data),
    onSuccess: () => qc.invalidateQueries({ queryKey: [petsPath] }),
  });
};
export const usePetRemove = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id }: { id: string }) => removePet(id),
    onMutate: async ({ id }) => {
      await qc.cancelQueries({ queryKey: [petsPath] });
      const prev = qc.getQueryData<PaginatedResponse<Pet>>([petsPath]);
      if (prev) {
        qc.setQueryData([petsPath], {
          ...prev,
          results: prev.results.filter((p) => p.id !== id),
          count: prev.count - 1,
        });
      }
      return { prev };
    },
    onError: (_err, _v, ctx) =>
      ctx?.prev && qc.setQueryData([petsPath], ctx.prev),
    onSettled: () => qc.invalidateQueries({ queryKey: [petsPath] }),
  });
};
