import prisma from "@/lib/prismadb";
import { unstable_noStore } from "next/cache";

export const getDummyProductAmount = () => {
  unstable_noStore();

  try {
    const amount = prisma.product.count({
      where: {
        isDummy: true,
      },
    });

    return amount;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to calculate the products amount");
  }
};

export const getDummyOrderAmount = () => {
  unstable_noStore();

  try {
    const amount = prisma.order.count({
      where: {
        isDummy: true,
      },
    });

    return amount;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to calculate the orders amount");
  }
};
