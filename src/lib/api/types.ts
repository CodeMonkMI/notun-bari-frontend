export type ValidationErrors<T extends string = string> = {
  [K in T]?: string[];
};
