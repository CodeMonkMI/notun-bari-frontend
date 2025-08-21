import type { ValidationErrors } from "../types";

export type AuthErrors = ValidationErrors<"username" | "password">;
