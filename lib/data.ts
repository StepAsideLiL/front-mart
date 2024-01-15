import prisma from "@/lib/prismadb";
import { calculateDiscountedPrice } from "./utils";

// Get all the products
export const getProducts = async () => {
  try {
    const products = await prisma.product.findMany();

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

// Calacute the total price of the cart products on the chcckout page.
export const calculateCartPrice = async (products: { id: string }[]) => {
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

// Get all orders
export const getOrders = async () => {
  try {
    const orders = await prisma.order.findMany();

    return orders;
  } catch (err) {
    console.log(err);
    throw new Error("Could not fetch all orders.");
  }
};

// Get order by id.
export const getOrderById = async (orderId: string) => {
  try {
    const order = await prisma.order.findUnique({
      where: {
        id: orderId,
      },
    });

    return order;
  } catch (err) {
    console.log(err);
    throw new Error("Could not fetch the order by id.");
  }
};
