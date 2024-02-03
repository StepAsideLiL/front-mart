import prisma from "@/lib/prismadb";
import { unstable_noStore } from "next/cache";

const productsPerPage = 10;

// Get all the products
export const getProducts = async (page: number = 1) => {
  unstable_noStore();

  try {
    const products = await prisma.product.findMany({
      skip: productsPerPage * (page - 1),
      take: productsPerPage,
      orderBy: {
        createdAt: "desc",
      },
    });

    return products;
  } catch (err) {
    console.log(err);
    throw new Error("Could not fetch the products.");
  }
};

// Get total total page count
export const totalPage = async () => {
  unstable_noStore();

  try {
    const numberOfProducts = await prisma.product.count();

    return Math.ceil(numberOfProducts / productsPerPage);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to calculate total page count.");
  }
};
