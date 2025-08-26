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
// with dynamic and scalable hooks
type QueryParams = {
  page?: number;
  limit?: number;
  query?: { [key: string]: string };
};
const adoptions = async (
  params?: QueryParams
): Promise<PaginatedResponse<Adoption> | Adoption[]> => {
  const { limit = 0, query = {}, page = 1 } = params || {};
  const offset = (page - 1) * limit;
  const res: AxiosResponse = await axios.get(adoptionsPath, {
    params: { limit, offset, ...query },
  });
  return res.data;
};
export const useAdoptions = (params?: QueryParams) =>
  useQuery({
    queryKey: [adoptionsPath, JSON.stringify(params)],
    queryFn: () => adoptions(params),
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
