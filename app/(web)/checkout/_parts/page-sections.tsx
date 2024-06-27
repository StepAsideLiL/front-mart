import { calculateCartPrice } from "@/lib/data";
import React, { Suspense } from "react";
import CheckoutForm from "./checkout-form";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import TotalPrice from "./total-price";
import SignInSignUpButton from "./signin-signup-button";
import { auth } from "@clerk/nextjs/server";
import SigninCheckoutForm from "./signin-checkout-form";
import { getSigninCheckoutInfo } from "@/lib/data/user";

const PageSections = async ({
  products,
}: {
  products: {
    id: string;
  }[];
}) => {
  const price = await calculateCartPrice(products);
  const checkoutInfo = await getSigninCheckoutInfo();
  const { userId } = auth();

  return (
    <section className="w-full flex flex-col-reverse md:flex-row gap-5 justify-between">
      <section className="w-full">
        {userId ? (
          <Suspense fallback={"loading..."}>
            <SigninCheckoutForm
              name={checkoutInfo!.name}
              email={checkoutInfo!.email}
              address={checkoutInfo!.address || ""}
              zipCode={checkoutInfo!.zipCode || ""}
              city={checkoutInfo!.city || ""}
              country={checkoutInfo!.country || ""}
              products={products}
              price={price}
            />
          </Suspense>
        ) : (
          <CheckoutForm products={products} price={price} />
        )}
      </section>

      <section className="w-full">
        <section className="flex items-center gap-2">
          <h1 className="text-xl font-medium">Total</h1>
          <Badge variant={"outline"}>{products.length} item(s)</Badge>
        </section>

        <div className="py-2">
          <Separator orientation="horizontal" />
        </div>

        <Suspense fallback={"loading..."}>
          <TotalPrice price={price} />
        </Suspense>

        <SignInSignUpButton />
      </section>
    </section>
  );
};

export default PageSections;
