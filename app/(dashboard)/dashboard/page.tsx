import Title from "@/components/uis/title";
import { Metadata } from "next";
import { Suspense } from "react";
import Overview from "./_parts/overview";
import SalesChart from "./_parts/sales-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Overview</CardTitle>
          </CardHeader>

          <CardContent className="p-0">
            <Suspense fallback={""}>
              <SalesChart />
            </Suspense>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default DashboardPage;
