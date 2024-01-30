"use server";

import prisma from "@/lib/prismadb";
import { AddProductFormData } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Add product data in the database.
export const addProduct = async (data: AddProductFormData) => {
  const {
    productTitle,
    price,
    imageSrc,
    discount,
    quickOverview,
    description,
    date,
    month,
    year,
  } = data;
  try {
    await prisma.product.create({
      data: {
        title: productTitle,
        price: price,
        discount: discount,
        imageSrc: imageSrc,
        quickOverview: quickOverview,
        description: description,
        date: date,
        month: month,
        year: year,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Failed to add product in database.");
  }

  revalidatePath("/", "layout");
  redirect("/dashboard/products");
};
