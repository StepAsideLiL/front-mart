"use server";

import prisma from "@/lib/prismadb";
import { PlaceOrder } from "@/lib/types";
import { redirect } from "next/navigation";

export const placeOrder = async (data: PlaceOrder) => {
  const { name, email, address, zipCode, city, country, products } = data;

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
      },
    });

    orderId = order.id;
  } catch (err) {
    console.log(err);
    throw new Error("Could not create the order.");
  }
  redirect(`/order/${orderId}`);
};
