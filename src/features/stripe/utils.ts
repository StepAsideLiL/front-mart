import { customAlphabet } from "nanoid";

/**
 * Generates a random product variant id
 * @param size The length of the id
 * @returns
 */
export const generateProductVariantId = customAlphabet(
  "1234567890abcdefghijklmnopqrstuvwxyz",
  5
);
