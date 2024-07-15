"use server";

import prisma from "@/lib/prismadb";
import { json } from "stream/consumers";

/**
 * Update the general information of a product.
 * @param data Object containing the product information to be updated.
 * @returns Object Success message if the product is updated successfully, error message otherwise.
 */
export async function updateGeneralProductInfo(data: {
  productId: string;
  productTitle: string;
  productDescription: string;
  productQuickDescription: string;
}) {
  try {
    const product = await prisma.product.update({
      where: {
        id: data.productId,
      },
      data: {
        title: data.productTitle,
        description: data.productDescription,
        quickDescription: data.productQuickDescription,
      },
    });

    if (product) {
      return { success: true, message: "Product updated successfully." };
    } else {
      return { success: false, message: "Failed to update product." };
    }
  } catch (error) {
    console.log(error);
    throw new Error("Failed to perform updateProductInfo server action.");
  }
}

/**
 * Update variant schema of a product.
 * @param productId Product ID from the database.
 * @param productVariantSchema Updated variant Schema of the product after stringify the JSON.
 * @returns Object with success boolean and message string
 */
export async function updateProductVariantSchema(
  productId: string,
  productVariantSchema: string
) {
  try {
    const updatedProduct = await prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        variantSchema: productVariantSchema,
      },
    });

    if (updatedProduct) {
      return { success: true, message: "Variant updated successfully!" };
    } else {
      return { success: false, message: "Failed to update product." };
    }
  } catch (error) {
    console.log(error);
    throw new Error("Failed to perform updateProductVariants server action");
  }
}
