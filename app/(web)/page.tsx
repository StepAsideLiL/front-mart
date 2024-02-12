import { Button } from "@/components/ui/button";
import Main from "@/components/uis/main";
import { Metadata } from "next";
import Link from "next/link";
import WebAppFeatures from "./_parts/web-app-features";
import TechnologiesUsed from "./_parts/technologies-used";

export const metadata: Metadata = {
  title: "Home",
};

const HomePage = () => {
  return (
    <Main>
      <section className="flex justify-center items-center flex-col gap-5 py-48">
        <h1 className="text-2xl md:text-6xl text-center font-bold">
          An E-Shop Built With Nextjs
        </h1>

        <Button asChild>
          <Link href={"/shop"} className="uppercase">
            Shop Now
          </Link>
        </Button>
      </section>

      <section className="container space-y-48">
        {/* Technologies */}
        <TechnologiesUsed />

        {/* Features */}
        <WebAppFeatures />
      </section>
    </Main>
  );
};

export default HomePage;
