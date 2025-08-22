import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { axios } from "../../axios";

export type Category = {
  id: string;
  name: string;
};

export const categoriesPath = "/categories";
type ListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Category[];
};

// --- Fetch all categories ---
const categories = async (page: number): Promise<ListResponse | undefined> => {
  const data: AxiosResponse = await axios.get(categoriesPath, {
    params: { page },
  });
  return data.data;
};

export const useCategories = (page: number) =>
  useQuery({
    queryKey: [categoriesPath, page],
    queryFn: () => categories(page),
    placeholderData: (p) => p,
  });

// --- Fetch single category ---
const category = async (id: Category["id"]): Promise<Category | undefined> => {
  const data: AxiosResponse = await axios.get(`${categoriesPath}/${id}`);
  return data.data;
};

export const useCategory = (id: Category["id"]) =>
  useQuery({
    queryKey: [categoriesPath, id],
    queryFn: () => category(id),
  });

// --- Create category ---
export const createCategory = async (data: { name: string }) =>
  axios.post(categoriesPath, data);

export const useCategoryCreate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [categoriesPath] });
    },
  });
};

// --- Update category ---
export const updateCategory = async (id: string, data: { name: string }) =>
  axios.patch(`${categoriesPath}/${id}/`, data);

export const useCategoryUpdate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: { name: string } }) =>
      updateCategory(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: [categoriesPath, variables.id],
      });
    },
  });
};

// --- Delete category ---
export const removeCategory = async (id: string) =>
  axios.delete(`${categoriesPath}/${id}/`);

export const useCategoryRemove = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id }: { id: string }) => removeCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [categoriesPath] });
    },
  });
};
