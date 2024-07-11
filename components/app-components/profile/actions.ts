"use server";

import prisma from "@/lib/prismadb";
import { getCurrentUser } from "@/components/app-components/lucia-authentication/auth";

export async function updatePrfileName(name: string) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return {
        success: false,
        message: "You are not logged in!",
      };
    }

    const user = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        name: name,
      },
    });

    if (user) {
      return {
        success: true,
        message: "Name updated successfully!",
      };
    }

    return {};
  } catch (error) {
    console.log(error);
    throw new Error("Failed to perform updatePrfileName server action");
  }
}
