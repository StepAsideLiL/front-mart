import prisma from "@/lib/prismadb";
import { auth, currentUser } from "@clerk/nextjs/server";
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
      const orders = await prisma.order.findMany({
        where: {
          userId: userId,
        },
      });

      return orders;
    }

    return null;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch order placed by user.");
  }
}

// Get saved product id as wish list by the user.
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

    return null;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user wishlist.");
  }
}

// Get address and email of the user during checkout.
export async function getSigninCheckoutInfo() {
  unstable_noStore();

  try {
    const user = await currentUser();

    if (user?.id) {
      const address = await prisma.user.findUnique({
        where: {
          id: user?.id,
        },
        select: {
          address: true,
          zipCode: true,
          city: true,
          country: true,
        },
      });

      return {
        address: address?.address,
        zipCode: address?.zipCode,
        city: address?.city,
        country: address?.country,
        name: `${user.firstName} ${user.lastName}`,
        email: user.emailAddresses[0].emailAddress,
      };
    }
  } catch (err) {
    console.log(err);
    throw new Error(
      "Failed to fetch user name, email and address during checkout."
    );
  }
}

// Get if the product is wishlisted
export async function isProductWishlishted(productId: string) {
  try {
    const user = await currentUser();
    if (user) {
      const userFromDB = await prisma.user.findUnique({
        where: {
          id: user.id,
        },
        select: {
          wishList: true,
        },
      });

      if (userFromDB) {
        const isWishlisted = userFromDB.wishList.includes(productId);
        return isWishlisted;
      }

      return false;
    }

    return false;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to determine if the product is wishlisted.");
  }
}
