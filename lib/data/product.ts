import prisma from "@/lib/prismadb";

const productsPerPage = 10;

// Get products for shop page
export const getProductsForShopPage = async (page: number = 1) => {
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

export const totalPage = async () => {
  try {
    const numberOfProducts = await prisma.product.count();

    return Math.ceil(numberOfProducts / productsPerPage);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to calculate total page count.");
  }
};

// Get product info by id
export const getProductById = async (id: string) => {
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
