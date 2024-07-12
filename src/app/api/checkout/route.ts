import Stripe from "stripe";
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST() {
  try {
    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    line_items.push({
      quantity: 2,
      price_data: {
        currency: "usd",
        unit_amount: 5 * 100,
        product_data: {
          name: "Fancy Shoes",
          description: "This is a descripttion of the Fancy Shoes",
          images: [
            "https://images2.imgbox.com/d5/9e/MHm4vg0n_o.jpg",
            "https://images2.imgbox.com/39/39/kOtJmXjJ_o.jpg",
          ],
          metadata: {
            brand: "Front Mart",
          },
        },
      },
    });

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      billing_address_collection: "required",
      phone_number_collection: {
        enabled: true,
      },
      success_url: "http://localhost:3000/",
      cancel_url: "http://localhost:3000/",
      return_url: "http://localhost:3000/",
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error(error);
    throw new NextResponse("Failed to perform checkout", { status: 500 });
  }
}
