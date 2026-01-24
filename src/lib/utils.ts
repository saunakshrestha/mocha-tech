import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * `cn` is the shadcn convention for safe className composition.
 * 80/20 note:
 * This pattern shows up in most modern React codebases; it keeps components ergonomic
 * and avoids Tailwind class conflicts (e.g. `p-4` vs `p-6`).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

