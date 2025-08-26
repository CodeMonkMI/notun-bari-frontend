import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { axios } from "../../axios";
import type { Category, ListResponse } from "./type";

export const categoriesPath = "/categories";
// --- Fetch all categories ---
const categories = async (page: number): Promise<ListResponse | undefined> => {
  const data: AxiosResponse = await axios.get(categoriesPath, {
    params: { page, limit: 10 },
  });
  return data.data;
};

export const useCategories = (page: number) =>
  useQuery({
    queryKey: [categoriesPath, page],
    queryFn: () => categories(page),
    placeholderData: (p) => p,
  });

// with dynamic and scalable hooks
type QueryParams = {
  page?: number;
  limit?: number;
  query?: { [key: string]: string };
};
const categories2 = async (
  params?: QueryParams
): Promise<ListResponse | Category[] | undefined> => {
  const { limit = 0, query = {}, page = 1 } = params || {};
  console.log(params);
  const offset = (page - 1) * limit;
  console.log({ params: { limit, offset, ...query } });
  const data: AxiosResponse = await axios.get(categoriesPath, {
    params: { limit, offset, ...query },
  });
  return data.data;
};

export const useCategories2 = (params?: QueryParams) =>
  useQuery({
    queryKey: [categoriesPath, JSON.stringify(params)],
    queryFn: () => categories2(params),
    placeholderData: (p) => p,
  });
