"use server";

import prisma from "@/lib/prismadb";
import { AddNewFormData } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Add product data in the database.
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

  revalidatePath("/", "layout");
  redirect("/dashboard/products");
};

// Delay the server action by 5 seconds for observing delaying effect.
export const serverActionDelay = async () => {
  try {
    console.log("Server action is running...");

    await new Promise((resolve) => setTimeout(resolve, 5000));

    console.log("Server action complete after 5 seconds");

    return null;
  } catch (err) {
    console.log(err);
    throw new Error("Could not complete the server action.");
  }
};
