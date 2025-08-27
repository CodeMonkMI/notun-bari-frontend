export type Pet = {
  id: string;
  name: string;
  description: string;
  category: string;
  category_name: string;
  fees: number;
  breed: string;
  age: number;
  owner: { first_name: string; last_name: string; id: string };
  visibility: "public" | "private";
  status?: "adopted";
  image?: string;
  adopted_by?: {
    id: string;
    first_name: string;
    last_name: string;
  };
};

export type Adoption = {
  id: string;
  adopted_by: { first_name: string; last_name: string };
  date: string;
};

export type Review = {
  id: string;
  comments: string;
  rating: number;
  created_at: string;
  reviewer: { first_name: string; last_name: string; name: string };
};

export type PaginatedResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};
