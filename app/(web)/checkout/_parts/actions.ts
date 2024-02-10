"use server";

import prisma from "@/lib/prismadb";
import { PlaceOrder } from "@/lib/types";
import { currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Save order info of authenticated users.
export const placeOrder = async (data: PlaceOrder) => {
  const {
    name,
    email,
    address,
    zipCode,
    city,
    country,
    products,
    price,
    delivaryCharge,
    date,
    month,
    year,
  } = data;

  let orderId: string = "";

  try {
    const order = await prisma.order.create({
      data: {
        name: name,
        email: email,
        address: address,
        zipCode: zipCode,
        city: city,
        country: country,
        products: products,
        price: price,
        delivaryCharge: delivaryCharge,
        date: date,
        month: month,
        year: year,
      },
    });

    orderId = order.id;
  } catch (err) {
    console.log(err);
    throw new Error("Could not create the order.");
  }

  revalidatePath("/", "layout");
  redirect(`/order/${orderId}`);
};

// Save order info for authenticated user.
export async function placeOrderForCurrentUser(data: PlaceOrder) {
  const {
    name,
    email,
    address,
    zipCode,
    city,
    country,
    products,
    price,
    delivaryCharge,
    date,
    month,
    year,
  } = data;

  let orderId: string = "";

  try {
    const user = await currentUser();

    const order = await prisma.order.create({
      data: {
        userId: user!.id,
        name: name,
        email: email,
        address: address,
        zipCode: zipCode,
        city: city,
        country: country,
        products: products,
        price: price,
        delivaryCharge: delivaryCharge,
        date: date,
        month: month,
        year: year,
      },
    });

    orderId = order.id;
  } catch (err) {
    console.log(err);
    throw new Error("Could not create the order.");
  }

  revalidatePath("/", "layout");
  redirect(`/order/${orderId}`);
}
