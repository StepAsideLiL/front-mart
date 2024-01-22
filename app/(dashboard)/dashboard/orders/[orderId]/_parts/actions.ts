"use server";

import prisma from "@/lib/prismadb";
import { UpdateOrderStatusFormData } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Update order status
export const updateOrderStatus = async (data: UpdateOrderStatusFormData) => {
  const { orderId, orderStatus } = data;

  try {
    await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        orderStatus: orderStatusEnumString(orderStatus),
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete order from database.");
  }

  revalidatePath("/", "layout");
  redirect(`/dashboard/orders/${orderId}`);
};

// Process orderStatus to return string enum
const orderStatusEnumString = (
  orderStatus: string
): "pending" | "processing" | "shipped" | "delivered" | "canceled" => {
  if (orderStatus === "pending") {
    return "pending";
  } else if (orderStatus === "processing") {
    return "processing";
  } else if (orderStatus === "shipped") {
    return "shipped";
  } else if (orderStatus === "delivered") {
    return "delivered";
  } else {
    return "canceled";
  }
};

// Delete order
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
