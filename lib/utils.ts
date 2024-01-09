import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateDiscountedPrice = (
  originalPrice: number,
  discountPercentage: number | null
): number => {
  const discountAmount =
    (originalPrice * (discountPercentage !== null ? discountPercentage : 0)) /
    100;
  const discountedPrice = originalPrice - discountAmount;
  return Number(discountedPrice.toFixed(2));
};
