import { axios } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import type { PaginatedResponse, Pet } from "./type";

export const petsPath = "/pets";

const pets = async (
  page: number,
  pageSize: number,
  filter: string,
  query: string
): Promise<PaginatedResponse<Pet>> => {
  let path = petsPath;
  if (filter === "my") path += "/my_pet/";
  if (filter === "adopted") path += "/adopted/";
  path += `?limit=12&${query}`;
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

//   Body Params
type QueryParams = {
  filter?: "my" | "adopted" | "all";
  page?: number;
  limit: number;
  query?: { [key: string]: string };
};
const pets2 = async (params: QueryParams): Promise<PaginatedResponse<Pet>> => {
  const { limit = 0, query = {}, filter, page = 1 } = params;
  let path = petsPath;
  if (filter === "my") path += "/my_pet/";
  if (filter === "adopted") path += "/adopted/";
  const offset = (page - 1) * limit;
  const res: AxiosResponse = await axios.get(path, {
    params: { limit, offset, ...query },
  });
  return res.data;
};
export const usePets2 = (params: QueryParams) =>
  useQuery({
    queryKey: [petsPath, JSON.stringify(params)],
    queryFn: () => pets2(params),
    placeholderData: (p) => p,
  });
