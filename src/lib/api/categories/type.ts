export type Category = {
  id: string;
  name: string;
};
export type ListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Category[];
};
