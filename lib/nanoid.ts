import { customAlphabet } from "nanoid";

export const generateProductVariantId = customAlphabet(
  "1234567890abcdefghijklmnopqrstuvwxyz",
  5
);
