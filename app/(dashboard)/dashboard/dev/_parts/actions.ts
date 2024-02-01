"use server";

import prisma from "@/lib/prismadb";
import { faker } from "@faker-js/faker";

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

export const createDummyProduct = async (numberOfProducts: number = 1) => {
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
          },
        });
      })
    );
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create dummy product.");
  }
};
