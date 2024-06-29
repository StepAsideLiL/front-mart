import prisma from "@/lib/prismadb";
import { unstable_noStore } from "next/cache";

const productsPerPage = 12;

// Get products for shop page
const getProductsForShopPage = async (page: number = 1) => {
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

// Get total total page count of products
const totalPageForProduct = async () => {
  unstable_noStore();

  try {
    const numberOfProducts = await prisma.product.count();

    return Math.ceil(numberOfProducts / productsPerPage);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to calculate total page count.");
  }
};

// Get product info by id
const getProductById = async (id: string) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });

    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Could not fetch the product by id.");
  }
};

export const shop = {
  getProductsForShopPage,
  totalPageForProduct,
  getProductById,
};
