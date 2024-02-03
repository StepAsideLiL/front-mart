"use server";

import prisma from "@/lib/prismadb";
import { faker } from "@faker-js/faker";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const imageSrcList = [
  "https://images2.imgbox.com/d5/9e/MHm4vg0n_o.jpg",
  "https://images2.imgbox.com/39/39/kOtJmXjJ_o.jpg",
  "https://images2.imgbox.com/7a/59/DCxkMOZm_o.jpg",
  "https://images2.imgbox.com/a4/93/hHQ3QiLF_o.jpg",
  "https://images2.imgbox.com/84/51/Yd5kp0vN_o.jpg",
  "https://images2.imgbox.com/bd/93/WeO5pMxV_o.jpg",
  "https://images2.imgbox.com/1a/44/LP4gkOm5_o.jpg",
  "https://images2.imgbox.com/d1/84/HZuEPjR8_o.jpg",
  "https://images2.imgbox.com/2d/3f/cZuueItB_o.jpg",
  "https://images2.imgbox.com/4d/9c/MVEk0FUL_o.jpg",
  "https://images2.imgbox.com/5e/54/hxLSPReo_o.jpg",
];

// Products
// Create dummy products.
export const createDummyProducts = async (numberOfProducts: number = 1) => {
  const arrayList = new Array(numberOfProducts).fill(0).map((_, i) => i + 1);

  try {
    Promise.all(
      arrayList.map(async () => {
        const date = faker.date.soon({
          days: Math.ceil(Math.random() * 69) + 4,
        });

        await prisma.product.create({
          data: {
            title: faker.commerce.product(),
            price: faker.number.float({ min: 10, max: 100, multipleOf: 0.02 }),
            imageSrc:
              imageSrcList[Math.floor(Math.random() * imageSrcList.length)],
            date: date.getUTCDate(),
            month: date.getUTCMonth(),
            year: date.getUTCFullYear(),
            createdAt: date,
            isDummy: true,
          },
        });
      })
    );
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create dummy product.");
  }

  revalidatePath("/", "layout");
  redirect("/dashboard/dev");
};

// Delete all dummy products.
export const deleteDummyProducts = async () => {
  try {
    await prisma.product.deleteMany({
      where: {
        isDummy: true,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete dummy products.");
  }

  revalidatePath("/", "layout");
  redirect("/dashboard/dev");
};

// Orders
// Create dummy orders.
export const createDummyOrder = async (numberOfOrders: number = 1) => {
  const arrayList = new Array(numberOfOrders).fill(0).map((_, i) => i + 1);

  try {
    Promise.all(
      arrayList.map(async () => {
        const date = faker.date.soon({
          days: Math.ceil(Math.random() * 69) + 4,
        });
        const rd = Math.floor(Math.random() * 5);

        await prisma.order.create({
          data: {
            price: faker.number.float({ min: 10, max: 100, multipleOf: 0.02 }),
            orderStatus:
              rd === 0
                ? "pending"
                : rd === 1
                ? "processing"
                : rd === 2
                ? "shipped"
                : rd === 3
                ? "delivered"
                : "canceled",
            date: date.getUTCDate(),
            month: date.getUTCMonth(),
            year: date.getUTCFullYear(),
            createdAt: date,
            isDummy: true,
          },
        });
      })
    );
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create dummy product.");
  }

  revalidatePath("/", "layout");
  redirect("/dashboard/dev");
};

// Delete all dummy orders.
export const deleteDummyOrders = async () => {
  try {
    await prisma.order.deleteMany({
      where: {
        isDummy: true,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete dummy orders.");
  }

  revalidatePath("/", "layout");
  redirect("/dashboard/dev");
};
