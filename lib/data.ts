import prisma from "@/lib/prismadb";

export const getProducts = async () => {
  try {
    const products = await prisma.product.findMany();

    return products;
  } catch (err) {
    console.log(err);
    throw new Error("Could not fetch the products.");
  }
};

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
