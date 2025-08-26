import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { axios } from "../../axios";
import type { Category, ListResponse } from "./type";

export const categoriesPath = "/categories";

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
  const offset = (page - 1) * limit;

  const data: AxiosResponse = await axios.get(categoriesPath, {
    params: { limit, offset, ...query },
  });
  return data.data;
};

export const useCategories = (params?: QueryParams) =>
  useQuery({
    queryKey: [categoriesPath, JSON.stringify(params)],
    queryFn: () => categories2(params),
    placeholderData: (p) => p,
  });
