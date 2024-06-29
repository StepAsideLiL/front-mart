import prisma from "@/lib/prismadb";
import { unstable_noStore } from "next/cache";
import { calculateDiscountedPrice } from "@/lib/utils";

const productsPerPage = 10;

// Get all the products
const getProducts = async (page: number = 1) => {
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

// Calacute the total price of the cart products on the chcckout page.
const calculateCartPrice = async (products: { id: string }[]) => {
  unstable_noStore();

  try {
    let price = 0;
    await Promise.all(
      products.map(async (item) => {
        const product = await prisma.product.findUnique({
          where: {
            id: item.id,
          },
        });

        if (product!.discount === 0) {
          price = price + product!.price;
        } else {
          price =
            price + calculateDiscountedPrice(product!.price, product!.discount);
        }
      })
    );

    return price;
  } catch (err) {
    console.log(err);
    throw new Error("Could not calculate total price.");
  }
};

export const product = {
  getProducts,
  totalPageForProduct,
  calculateCartPrice,
};
