import prisma from "@/lib/prismadb";
import { calculateDiscountedPrice } from "@/lib/utils";
import { unstable_noStore } from "next/cache";

// Calacute the total price of the cart products on the chcckout page.
export const calculateCartPrice = async (products: { id: string }[]) => {
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
