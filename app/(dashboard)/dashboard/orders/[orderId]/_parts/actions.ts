"use server";

import prisma from "@/lib/prismadb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteOrder = async (orderId: string) => {
  try {
    await prisma.order.delete({
      where: {
        id: orderId,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete order from database.");
  }

  revalidatePath("/", "layout");
  redirect(`/dashboard/orders`);
};
