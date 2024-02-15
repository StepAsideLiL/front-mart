import { Cd } from "@/lib/types";
import { Square } from "lucide-react";
import Link from "next/link";

const UpComingFeatures = () => {
  return (
    <section className="space-y-10">
      <h1 className="text-4xl font-semibold text-center">Upcoming Features</h1>

      <div className="max-w-96 w-96 mx-auto space-y-2 font-mono">
        <FeatureText>
          Change authentication to{" "}
          <Link href={`https://lucia-auth.com/`} className="underline">
            Lucia Auth
          </Link>
        </FeatureText>
        <FeatureText>
          Add{" "}
          <Link href={`https://stripe.com/`} className="underline">
            Stripe
          </Link>{" "}
          Payment
        </FeatureText>
        <FeatureText>Product variant</FeatureText>
        <FeatureText>Add Shopify</FeatureText>
      </div>
    </section>
  );
};

const FeatureText = ({ children }: Cd) => {
  return (
    <p className="font-mono flex gap-0.5 w-full items-start">
      <Square size={"16"} className="min-w-5 mt-1" /> <span>{children}</span>
    </p>
  );
};

export default UpComingFeatures;
