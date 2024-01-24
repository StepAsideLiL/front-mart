import Title from "@/components/uis/title";
import { Metadata } from "next";
import { Suspense } from "react";
import Overview from "./_parts/overview";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "Dashboard: Home",
};

const DashboardPage = () => {
  return (
    <>
      <section>
        <Title variant={"xl"}>Dashboard</Title>
      </section>

      <Suspense fallback={"loading..."}>
        <Overview />
      </Suspense>
    </>
  );
};

export default DashboardPage;
