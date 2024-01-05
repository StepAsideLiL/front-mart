"use server";

import prisma from "@/lib/prismadb";

import { AddNewFormData } from "./types";

export const addProduct = async (data: AddNewFormData) => {
  try {
    await prisma.product.create({
      data: {
        title: data.productTitle,
        price: data.price,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Failed to add product in database.");
  }
};
