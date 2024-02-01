import prisma from "@/lib/prismadb";
import { unstable_noStore } from "next/cache";

// Get number of pending orders.
export const getOrderPending = async () => {
  unstable_noStore();

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

// Get the total price of pending orders
export const getOrderPendingPrice = async () => {
  unstable_noStore();

  try {
    let price = 0;

    const pendingOrders = await prisma.order.findMany({
      where: {
        orderStatus: "pending",
      },
    });

    pendingOrders.map((order) => {
      price = price + order.price + order.delivaryCharge;
    });

    return price;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch total price of pending order.");
  }
};

// Get the number of deliverd orders in current month.
export const getDeliveryThisMonth = async (month: number, year: number) => {
  unstable_noStore();

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

// Get the total price of deliverd orders in current month.
export const getDeliveryPriceThisMonth = async (
  month: number,
  year: number
) => {
  unstable_noStore();

  try {
    let price = 0;

    const deliverd = await prisma.order.findMany({
      where: {
        orderStatus: "delivered",
        month: month,
        year: year,
      },
    });

    deliverd.map((order) => {
      price = price + order.price + order.delivaryCharge;
    });

    return price;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch total price of delivery this month.");
  }
};

// Get dashboard sales chart data.
export const getOrderChart = async () => {
  unstable_noStore();

  try {
    return [
      {
        month: "Jan",
        price: await prisma.order
          .aggregate({
            _sum: {
              price: true,
            },
            where: {
              month: 0,
              year: 2024,
              orderStatus: "delivered",
            },
          })
          .then((r) => (r._sum.price ? r._sum.price : 0)),
      },
      {
        month: "Feb",
        price: await prisma.order
          .aggregate({
            _sum: {
              price: true,
            },
            where: {
              month: 1,
              year: 2024,
              orderStatus: "delivered",
            },
          })
          .then((r) => (r._sum.price ? r._sum.price : 0)),
      },
      {
        month: "Mar",
        price: await prisma.order
          .aggregate({
            _sum: {
              price: true,
            },
            where: {
              month: 2,
              year: 2024,
              orderStatus: "delivered",
            },
          })
          .then((r) => (r._sum.price ? r._sum.price : 0)),
      },
      {
        month: "Apr",
        price: await prisma.order
          .aggregate({
            _sum: {
              price: true,
            },
            where: {
              month: 3,
              year: 2024,
              orderStatus: "delivered",
            },
          })
          .then((r) => (r._sum.price ? r._sum.price : 0)),
      },
      {
        month: "May",
        price: await prisma.order
          .aggregate({
            _sum: {
              price: true,
            },
            where: {
              month: 4,
              year: 2024,
              orderStatus: "delivered",
            },
          })
          .then((r) => (r._sum.price ? r._sum.price : 0)),
      },
      {
        month: "Jun",
        price: await prisma.order
          .aggregate({
            _sum: {
              price: true,
            },
            where: {
              month: 5,
              year: 2024,
              orderStatus: "delivered",
            },
          })
          .then((r) => (r._sum.price ? r._sum.price : 0)),
      },
      {
        month: "Jul",
        price: await prisma.order
          .aggregate({
            _sum: {
              price: true,
            },
            where: {
              month: 6,
              year: 2024,
              orderStatus: "delivered",
            },
          })
          .then((r) => (r._sum.price ? r._sum.price : 0)),
      },
      {
        month: "Aug",
        price: await prisma.order
          .aggregate({
            _sum: {
              price: true,
            },
            where: {
              month: 7,
              year: 2024,
              orderStatus: "delivered",
            },
          })
          .then((r) => (r._sum.price ? r._sum.price : 0)),
      },
      {
        month: "Sep",
        price: await prisma.order
          .aggregate({
            _sum: {
              price: true,
            },
            where: {
              month: 8,
              year: 2024,
              orderStatus: "delivered",
            },
          })
          .then((r) => (r._sum.price ? r._sum.price : 0)),
      },
      {
        month: "Oct",
        price: await prisma.order
          .aggregate({
            _sum: {
              price: true,
            },
            where: {
              month: 9,
              year: 2024,
              orderStatus: "delivered",
            },
          })
          .then((r) => (r._sum.price ? r._sum.price : 0)),
      },
      {
        month: "Nov",
        price: await prisma.order
          .aggregate({
            _sum: {
              price: true,
            },
            where: {
              month: 10,
              year: 2024,
              orderStatus: "delivered",
            },
          })
          .then((r) => (r._sum.price ? r._sum.price : 0)),
      },
      {
        month: "Dec",
        price: await prisma.order
          .aggregate({
            _sum: {
              price: true,
            },
            where: {
              month: 11,
              year: 2024,
              orderStatus: "delivered",
            },
          })
          .then((r) => (r._sum.price ? r._sum.price : 0)),
      },
    ];
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch order chart data.");
  }
};

// Get all orders
export const getOrders = async () => {
  unstable_noStore();

  try {
    const orders = await prisma.order.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

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
