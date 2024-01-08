"use server";

import prisma from "@/lib/prismadb";
import { AddNewFormData } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addProduct = async (data: AddNewFormData) => {
  const {
    productTitle,
    price,
    imageSrc,
    imageId,
    discount,
    quickOverview,
    description,
  } = data;
  try {
    await prisma.product.create({
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
    throw new Error("Failed to add product in database.");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
