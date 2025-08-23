import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { axios } from "../../axios";

export type Pet = {
  id: string;
  name: string;
  description: string;
  category: string;
  category_name: string;
  fees: number;
  breed: string;
  age: number;
  owner: { first_name: string; last_name: string };
  visibility: "public" | "private";
};

export type Adoption = {
  id: string;
  adopted_by: { first_name: string; last_name: string };
  date: string;
};

export type Review = {
  id: string;
  comments: string;
  rating: number;
  created_at: string;
  reviewer: { first_name: string; last_name: string; name: string };
};

export type PaginatedResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export const petsPath = "/pets";

// --- Fetch all pets ---
const pets = async (
  page: number,
  pageSize: number,
  filter: string,
  query: string
): Promise<PaginatedResponse<Pet>> => {
  let path = petsPath;
  if (filter === "my") path += "/my_pet/";
  if (filter === "adopted") path += "/adopted/";
  path += `?${query}`;
  const res: AxiosResponse = await axios.get(path, {
    params: { page, page_size: pageSize },
  });
  return res.data;
};
export const usePets = (
  page: number,
  pageSize: number,
  filter: string = "all",
  query: string = ""
) =>
  useQuery({
    queryKey: [petsPath, page, pageSize, filter, query],
    queryFn: () => pets(page, pageSize, filter, query),
    placeholderData: (p) => p,
  });

// --- Single pet ---
const pet = async (id: string): Promise<Pet> => {
  const res: AxiosResponse = await axios.get(`${petsPath}/${id}`);
  return res.data;
};
export const usePet = (id: string) =>
  useQuery({ queryKey: [petsPath, id], queryFn: () => pet(id) });

// --- Reviews ---
const reviews = async (petId: string): Promise<PaginatedResponse<Review>> => {
  const res: AxiosResponse = await axios.get(`${petsPath}/${petId}/reviews/`);
  return res.data;
};
export const usePetReviews = (petId: string) =>
  useQuery({
    queryKey: [petsPath, petId, "reviews"],
    queryFn: () => reviews(petId),
  });

// --- Adoptions ---
const adoptions = async (
  petId: string
): Promise<PaginatedResponse<Adoption>> => {
  const res: AxiosResponse = await axios.get(`${petsPath}/${petId}/adoptions/`);
  return res.data;
};
export const usePetAdoptions = (petId: string) =>
  useQuery({
    queryKey: [petsPath, petId, "adoptions"],
    queryFn: () => adoptions(petId),
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
