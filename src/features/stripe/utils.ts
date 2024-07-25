import { customAlphabet } from "nanoid";

/**
 * Generates a random product variant id
 * @param [size=5] The length of the id
 * @returns
 */
export const generateProductVariantId = customAlphabet(
  "1234567890abcdefghijklmnopqrstuvwxyz",
  5
);
