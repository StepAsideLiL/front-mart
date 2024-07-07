"use server";

import prisma from "@/lib/prismadb";

export async function updateProductInfo(data: {
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
