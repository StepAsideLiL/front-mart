import { getCurrentUser } from "@/components/app-components/lucia-authentication/auth";
import prisma from "@/lib/prismadb";
import { unstable_noStore } from "next/cache";

// Get user address.
async function getUserAddress() {
  unstable_noStore();

  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return null;
    }

    const address = await prisma.user.findUnique({
      where: {
        id: currentUser.id,
      },
      select: {
        address: true,
        zipCode: true,
        city: true,
        country: true,
      },
    });

    return address;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user address.");
  }
}

// Get user placed orders by the user.
async function getUsersOrders() {
  unstable_noStore();

  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return null;
    }

    const orders = await prisma.order.findMany({
      where: {
        userId: currentUser.id,
      },
    });

    return orders;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch order placed by user.");
  }
}

// Get saved product id as wish list by the user.
async function getUserWishlist() {
  unstable_noStore();

  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return null;
    }

    const userWishlists = await prisma.user.findUnique({
      where: {
        id: currentUser.id,
      },
      select: {
        wishList: true,
      },
    });

    return userWishlists?.wishList;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user wishlist.");
  }
}

// Get address and email of the user during checkout.
async function getSigninCheckoutInfo() {
  unstable_noStore();

  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return null;
    }

    const address = await prisma.user.findUnique({
      where: {
        id: currentUser.id,
      },
      select: {
        name: true,
        email: true,
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
      name: address?.name,
      email: address?.email,
    };
  } catch (err) {
    console.log(err);
    throw new Error(
      "Failed to fetch user name, email and address during checkout."
    );
  }
}

// Get if the product is wishlisted
async function isProductWishlishted(productId: string) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return null;
    }

    if (user) {
      const userFromDB = await prisma.user.findUnique({
        where: {
          id: currentUser.id,
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

export const user = {
  getUserAddress,
  getUsersOrders,
  getUserWishlist,
  getSigninCheckoutInfo,
  isProductWishlishted,
};
