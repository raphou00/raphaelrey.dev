import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: string[]): string => twMerge(clsx(args));

export { cn };