import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { axios } from "../../axios";

export type Adoption = {
  id: string;
  adopted_by: { id: string; first_name: string; last_name: string };
  date: string;
  pet: {
    id: string;
    name: string;
    category_name: string;
    fees: number;
    breed: string;
    age: number;
  };
};
export type CreateAdoption = {
  adopted_by?: string;
  pet: string;
};

export type PaginatedResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export const adoptionsPath = "/adoptions";

// --- Fetch all adoptions ---
const adoptions = async (
  page: number,
  pageSize: number
): Promise<PaginatedResponse<Adoption>> => {
  const res: AxiosResponse = await axios.get(adoptionsPath, {
    params: { page, page_size: pageSize },
  });
  return res.data;
};
export const useAdoptions = (page: number, pageSize: number) =>
  useQuery({
    queryKey: [adoptionsPath, page, pageSize],
    queryFn: () => adoptions(page, pageSize),
    placeholderData: (p) => p,
  });

export const createAdoption = (data: CreateAdoption) =>
  axios.post(`${adoptionsPath}/`, data);

export const useAdoptionCreate = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createAdoption,
    onSuccess: () => qc.invalidateQueries({ queryKey: [adoptionsPath] }),
  });
};
