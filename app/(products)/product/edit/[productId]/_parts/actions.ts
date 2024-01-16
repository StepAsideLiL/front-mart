"use server";

import prisma from "@/lib/prismadb";
import { UpdateProductFormData } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const updateProduct = async (data: UpdateProductFormData) => {
  const {
    id,
    productTitle,
    price,
    imageSrc,
    imageId,
    discount,
    quickOverview,
    description,
  } = data;

  try {
    await prisma.product.update({
      where: {
        id: id,
      },
      data: {
        title: productTitle,
        price: price,
        discount: discount,
        imageSrc: imageSrc,
        imageId: imageId,
        quickOverview: quickOverview,
        description: description,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product in database.");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
