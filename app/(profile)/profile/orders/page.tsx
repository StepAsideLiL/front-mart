import Main from "@/components/uis/main";
import Title from "@/components/uis/title";
import { Metadata } from "next";
import { Suspense } from "react";
import UserOrderList from "./_parts/user-order-list";

export const metadata: Metadata = {
  title: "User's Oders",
};

const UserOrdersPage = () => {
  return (
    <Main variant={"profile"}>
      <Title variant={"xl2"}>User&apos;s Orders</Title>

      <Suspense fallback={"loading..."}>
        <UserOrderList />
      </Suspense>
    </Main>
  );
};

export default UserOrdersPage;
