import prisma from "@/lib/prismadb";

// Get products for shop page
export const getProductsForShopPage = async () => {
  try {
    const products = await prisma.product.findMany({
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
