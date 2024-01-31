import prisma from "@/lib/prismadb";

export const getOrderPending = async () => {
  try {
    const pendingOrderCount = await prisma.order.count({
      where: {
        orderStatus: "pending",
      },
    });

    return pendingOrderCount;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch total pending order.");
  }
};

export const getOrderPendingPrice = async () => {
  try {
    let price = 0;

    const pendingOrders = await prisma.order.findMany({
      where: {
        orderStatus: "pending",
      },
    });
    Promise.all(
      pendingOrders.map((order) => {
        price = price + order.price + order.delivaryCharge;
      })
    );

    return price;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch total price of pending order.");
  }
};

export const getDeliveryThisMonth = async (month: number, year: number) => {
  try {
    const deliverd = await prisma.order.count({
      where: {
        orderStatus: "delivered",
        month: month,
        year: year,
      },
    });

    return deliverd;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch total delivery this month.");
  }
};

export const getDeliveryPriceThisMonth = async (
  month: number,
  year: number
) => {
  try {
    let price = 0;

    const deliverd = await prisma.order.findMany({
      where: {
        orderStatus: "delivered",
        month: month,
        year: year,
      },
    });
    Promise.all(
      deliverd.map((order) => {
        price = price + order.price + order.delivaryCharge;
      })
    );

    return price;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch total price of delivery this month.");
  }
};
