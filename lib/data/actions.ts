"use server";

import prisma from "@/lib/prismadb";

/**
 * Create a new product on the database.
 */
export async function createProductOnDatabase() {
  try {
    const product = await prisma.product.create({
      data: {},
    });

    return product.id;
  } catch (err) {
    console.log(err);
    throw new Error("Could not perform createProductOnDatabase function.");
  }
}
