import prisma from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { unstable_noStore } from "next/cache";

// Get user address.
export async function getUserAddress() {
  unstable_noStore();

  try {
    const { userId } = auth();

    if (userId) {
      const address = await prisma.user.findUnique({
        where: {
          id: userId,
        },
        select: {
          address: true,
          zipCode: true,
          city: true,
          country: true,
        },
      });

      return address;
    }

    return null;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user address.");
  }
}

// Get user placed orders by the user.
export async function getUsersOrders() {
  unstable_noStore();

  try {
    const { userId } = auth();
    if (userId) {
      const orders = await prisma.user.findUnique({
        where: {
          id: userId,
          // orders: {
          //   isEmpty: false,
          // },
        },
        select: {
          orders: true,
        },
      });

      return orders?.orders;
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch order placed by user.");
  }
}

// Get saved product as wish list by the user.
export async function getUserWishlist() {
  unstable_noStore();

  try {
    const { userId } = auth();
    if (userId) {
      const wishlist = await prisma.user.findUnique({
        where: {
          id: userId,
        },
        select: {
          wishList: true,
        },
      });

      return wishlist?.wishList;
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user wishlist.");
  }
}
