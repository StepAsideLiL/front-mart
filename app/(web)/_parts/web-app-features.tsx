import { Cd } from "@/lib/types";
import { Check } from "lucide-react";

const WebAppFeatures = () => {
  return (
    <section className="space-y-10">
      <h1 className="text-4xl font-semibold text-center">
        Features Of The Front Mart
      </h1>

      <div className="max-w-96 w-96 mx-auto space-y-2 font-mono">
        <FeatureText>Light and Dark Mode</FeatureText>
        <FeatureText>
          Product cart and cart is stored in the browser&apos;s local storage
        </FeatureText>
        <FeatureText>Add product form</FeatureText>
        <FeatureText>Admin dashboard for products and orders list</FeatureText>
        <FeatureText>User profile and Product wish list</FeatureText>
      </div>
    </section>
  );
};

const FeatureText = ({ children }: Cd) => {
  return (
    <p className="font-mono flex gap-0.5 w-full items-start">
      <Check size={"16"} className="min-w-5 mt-1" /> <span>{children}</span>
    </p>
  );
};

export default WebAppFeatures;
