"use server";

import prisma from "@/lib/prismadb";
import { AddressData } from "@/lib/types";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const editAddress = async (data: AddressData) => {
  const { address, zipCode, city, country } = data;
  const date = new Date();

  try {
    const { userId } = auth();

    if (userId) {
      await prisma.user.upsert({
        where: {
          id: userId,
        },
        update: {
          address: address,
          zipCode: zipCode,
          city: city,
          country: country,
        },
        create: {
          id: userId,
          date: date.getUTCDate(),
          month: date.getUTCMonth(),
          year: date.getUTCFullYear(),
          createdAt: date,

          address: address,
          zipCode: zipCode,
          city: city,
          country: country,
        },
      });
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to edit address.");
  }

  revalidatePath("/", "layout");
  redirect("/profile");
};
