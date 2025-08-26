import { axios } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import type { PaginatedResponse, Pet } from "./type";

export const petsPath = "/pets";

//   Body Params
type QueryParams = {
  filter?: "my" | "adopted" | "all";
  page?: number;
  limit: number;
  query?: { [key: string]: string };
};
const pets = async (params?: QueryParams): Promise<PaginatedResponse<Pet>> => {
  const { limit = 0, query = {}, filter, page = 1 } = params || {};
  let path = petsPath;
  if (filter === "my") path += "/my_pet/";
  if (filter === "adopted") path += "/adopted/";
  const offset = (page - 1) * limit;
  const res: AxiosResponse = await axios.get(path, {
    params: { limit, offset, ...query },
  });
  return res.data;
};
export const usePets = (params?: QueryParams) =>
  useQuery({
    queryKey: [petsPath, JSON.stringify(params)],
    queryFn: () => pets(params),
    placeholderData: (p) => p,
  });
