import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { axios } from "../../axios";
import type { Category } from "./type";

export const categoriesPath = "/categories";

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
