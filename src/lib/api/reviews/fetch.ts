import { axios } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import type { Review } from "../pets";
import { reviewsPath } from "./petReviews";
import type { PaginatedResponse } from "./type";

//   Body Params
type QueryParams = {
  page?: number;
  limit: number;
  query?: { [key: string]: string };
};

const reviews = async (
  petId: string,
  params?: QueryParams
): Promise<PaginatedResponse<Review> | Review[]> => {
  const { limit = 0, query = {}, page = 0 } = params || {};
  const offset = (page - 1) * limit;
  const res: AxiosResponse = await axios.get(reviewsPath(petId), {
    params: { limit, offset, ...query },
  });
  return res.data;
};
export const usePetReviews = (petId: string, params?: QueryParams) =>
  useQuery({
    queryKey: ["reviews", petId],
    queryFn: () => reviews(petId, params),
  });
