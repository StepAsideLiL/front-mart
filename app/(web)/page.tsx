import { Button } from "@/components/ui/button";
import Main from "@/components/uis/main";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

const HomePage = () => {
  return (
    <Main>
      <section className="flex justify-center items-center flex-col gap-3 py-10">
        <h1 className="text-4xl font-medium">Buy all your necessary gadget</h1>

        <Button asChild>
          <Link href={"/shop"}>Shop Now</Link>
        </Button>
      </section>

      <section>add a carousal</section>
    </Main>
  );
};

export default HomePage;
