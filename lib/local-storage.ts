"use client";

import { CartData } from "@/lib/types";

export const stringifyJson = (obj: CartData): string => {
  return JSON.stringify(obj);
};

export const parseJson = (str: string): CartData => {
  return JSON.parse(str);
};
