export type PaginatedResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

// --- Types ---
export type Reviewer = {
  name: string;
  username: string;
};

export type Review = {
  id: string;
  comments: string;
  reviewer: Reviewer;
  image: string | null;
  created_at: string;
};
