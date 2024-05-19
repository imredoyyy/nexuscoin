import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const mergeClasses = (...inputs) => {
  return twMerge(clsx(...inputs));
};
