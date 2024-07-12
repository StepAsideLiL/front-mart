import { format } from "date-fns";
import { Suspense } from "react";
import ProductsInfo from "./products-Info";
import { ProductCart } from "@/lib/types";
import EditOrderStatusForm from "./edit-order-status-form";
import { redirect } from "next/navigation";
import { order as o } from "@/lib/data";

const OrderDeshboardInfo = async ({ orderId }: { orderId: string }) => {
  const order = await o.getOrderById(orderId);

  if (!order) {
    redirect("/dashboard/orders");
  }

  const placedDate = format(order!.createdAt.toISOString(), "dd MMMM, yyyy");

  return (
    <>
      <section className="space-y-4">
        <h2 className="text-lg">Product Info</h2>

        <Suspense fallback={"loading..."}>
          <ProductsInfo products={order!.products as ProductCart} />
        </Suspense>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg">Order Info</h2>

        <section className="text-muted-foreground divide-y-2">
          <OrderInfoField field={"Order Placed on"} value={placedDate} />
          <OrderInfoField
            field={"Order Status"}
            value={order?.orderStatus.toUpperCase()}
          />
          <OrderInfoField field={"Delivary address"} value={order?.address} />
          <OrderInfoField field={"Zip code"} value={order?.zipCode} />
          <OrderInfoField field={"City"} value={order?.city} />
          <OrderInfoField field={"State or Country"} value={order?.country} />
        </section>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg">Update Order Status</h2>

        <EditOrderStatusForm
          orderId={order!.id}
          orderStatus={order!.orderStatus}
        />
      </section>
    </>
  );
};

const OrderInfoField = ({
  field,
  value,
}: {
  field?: string;
  value?: string;
}) => {
  return (
    <p className="grid grid-cols-12 gap-1 p-1 px-2">
      <span className="col-span-4">{field}</span>{" "}
      <span className="text-foreground col-span-8">{value}</span>
    </p>
  );
};

export default OrderDeshboardInfo;
