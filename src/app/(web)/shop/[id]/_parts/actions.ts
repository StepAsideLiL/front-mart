"use server";

import { user as u } from "@/lib/data";
import prisma from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addToWishlist(productId: string) {
  const date = new Date();
  let wishlist = [""];

  try {
    const user = await currentUser();
    const isWishlisted = await u.isProductWishlishted(productId);

    if (user) {
      const userInDB = await prisma.user.findUnique({
        where: {
          id: user.id,
        },
        select: {
          wishList: true,
        },
      });

      if (userInDB) {
        if (!isWishlisted) {
          wishlist = [...userInDB.wishList, productId];
        } else {
          wishlist = userInDB.wishList.filter((list) => list !== productId);
        }
      } else {
        wishlist = [productId];
      }

      await prisma.user.upsert({
        where: {
          id: user.id,
        },
        update: {
          wishList: {
            set: wishlist,
          },
        },
        create: {
          id: user.id,
          date: date.getUTCDate(),
          month: date.getUTCMonth(),
          year: date.getUTCFullYear(),
          createdAt: date,

          wishList: {
            set: wishlist,
          },
        },
      });
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to save product to wishlist.");
  }

  revalidatePath("/", "layout");
  redirect(`/shop/${productId}`);
}
