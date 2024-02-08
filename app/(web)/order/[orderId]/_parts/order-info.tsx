import { format } from "date-fns";
import { Suspense } from "react";
import ProductsInfo from "./products-info";
import { ProductCart } from "@/lib/types";
import { getOrderById } from "@/lib/data/order";
import { redirect } from "next/navigation";

const OrderInfo = async ({ orderId }: { orderId: string }) => {
  const order = await getOrderById(orderId);

  if (!order) {
    redirect("/shop");
  }

  const placedDate = format(order!.createdAt.toISOString(), "dd MMMM, yyyy");

  return (
    <section className="w-full flex flex-col md:flex-row gap-5">
      <section className="w-full space-y-4">
        <h2 className="text-lg">Order Info</h2>

        <section className="text-muted-foreground divide-y-2">
          <p className="grid grid-cols-12 gap-1 p-1 px-2">
            <span className="col-span-4">Order Placed on</span>{" "}
            <span className="text-foreground col-span-8">{placedDate}</span>
          </p>
          <p className="grid grid-cols-12 gap-1 p-1 px-2">
            <span className="col-span-4">Order Status</span>{" "}
            <span className="text-foreground col-span-8">
              {order?.orderStatus.toUpperCase()}
            </span>
          </p>
          <p className="grid grid-cols-12 gap-1 p-1 px-2">
            <span className="col-span-4">Delivary address</span>{" "}
            <span className="text-foreground col-span-8">{order?.address}</span>
          </p>
          <p className="grid grid-cols-12 gap-1 p-1 px-2">
            <span className="col-span-4">Zip code</span>{" "}
            <span className="text-foreground col-span-8">{order?.zipCode}</span>
          </p>
          <p className="grid grid-cols-12 gap-1 p-1 px-2">
            <span className="col-span-4">City</span>{" "}
            <span className="text-foreground col-span-8">{order?.city}</span>
          </p>
          <p className="grid grid-cols-12 gap-1 p-1 px-2">
            <span className="col-span-4">Country</span>{" "}
            <span className="text-foreground col-span-8">{order?.country}</span>
          </p>
        </section>
      </section>

      <section className="w-full space-y-4">
        <h2 className="text-lg">Product Info</h2>

        <Suspense fallback={"loading..."}>
          <ProductsInfo products={order!.products as ProductCart} />
        </Suspense>
      </section>
    </section>
  );
};

export default OrderInfo;
