import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { axios } from "../../axios";

// --- Types ---
export type Payment = {
  id: string;
  transaction_id: string;
  amount: string; // backend returns string
  payment_method: string;
  pet_details?: {
    name: string;
    category: string;
  };
  status: "success" | "failed" | "blocked" | "cancelled";
  payment_type: "income" | "expense";
  created_at: string;
  user: {
    id: string;
    first_name: string;
    last_name: string;
  };
};

export type PaginatedResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

// --- Base path ---
export const paymentsPath = "/payments";

// --- Fetch all payments ---
const payments = async (
  page: number,
  pageSize: number,
  query: string = ""
): Promise<PaginatedResponse<Payment>> => {
  let path = paymentsPath;
  path += `?${query}`;
  const res: AxiosResponse = await axios.get(path, {
    params: { page, page_size: pageSize },
  });
  return res.data;
};

export const usePayments = (
  page: number,
  pageSize: number,
  query: string = ""
) =>
  useQuery({
    queryKey: [paymentsPath, page, pageSize, query],
    queryFn: () => payments(page, pageSize, query),
    placeholderData: (p) => p,
  });

// --- Single payment ---
const payment = async (id: string): Promise<Payment> => {
  const res: AxiosResponse = await axios.get(`${paymentsPath}/${id}/`);
  return res.data;
};
export const usePayment = (id: string) =>
  useQuery({ queryKey: [paymentsPath, id], queryFn: () => payment(id) });

export const createPayment = async (data: {
  amount: number;
}): Promise<{ url: string }> => {
  const res: AxiosResponse = await axios.post(
    `${paymentsPath}/initiate/`,
    data
  );
  return res.data;
};

export const usePaymentCreate = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createPayment,
    onSuccess: () => qc.invalidateQueries({ queryKey: [paymentsPath] }),
  });
};
